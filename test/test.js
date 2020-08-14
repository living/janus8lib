/* eslint-env mocha */
;(function() {
    const root = require('..');
    const should = require('should');
    const validator = require('validator');
  
    // Tests
    // ------------------------------------------------------------
    describe('Util:', () => {
        it('transformValues:', done => {
            root.Util.transformValues("nao", ["Sim","Não"]).should.equal("Não");
            root.Util.transformValues("não", ["Sim","Não"]).should.equal("Não");
            root.Util.transformValues("sim/Teste", ["Sim","Não"]).should.equal("Sim");
            return done()
        });
    })
})()
  