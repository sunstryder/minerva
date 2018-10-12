const _ = require('lodash');
const { fixEncoding } = require('./utils')
const spellMapping = require('./constants')

// Input: spell name from this array
// Output: spell index from this array.
exports.getSpellIndex = (spellName) => {
    const lowerSpellName = spellName.toLowerCase();
    const spellIndex = _.get(spellMapping, lowerSpellName);
    return spellIndex ? spellIndex : -1;
};

//SpellParser formats the JSON response of a spell resource.

// TODO add error handling for mistyped spell names
exports.spellParser = (spell) => {
    // const description = spell.desc.join('_\n\n_')
    // const parsedSpellDescription = description.replace(/â€™/gi, "'");
    // console.log(fixEncoding(spell.desc))
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
