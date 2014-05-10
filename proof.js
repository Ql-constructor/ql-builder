


var Qb = require('./src/');

console.dir(Qb);

{
	var q = new Qb.elements.String('proof\';');

	console.log('proof:');
	console.log('SELECT '+ q +' AS "proof";');
}
