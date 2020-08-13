const { Util } = require("../util");

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

module["exports"].YesOrNo = (type) => {
    type = type||{};
    type.type = String,
    type.set = ()=>{
        return (val) => {
            return Util.transformValues(val, ['Sim', 'Não']);
        }
    }
    return type;
};

module["exports"].Enum = (type, values) => {
    type = type||{};
    type.type = String,
    type.set = ()=>{
        return (val) => {
            return Util.transformValues(val, values);
        }
    }
    return type;
};