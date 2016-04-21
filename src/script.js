import { parseBalance, formatMoney } from './helper_functions'

const balances = document.getElementsByClassName('balanceValue')

const checkingElement = balances[0]
checkingElement.style.setProperty('text-decoration', 'line-through');
const creditElement   = balances[1]

const checkingBalance = parseBalance(checkingElement.innerHTML);
const creditBalance = parseBalance(creditElement.innerHTML);
var newCheckingBalance =  checkingBalance - creditBalance;

var newCheckingElement = document.createElement('span')
newCheckingElement.appendChild(document.createTextNode('$' + formatMoney(newCheckingBalance, 2)));
newCheckingElement.style.setProperty('padding-right', '5px')

var checkingParent = checkingElement.parentNode;
checkingParent.insertBefore(newCheckingElement, checkingElement)
