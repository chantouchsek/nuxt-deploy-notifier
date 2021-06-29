# Nuxt Lighthouse Module

This module provides a simple Slack notification of your deployment after success.

## Installation

```sh
yarn add nuxt-build-slack-notifier
```

## Usage

Simply add the module to your nuxt config:

```js
module.exports = {
    modules: [
        'nuxt-build-slack-notifier',
    ],
};
```

And define any applicable options:

```js
module.exports = {
    slackNotifier: {
        slackWebhookUrl: null,
    },
};
```

This module is being disabled by default, and must be explicitly enable by setting the `LIGHTHOUSE_ENABLED` environment variable to `true`.

## Options

The following options are available:

### `slackWebhookUrl`

- Type: `string`
- Default: `null`
- Required: `true`

The webhook url to send the Slack notification to your channel of choice. For information on how to setup a webhook, check out the [Slack Documentation](https://api.slack.com/messaging/webhooks). If no value is supplied, no notification will be sent.

