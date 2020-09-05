/* eslint-env mocha */
;(function() {
    const root = require('..');
    const should = require('should');
    const validator = require('validator');
  
    // Tests
    // ------------------------------------------------------------
    describe('Util:', () => {
        it('transformValues:', done => {
            validator.isIn(root.Util.transformValues("nao", ["Sim","Não"]), ["Sim","Não"]).should.equal(true);
            root.Util.transformValues("nao", ["Sim","Não"]).should.equal("Não");
            root.Util.transformValues("não", ["Sim","Não"]).should.equal("Não");
            root.Util.transformValues("sim/Teste", ["Sim","Não"]).should.equal("Sim");
            return done()
        });
        it('toDate:', done => {
            var date = new Date('2020-09-04T00:00:00-03:00');

            var val = root.Util.toDate('2020-09-04');
            (val?val.getTime():undefined).should.equal(date.getTime());

            var val = root.Util.toDate('04-09-2020');
            (val?val.getTime():undefined).should.equal(date.getTime());

            var val = root.Util.toDate('04-09-2020 00:00:00');
            (val?val.getTime():undefined).should.equal(date.getTime());
            
            return done()
        });
    })
})()
  