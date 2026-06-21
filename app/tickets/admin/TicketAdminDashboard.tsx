"use client";

import { FormEvent, useEffect, useMemo, useState, type ReactNode } from "react";
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
  AssignmentTurnedIn,
  ConfirmationNumber,
  Reply,
  Search,
  SupportAgent,
  Lock,
  Google,
} from "@mui/icons-material";
import {
  getTicketElapsedWorkMs,
  getTicketTotalCharge,
  type PublicTicket,
  type TicketBillingType,
  type TicketCurrency,
  type TicketPriority,
  type TicketStatus,
} from "@/lib/tickets";
import { signIn, signOut, useSession } from "next-auth/react";

type AdminFormState = {
  code: string;
  status: TicketStatus;
  priority: TicketPriority;
  billingType: "" | TicketBillingType;
  billingAmount: string;
  billingCurrency: TicketCurrency;
  assignedTo: string;
  response: string;
  supportName: string;
  email: string;
  phone: string;
};

type AdminTicketSummary = {
  code: string;
  name: string;
  email: string;
  subject: string;
  category: string;
  priority: TicketPriority;
  status: TicketStatus;
  assignedTo: string;
  createdAt: string;
  updatedAt: string;
  lastCustomerReplyAt: string;
  lastSupportReplyAt: string | null;
};

const defaultAdminForm: AdminFormState = {
  code: "",
  status: "open",
  priority: "normal",
  billingType: "",
  billingAmount: "",
  billingCurrency: "USD",
  assignedTo: "",
  response: "",
  supportName: "Orion IT Support",
  email: "",
  phone: "",
};

const statusOptions: TicketStatus[] = [
  "open",
  "in_progress",
  "awaiting_customer",
  "resolved",
  "closed",
];

const priorityOptions: TicketPriority[] = ["low", "normal", "high", "urgent"];

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

export default function TicketAdminDashboard() {
  const [form, setForm] = useState<AdminFormState>(defaultAdminForm);
  const [ticket, setTicket] = useState<PublicTicket | null>(null);
  const [tickets, setTickets] = useState<AdminTicketSummary[]>([]);
  const [loadingTickets, setLoadingTickets] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loadingTicket, setLoadingTicket] = useState(false);
  const [loadingSave, setLoadingSave] = useState(false);
  const [loadingTimerAction, setLoadingTimerAction] = useState(false);
  const [clockNow, setClockNow] = useState(() => Date.now());
  const { data: session, status } = useSession();
  const adminEmail = session?.user?.email || "";

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

  useEffect(() => {
    if (!ticket) {
      return;
    }

    setForm((current) => ({
      ...current,
      status: ticket.status,
      priority: ticket.priority,
      billingType: ticket.billingType ?? "",
      billingAmount:
        typeof ticket.billingAmount === "number"
          ? String(ticket.billingAmount)
          : "",
      billingCurrency: ticket.billingCurrency || "USD",
      assignedTo: ticket.assignedTo || "",
      email: ticket.email,
      phone: ticket.phone,
    }));
  }, [ticket]);

  useEffect(() => {
    if (
      !ticket ||
      ticket.status !== "in_progress" ||
      ticket.workTimerRunning !== true ||
      !ticket.workTimerStartedAt
    ) {
      return;
    }

    const timerId = window.setInterval(() => {
      setClockNow(Date.now());
    }, 1000);

    return () => window.clearInterval(timerId);
  }, [ticket]);

  useEffect(() => {
    if (status !== "authenticated") {
      return;
    }

    const controller = new AbortController();
    const loadTickets = async () => {
      setLoadingTickets(true);
      try {
        const response = await fetch("/api/tickets/admin", {
          signal: controller.signal,
        });
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Failed to load tickets");
        }

        setTickets(data.tickets || []);
      } catch (loadError) {
        if ((loadError as Error).name !== "AbortError") {
          setError(
            loadError instanceof Error
              ? loadError.message
              : "Failed to load tickets",
          );
        }
      } finally {
        setLoadingTickets(false);
      }
    };

    void loadTickets();

    return () => controller.abort();
  }, [status]);

  const handleChange = <K extends keyof AdminFormState>(
    field: K,
    value: AdminFormState[K],
  ) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleLoadTicket = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setSuccess("");
    setLoadingTicket(true);

    try {
      const response = await fetch(
        `/api/tickets/${encodeURIComponent(form.code.trim())}`,
      );
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Ticket not found");
      }

      setTicket(data.ticket);
      setSuccess("Ticket loaded");
    } catch (loadError) {
      setError(
        loadError instanceof Error
          ? loadError.message
          : "Failed to load ticket",
      );
      setTicket(null);
    } finally {
      setLoadingTicket(false);
    }
  };

  const handleSelectTicket = async (selectedCode: string) => {
    setError("");
    setSuccess("");
    setForm((current) => ({ ...current, code: selectedCode }));
    setLoadingTicket(true);

    try {
      const response = await fetch(
        `/api/tickets/${encodeURIComponent(selectedCode)}`,
      );
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Ticket not found");
      }

      setTicket(data.ticket);
      setSuccess("Ticket loaded");
    } catch (loadError) {
      setError(
        loadError instanceof Error
          ? loadError.message
          : "Failed to load ticket",
      );
      setTicket(null);
    } finally {
      setLoadingTicket(false);
    }
  };

  const handleSaveChanges = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!ticket) {
      setError("Load a ticket before saving changes");
      return;
    }

    if (status !== "authenticated") {
      setError("Sign in with Google before saving changes");
      return;
    }

    setError("");
    setSuccess("");
    setLoadingSave(true);

    try {
      if (form.status === "in_progress") {
        if (!form.billingType) {
          throw new Error("Select billing type when status is in progress");
        }

        const amount = Number(form.billingAmount);
        if (!Number.isFinite(amount) || amount <= 0) {
          throw new Error("Enter a billing amount greater than 0");
        }
      }

      const payload: Record<string, string> = {
        status: form.status,
        priority: form.priority,
      };

      if (form.status === "in_progress") {
        payload.billingType = form.billingType;
        payload.billingAmount = String(Number(form.billingAmount));
        payload.billingCurrency = form.billingCurrency;
      }

      if (form.assignedTo.trim()) {
        payload.assignedTo = form.assignedTo.trim();
      }

      if (form.email.trim()) {
        payload.email = form.email.trim();
      }

      if (form.phone.trim()) {
        payload.phone = form.phone.trim();
      }

      if (form.response.trim()) {
        payload.response = form.response.trim();
      }

      if (form.supportName.trim()) {
        payload.supportName = form.supportName.trim();
      }

      const response = await fetch(
        `/api/tickets/${encodeURIComponent(ticket.code)}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        },
      );

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Failed to update ticket");
      }

      setTicket(data.ticket);
      setForm((current) => ({ ...current, response: "" }));
      setSuccess("Ticket updated successfully");
    } catch (saveError) {
      setError(
        saveError instanceof Error
          ? saveError.message
          : "Failed to save changes",
      );
    } finally {
      setLoadingSave(false);
    }
  };

  const handleTimerAction = async (action: "pause" | "resume") => {
    if (!ticket) {
      return;
    }

    setError("");
    setSuccess("");
    setLoadingTimerAction(true);

    try {
      const response = await fetch(
        `/api/tickets/${encodeURIComponent(ticket.code)}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            workTimerAction: action,
          }),
        },
      );

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Failed to update work timer");
      }

      setTicket(data.ticket);
      setSuccess(
        action === "pause" ? "Work timer paused" : "Work timer resumed",
      );
    } catch (timerError) {
      setError(
        timerError instanceof Error
          ? timerError.message
          : "Failed to update work timer",
      );
    } finally {
      setLoadingTimerAction(false);
    }
  };

  if (status === "loading") {
    return (
      <Box sx={{ py: 10, textAlign: "center" }}>
        <CircularProgress />
      </Box>
    );
  }

  if (status !== "authenticated") {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          px: 2,
          background:
            "linear-gradient(180deg, #0b1220 0%, #111827 35%, #f7f9fc 35%, #f7f9fc 100%)",
        }}
      >
        <Card
          sx={{ maxWidth: 640, width: "100%", borderRadius: 4, boxShadow: 10 }}
        >
          <CardContent sx={{ p: { xs: 3, md: 5 }, textAlign: "center" }}>
            <Chip
              label="Internal Admin"
              color="secondary"
              sx={{ mb: 2, fontWeight: 700 }}
            />
            <Typography
              variant="h4"
              component="h1"
              sx={{ fontWeight: 800, mb: 2 }}
            >
              Sign in with Google to access tickets
            </Typography>
            <Typography sx={{ color: "text.secondary", mb: 3 }}>
              Only approved Orion IT Google accounts can open the admin
              dashboard and update support tickets.
            </Typography>

            <Button
              variant="contained"
              size="large"
              startIcon={<Google />}
              onClick={() =>
                signIn("google", { callbackUrl: "/tickets/admin" })
              }
            >
              Continue with Google
            </Button>
          </CardContent>
        </Card>
      </Box>
    );
  }

  const elapsedWorkMs = ticket ? getTicketElapsedWorkMs(ticket, clockNow) : 0;
  const totalCharge = ticket ? getTicketTotalCharge(ticket, clockNow) : null;

  return (
    <Box
      sx={{
        py: { xs: 4, md: 8 },
        background:
          "linear-gradient(180deg, #0b1220 0%, #111827 35%, #f7f9fc 35%, #f7f9fc 100%)",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ mb: 4, color: "white" }}>
          <Chip
            label="Internal Admin"
            sx={{ mb: 2, fontWeight: 700 }}
            color="secondary"
          />
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 800,
              mb: 2,
              fontSize: { xs: "2.2rem", md: "3.4rem" },
            }}
          >
            Ticket dashboard for Orion IT Service
          </Typography>
          <Typography
            variant="h6"
            sx={{ maxWidth: 900, color: "rgba(255,255,255,0.78)" }}
          >
            Load a ticket, update status or priority, assign ownership, and send
            a support response without a separate login flow.
          </Typography>
        </Box>

        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid size={{ xs: 12, md: 4 }}>
            <AdminMetricCard
              icon={<Lock color="primary" />}
              title="Google session"
              copy="Approved admin accounts only"
            />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <AdminMetricCard
              icon={<SupportAgent color="primary" />}
              title="Support replies"
              copy="Post internal responses directly to the thread"
            />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <AdminMetricCard
              icon={<AssignmentTurnedIn color="primary" />}
              title="Operational control"
              copy="Status, priority, and assignment in one screen"
            />
          </Grid>
        </Grid>

        <Grid container spacing={3} alignItems="stretch">
          <Grid size={{ xs: 12, lg: 4 }}>
            <Card sx={{ borderRadius: 4, boxShadow: 6, height: "100%" }}>
              <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                <Typography variant="h5" sx={{ fontWeight: 800, mb: 1 }}>
                  Signed in as
                </Typography>
                <Typography sx={{ color: "text.secondary", mb: 3 }}>
                  {adminEmail}
                </Typography>

                <Stack spacing={2}>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                    Tickets
                  </Typography>

                  <Box sx={{ maxHeight: 560, overflow: "auto", pr: 1 }}>
                    {loadingTickets ? (
                      <Box sx={{ py: 4, textAlign: "center" }}>
                        <CircularProgress size={28} />
                      </Box>
                    ) : tickets.length === 0 ? (
                      <Alert severity="info">No tickets found yet.</Alert>
                    ) : (
                      <Stack spacing={1.5}>
                        {tickets.map((item) => (
                          <Card
                            key={item.code}
                            variant="outlined"
                            sx={{
                              cursor: "pointer",
                              borderColor:
                                ticket?.code === item.code
                                  ? "primary.main"
                                  : "divider",
                              bgcolor:
                                ticket?.code === item.code
                                  ? "primary.50"
                                  : "background.paper",
                              transition: "all 0.2s ease",
                              "&:hover": {
                                borderColor: "primary.main",
                                transform: "translateY(-1px)",
                              },
                            }}
                            onClick={() => void handleSelectTicket(item.code)}
                          >
                            <CardContent sx={{ p: 2.25 }}>
                              <Stack
                                direction="row"
                                spacing={1}
                                alignItems="center"
                                sx={{ mb: 1, flexWrap: "wrap" }}
                              >
                                <Chip
                                  size="small"
                                  label={item.status.replace(/_/g, " ")}
                                  color={statusMeta[item.status].color}
                                />
                                <Chip
                                  size="small"
                                  label={item.priority}
                                  variant="outlined"
                                />
                              </Stack>
                              <Typography
                                variant="subtitle1"
                                sx={{ fontWeight: 700 }}
                              >
                                {item.subject}
                              </Typography>
                              <Typography
                                variant="body2"
                                color="text.secondary"
                              >
                                {item.code} • {item.name}
                              </Typography>
                              <Typography
                                variant="body2"
                                color="text.secondary"
                              >
                                {item.category}
                              </Typography>
                            </CardContent>
                          </Card>
                        ))}
                      </Stack>
                    )}
                  </Box>
                </Stack>

                {error && (
                  <Alert severity="error" sx={{ mt: 3 }}>
                    {error}
                  </Alert>
                )}

                {success && (
                  <Alert severity="success" sx={{ mt: 3 }}>
                    {success}
                  </Alert>
                )}
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, lg: 8 }}>
            <Card sx={{ borderRadius: 4, boxShadow: 6, height: "100%" }}>
              <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                <Typography variant="h5" sx={{ fontWeight: 800, mb: 1 }}>
                  Ticket details
                </Typography>
                <Typography sx={{ color: "text.secondary", mb: 3 }}>
                  Update the operational fields and add a support response.
                </Typography>

                {ticket ? (
                  <Box component="form" onSubmit={handleSaveChanges}>
                    <Stack
                      direction={{ xs: "column", sm: "row" }}
                      spacing={1}
                      sx={{ mb: 3, flexWrap: "wrap" }}
                    >
                      <Chip
                        label={ticket.code}
                        icon={<ConfirmationNumber />}
                        variant="outlined"
                      />
                      <Chip
                        label={statusMeta[ticket.status].label}
                        color={statusMeta[ticket.status].color}
                      />
                      <Chip
                        label={priorityMeta[ticket.priority].label}
                        color={priorityMeta[ticket.priority].color}
                        variant="outlined"
                      />
                    </Stack>

                    <Grid container spacing={2}>
                      <Grid size={{ xs: 12, md: 6 }}>
                        <TextField
                          fullWidth
                          label="Status"
                          select
                          SelectProps={{ native: true }}
                          value={form.status}
                          onChange={(event) =>
                            handleChange(
                              "status",
                              event.target.value as TicketStatus,
                            )
                          }
                        >
                          {statusOptions.map((status) => (
                            <option key={status} value={status}>
                              {status.replace(/_/g, " ")}
                            </option>
                          ))}
                        </TextField>
                      </Grid>
                      <Grid size={{ xs: 12, md: 6 }}>
                        <TextField
                          fullWidth
                          label="Priority"
                          select
                          SelectProps={{ native: true }}
                          value={form.priority}
                          onChange={(event) =>
                            handleChange(
                              "priority",
                              event.target.value as TicketPriority,
                            )
                          }
                        >
                          {priorityOptions.map((priority) => (
                            <option key={priority} value={priority}>
                              {priority}
                            </option>
                          ))}
                        </TextField>
                      </Grid>
                      {form.status === "in_progress" && (
                        <>
                          <Grid size={{ xs: 12, md: 6 }}>
                            <TextField
                              fullWidth
                              label="Payment type"
                              select
                              required
                              SelectProps={{ native: true }}
                              value={form.billingType}
                              onChange={(event) =>
                                handleChange(
                                  "billingType",
                                  event.target.value as "" | TicketBillingType,
                                )
                              }
                            >
                              <option value="">Select payment type</option>
                              <option value="fixed">Fixed</option>
                              <option value="hourly">Hourly</option>
                            </TextField>
                          </Grid>
                          {form.billingType && (
                            <Grid size={{ xs: 12, md: 6 }}>
                              <TextField
                                fullWidth
                                required
                                type="number"
                                inputProps={{ min: 0, step: "0.01" }}
                                label={
                                  form.billingType === "hourly"
                                    ? "Hourly amount"
                                    : "Fixed amount"
                                }
                                value={form.billingAmount}
                                onChange={(event) =>
                                  handleChange(
                                    "billingAmount",
                                    event.target.value,
                                  )
                                }
                              />
                            </Grid>
                          )}
                          <Grid size={{ xs: 12, md: 6 }}>
                            <TextField
                              fullWidth
                              label="Currency"
                              select
                              SelectProps={{ native: true }}
                              value={form.billingCurrency}
                              onChange={(event) =>
                                handleChange(
                                  "billingCurrency",
                                  event.target.value as TicketCurrency,
                                )
                              }
                            >
                              <option value="USD">USD</option>
                              <option value="EUR">EUR</option>
                              <option value="GBP">GBP</option>
                              <option value="NGN">NGN</option>
                            </TextField>
                          </Grid>
                        </>
                      )}
                      <Grid size={{ xs: 12, md: 6 }}>
                        <TextField
                          fullWidth
                          label="Assigned to"
                          value={form.assignedTo}
                          onChange={(event) =>
                            handleChange("assignedTo", event.target.value)
                          }
                        />
                      </Grid>
                      <Grid size={{ xs: 12, md: 6 }}>
                        <TextField
                          fullWidth
                          label="Customer email"
                          value={form.email}
                          onChange={(event) =>
                            handleChange("email", event.target.value)
                          }
                        />
                      </Grid>
                      <Grid size={{ xs: 12, md: 6 }}>
                        <TextField
                          fullWidth
                          label="Customer phone"
                          value={form.phone}
                          onChange={(event) =>
                            handleChange("phone", event.target.value)
                          }
                        />
                      </Grid>
                      <Grid size={{ xs: 12, md: 6 }}>
                        <TextField
                          fullWidth
                          label="Support agent name"
                          value={form.supportName}
                          onChange={(event) =>
                            handleChange("supportName", event.target.value)
                          }
                        />
                      </Grid>
                      <Grid size={{ xs: 12 }}>
                        <Alert severity="info" sx={{ mb: 2 }}>
                          <Typography sx={{ fontWeight: 700 }}>
                            Work timer: {formatDuration(elapsedWorkMs)}
                          </Typography>
                          <Typography variant="body2">
                            Total charge:{" "}
                            {formatMoney(
                              totalCharge,
                              ticket.billingCurrency || "USD",
                            )}
                            {ticket.billingType === "hourly" &&
                              typeof ticket.hourlyRatePerMinute === "number" &&
                              ` (${formatMoney(ticket.hourlyRatePerMinute, ticket.billingCurrency || "USD")}/min)`}
                          </Typography>
                          {ticket.status === "in_progress" && (
                            <Button
                              sx={{ mt: 1.5 }}
                              size="small"
                              variant="outlined"
                              disabled={loadingTimerAction}
                              onClick={() =>
                                void handleTimerAction(
                                  ticket.workTimerRunning ? "pause" : "resume",
                                )
                              }
                            >
                              {loadingTimerAction
                                ? "Updating..."
                                : ticket.workTimerRunning
                                  ? "Pause work"
                                  : "Resume work"}
                            </Button>
                          )}
                        </Alert>
                      </Grid>
                      <Grid size={{ xs: 12 }}>
                        <TextField
                          fullWidth
                          multiline
                          minRows={4}
                          label="Support reply"
                          value={form.response}
                          onChange={(event) =>
                            handleChange("response", event.target.value)
                          }
                        />
                      </Grid>
                    </Grid>

                    <Button
                      type="submit"
                      variant="contained"
                      sx={{ mt: 3 }}
                      disabled={loadingSave}
                      startIcon={<Reply />}
                    >
                      {loadingSave ? (
                        <CircularProgress size={24} color="inherit" />
                      ) : (
                        "Save ticket update"
                      )}
                    </Button>

                    <Divider sx={{ my: 4 }} />

                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                      Conversation history
                    </Typography>
                    <Stack
                      spacing={2}
                      sx={{ maxHeight: 360, overflow: "auto", pr: 1 }}
                    >
                      {ticket.replies.map((reply) => (
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
                            sx={{ mb: 1, flexWrap: "wrap" }}
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

                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                      Activity history
                    </Typography>
                    <Stack
                      spacing={1.25}
                      sx={{ maxHeight: 260, overflow: "auto", pr: 1 }}
                    >
                      {[...ticket.activity]
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
                  </Box>
                ) : (
                  <Box
                    sx={{ py: 6, textAlign: "center", color: "text.secondary" }}
                  >
                    <SupportAgent
                      sx={{ fontSize: 54, mb: 1 }}
                      color="disabled"
                    />
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                      Load a ticket to begin
                    </Typography>
                    <Typography>
                      Enter a ticket code on the left to manage its status,
                      assignment, and responses.
                    </Typography>
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

function AdminMetricCard({
  icon,
  title,
  copy,
}: {
  icon: ReactNode;
  title: string;
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
          <Typography variant="body2" color="text.secondary">
            {copy}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
