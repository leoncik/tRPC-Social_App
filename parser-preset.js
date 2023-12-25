module.exports = {
    parserOpts: {
        // Example: type(scope?): subject (#ticket)
        headerPattern: /^(\w*)(?:\((\w*)\))?: (.*)\s\(#(\d*)\)$/,
        headerCorrespondence: ['type', 'scope', 'subject', 'ticket'],
    },
};