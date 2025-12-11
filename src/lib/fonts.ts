import { GeistMono } from "geist/font/mono";

// Avoid downloading Google Fonts during development to prevent network
// failures. Use system font fallback by exposing a CSS variable name that
// the layout can include. If you want custom fonts, add local font files
// and use `next/font/local` instead.
export const fontSans = {
  // This value is used in `src/app/layout.tsx` when composing the
  // `className` on the html element. Keep it a short identifier.
  variable: "--font-sans",
};

export const fontMono = GeistMono;
