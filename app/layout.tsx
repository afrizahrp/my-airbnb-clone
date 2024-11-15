import { Nunito } from 'next/font/google';
import './globals.css';
import ClientOnly from './components/ClientOnly';
import Navbar from './components/navbar/Navbar';
import Modal from './components/modals/Modal';

export const metadata = {
  title: 'Airbnb Clone',
  description: 'Airbnb Clone with Mern',
};

const font = Nunito({
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <Modal title="Login Modal" isOpen />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
