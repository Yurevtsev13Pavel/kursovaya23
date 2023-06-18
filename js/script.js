var mrg = 0;

document.querySelector('.arrow-left').onclick = function() {
		if (mrg < 0) {
			mrg+= 380;
		}
	setMrg(mrg);
}

document.querySelector('.arrow-right').onclick = function() {
	if (mrg > -760) {
		mrg-= 380;
	}
	setMrg(mrg);
}

function setMrg($mrg){
	document.querySelector('.content').style.marginLeft = mrg + 'px';
	console.log(mrg);
}
