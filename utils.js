exports.fixEncoding = (descriptionArray) => {
    const descriptionString = descriptionArray.join('_\n\n_')
    return descriptionString.replace(/â€™/gi, "'");
}