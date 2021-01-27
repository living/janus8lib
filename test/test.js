/* eslint-env mocha */
;(function() {
    const root = require('..');
    const should = require('should');
    const validator = require('validator');
    const moment = require('moment');
  
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
            var date = new Date('2020-09-08T00:00:00-03:00');

            var t1 = '2020-09-08';

            var val = root.Util.toDate(t1);
            (val?val.getTime():undefined).should.equal(date.getTime());

            var t2 = '8-9-2020';

            var val = root.Util.toDate(t2);
            (val?val.getTime():undefined).should.equal(date.getTime());

            var t3 = '8-9-2020 00:00:00';

            var val = root.Util.toDate(t3);
            (val?val.getTime():undefined).should.equal(date.getTime());

            var t3 = '8-9-2020 00:00';

            var val = root.Util.toDate(t3);
            (val?val.getTime():undefined).should.equal(date.getTime());

            var t4 = '2020-9-8 00:00';

            var val = root.Util.toDate(t4);
            (val?val.getTime():undefined).should.equal(date.getTime());

            var val = root.Util.toDate(new Date('2020-09-08 00:00'));
            (val?val.getTime():undefined).should.equal(date.getTime());
            
            return done()
        });
    })
})()
  