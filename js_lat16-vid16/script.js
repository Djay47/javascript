let i = 0;


btnup.onclick = () => {
	document.querySelector('h1').innerHTML = ++i;
	// console.log(++i);

};

btndown.onclick = () => {

	document.querySelector('h1').innerHTML = (i === 0) ? 0 : --i;
	// console.log(--i);
}