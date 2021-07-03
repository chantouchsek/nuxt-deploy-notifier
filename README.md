# Nuxt Build Notifier

[![Latest Version on NPM](https://img.shields.io/npm/v/nuxt-deploy-notifier.svg?style=flat-square)](https://npmjs.com/package/nuxt-deploy-notifier)
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE)
[![npm](https://img.shields.io/npm/dt/nuxt-deploy-notifier.svg?style=flat-square)](https://npmjs.com/package/nuxt-deploy-notifier)
[![npm](https://img.shields.io/npm/dm/nuxt-deploy-notifier.svg?style=flat-square)](https://npmjs.com/package/nuxt-deploy-notifier)

This module provides a simple Slack notification of your deployment after success.

## Installation

```sh
yarn add nuxt-deploy-notifier
```

## Usage

Simply add the module to your nuxt config:

```js
export default {
    buildModules: [
        'nuxt-deploy-notifier',
    ],
}
```

And define any applicable options:

```js
export default {
    deployNotifiers: {
        appName: null, // required
        slackChannel: null, // required
        slackWebhookUrl: null, // required
    },
}
```

## Options

The following options are available:

### `APP_URL`

- Type: `string`
- Required: `true`
- Description: `Set this from .env file`

### `appName`

- Type: `string`
- Required: `true`
- Description: `The application name`

### `slackWebhookUrl`

- Type: `string`
- Required: `true`

### `slackChannel`

- Type: `string`
- Required: `true`

The webhook url to send the Slack notification to your channel of choice. For information on how to setup a webhook, check out the [Slack Documentation](https://api.slack.com/messaging/webhooks). If no value is supplied, no notification will be sent.

# Contact

Email: chantouchsek.cs83@gmail.com

Twitter [@DevidCs83](https://twitter.com/DevidCs83)

## License

This package is under the [MIT License](LICENSE).
