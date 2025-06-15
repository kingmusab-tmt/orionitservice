// import HeroBanner from "../components/HeroBanner";
// import { Box, Container, Typography, Grid, Divider } from "@mui/material";
// import { Groups, Security, EmojiObjects, Handshake } from "@mui/icons-material";
// import Image from "next/image";

// export const metadata = {
//   title: "About Orion IT Service | Your Trusted Technology Partner",
//   description:
//     "Learn about Orion IT Service - providing expert network support, security solutions, and IT services with satisfied clients.",
//   alternates: {
//     canonical: "https://orionitservice.com/about", // Add this line
//   },
//   openGraph: {
//     title: "About Orion IT Service | Your Trusted Technology Partner",
//     description: "Providing expert IT solutions with security-first approach.",
//     url: "https://orionitservice.com/about", // Also good for OpenGraph
//     images: [
//       {
//         url: "/images/logo.png",
//         width: 1200,
//         height: 630,
//         alt: "Orion IT Service",
//       },
//     ],
//   },
// };

// export default function About() {
//   const values = [
//     {
//       icon: <Security fontSize="large" />,
//       title: "Security First",
//       description: "We prioritize your digital safety above all else",
//     },
//     {
//       icon: <EmojiObjects fontSize="large" />,
//       title: "Innovation",
//       description: "Continually evolving to counter emerging threats",
//     },
//     {
//       icon: <Handshake fontSize="large" />,
//       title: "Integrity",
//       description: "Honest advice you can trust",
//     },
//     {
//       icon: <Groups fontSize="large" />,
//       title: "Collaboration",
//       description: "We work with you, not just for you",
//     },
//   ];

//   return (
//     <>
//       <HeroBanner
//         title="About Orion IT Service"
//         subtitle="Your trusted technology partner since 2012"
//         image="/images/avatar7.jpg"
//       />

//       <Container maxWidth="lg" sx={{ py: 8 }}>
//         {/* Our Story Section */}
//         <Box sx={{ mb: 8 }}>
//           <Typography
//             variant="h3"
//             component="h2"
//             gutterBottom
//             sx={{ fontWeight: 700, mb: 4 }}
//           >
//             About Us
//           </Typography>
//           <Grid container spacing={6}>
//             <Grid size={{ xs: 12, md: 6 }}>
//               <Typography
//                 variant="body1"
//                 paragraph
//                 sx={{ fontSize: "1.1rem", lineHeight: 1.8 }}
//               >
//                 ORION IT SERVICE provides top-notch network support services
//                 offering reliable solutions to optimize your business
//                 connectivity. We design, deploy, manage, and secure networks
//                 that power your operations ensuring speed, stability, and
//                 scalability. With deep expertise in wired and wireless
//                 networking, firewall and security configurations, VPN and remote
//                 access, and infrastructure optimization, we deliver tailored
//                 solutions that align with your business goals and technical
//                 requirements.
//               </Typography>
//               <Typography
//                 variant="body1"
//                 paragraph
//                 sx={{ fontSize: "1.1rem", lineHeight: 1.8 }}
//               >
//                 Our Team is the backbone of digital connectivity, specializing
//                 in the design, implementation, security, and optimization of
//                 both small and medium-scale network infrastructures. With our
//                 combination of technical expertise, strategic planning, and
//                 hands-on experience, our engineers ensure that every system we
//                 touch is secure, efficient, and future-ready. From setting up
//                 complex LAN/WAN environments, to deploying VPNs, configuring
//                 firewalls and switches, and ensuring redundancy and uptime, our
//                 engineers handle every layer of the network with precision.
//               </Typography>
//             </Grid>
//             <Grid size={{ xs: 12, md: 6 }}>
//               <Box
//                 sx={{
//                   position: "relative",
//                   height: "100%",
//                   minHeight: 300,
//                   borderRadius: 2,
//                   overflow: "hidden",
//                   boxShadow: 3,
//                 }}
//               >
//                 <Image
//                   src="/images/networkatwork.png"
//                   alt="Orion IT Service team working"
//                   width={100}
//                   height={100}
//                   style={{
//                     objectFit: "cover",
//                   }}
//                 />
//               </Box>
//             </Grid>
//           </Grid>
//         </Box>

//         <Divider sx={{ my: 8 }} />
//         {/* Our Values Section */}
//         <Box>
//           <Typography
//             variant="h3"
//             component="h2"
//             gutterBottom
//             sx={{ fontWeight: 700, mb: 6 }}
//           >
//             Our Values
//           </Typography>
//           <Grid container spacing={4}>
//             {values.map((value, index) => (
//               <Grid size={{ xs: 12, sm: 6, md: 6 }} key={index}>
//                 <Box
//                   sx={{
//                     height: "100%",
//                     p: 4,
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "center",
//                     textAlign: "center",
//                     borderRadius: 2,
//                     backgroundColor: "background.paper",
//                     boxShadow: 1,
//                     transition: "transform 0.3s, box-shadow 0.3s",
//                     "&:hover": {
//                       transform: "translateY(-5px)",
//                       boxShadow: 3,
//                     },
//                   }}
//                 >
//                   <Box
//                     sx={{
//                       width: 60,
//                       height: 60,
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       backgroundColor: "primary.main",
//                       color: "primary.contrastText",
//                       borderRadius: "50%",
//                       mb: 3,
//                     }}
//                   >
//                     {value.icon}
//                   </Box>
//                   <Typography variant="h6" component="h3" gutterBottom>
//                     {value.title}
//                   </Typography>
//                   <Typography variant="body1">{value.description}</Typography>
//                 </Box>
//               </Grid>
//             ))}
//           </Grid>
//         </Box>

//         {/* Achievements Section */}
//         <Box
//           sx={{
//             mt: 10,
//             backgroundColor: "primary.light",
//             p: 6,
//             borderRadius: 2,
//             color: "primary.contrastText",
//           }}
//         >
//           <Typography
//             variant="h4"
//             align="center"
//             gutterBottom
//             sx={{ fontWeight: 700, mb: 4 }}
//           >
//             Our Achievements
//           </Typography>
//           <Grid container spacing={4} justifyContent="center">
//             <Grid size={{ xs: 6, sm: 3 }}>
//               <Box sx={{ textAlign: "center" }}>
//                 <Typography
//                   variant="h3"
//                   component="div"
//                   sx={{ fontWeight: 700 }}
//                 >
//                   500+
//                 </Typography>
//                 <Typography variant="h6">Satisfied Clients</Typography>
//               </Box>
//             </Grid>
//             <Grid size={{ xs: 6, sm: 3 }}>
//               <Box sx={{ textAlign: "center" }}>
//                 <Typography
//                   variant="h3"
//                   component="div"
//                   sx={{ fontWeight: 700 }}
//                 >
//                   98%
//                 </Typography>
//                 <Typography variant="h6">Client Retention</Typography>
//               </Box>
//             </Grid>
//             <Grid size={{ xs: 6, sm: 3 }}>
//               <Box sx={{ textAlign: "center" }}>
//                 <Typography
//                   variant="h3"
//                   component="div"
//                   sx={{ fontWeight: 700 }}
//                 >
//                   24/7
//                 </Typography>
//                 <Typography variant="h6">Support Availability</Typography>
//               </Box>
//             </Grid>
//             <Grid size={{ xs: 6, sm: 3 }}>
//               <Box sx={{ textAlign: "center" }}>
//                 <Typography
//                   variant="h3"
//                   component="div"
//                   sx={{ fontWeight: 700 }}
//                 >
//                   50+
//                 </Typography>
//                 <Typography variant="h6">Industry Certifications</Typography>
//               </Box>
//             </Grid>
//           </Grid>
//         </Box>
//       </Container>
//     </>
//   );
// }
"use client";
import HeroBanner from "../components/HeroBanner";
import {
  Box,
  Container,
  Typography,
  Grid,
  Divider,
  useTheme,
} from "@mui/material";
import { Groups, Security, EmojiObjects, Handshake } from "@mui/icons-material";
import Image from "next/image";

const metadata = {
  title: "About Orion IT Service | Your Trusted Technology Partner",
  description:
    "Learn about Orion IT Service - providing expert network support, security solutions, and IT services with satisfied clients.",
  alternates: {
    canonical: "https://orionitservice.com/about",
  },
  openGraph: {
    title: "About Orion IT Service | Your Trusted Technology Partner",
    description: "Providing expert IT solutions with security-first approach.",
    url: "https://orionitservice.com/about",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Orion IT Service",
      },
    ],
  },
};

export default function About() {
  const theme = useTheme();
  const values = [
    {
      icon: <Security fontSize="large" />,
      title: "Security First",
      description: "We prioritize your digital safety above all else",
    },
    {
      icon: <EmojiObjects fontSize="large" />,
      title: "Innovation",
      description: "Continually evolving to counter emerging threats",
    },
    {
      icon: <Handshake fontSize="large" />,
      title: "Integrity",
      description: "Honest advice you can trust",
    },
    {
      icon: <Groups fontSize="large" />,
      title: "Collaboration",
      description: "We work with you, not just for you",
    },
  ];

  return (
    <>
      <HeroBanner
        title="About Orion IT Service"
        subtitle="Your trusted technology partner since 2012"
        image="/images/avatar7.jpg"
      />

      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Our Story Section */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 700, mb: 4, color: "text.primary" }}
          >
            About Us
          </Typography>
          <Grid container spacing={6}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                variant="body1"
                paragraph
                sx={{
                  fontSize: "1.1rem",
                  lineHeight: 1.8,
                  color: "text.primary",
                }}
              >
                ORION IT SERVICE provides top-notch network support services
                offering reliable solutions to optimize your business
                connectivity. We design, deploy, manage, and secure networks
                that power your operations ensuring speed, stability, and
                scalability.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{
                  fontSize: "1.1rem",
                  lineHeight: 1.8,
                  color: "text.primary",
                }}
              >
                Our Team is the backbone of digital connectivity, specializing
                in the design, implementation, security, and optimization of
                both small and medium-scale network infrastructures.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  position: "relative",
                  height: "100%",
                  minHeight: 300,
                  borderRadius: 2,
                  overflow: "hidden",
                  boxShadow: 3,
                  border: `1px solid ${theme.palette.divider}`,
                }}
              >
                <Image
                  src="/images/networkatwork.png"
                  alt="Orion IT Service team working"
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Divider sx={{ my: 8, borderColor: theme.palette.divider }} />

        {/* Our Values Section */}
        <Box>
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 700, mb: 6, color: "text.primary" }}
          >
            Our Values
          </Typography>
          <Grid container spacing={4}>
            {values.map((value, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 6 }} key={index}>
                <Box
                  sx={{
                    height: "100%",
                    p: 4,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    borderRadius: 2,
                    backgroundColor: "background.paper",
                    boxShadow: 1,
                    transition: "transform 0.3s, box-shadow 0.3s",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: 3,
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "primary.main",
                      color: "primary.contrastText",
                      borderRadius: "50%",
                      mb: 3,
                    }}
                  >
                    {value.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    component="h3"
                    gutterBottom
                    sx={{ color: "text.primary" }}
                  >
                    {value.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: "text.secondary" }}>
                    {value.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Achievements Section
        <Box
          sx={{
            mt: 10,
            backgroundColor: "primary.main",
            p: 6,
            borderRadius: 2,
            color: "primary.contrastText",
          }}
        >
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{ fontWeight: 700, mb: 4 }}
          >
            Our Achievements
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid size={{ xs: 6, sm: 3 }}>
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  variant="h3"
                  component="div"
                  sx={{ fontWeight: 700 }}
                >
                  500+
                </Typography>
                <Typography variant="h6">Satisfied Clients</Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 6, sm: 3 }}>
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  variant="h3"
                  component="div"
                  sx={{ fontWeight: 700 }}
                >
                  98%
                </Typography>
                <Typography variant="h6">Client Retention</Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 6, sm: 3 }}>
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  variant="h3"
                  component="div"
                  sx={{ fontWeight: 700 }}
                >
                  24/7
                </Typography>
                <Typography variant="h6">Support Availability</Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 6, sm: 3 }}>
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  variant="h3"
                  component="div"
                  sx={{ fontWeight: 700 }}
                >
                  50+
                </Typography>
                <Typography variant="h6">Industry Certifications</Typography>
              </Box>
            </Grid>
          </Grid>
        </Box> */}
      </Container>
    </>
  );
}
