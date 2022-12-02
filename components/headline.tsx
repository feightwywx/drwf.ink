import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import headbg from "../public/nathan-duck-Jo5FUEkhB_4-unsplash.jpg";
import darkheadbg from "../public/nathan-duck-Jo5FUEkhB_4-unsplash-dark.jpg";

export const HeadLine: React.FC<{
  title: string;
  subtitle: string;
}> = ({ title, subtitle }) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      style={{
        width: "auto",
        backgroundColor: prefersDarkMode
          ? theme.palette.surface.on
          : theme.palette.surface.variant,
        color: prefersDarkMode
          ? theme.palette.surface.on
          : theme.palette.surface.variant,
        borderRadius: "28px",
        backgroundImage: `url(${
          prefersDarkMode ? darkheadbg.src : headbg.src
        })`,
        backgroundSize: "cover",
      }}
      sx={{ p: { xs: "10vh 5% 2em", sm: "10vh 5%", md: "20vh 5%" } }}
    >
      <Typography
        variant="h1"
        style={{
          ...(mobile
            ? theme.typography.displaySmall
            : theme.typography.displayLarge),
          fontWeight: 600,
          fontFamily: "Manrope",
          textOverflow: "clip",
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="h5"
        style={
          mobile
            ? theme.typography.headlineSmall
            : theme.typography.headlineLarge
        }
        sx={{ mt: { xs: "1em", sm: "0.5em" } }}
      >
        {subtitle}
      </Typography>
    </Box>
  );
};
