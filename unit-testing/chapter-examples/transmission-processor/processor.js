function processor(transmission) {
    if (transmission.indexOf("::") < 0) {
        return -1;
    } else {
        let parts = transmission.split("::");
        return {id: Number(parts[0]), rawData: parts[1]};
    }
}

module.exports = processor;