const _ =require('lodash');

exports.fixEncoding = (descriptionArray) => {
    return descriptionArray.join('_\n\n_').replace(/â€™/gi, "'");
}

exports.getQueryIndex = (key, map) => {
    const queryIndex = _.get(map, key.toLowerCase(), -1);
    if (queryIndex === -1) console.log(`Error: Can't find query "${key.toLowerCase()}" from mapping`);
    return queryIndex;
};

exports.errorFormatter = (query, error) => {
    return {
        "response_type": "ephemeral",
        attachments: [
            {
                "title": `*${query}*`,
                "text": `_${error}_`,
                "color": "#88499c",
                "mrkdwn_in": "text"
            }
        ]
    }
};
