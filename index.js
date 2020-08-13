const { Description, YesOrNo, Enum } = require('./lib/mongoose/custom.types');
const { ProcessMessages } = require('./lib/mongoose/process.messages');
const util = require('./lib/util')

const janus8lib = {
    customTypes: {
        mongoose: {
            Description: Description,
            YesOrNo: YesOrNo,
            Enum: Enum
        }
    },
    ProcessMessages: ProcessMessages,
    Util: util
}

module['exports'] = janus8lib;