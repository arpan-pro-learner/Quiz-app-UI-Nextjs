import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Quiz App By Arpan",
  description: "A Quiz app for both teacher and student",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <link rel="icon" href="https://thumbs.dreamstime.com/z/quiz-question-marks-sign-icon-questions-answers-game-symbol-classic-flat-vector-181034856.jpg" sizes="any" />
    </html>
  );
}
