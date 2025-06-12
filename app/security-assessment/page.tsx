"use client";

import {
  Box,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Button,
  Paper,
  Card,
  CardContent,
  Grid,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  RadioGroup,
  FormControlLabel,
  Radio,
  CircularProgress,
  Container,
} from "@mui/material";
import {
  Security as SecurityIcon,
  CheckCircle as CheckIcon,
  Warning as WarningIcon,
  Error as ErrorIcon,
  Assessment as AssessmentIcon,
  ArrowForward as ArrowIcon,
  Lock as LockIcon,
  Email as EmailIcon,
  Devices as DevicesIcon,
  People as PeopleIcon,
} from "@mui/icons-material";
import { useState } from "react";

const SecurityAssessment = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [score, setScore] = useState<number | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const questions = [
    {
      id: "q1",
      question:
        "How often do you conduct cybersecurity awareness training for employees?",
      options: [
        { value: "never", label: "Never" },
        { value: "yearly", label: "Once a year" },
        { value: "quarterly", label: "Quarterly" },
        { value: "monthly", label: "Monthly or more" },
      ],
    },
    {
      id: "q2",
      question:
        "Have you experienced a cybersecurity incident in the past 12 months?",
      options: [
        { value: "yes_multiple", label: "Yes, multiple incidents" },
        { value: "yes_one", label: "Yes, one incident" },
        { value: "no", label: "No" },
        { value: "not_sure", label: "Not sure" },
      ],
    },
    {
      id: "q3",
      question:
        "Do you have a formal incident response plan for cybersecurity breaches?",
      options: [
        { value: "yes_tested", label: "Yes, and we test it regularly" },
        { value: "yes_not_tested", label: "Yes, but not tested" },
        { value: "no", label: "No" },
        { value: "developing", label: "Currently developing one" },
      ],
    },
    {
      id: "q4",
      question: "How do you handle phishing attempts targeting your employees?",
      options: [
        { value: "simulations", label: "Regular simulated phishing tests" },
        { value: "training", label: "Training but no simulations" },
        { value: "ad_hoc", label: "Address incidents as they occur" },
        { value: "nothing", label: "No specific measures" },
      ],
    },
    {
      id: "q5",
      question:
        "Are your remote workers required to use secure connections (VPN) when accessing company systems?",
      options: [
        { value: "always", label: "Yes, always enforced" },
        { value: "recommended", label: "Recommended but not enforced" },
        { value: "sometimes", label: "Only for certain systems" },
        { value: "no", label: "No requirements" },
      ],
    },
  ];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleAnswer = (questionId: string, answer: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const calculateScore = () => {
    setIsCalculating(true);
    // Simulate calculation delay
    setTimeout(() => {
      let calculatedScore = 0;

      // Simple scoring logic (in real app would be more sophisticated)
      Object.values(answers).forEach((answer) => {
        if (
          ["monthly", "no", "yes_tested", "simulations", "always"].includes(
            answer
          )
        ) {
          calculatedScore += 20;
        } else if (
          [
            "quarterly",
            "not_sure",
            "yes_not_tested",
            "training",
            "recommended",
          ].includes(answer)
        ) {
          calculatedScore += 15;
        } else if (
          ["yearly", "yes_one", "developing", "ad_hoc", "sometimes"].includes(
            answer
          )
        ) {
          calculatedScore += 10;
        } else {
          calculatedScore += 5;
        }
      });

      setScore(Math.min(100, calculatedScore));
      setIsCalculating(false);
      setActiveStep(questions.length);
    }, 1500);
  };

  const getRiskLevel = () => {
    if (!score) return "";
    if (score >= 80) return "Low Risk";
    if (score >= 50) return "Moderate Risk";
    return "High Risk";
  };

  const getRecommendations = () => {
    const recs = [];

    if (!answers.q1 || answers.q1 === "never" || answers.q1 === "yearly") {
      recs.push({
        icon: <PeopleIcon color="primary" />,
        title: "Implement Regular Training",
        description:
          "Schedule quarterly cybersecurity awareness sessions with engaging content to keep security top of mind.",
      });
    }

    if (
      !answers.q2 ||
      answers.q2 === "yes_multiple" ||
      answers.q2 === "yes_one"
    ) {
      recs.push({
        icon: <WarningIcon color="warning" />,
        title: "Incident Response Plan",
        description:
          "Develop and test an incident response plan to minimize damage from future breaches.",
      });
    }

    if (!answers.q3 || answers.q3 === "no" || answers.q3 === "developing") {
      recs.push({
        icon: <AssessmentIcon color="error" />,
        title: "Phishing Defense Program",
        description:
          "Launch simulated phishing campaigns combined with targeted training for vulnerable employees.",
      });
    }

    if (!answers.q4 || answers.q4 === "nothing" || answers.q4 === "ad_hoc") {
      recs.push({
        icon: <EmailIcon color="secondary" />,
        title: "Secure Remote Access",
        description:
          "Enforce VPN usage and multi-factor authentication for all remote workers accessing sensitive systems.",
      });
    }

    // Always include these general recommendations
    recs.push(
      {
        icon: <LockIcon color="success" />,
        title: "Password Management",
        description:
          "Implement enterprise password management tools to eliminate weak password practices.",
      },
      {
        icon: <DevicesIcon color="info" />,
        title: "Endpoint Protection",
        description:
          "Ensure all devices have updated endpoint protection software with behavioral detection capabilities.",
      }
    );

    return recs;
  };

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Box textAlign="center" mb={6}>
        <SecurityIcon sx={{ fontSize: 60, color: "primary.main", mb: 2 }} />
        <Typography variant="h3" component="h1" sx={{ fontWeight: 800, mb: 2 }}>
          Cybersecurity Health Check
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Complete this 5-minute assessment to uncover your organization's
          security vulnerabilities
        </Typography>
      </Box>

      <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 6 }}>
        {questions.map((question, index) => (
          <Step key={index}>
            <StepLabel>{`Question ${index + 1}`}</StepLabel>
          </Step>
        ))}
        <Step>
          <StepLabel>Results</StepLabel>
        </Step>
      </Stepper>

      {activeStep < questions.length ? (
        <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
          <Typography
            variant="h5"
            component="h2"
            sx={{ fontWeight: 700, mb: 3 }}
          >
            {questions[activeStep].question}
          </Typography>
          <RadioGroup
            value={answers[questions[activeStep].id] || ""}
            onChange={(e) =>
              handleAnswer(questions[activeStep].id, e.target.value)
            }
          >
            {questions[activeStep].options.map((option) => (
              <FormControlLabel
                key={option.value}
                value={option.value}
                control={<Radio />}
                label={option.label}
                sx={{ mb: 1 }}
              />
            ))}
          </RadioGroup>
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              variant="outlined"
            >
              Back
            </Button>
            <Button
              variant="contained"
              onClick={
                activeStep === questions.length - 1
                  ? calculateScore
                  : handleNext
              }
              disabled={!answers[questions[activeStep].id]}
            >
              {activeStep === questions.length - 1 ? "See Results" : "Next"}
            </Button>
          </Box>
        </Paper>
      ) : (
        <>
          {isCalculating ? (
            <Box textAlign="center" sx={{ py: 8 }}>
              <CircularProgress size={80} thickness={4} sx={{ mb: 3 }} />
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                Analyzing your security profile...
              </Typography>
            </Box>
          ) : (
            <>
              <Paper elevation={3} sx={{ p: 4, mb: 6, textAlign: "center" }}>
                <Typography
                  variant="h4"
                  component="h2"
                  sx={{ fontWeight: 800, mb: 2 }}
                >
                  Your Security Score
                </Typography>
                <Box
                  sx={{
                    position: "relative",
                    display: "inline-flex",
                    mb: 3,
                  }}
                >
                  <CircularProgress
                    variant="determinate"
                    value={score || 0}
                    size={200}
                    thickness={4}
                    sx={{
                      color:
                        score && score >= 80
                          ? "success.main"
                          : score && score >= 50
                          ? "warning.main"
                          : "error.main",
                    }}
                  />
                  <Box
                    sx={{
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                      position: "absolute",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      variant="h2"
                      component="div"
                      sx={{ fontWeight: 800 }}
                    >
                      {score}
                    </Typography>
                  </Box>
                </Box>
                <Chip
                  label={getRiskLevel()}
                  color={
                    score && score >= 80
                      ? "success"
                      : score && score >= 50
                      ? "warning"
                      : "error"
                  }
                  sx={{ fontSize: "1.2rem", p: 2, mb: 3 }}
                />
                <Typography variant="body1" sx={{ maxWidth: 600, mx: "auto" }}>
                  {score && score >= 80
                    ? "Your organization demonstrates strong cybersecurity awareness practices. Maintain your edge with continuous improvement."
                    : score && score >= 50
                    ? "Your security posture needs strengthening in key areas. Targeted improvements can significantly reduce your risk."
                    : "Your organization is at significant risk of cyber threats. Immediate action is recommended to protect your assets."}
                </Typography>
              </Paper>

              <Typography
                variant="h4"
                component="h2"
                sx={{ fontWeight: 800, mb: 4 }}
              >
                Recommended Actions
              </Typography>
              <Grid container spacing={3} sx={{ mb: 6 }}>
                {getRecommendations().map((rec, index) => (
                  <Grid size={{ xs: 12, sm: 6 }} key={index}>
                    <Card
                      sx={{
                        height: "100%",
                        borderLeft: `4px solid ${rec.icon.props.color}`,
                      }}
                    >
                      <CardContent sx={{ p: 3 }}>
                        <Box
                          sx={{ display: "flex", alignItems: "center", mb: 2 }}
                        >
                          <Box sx={{ mr: 2 }}>{rec.icon}</Box>
                          <Typography
                            variant="h6"
                            component="h3"
                            sx={{ fontWeight: 700 }}
                          >
                            {rec.title}
                          </Typography>
                        </Box>
                        <Typography variant="body1" color="text.secondary">
                          {rec.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>

              <Paper elevation={3} sx={{ p: 4, mb: 6 }}>
                <Typography
                  variant="h5"
                  component="h3"
                  sx={{ fontWeight: 700, mb: 3 }}
                >
                  Next Steps
                </Typography>
                <List>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: 40 }}>
                      <CheckIcon color="primary" />
                    </ListItemIcon>
                    <Typography variant="body1">
                      <strong>Schedule a consultation</strong> with our security
                      experts to review your full assessment
                    </Typography>
                  </ListItem>
                  {/* <ListItem sx={{ px: 0 }}> */}
                  {/* <ListItemIcon sx={{ minWidth: 40 }}> */}
                  {/* <CheckIcon color="primary" /> */}
                  {/* </ListItemIcon> */}
                  {/* <Typography variant="body1">
                      <strong>Download our guide</strong> "10 Immediate Security
                      Improvements You Can Make This Week"
                    </Typography> */}
                  {/* </ListItem> */}
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: 40 }}>
                      <CheckIcon color="primary" />
                    </ListItemIcon>
                    <Typography variant="body1">
                      <strong>Request a Free 10 minutes Demo</strong> of our
                      security awareness training
                    </Typography>
                  </ListItem>
                </List>
                <Box sx={{ display: "flex", gap: 2, mt: 3, flexWrap: "wrap" }}>
                  <Button
                    variant="contained"
                    size="large"
                    endIcon={<ArrowIcon />}
                    href="/contact"
                    sx={{ px: 4 }}
                  >
                    Get Expert Help
                  </Button>
                  {/* <Button
                    variant="outlined"
                    size="large"
                    href="/resources/security-guide"
                    sx={{ px: 4 }}
                  >
                    Download Guide
                  </Button> */}
                  {/* <Button
                    variant="outlined"
                    size="large"
                    href="/demo"
                    sx={{ px: 4 }}
                  >
                    See Platform Demo
                  </Button> */}
                </Box>
              </Paper>

              {/* <Divider sx={{ my: 6 }} />

              <Box textAlign="center">
                <Typography
                  variant="h5"
                  component="h3"
                  sx={{ fontWeight: 700, mb: 3 }}
                >
                  Want More Detailed Analysis?
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ mb: 4, maxWidth: 600, mx: "auto" }}
                >
                  Our comprehensive  security assessment includes
                  vulnerability scanning, penetration testing, and detailed
                  policy review.
                </Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  endIcon={<ArrowIcon />}
                  href="/enterprise-assessment"
                  sx={{ px: 6 }}
                >
                  Learn About Enterprise Assessment
                </Button>
              </Box> */}
            </>
          )}
        </>
      )}
    </Container>
  );
};

export default SecurityAssessment;
