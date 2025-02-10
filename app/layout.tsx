
import Navbar from '@/components/Navbar';
import './globals.css';

export const metadata = {
  title: 'My Blog',
  description: 'A simple blog built with Next.js and Tailwind CSS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white">
        <Navbar />
        
        <main className="min-h-screen py-10">{children}</main>
      </body>
    </html>
  );
}
