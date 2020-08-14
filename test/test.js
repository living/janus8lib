/* eslint-env mocha */
;(function() {
    const root = require('..');
    const should = require('should')
  
    // Tests
    // ------------------------------------------------------------
    describe('Util:', () => {
        it('transformValues', done => {
            root.Util.transformValues("sim/Teste", ["Sim","Não"]).should.equal("Sim");
            return done()
        })
    })
})()
  