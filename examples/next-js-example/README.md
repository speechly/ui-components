# Next.js & Speechly React UI Components example

This app demonstrates the use of [Speechly React Client]([/react-ui/](https://www.npmjs.com/package/@speechly/react-client)) and [Speechly React UI Components](/react-ui/) with a Next.js project.

## Getting started

You'll need a [Speechly account](https://api.speechly.com/dashboard/) and a Speechly application that's using a Conformer model. Follow our [quick start guide](https://docs.speechly.com/basics/getting-started) to get started with Speechly.

## Installation

Copy the example app using [degit](https://github.com/Rich-Harris/degit).

```bash
npx degit speechly/ui-components/examples/next-js-example my-app
cd my-app
```

Add the **App ID** of your Speechly application into `pages/_app.tsx`.

```jsx
<SpeechProvider
  appId="YOUR-APP-ID" // Get your App ID from: https://api.speechly.com/dashboard/
  debug
  logSegments
>
```

Install dependencies and start development server.

```bash
npm install
npm run dev
```
