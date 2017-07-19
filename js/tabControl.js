function changePanel(a, index) {
	var lis = document.getElementById('course').getElementsByTagName('li');
	for (var i = 0; i < lis.length; i++) {
		lis[i].className = '';
	}
	var divs = document.getElementById('course').getElementsByTagName('div');
	for (var j = 1; j < divs.length; j++) {
		divs[j].className = 'hide txt';
	}
	document.getElementById('div' + index).className = 'active txt';
	a.className = 'active';
}

function fChangePanel(a, index) {
	var lis = document.getElementById('floor2').getElementsByTagName('li');
	for (var i = 0; i < lis.length; i++) {
		lis[i].className = '';
	}
	var divs = document.getElementById('floor2').getElementsByTagName('div');
	for (var j = 1; j < divs.length; j++) {
		divs[j].className = 'hide f2-content';
	}
	document.getElementById('f2-div' + index).className = 'active f2-content';
	a.className = 'active';
}