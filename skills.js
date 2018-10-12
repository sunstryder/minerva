const _ = require('lodash');

const skillMapping = {
    "acrobatics":1,
    "animal handling":2,
    "arcana":3,
    "athletics":4,
    "deception":5,
    "history":6,
    "insight":7,
    "intimidation":8,
    "investigation":9,
    "medicine":10,
    "nature":11,
    "perception":12,
    "performance":13,
    "persuasion":14,
    "religion":15,
    "sleight of hand":16,
    "stealth":17,
    "survival":18,
};


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
    const description = skill.desc.join('\n\n')
    const parsedSkillDescription = description.replace(/â€™/gi, "'");
    return {
        "response_type": "in_channel",
        attachments: [
            {
                "title": `${skill.name}`,
                "text": `\n\n ${parsedSkillDescription}\n`,
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
