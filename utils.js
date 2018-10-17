const _ =require('lodash');

exports.fixEncoding = (descriptionArray) => {
    return descriptionArray.join('_\n\n_').replace(/â€™/gi, "'");
}

exports.getQueryIndex = (key, map) => {
    const queryIndex = _.get(map, key.toLowerCase(), -1);
    if (queryIndex === -1) console.log(`Error: Can't find query "${key.toLowerCase()}" from mapping`);
    return queryIndex;
};

exports.errorFormatter = (error) => {
    return {
        "response_type": "ephemeral",
        attachments: [
            {
                "text": `_${error}_`,
                "color": "#88499c",
                "mrkdwn_in": "text"
            }
        ]
    }
};
/**
 * queryType: spell, skill, etc.
 * responseType: ephemeral (only user sees response), in_channel (posted to everyone)
 * errors: for error formatting
 */

exports.messageFormatter = (queryType, responseType) => {
    return {
        "response_type": `${responseType}`,
        queryType.attachments.map( items => items)
    }
}

exports.spellParser = (spell) => {
    return {
        "response_type": "ephemeral",
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