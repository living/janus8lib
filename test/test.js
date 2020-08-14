/* eslint-env mocha */
;(function() {
    const root = require('..');
    const should = require('should')
  
    // Tests
    // ------------------------------------------------------------
    describe('Util:', () => {
        it('transformValues', done => {
            root.Util.transformValues("sim", ["Sim","Não"]).should.equal("Sim");
            return done()
        })
    })
})()
  