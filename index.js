const { Description } = require('./lib/mongoose/custom.types');
const { configure } = require('./lib/mongoose/validation.messages');

const janus8lib = {
    customTypes: {
        mongoose: {
            Description: Description
        }
    }
}

module['exports'] = janus8lib;