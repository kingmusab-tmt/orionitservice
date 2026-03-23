"use client";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@mui/material";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  children?: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  link,
  children,
}) => {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.3s, box-shadow 0.3s",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: 6,
        },
      }}
    >
      <CardMedia
        sx={{
          height: 140,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "4rem",
          backgroundColor: "primary.light",
          color: "primary.contrastText",
        }}
      >
        <Box sx={{ fontSize: 60, color: "inherit" }}>{icon}</Box>
      </CardMedia>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h3">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          {description}
        </Typography>
        {children}
      </CardContent>
      <Box sx={{ p: 2 }}>
        <Link href={link} passHref>
          <Button size="small" color="primary" variant="outlined" fullWidth>
            Learn More
          </Button>
        </Link>
      </Box>
    </Card>
  );
};

export default ServiceCard;
