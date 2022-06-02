import { useMemo } from "react";
import {
  createTheme,
  CssBaseline,
  ThemeOptions,
  ThemeProvider,
} from "@mui/material";

type ThemeConfigProps = {
  children?: React.ReactNode;
};

export const ThemeConfig: React.FC<ThemeConfigProps> = ({ children }) => {
  const themeOptions: ThemeOptions = useMemo(() => ({}), []);

  const theme = createTheme({ ...themeOptions });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
