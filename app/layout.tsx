import './ui/global.css';
import { inter } from './ui/fonts';

export const metadata = {
  title: 'Your App Name',
  description: 'Description here',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}