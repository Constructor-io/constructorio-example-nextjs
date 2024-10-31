import '../styles/globals.css';

export const metadata = {
  title: 'Constructor Next.js Example',
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}