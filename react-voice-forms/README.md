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

# Speechly voice form components for React

![build](https://img.shields.io/github/actions/workflow/status/speechly/ui-components/build.yaml?branch=main&logo=github)
[![npm](https://img.shields.io/npm/v/@speechly/react-voice-forms?color=cb3837&logo=npm)](https://www.npmjs.com/package/@speechly/react-voice-forms)
[![license](http://img.shields.io/:license-mit-blue.svg)](/LICENSE)

Ready-made React form components that can be controlled with voice using Speechly. They also work with other modalities like tap, pointer and keyboard.

> 🚧 This project is no longer actively maintained and is looking for a maintainer. If you're interested, get in touch https://www.speechly.com/contact

## Documentation

- [Getting started with Speechly](https://docs.speechly.com/basics/getting-started)
- [Voice form components](https://dreamy-cori-a02de1.netlify.app/ui-components/voice-forms/)
- [Speechly UI components](https://dreamy-cori-a02de1.netlify.app/ui-components/)
- [API reference](./docs/README.md)

## Usage

Install Speechly React Client and Speechly React voice form components:

```bash
npm install @speechly/react-client
npm install @speechly/react-voice-forms
```

Include the components:

```jsx
import {
  VoiceDatePicker,
  VoiceCheckbox,
  VoiceInput,
  VoiceSelect,
  VoiceToggle,
} from '@speechly/react-voice-forms';
```

Place the form components inside your `SpeechProvider` block:

```jsx
import { SpeechProvider } from '@speechly/react-client';

<SpeechProvider appId="YOUR-APP-ID">
  <VoiceInput label="From" changeOnEntityType="from" />
</SpeechProvider>
```

## Styling

Add a `voice-form-theme-mui.css` to your `src` folder, then include it in `index.tsx`:

```
import "voice-form-theme-mui.css";
```
