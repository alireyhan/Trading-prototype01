import "./globals.css";
import { Suspense } from "react";
import BottomNav from "@/components/BottomNav";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <Suspense fallback={null}>
          <div className="min-h-screen pb-60">{children}</div>
        </Suspense>

        <Suspense fallback={null}>
          <BottomNav />
        </Suspense>
      </body>
    </html>
  );
}
