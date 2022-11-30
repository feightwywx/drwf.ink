import {
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import headbg from "../public/nathan-duck-Jo5FUEkhB_4-unsplash.jpg";
import darkheadbg from "../public/nathan-duck-Jo5FUEkhB_4-unsplash-dark.jpg";

export const HeadLine: React.FC<{
  title: string;
  subtitle: string;
}> = ({ title, subtitle }) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div
      style={{
        width: "auto",
        backgroundColor: prefersDarkMode
          ? theme.palette.surface.on
          : theme.palette.surface.variant,
        color: prefersDarkMode
          ? theme.palette.surface.on
          : theme.palette.surface.variant,
        padding: mobile ? "20vh 5%" : "20vh 5%",
        maxHeight: "60vw",
        borderRadius: "28px",
        backgroundImage: `url(${
          prefersDarkMode ? darkheadbg.src : headbg.src
        })`,
        backgroundSize: "cover",
      }}
    >
      <Typography
        variant="h1"
        style={{
          ...theme.typography.displayLarge,
          fontSize: 64,
          fontWeight: 600,
          fontFamily: "Manrope",
          textOverflow: "clip",
        }}
      >
        {title}
      </Typography>
      <Typography variant="h5" style={theme.typography.displaySmall} sx={{mt: '0.5em'}}>
        {subtitle}
      </Typography>
    </div>
  );
};
