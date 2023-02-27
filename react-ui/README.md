<div align="center" markdown="1">
<br/>

![speechly-logo-duo-black](https://user-images.githubusercontent.com/2579244/193574443-130d16d6-76f1-4401-90f2-0ed753b39bc0.svg)

[Website](https://www.speechly.com/)
&ensp;&middot;&ensp;
[Docs](https://docs.speechly.com/)
&ensp;&middot;&ensp;
[Support](https://github.com/speechly/speechly/discussions)
&ensp;&middot;&ensp;
[Blog](https://www.speechly.com/blog/)
&ensp;&middot;&ensp;
[Login](https://api.speechly.com/dashboard/)

<br/>
</div>

# Speechly React UI Components

![build](https://img.shields.io/github/actions/workflow/status/speechly/ui-components/build.yaml?branch=main&logo=github)
[![npm](https://img.shields.io/npm/v/@speechly/react-ui?color=cb3837&logo=npm)](https://www.npmjs.com/package/@speechly/react-ui)
[![license](http://img.shields.io/:license-mit-blue.svg)](/LICENSE)

Ready-made UI components for building reactive voice interface using React and Speechly.

> 🚧 This project is no longer actively maintained and is looking for a maintainer. If you're interested, get in touch https://www.speechly.com/contact

![image](https://user-images.githubusercontent.com/2579244/220076001-fc7e3dab-da21-4909-9891-af933a91755a.png)

## Documentation

- [Getting started with Speechly](https://docs.speechly.com/basics/getting-started)
- [Speechly UI components](https://dreamy-cori-a02de1.netlify.app/ui-components/)
- [API reference](./docs/README.md)

## Getting started

You'll need a [Speechly account](https://api.speechly.com/dashboard/) and a Speechly application that's using a Conformer model. Follow our [quick start guide](https://docs.speechly.com/basics/getting-started) to get started with Speechly.

## Installing

Install Speechly React Client and Speechly React UI Components:

```
npm install @speechly/react-client
npm install @speechly/react-ui
```

Import `SpeechProvider` and wrap the app with it, passing the **App ID** of your Speechly application:

```jsx
// index.js
import { SpeechProvider } from '@speechly/react-client';

<React.StrictMode>
  <SpeechProvider appId="YOUR_APP_ID">
    <App />
  </SpeechProvider>
</React.StrictMode>
```

## Usage

Import the required UI components and take them into use:

```jsx
// App.js
import {
  PushToTalkButton,
  BigTranscript,
  IntroPopup
} from "@speechly/react-ui";

function App() {
  return (
    <div className="App">
      <BigTranscript placement="top" />
      <PushToTalkButton placement="bottom" captureKey=" " />
      <IntroPopup />
    </div>
  );
}
```

Start the development server:

```bash
npm run start
```

Navigate to http://localhost:3000 to see your app running!

## Contributing

See contribution guide in [CONTRIBUTING.md](https://github.com/speechly/speechly/blob/main/CONTRIBUTING.md).