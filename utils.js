const _ =require('lodash');

exports.fixEncoding = (descriptionArray) => {
    return descriptionArray.join('_\n\n_').replace(/â€™/gi, "'");
}

exports.getQueryIndex = (key, map) => {
    const queryIndex = _.get(map, key.toLowerCase(), -1);
    if (queryIndex === -1) console.log(`Error: Can't find query "${key.toLowerCase()}" from mapping`);
    return queryIndex;
};

exports.errorFormatter = (query, error, tip) => {
    return {
        "response_type": "ephemeral",
        attachments: [
            {
                "title": `${query}\n\n`,
                "text": `${error}`,
                "fields": [
                    {
                        "title": "\n\nTips",
                        "value": `_${tip}_`,
                        "short": false
                    }
                ],
                "color": "#C14242",
                "mrkdwn_in": "text"
            }
        ]
    }
};
