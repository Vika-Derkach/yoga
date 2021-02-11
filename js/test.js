const { assert } = require("chai");

describe("timer", function() {
   it("возращает функция обєкт?", function() {
       assert.typeOf(getTimeRemaining(endtime), 'object')
   });

//    it('устанавливаєм таймер общего отсчота', function() {
//        assert.typeOf(setClock('timer', deadline), 'string');
//    });

   describe('общая сума', function() {
       it("изначально равен 0", function(){
           assert.equal(total.textContent,0);
       });
   });
 
});