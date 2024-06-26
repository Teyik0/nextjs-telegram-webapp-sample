import type { Metadata } from 'next';
import './globals.css';
import { TelegramProvider } from '@/components/TelegramContext';
import { Web3Modal } from '@/components/Web3ModalProvider';
import { Web3ModalProvider } from '@/components/Web3Modal2';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <TelegramProvider>
          {/* <Web3Modal> */}
          <Web3ModalProvider>{children}</Web3ModalProvider>
          {/* </Web3Modal> */}
        </TelegramProvider>
      </body>
    </html>
  );
}
