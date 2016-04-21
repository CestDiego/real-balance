import chai, { should } from 'chai'
import { parseBalance, formatMoney } from './helper_functions'

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
});
