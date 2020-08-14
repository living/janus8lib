const util = require("../util");

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
            return util.transformValues(val, ' + JSON.stringify(value) + ');\r\n\
        }\r\n\
    }')
    return type;
};

module["exports"].YesOrNo = (type) => {
    return module["exports"].Enum(type, ['Sim', 'Não']);
};