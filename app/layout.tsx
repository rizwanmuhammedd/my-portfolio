// import type { Metadata } from "next";
// import "./globals.css";

// export const metadata: Metadata = {
//   title: "Risvan Muhammed - Full Stack .NET Developer",
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
//         <link rel="icon" href="/favicon.ico" />
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
  description: "Passionate developer specializing in .NET backend development and modern frontend technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}