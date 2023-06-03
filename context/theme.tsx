import { createContext, useContext, useState } from "react";
import { Theme, ThemeContextType } from "@/lib/types";

// export const ThemeContext: ThemeContextType | null = createContext(null);

// export function ThemeProvider({ children }: any) {
//   const [theme, setTheme] = useState<Theme>("light");

//   const toggleTheme = () => {
//     if (theme === "light") setTheme("dark");
//     else setTheme("light");
//   };

//   return (
//     <ThemeContext.Provider value={{ toggleTheme, theme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// }

// export function useThemeContext() {
//   return useContext(ThemeContext);
// }
