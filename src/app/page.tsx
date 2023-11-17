import TelegramMiniApp from '@/components/TelegramMiniApp';
import { Web3Button } from '@web3modal/react';

export default function Home() {
  return (
    <div>
      {/* <w3m-button /> */}
      <Web3Button />
      <TelegramMiniApp />
    </div>
  );
}
