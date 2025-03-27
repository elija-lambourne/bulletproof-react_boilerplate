import { MantineThemeOverride } from '@mantine/core';

const matineTheme : MantineThemeOverride = {
  colors: {
    primary: [
      "#E9F3FD", // Lightest shade for primary
      "#BFDBFF",
      "#93C5FD",
      "#60A5FA",
      "#3B82F6",
      "#2563EB",
      "#1D4ED8", // Primary color
      "#1E40AF", // Primary-hover
      "#19398C",
      "#132F6A", // Darkest tone
    ],
    dark: [
      "#F5F7FA", // Lightest (text color when using `theme.colors.dark[0]`)
      "#E5E7EB",
      "#CBD5E1",
      "#A1AAB5",
      "#6D7B89",
      "#4E5F6D",
      "#374151", // primary-greyed
      "#0D141A", // bg-primary (background body color when using `theme.colors.dark[7]`)
      "#334155", // primary-greyed-hover
      "#1C2B36", // bg-secondary
    ],
  },

  primaryColor: "primary",
  primaryShade: 6,

  black: "#0D141A", // Fallback for bg-primary
  white: "#E5E7EB", // Fallback for text-primary
};

export default matineTheme;