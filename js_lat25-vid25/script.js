/*

setItem(key, value) - store key/value pair.
getItem(key) - get the value by key
removeItem(key) - remove the key with its value
clear() - delete everything
key(index) - get the key on a given position.
length - the number of stored items.

*/


localStorage.setItem('nama', 'Jay');
localStorage.setItem('umur', 17);
localStorage.setItem('pekerjaan', 'Programmer');

console.log(localStorage);
console.log(`Length: ${localStorage.length}`);

console.log(`${localStorage.key(0)} : ${localStorage.getItem('nama')}`);
console.log(`${localStorage.key(1)} : ${localStorage.getItem('umur')}`);
console.log(`${localStorage.key(2)} : ${localStorage.getItem('pekerjaan')}`);

// localStorage.removeItem('umur');

// localStorage.clear();
