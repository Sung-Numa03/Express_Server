function getMassages(req, res) {
    res.send('<ul><li>Sir Isaac Newton</li></ul>');
}

function postMessage(req, res) {
    console.log('Updating', data);
}

module.exports = {
    getMassages,
    postMessage,
}