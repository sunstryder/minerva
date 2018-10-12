const _ = require('lodash');
const { fixEncoding } = require('./utils')
const skillMapping = require('./constants')

// Input: skill name from this array
// Output: skill index from this array.
exports.getSkillIndex = (skillName) => {
    const lowerSpellName = skillName.toLowerCase();
    const skillIndex = _.get(skillMapping, lowerSpellName);
    return skillIndex ? skillIndex : -1;
};

//skillParser formats the JSON response of a skill resource.

// TODO add error handling for mistyped skill names
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
