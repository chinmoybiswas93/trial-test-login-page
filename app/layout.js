import localFont from "next/font/local";
import "./globals.css";

// Font files can be colocated inside of `pages`
const myFont = localFont({ src: "./font/apercu_regular_pro.otf" });

export const metadata = {
  title: "Sign Up FREE | Typeform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={myFont.className}>{children}</body>
    </html>
  );
}
