const axios = require('axios');
const logger = require('./logger');

const slackEmojis = {
    tada: ':tada:',
    rocket: ':rocket:',
    pointRight: ':point_right:',
};

class SlackNotifier {
  type = 'after'
  constructor({ webhookUrl, url, options }) {
      this.webhookUrl = webhookUrl;
      this.url = url;
      this.options = options;
  }

  /**
   * Fire off the slack webhook.
   *
   * @returns {Promise}
   * @param type
   */
  async notify(type = 'after') {
      this.type = type;
      try {
          return await axios.post(this.webhookUrl, this.buildPayload);
      } catch (e) {
          logger.error(`Webhook provided returned an error. [${ e.message }]`);
      }
  }

  get headerSection() {
      return {
          type: 'section',
          text: {
              type: 'mrkdwn',
              text: `*${ this.options.appName }*`,
          },
      };
  }

  /**
   * Return the JSON payload for the webhook.
   *
   * @returns {{blocks: [{text: {text: string, type: string}, type: string}, {type: string, fields}, {text: {text: string, type: string}, type: string}]}}
   */
  get buildPayload() {
      if (this.type === 'after') {
          return {
              channel: this.options.slackChannel,
              text: `${ this.options.appName } has been released...`,
              blocks: [this.headerSection, this.introSection, this.linkSection],
          };
      }
      return {
          channel: this.options.slackChannel,
          text: `${ this.options.appName } is being deployed...`,
          blocks: [
              this.headerSection,
              {
                  type: 'section',
                  text: {
                      type: 'mrkdwn',
                      text: `${ slackEmojis.tada } New version is being deploying...`,
                  },
              },
          ],
      };
  }

  /**
   * Return the intro section of the payload.
   *
   * @returns {{text: {text: string, type: string}, type: string}}
   */
  get introSection() {
      return {
          type: 'section',
          text: {
              type: 'mrkdwn',
              text: `${ slackEmojis.rocket } New deployment has been made.`,
          },
      };
  }

  /**
   * Return the link section of the payload.
   *
   * @returns {{text: {text: string, type: string}, type: string}}
   */
  get linkSection() {
      return {
          type: 'section',
          text: {
              type: 'mrkdwn',
              text: `${ slackEmojis.pointRight } You can access via: *<${ process.env.APP_URL }|Click to view>*`,
          },
      };
  }
}

module.exports = SlackNotifier;
