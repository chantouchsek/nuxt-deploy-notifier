const SlackBuildNotifierModule = require('./lib/SlackBuildNotifierModule');

/**
 * Setup the module.
 *
 * @param {object} moduleOptions
 */
export default async function NuxtBuildSlackNotifierModule(moduleOptions = {}) {
    const options = {
        slackWebhookUrl: null,
        ...moduleOptions,
        ...this.options.slackNotifier || { slackWebhookUrl: null },
    };

    if (
        process.env.SLACK_NOTFIER_ENABLED !== 'true'
        || this.options.dev
        || this.options._build
        || !options.slackWebhookUrl
    ) {
        return;
    }

    this.nuxt.hook('build:done', () => {
        (new SlackBuildNotifierModule({
            context: this,
            options,
        })).run();
    });
};
