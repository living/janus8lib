const util = require("../util");
const { validate } = require("mongoose-validator-living");

module["exports"].Description = (type) => {
    type = type||{};
    type.type = String,
    type.set = ()=>{
        return (val) => {
            return (val||'').replace(/\s{1,}/g, ' ').trim();
        }
    }
    return type;
};

module["exports"].Enum = (type, values) => {
    type = type||{};
    type.type = String,
    type.set = eval('()=>{\r\n\
        return (val) => {\r\n\
            return util.transformValues(val, ' + JSON.stringify(values) + ');\r\n\
        }\r\n\
    }'),
    type.validate = eval('() => validate({validator: "isIn", arguments: '+JSON.stringify(values)+'})')
    return type;
};

module["exports"].YesOrNo = (type) => {
    return module["exports"].Enum(type, ['Sim', 'Não']);
};

module["exports"].ToDate = (type, values) => {
    type = type||{};
    type.type = Date,
    type.set = eval('()=>{\r\n\
        return (val) => {\r\n\
            return util.toDate(val);\r\n\
        }\r\n\
    }')
    return type;
};