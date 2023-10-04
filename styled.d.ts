import { theme } from "./src/styles/theme";
import {} from "styled-components";

type ThemeType = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {} // extends the global DefaultTheme with our ThemeType.
}
