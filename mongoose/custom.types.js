exports.Description = (type) => {
    type = type||{};
    type.type = String,
    type.set = (val) => {
        return (val||'').replace(/\s{1,}/g, ' ').trim();
    } 
}