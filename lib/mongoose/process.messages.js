module["exports"].ProcessMessages = (schema, options) => {
    options = options || {};
  
    var processErrors = (errors, path = '') => {
      var result = {};
      path = path || '';
      if (errors["errors"]) {
          Object.entries(processErrors(errors["errors"], path)).forEach(x => result[x[0]] = x[1]);
      }
      else {
          Object.entries(errors).forEach(entry => {
              var prop = (path ? path + '.' : '') + entry[0];
              if (entry[1]['errors']) {
                  Object.entries(processErrors(entry[1]['errors'], prop)).forEach(x => result[x[0]] = x[1]);
              }
              else {
                  var properties = entry[1]['properties'];
                  result[prop] = properties.message.replace("(@TITLE>", schema.path(prop).options.title||prop);
              }
          });
      }
      return result;
    }
  
    var postHook = (error, _, next) => {
      next({type:'Validation failed', errors: processErrors(error)});
    };
  
    schema.post('save', postHook);
    schema.post('update', postHook);
    schema.post('findOneAndUpdate', postHook);
  }