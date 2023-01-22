let hello = function() {
	return "hello world";
}

let myArr = [
	'kelabu',
	'putih',
	'hitam',
	hello(),
	tes = () => console.log('Function tes()'),
	function lorem() {
		return 'Lorem ipsum dolor sit amet, consectetur adipisicing elit';
	}
];

// console.log(myArr);
// console.log(myArr[0]);
// myArr[4]();
// console.log(myArr[5]());

for (let item in myArr)
{
	console.log(myArr[item]);
}

// for (let i of myArr)
// {
// 	console.log(i);
// }