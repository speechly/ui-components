import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { SpeechProvider } from '@speechly/react-client';
import { PushToTalkButton, TranscriptDrawer, IntroPopup } from '@speechly/react-ui';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SpeechProvider appId="YOUR-APP-ID" logSegments debug>
      <PushToTalkButton placement="bottom" powerOn="auto"></PushToTalkButton>
      <TranscriptDrawer></TranscriptDrawer>
      <IntroPopup></IntroPopup>
      <Component {...pageProps} />
    </SpeechProvider>
  );
}

export default MyApp;
