Number.prototype.formatMoney = function(c, d, t){
  var n = this,
      c = isNaN(c = Math.abs(c)) ? 2 : c,
      d = d == undefined ? "." : d,
      t = t == undefined ? "," : t,
      s = n < 0 ? "-" : "",
      i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "",
      j = (j = i.length) > 3 ? j % 3 : 0;
  return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};

var parseBalance = function (element) {
  return parseFloat(element.innerHTML.slice(1).split(',').join(''))
}

var balances = document.getElementsByClassName('balanceValue')

var checkingElement = balances[0]
var creditElement   = balances[1]

checkingElement.style.setProperty('text-decoration', 'line-through');

newCheckingBalance = parseBalance(checkingElement) - parseBalance(creditElement)

var newCheckingElement = document.createElement('span')
newCheckingElement.appendChild(document.createTextNode('$' + newCheckingBalance.formatMoney(2)));
newCheckingElement.style.setProperty('padding-right', '5px')

var checkingParent = checkingElement.parentNode;
checkingParent.insertBefore(newCheckingElement, checkingElement)
