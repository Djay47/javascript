sessionStorage.setItem('nama', 'Jay');
sessionStorage.setItem('umur', 17);
sessionStorage.setItem('pekerjaan', 'Programmer');

console.log(sessionStorage);
console.log(`Length: ${sessionStorage.length}`);

console.log(`${sessionStorage.key(0)} : ${sessionStorage.getItem('nama')}`);
console.log(`${sessionStorage.key(1)} : ${sessionStorage.getItem('umur')}`);
console.log(`${sessionStorage.key(2)} : ${sessionStorage.getItem('pekerjaan')}`);

// sessionStorage.removeItem('umur');
// console.log(`${sessionStorage.key(1)} : ${sessionStorage.getItem('umur')}`);

// sessionStorage.clear();
// console.log(`${sessionStorage.key(0)} : ${sessionStorage.getItem('nama')}`);
// console.log(`${sessionStorage.key(1)} : ${sessionStorage.getItem('umur')}`);
// console.log(`${sessionStorage.key(2)} : ${sessionStorage.getItem('pekerjaan')}`);
