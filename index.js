const { Description } = require('./lib/mongoose/custom.types');
const { ProcessMessages } = require('./lib/mongoose/process.messages')

const janus8lib = {
    customTypes: {
        mongoose: {
            Description: Description,
        }
    },
    ProcessMessages: ProcessMessages
}

module['exports'] = janus8lib;