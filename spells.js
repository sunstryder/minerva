const _ = require('lodash');
const { fixEncoding } = require('./utils')

//SpellParser formats the JSON response of a spell resource.
exports.spellParser = (spell) => {
    return {
        "response_type": "in_channel",
        attachments: [
            {
                "title": `${spell.name}`,
                "text": `\n\n _${fixEncoding(spell.desc)}_\n`,
                "fields": [
                    {
                        "title": "\n\nRange",
                        "value": `${spell.range}`,
                        "short": true
                    },
                    {
                        "title": "\n\nDuration",
                        "value": `${spell.duration}`,
                        "short": true
                    },
                    {
                        "title": "\n\nSchool",
                        "value": `${spell.school.name}`,
                        "short": true
                    },
                    {
                        "title": "\n\nLevel",
                        "value": `${spell.level}`,
                        "short": true
                    }
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
