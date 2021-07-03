const SlackBuildNotifierModule = require('./lib/SlackBuildNotifierModule');

/**
 * Setup the module.
 *
 * @param {object} moduleOptions
 */
export default function NuxtBuildSlackNotifierModule(moduleOptions = {}) {
    const options = {
        slackWebhookUrl: process.env.SLACK_WEBHOOK_URL,
        ...moduleOptions,
        ...(this.options.deployNotifiers || {
            slackWebhookUrl: process.env.SLACK_WEBHOOK_URL,
        }),
    };

    const { slackWebhookUrl, appName, slackChannel } = options;

    if (this.options.dev || !slackWebhookUrl || !appName || !slackChannel) {
        return;
    }

    const slackNotifier = new SlackBuildNotifierModule({
        options,
        context: this,
    });

    this.nuxt.hook('build:before', async () => {
        await slackNotifier.before();
    });

    this.nuxt.hook('build:done', async () => {
        await slackNotifier.done();
    });

    this.nuxt.hook('generate:before', async () => {
        await slackNotifier.before();
    });

    this.nuxt.hook('generate:done', async () => {
        await slackNotifier.done();
    });
}
