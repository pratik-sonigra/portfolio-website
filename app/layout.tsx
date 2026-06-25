import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Pratik Sonigra — Senior Software Engineer",
  description:
    "Senior Software Engineer with 7+ years of experience building scalable, high-performance applications across enterprise software, document processing systems, microservice architectures, and IoT platforms. Core expertise in .NET, C#, SQL Server, RabbitMQ, distributed systems, and backend architecture. Recently focused on building AI-native applications — designing intelligent workflows and retrieval systems powered by RAG, Knowledge Graphs, LangChain, LangGraph, and Composio.",
  keywords: [
    "Pratik Sonigra",
    "Senior Software Engineer",
    ".NET",
    "C#",
    "Distributed Systems",
    "AI-Native Apps",
    "RAG",
    "LangChain",
    "Backend Engineer",
  ],
  authors: [{ name: "Pratik Sonigra" }],
  openGraph: {
    title: "Pratik Sonigra — Senior Software Engineer",
    description:
      "Senior Software Engineer specializing in .NET, Distributed Systems, and AI-Native Applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} min-h-dvh antialiased bg-[#0a0f1e] text-slate-100`}>
        {children}
      </body>
    </html>
  );
}
