import TelegramMiniApp from '@/components/TelegramMiniApp';
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Home() {
  return (
    <div>
      <ConnectButton />
      <w3m-button />
      <TelegramMiniApp />
    </div>
  );
}
