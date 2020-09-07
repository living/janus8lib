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
            var date = new Date();
            date.setHours(0);
            date.setMinutes(0);
            date.setSeconds(0);
            date.setMilliseconds(0);

            var t1 = date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate();

            var val = root.Util.toDate(t1);
            (val?val.getTime():undefined).should.equal(date.getTime());

            var t2 = date.getDate() + '-' + (date.getMonth()+1) + '-' + date.getFullYear();

            var val = root.Util.toDate(t2);
            (val?val.getTime():undefined).should.equal(date.getTime());

            var t3 = date.getDate() + '-' + (date.getMonth()+1) + '-' + date.getFullYear() + " 00:00:00";

            var val = root.Util.toDate(t3);
            (val?val.getTime():undefined).should.equal(date.getTime());
            
            return done()
        });
    })
})()
  