import React from "react";
import { Provider } from "./provider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
