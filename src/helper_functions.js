var formatMoney = function(number, c, d, t){
  var n = number,
      c = isNaN(c = Math.abs(c)) ? 2 : c,
      d = d == undefined ? "." : d,
      t = t == undefined ? "," : t,
      s = n < 0 ? "-" : "",
      i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "",
      j = (j = i.length) > 3 ? j % 3 : 0;
  return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};

var parseBalance = function (balanceString) {
  // will strip string and only return numbers, dot, or minus sign contained
  return parseFloat(balanceString.replace(/[^\d.-]/g, ''))
}

module.exports = {
  parseBalance: parseBalance,
  formatMoney: formatMoney
}