import { Typography } from "@mui/material";

export const TitleTypography: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => (
  <Typography
    variant="h2"
    style={{
      fontWeight: 600,
      fontFamily: "Manrope",
    }}
  >
    {children}
  </Typography>
);
