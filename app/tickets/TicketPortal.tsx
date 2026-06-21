"use client";

import {
  useEffect,
  useMemo,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  Grid,
  Stack,
  TextField,
  Typography,
  CircularProgress,
} from "@mui/material";
import {
  CheckCircle,
  ConfirmationNumber,
  QueryBuilder,
  SupportAgent,
} from "@mui/icons-material";
import {
  getTicketElapsedWorkMs,
  getTicketTotalCharge,
  type PublicTicket,
  type TicketPriority,
  type TicketStatus,
} from "@/lib/tickets";

type CreateFormState = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  category: string;
  priority: TicketPriority;
  description: string;
};

type TrackState = {
  code: string;
  name: string;
  message: string;
};

const initialCreateForm: CreateFormState = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  category: "General Support",
  priority: "normal",
  description: "",
};

const supportCategories = [
  "General Support",
  "Cybersecurity Awareness Training",
  "Phishing Simulation",
  "Endpoint Protection",
  "Vulnerability Assessment",
  "Security Assessment",
  "Compliance Management",
  "Network Design and Implementation",
  "Wireless Network Solutions",
  "Network Security Hardening",
  "Network Performance Optimization",
  "Network Troubleshooting",
  "Help Desk Support",
  "Remote IT Support",
  "Patch Management",
  "Backup and Recovery",
  "Strategic IT Planning",
  "Custom Web Application Development",
  "Web Design and Development",
  "Website Maintenance and Support",
  "SEO Optimization Support",
  "Cloud and Infrastructure Support",
  "Others",
];

const ticketStatuses: TicketStatus[] = [
  "open",
  "in_progress",
  "awaiting_customer",
  "resolved",
  "closed",
];

const billingFinalizedStatuses: TicketStatus[] = [
  "awaiting_customer",
  "resolved",
  "closed",
];

function formatDuration(totalMs: number): string {
  const totalSeconds = Math.floor(Math.max(0, totalMs) / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

function formatMoney(amount: number | null, currency = "USD"): string {
  if (amount === null || !Number.isFinite(amount)) {
    return "-";
  }

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

export default function TicketPortal() {
  const [createForm, setCreateForm] =
    useState<CreateFormState>(initialCreateForm);
  const [trackingForm, setTrackingForm] = useState<TrackState>({
    code: "",
    name: "",
    message: "",
  });
  const [createdTicket, setCreatedTicket] = useState<PublicTicket | null>(null);
  const [trackedTicket, setTrackedTicket] = useState<PublicTicket | null>(null);
  const [createError, setCreateError] = useState("");
  const [trackError, setTrackError] = useState("");
  const [replyError, setReplyError] = useState("");
  const [loadingCreate, setLoadingCreate] = useState(false);
  const [loadingTrack, setLoadingTrack] = useState(false);
  const [loadingReply, setLoadingReply] = useState(false);
  const [customCategory, setCustomCategory] = useState("");
  const [clockNow, setClockNow] = useState(() => Date.now());

  const statusMeta = useMemo(
    () => ({
      open: { label: "Open", color: "info" as const },
      in_progress: { label: "In Progress", color: "warning" as const },
      awaiting_customer: {
        label: "Waiting on Customer",
        color: "secondary" as const,
      },
      resolved: { label: "Resolved", color: "success" as const },
      closed: { label: "Closed", color: "default" as const },
    }),
    [],
  );

  const priorityMeta = useMemo(
    () => ({
      low: { label: "Low", color: "default" as const },
      normal: { label: "Normal", color: "primary" as const },
      high: { label: "High", color: "warning" as const },
      urgent: { label: "Urgent", color: "error" as const },
    }),
    [],
  );

  const handleCreateChange = <K extends keyof CreateFormState>(
    field: K,
    value: CreateFormState[K],
  ) => {
    setCreateForm((current) => ({ ...current, [field]: value }));
  };

  const handleTrackChange = <K extends keyof TrackState>(
    field: K,
    value: TrackState[K],
  ) => {
    setTrackingForm((current) => ({ ...current, [field]: value }));
  };

  const handleCreateSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setCreateError("");
    setLoadingCreate(true);

    try {
      const finalCategory =
        createForm.category === "Others"
          ? customCategory.trim()
          : createForm.category;

      if (!finalCategory) {
        throw new Error("Please enter a category when selecting Others");
      }

      const response = await fetch("/api/tickets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...createForm,
          category: finalCategory,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(
          data.error || data.message || "Failed to create ticket",
        );
      }

      setCreatedTicket(data.ticket);
      setTrackedTicket(data.ticket);
      setTrackingForm((current) => ({ ...current, code: data.ticket.code }));
      setCreateForm(initialCreateForm);
      setCustomCategory("");
    } catch (error) {
      setCreateError(
        error instanceof Error ? error.message : "Failed to create ticket",
      );
    } finally {
      setLoadingCreate(false);
    }
  };

  const handleTrackSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTrackError("");
    setLoadingTrack(true);

    try {
      const response = await fetch(
        `/api/tickets/${encodeURIComponent(trackingForm.code.trim())}`,
      );
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Ticket not found");
      }

      setTrackedTicket(data.ticket);
      setCreatedTicket(null);
    } catch (error) {
      setTrackError(
        error instanceof Error ? error.message : "Unable to load ticket",
      );
    } finally {
      setLoadingTrack(false);
    }
  };

  const handleReplySubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!trackedTicket) {
      return;
    }

    setReplyError("");
    setLoadingReply(true);

    try {
      const response = await fetch(
        `/api/tickets/${encodeURIComponent(trackedTicket.code)}/reply`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: trackingForm.name || trackedTicket.name,
            message: trackingForm.message,
          }),
        },
      );

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Failed to submit reply");
      }

      setTrackedTicket(data.ticket);
      setTrackingForm((current) => ({ ...current, message: "" }));
    } catch (error) {
      setReplyError(
        error instanceof Error ? error.message : "Unable to submit reply",
      );
    } finally {
      setLoadingReply(false);
    }
  };

  const visibleTicket = trackedTicket || createdTicket;

  useEffect(() => {
    if (
      !visibleTicket ||
      visibleTicket.status !== "in_progress" ||
      visibleTicket.workTimerRunning !== true ||
      !visibleTicket.workTimerStartedAt
    ) {
      return;
    }

    const timerId = window.setInterval(() => {
      setClockNow(Date.now());
    }, 1000);

    return () => window.clearInterval(timerId);
  }, [visibleTicket]);

  const elapsedWorkMs = visibleTicket
    ? getTicketElapsedWorkMs(visibleTicket, clockNow)
    : 0;
  const totalCharge = visibleTicket
    ? getTicketTotalCharge(visibleTicket, clockNow)
    : null;
  const isBillingFinalized =
    !!visibleTicket &&
    billingFinalizedStatuses.includes(visibleTicket.status) &&
    (visibleTicket.billingType !== null || visibleTicket.workTimeMs > 0);

  return (
    <Box
      sx={{
        py: { xs: 4, md: 8 },
        background: "linear-gradient(180deg, #f5f8ff 0%, #ffffff 100%)",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
          <Chip
            label="Support Portal"
            color="primary"
            sx={{ mb: 2, fontWeight: 700 }}
          />
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 800,
              mb: 2,
              fontSize: { xs: "2.2rem", md: "3.5rem" },
            }}
          >
            Create, track, and reply to IT support tickets
          </Typography>
          <Typography
            variant="h6"
            sx={{ maxWidth: 900, mx: "auto", color: "text.secondary" }}
          >
            No login required. Open a ticket, keep the code, and use it later to
            check progress or continue the conversation.
          </Typography>
        </Box>

        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid size={{ xs: 12, md: 4 }}>
            <StatCard
              icon={<ConfirmationNumber color="primary" />}
              title="Ticket code"
              value="Instant"
              copy="Generated after submission"
            />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <StatCard
              icon={<QueryBuilder color="primary" />}
              title="Status tracking"
              value="Live"
              copy="Open, in progress, waiting, resolved"
            />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <StatCard
              icon={<SupportAgent color="primary" />}
              title="Replies"
              value="Threaded"
              copy="Keep all customer and support updates together"
            />
          </Grid>
        </Grid>

        <Grid container spacing={3} alignItems="stretch">
          <Grid size={{ xs: 12, lg: 6 }}>
            <Card sx={{ height: "100%", borderRadius: 4, boxShadow: 6 }}>
              <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                <Typography
                  variant="h4"
                  component="h2"
                  sx={{ fontWeight: 800, mb: 1 }}
                >
                  Open a ticket
                </Typography>
                <Typography sx={{ color: "text.secondary", mb: 3 }}>
                  Provide the essentials and we will generate a code you can use
                  later.
                </Typography>

                {createError && (
                  <Alert severity="error" sx={{ mb: 3 }}>
                    {createError}
                  </Alert>
                )}

                <Box component="form" onSubmit={handleCreateSubmit}>
                  <Grid container spacing={2}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label="Name"
                        required
                        value={createForm.name}
                        onChange={(event) =>
                          handleCreateChange("name", event.target.value)
                        }
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label="Email"
                        type="email"
                        required
                        value={createForm.email}
                        onChange={(event) =>
                          handleCreateChange("email", event.target.value)
                        }
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label="Phone"
                        value={createForm.phone}
                        onChange={(event) =>
                          handleCreateChange("phone", event.target.value)
                        }
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label="Subject"
                        required
                        value={createForm.subject}
                        onChange={(event) =>
                          handleCreateChange("subject", event.target.value)
                        }
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label="Category"
                        required
                        select
                        SelectProps={{ native: true }}
                        value={createForm.category}
                        onChange={(event) =>
                          handleCreateChange("category", event.target.value)
                        }
                      >
                        {supportCategories.map((category) => (
                          <option key={category} value={category}>
                            {category}
                          </option>
                        ))}
                      </TextField>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        select
                        SelectProps={{ native: true }}
                        label="Priority"
                        value={createForm.priority}
                        onChange={(event) =>
                          handleCreateChange(
                            "priority",
                            event.target.value as TicketPriority,
                          )
                        }
                      >
                        <option value="low">Low</option>
                        <option value="normal">Normal</option>
                        <option value="high">High</option>
                        <option value="urgent">Urgent</option>
                      </TextField>
                    </Grid>
                    {createForm.category === "Others" && (
                      <Grid size={{ xs: 12 }}>
                        <TextField
                          fullWidth
                          required
                          label="Custom category"
                          placeholder="Type your support category"
                          value={customCategory}
                          onChange={(event) =>
                            setCustomCategory(event.target.value)
                          }
                        />
                      </Grid>
                    )}
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        label="Issue details"
                        required
                        multiline
                        rows={6}
                        value={createForm.description}
                        onChange={(event) =>
                          handleCreateChange("description", event.target.value)
                        }
                      />
                    </Grid>
                  </Grid>

                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    disabled={loadingCreate}
                    sx={{ mt: 3, minWidth: 180 }}
                  >
                    {loadingCreate ? (
                      <CircularProgress size={24} color="inherit" />
                    ) : (
                      "Create ticket"
                    )}
                  </Button>
                </Box>

                {createdTicket && (
                  <Alert
                    severity="success"
                    sx={{ mt: 3 }}
                    icon={<CheckCircle fontSize="inherit" />}
                  >
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                      Ticket created
                    </Typography>
                    <Typography>
                      Your ticket code is <strong>{createdTicket.code}</strong>.
                      Keep this code to check progress or reply later.
                    </Typography>
                  </Alert>
                )}
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, lg: 6 }}>
            <Card sx={{ height: "100%", borderRadius: 4, boxShadow: 6, mb: 3 }}>
              <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                <Typography
                  variant="h4"
                  component="h2"
                  sx={{ fontWeight: 800, mb: 1 }}
                >
                  Track a ticket
                </Typography>
                <Typography sx={{ color: "text.secondary", mb: 3 }}>
                  Enter your ticket code to see the latest updates and continue
                  the conversation.
                </Typography>

                {trackError && (
                  <Alert severity="error" sx={{ mb: 3 }}>
                    {trackError}
                  </Alert>
                )}

                <Box component="form" onSubmit={handleTrackSubmit}>
                  <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                    <TextField
                      fullWidth
                      label="Ticket code"
                      value={trackingForm.code}
                      onChange={(event) =>
                        handleTrackChange("code", event.target.value)
                      }
                      placeholder="OIS-AB12-CD34-EF56"
                    />
                    <Button
                      type="submit"
                      variant="outlined"
                      size="large"
                      disabled={loadingTrack}
                      sx={{ minWidth: 160 }}
                    >
                      {loadingTrack ? (
                        <CircularProgress size={24} color="inherit" />
                      ) : (
                        "Load ticket"
                      )}
                    </Button>
                  </Stack>
                </Box>

                {visibleTicket && (
                  <Box sx={{ mt: 4 }}>
                    <Divider sx={{ mb: 3 }} />

                    <Stack
                      direction={{ xs: "column", sm: "row" }}
                      spacing={1}
                      sx={{ mb: 2, flexWrap: "wrap" }}
                    >
                      <Chip
                        label={statusMeta[visibleTicket.status].label}
                        color={statusMeta[visibleTicket.status].color}
                      />
                      <Chip
                        label={priorityMeta[visibleTicket.priority].label}
                        color={priorityMeta[visibleTicket.priority].color}
                        variant="outlined"
                      />
                      <Chip
                        label={visibleTicket.code}
                        icon={<ConfirmationNumber />}
                        variant="outlined"
                      />
                      {isBillingFinalized && (
                        <Chip
                          label="Billing Finalized"
                          color="success"
                          variant="outlined"
                        />
                      )}
                    </Stack>

                    <Typography
                      variant="h5"
                      component="h3"
                      sx={{ fontWeight: 800, mb: 1 }}
                    >
                      {visibleTicket.subject}
                    </Typography>
                    <Typography sx={{ color: "text.secondary", mb: 3 }}>
                      Category: {visibleTicket.category} | Created by{" "}
                      {visibleTicket.name}
                    </Typography>

                    {(visibleTicket.status === "in_progress" ||
                      visibleTicket.billingType ||
                      visibleTicket.workTimeMs > 0) && (
                      <Alert severity="info" sx={{ mb: 3 }}>
                        <Typography sx={{ fontWeight: 700 }}>
                          Work timer: {formatDuration(elapsedWorkMs)}
                        </Typography>
                        {visibleTicket.status === "in_progress" && (
                          <Typography variant="body2">
                            Timer state:{" "}
                            {visibleTicket.workTimerRunning
                              ? "Running"
                              : "Paused"}
                          </Typography>
                        )}
                        <Typography variant="body2">
                          Billing type:{" "}
                          {visibleTicket.billingType
                            ? visibleTicket.billingType
                            : "Not set yet"}
                        </Typography>
                        <Typography variant="body2">
                          Total charge:{" "}
                          {formatMoney(
                            totalCharge,
                            visibleTicket.billingCurrency || "USD",
                          )}
                          {visibleTicket.billingType === "hourly" &&
                            typeof visibleTicket.hourlyRatePerMinute ===
                              "number" &&
                            ` (${formatMoney(visibleTicket.hourlyRatePerMinute, visibleTicket.billingCurrency || "USD")}/min)`}
                        </Typography>
                      </Alert>
                    )}

                    <Box sx={{ mb: 3 }}>
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: 700, mb: 1 }}
                      >
                        Progress timeline
                      </Typography>
                      <Stack spacing={1}>
                        {ticketStatuses.map((status) => {
                          const active =
                            ticketStatuses.indexOf(visibleTicket.status) >=
                            ticketStatuses.indexOf(status);
                          return (
                            <Box
                              key={status}
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1.5,
                                opacity: active ? 1 : 0.45,
                              }}
                            >
                              <Box
                                sx={{
                                  width: 10,
                                  height: 10,
                                  borderRadius: "50%",
                                  bgcolor: active ? "primary.main" : "grey.400",
                                }}
                              />
                              <Typography sx={{ textTransform: "capitalize" }}>
                                {status.replace(/_/g, " ")}
                              </Typography>
                            </Box>
                          );
                        })}
                      </Stack>
                    </Box>

                    <Divider sx={{ my: 3 }} />

                    <Typography
                      variant="subtitle1"
                      sx={{ fontWeight: 700, mb: 2 }}
                    >
                      Activity history
                    </Typography>
                    <Stack
                      spacing={1.25}
                      sx={{ maxHeight: 220, overflow: "auto", pr: 1 }}
                    >
                      {[...visibleTicket.activity]
                        .sort(
                          (a, b) =>
                            new Date(b.createdAt).getTime() -
                            new Date(a.createdAt).getTime(),
                        )
                        .map((entry) => (
                          <Box
                            key={entry.id}
                            sx={{
                              p: 1.5,
                              borderRadius: 2,
                              bgcolor: "grey.50",
                              border: "1px solid",
                              borderColor: "divider",
                            }}
                          >
                            <Typography
                              variant="body2"
                              sx={{ fontWeight: 600 }}
                            >
                              {entry.message}
                            </Typography>
                            <Typography
                              variant="caption"
                              color="text.secondary"
                            >
                              {new Date(entry.createdAt).toLocaleString()}
                            </Typography>
                          </Box>
                        ))}
                    </Stack>

                    <Divider sx={{ my: 3 }} />

                    <Typography
                      variant="subtitle1"
                      sx={{ fontWeight: 700, mb: 2 }}
                    >
                      Conversation
                    </Typography>
                    <Stack
                      spacing={2}
                      sx={{ maxHeight: 340, overflow: "auto", pr: 1 }}
                    >
                      {visibleTicket.replies.map((reply) => (
                        <Box
                          key={reply.id}
                          sx={{
                            p: 2,
                            borderRadius: 2,
                            bgcolor:
                              reply.authorType === "support"
                                ? "primary.50"
                                : "grey.50",
                            border: "1px solid",
                            borderColor: "divider",
                          }}
                        >
                          <Stack
                            direction="row"
                            spacing={1}
                            alignItems="center"
                            sx={{ mb: 1 }}
                          >
                            <Chip
                              size="small"
                              label={
                                reply.authorType === "support"
                                  ? "Support"
                                  : "Customer"
                              }
                              color={
                                reply.authorType === "support"
                                  ? "primary"
                                  : "default"
                              }
                            />
                            <Typography
                              variant="body2"
                              sx={{ fontWeight: 700 }}
                            >
                              {reply.authorName}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {new Date(reply.createdAt).toLocaleString()}
                            </Typography>
                          </Stack>
                          <Typography sx={{ whiteSpace: "pre-wrap" }}>
                            {reply.message}
                          </Typography>
                        </Box>
                      ))}
                    </Stack>

                    <Divider sx={{ my: 3 }} />

                    <Typography
                      variant="subtitle1"
                      sx={{ fontWeight: 700, mb: 2 }}
                    >
                      Reply to this ticket
                    </Typography>
                    {replyError && (
                      <Alert severity="error" sx={{ mb: 2 }}>
                        {replyError}
                      </Alert>
                    )}
                    <Box component="form" onSubmit={handleReplySubmit}>
                      <Grid container spacing={2}>
                        <Grid size={{ xs: 12, sm: 6 }}>
                          <TextField
                            fullWidth
                            label="Your name"
                            value={trackingForm.name}
                            onChange={(event) =>
                              handleTrackChange("name", event.target.value)
                            }
                            placeholder={visibleTicket.name}
                          />
                        </Grid>
                        <Grid size={{ xs: 12 }}>
                          <TextField
                            fullWidth
                            required
                            multiline
                            rows={4}
                            label="Message"
                            value={trackingForm.message}
                            onChange={(event) =>
                              handleTrackChange("message", event.target.value)
                            }
                          />
                        </Grid>
                      </Grid>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        disabled={loadingReply}
                        sx={{ mt: 2 }}
                      >
                        {loadingReply ? (
                          <CircularProgress size={24} color="inherit" />
                        ) : (
                          "Send reply"
                        )}
                      </Button>
                    </Box>
                  </Box>
                )}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

function StatCard({
  icon,
  title,
  value,
  copy,
}: {
  icon: ReactNode;
  title: string;
  value: string;
  copy: string;
}) {
  return (
    <Card sx={{ height: "100%", borderRadius: 4, boxShadow: 4 }}>
      <CardContent sx={{ p: 3, display: "flex", gap: 2, alignItems: "center" }}>
        {icon}
        <Box>
          <Typography variant="overline" sx={{ letterSpacing: 1.2 }}>
            {title}
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: 800 }}>
            {value}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {copy}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
