import chai, { should } from 'chai'
import { parseBalance, formatMoney } from '../src/helper_functions'

const assert = chai.assert;

describe('Parsing Balance: ', function () {
  console.log('asd');;
  it('Should not care about currency', function () {

    var usTestBalance = "$4,232.32"
    var euroTestBalance = "€4,232.32"
    assert.strictEqual(parseBalance(usTestBalance),
                       parseBalance(euroTestBalance),
                       "Not equal")
  });

  it('Should not care about whitespace', function () {

    var testBalance1 = "$     4,232.32"
    var testBalance2 = "  $  4,232.32"
    assert.strictEqual(parseBalance(testBalance1),
                       parseBalance(testBalance2),
                       "Not equal")
  });

});
