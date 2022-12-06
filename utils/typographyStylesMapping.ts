import {
  Typography as TypographyType,
  Variant
} from "@mui/material/styles/createTypography";

export const typographyStylesMapping = {
  h1: "headlineLarge",
  h2: "headlineMedium",
  h3: "headlineSmall",
  h4: "titleLarge",
  h5: "titleMedium",
  h6: "titleSmall",
  subtitle1: "subtitle1",
  subtitle2: "subtitle2",
  body1: "bodyLarge",
  body2: "bodyMedium",
  button: "labelLarge",
  caption: "caption",
  overline: "overline",
} as {
    [key in Variant]: keyof TypographyType;
  };
