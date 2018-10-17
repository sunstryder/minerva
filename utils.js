const _ =require('lodash');

exports.fixEncoding = (descriptionArray) => {
    return descriptionArray.join('_\n\n_').replace(/â€™/gi, "'");
}

exports.getQueryIndex = (key, map) => {
    const queryIndex = _.get(map, key.toLowerCase(), -1);
    if (queryIndex === -1) console.log(`Error: Can't find query ${key.toLowerCase()} from mapping`);
    return queryIndex;
};

exports.errorFormatter = (error) => {
    return {
        "response_type": "ephemeral",
        attachments: [
            {
                "text": `${error}`
            }
        ]
    }
};