const SlackNotifier = require('./SlackNotifier');
const logger = require('./logger');

class SlackBuildNotifierModule {
    constructor({ context, options }) {
        this.context = context;
        this.options = options;
    }

    /**
     * Run the module process.
     *
     * @returns {Promise<void>}
     */
    async run() {
        const slackNotifier = new SlackNotifier({
            url: lhr.finalUrl,
            options: this.options,
            context: this.context,
            webhookUrl: this.options.slackWebhookUrl,
        })
        await slackNotifier.notify();

        logger.info(`Url tested: ${ lhr.finalUrl }\n`);
    }
}

module.exports = SlackBuildNotifierModule;
