const _ = require('lodash');
const { fixEncoding } = require('./utils')

//skillParser formats the JSON response of a skill resource.
exports.skillParser = (skill) => {
    return {
        "response_type": "in_channel",
        attachments: [
            {
                "title": `${skill.name}`,
                "text": `\n\n_${fixEncoding(skill.desc)}_\n`,
                "fields": [
                    {
                        "title": "\n\nAbility Score",
                        "value": `${skill.ability_score.name}`,
                        "short": true
                    },
                ],
                "mrkdwn_in": [
                    "text",
                    "title"
                ],
                "color": "#88499c"
            }
        ],
    }
};
