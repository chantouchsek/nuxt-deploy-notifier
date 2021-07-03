const SlackNotifier = require('./SlackNotifier');
const logger = require('./logger');

class SlackBuildNotifierModule {
    constructor({ context, options }) {
        this.context = context;
        this.options = options;
    }

    async done() {
        const slackNotifier = new SlackNotifier({
            options: this.options,
            context: this.context,
            webhookUrl: this.options.slackWebhookUrl,
        });
        await slackNotifier.notify();

        logger.info('New deployment has been made.');
    }

    async before() {
        const slackNotifier = new SlackNotifier({
            options: this.options,
            context: this.context,
            webhookUrl: this.options.slackWebhookUrl,
        });
        await slackNotifier.notify('before');

        logger.info('New deployment is making...');
    }
}

module.exports = SlackBuildNotifierModule;
