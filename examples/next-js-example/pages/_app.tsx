import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { SpeechProvider } from '@speechly/react-client';
import { PushToTalkButton, TranscriptDrawer, IntroPopup } from '@speechly/react-ui';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SpeechProvider appId="YOUR-APP-ID" logSegments debug>
      <PushToTalkButton placement="bottom" />
      <TranscriptDrawer />
      <IntroPopup />
      <Component {...pageProps} />
    </SpeechProvider>
  );
}
