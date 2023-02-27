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

# Speechly Browser UI Components

![build](https://img.shields.io/github/actions/workflow/status/speechly/ui-components/build.yaml?branch=main&logo=github)
[![npm](https://img.shields.io/npm/v/@speechly/browser-ui?color=cb3837&logo=npm)](https://www.npmjs.com/package/@speechly/browser-ui)
[![license](http://img.shields.io/:license-mit-blue.svg)](/LICENSE)

Ready-made UI components for building reactive voice interface using JavaScript and Speechly.

> 🚧 This project is no longer actively maintained and is looking for a maintainer. If you're interested, get in touch https://www.speechly.com/contact

![image](https://user-images.githubusercontent.com/2579244/220076001-fc7e3dab-da21-4909-9891-af933a91755a.png)

## Documentation

- [Getting started with Speechly](https://docs.speechly.com/basics/getting-started)
- [Speechly UI components](https://dreamy-cori-a02de1.netlify.app/ui-components/)
- [API reference](./docs/index.md)

## Getting started

You'll need a [Speechly account](https://api.speechly.com/dashboard/) and a Speechly application that's using a Conformer model. Follow our [quick start guide](https://docs.speechly.com/basics/getting-started) to get started with Speechly.

## Browser usage

Include the Web Components from a CDN that mirrors [`@speechly/browser-ui`](https://www.npmjs.com/package/@speechly/browser-ui) npm package. The script tags register `push-to-talk-button`, `big-transcript` and `intro-popup` with the browser's customElement registry so you can use them like regular tags.

```html
<head>
  <script type="text/javascript" src="https://unpkg.com/@speechly/browser-ui/core/push-to-talk-button.js"></script>
  <script type="text/javascript" src="https://unpkg.com/@speechly/browser-ui/core/big-transcript.js"></script>
  <script type="text/javascript" src="https://unpkg.com/@speechly/browser-ui/core/intro-popup.js"></script>
</head>

<body>
  <big-transcript
    placement="top">
  </big-transcript>
  <push-to-talk-button
    placement="bottom"
    appid="YOUR-APP-ID">
  </push-to-talk-button>
  <intro-popup>
    <span slot="priming-body">You'll be able to control this web app faster with voice.</span>
  </intro-popup>
</body>
```

## Node Usage

> This example illustrates using browser-ui Web Components with a JS framework. For React development, [react-client](../react-client) and [react-ui](../react-ui) libraries offer a better developer experience.

```bash
npm install @speechly/browser-ui
```

In App.js:

```js
import "@speechly/browser-ui/core/push-to-talk-button";
import "@speechly/browser-ui/core/big-transcript";
import "@speechly/browser-ui/core/intro-popup";

// ...

<big-transcript placement="top"></big-transcript>
<push-to-talk-button placement="bottom" appid="YOUR-APP-ID"></push-to-talk-button>
<intro-popup></intro-popup>
```

## Contributing

See contribution guide in [CONTRIBUTING.md](https://github.com/speechly/speechly/blob/main/CONTRIBUTING.md).