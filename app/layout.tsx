



// import type { Metadata } from "next";
// import "./globals.css";

// export const metadata: Metadata = {
//   title: "Risvan Muhammed | Full Stack .NET Developer",
//   description: "Passionate developer specializing in .NET backend development and modern frontend technologies.",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <head>
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//       </head>
//       <body className="antialiased">
//         {children}
//       </body>
//     </html>
//   );
// }







import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Risvan Muhammed | Full Stack .NET Developer",
  description: "Full Stack Developer specialising in .NET Core & React.js — Kozhikode, IN",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800;900&family=Barlow:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}