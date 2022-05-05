var flecheContact1 = document.getElementById("flecheContact1"); 
var flecheContactImg1 = document.getElementById("flecheContactImg1"); 
var contactText1 = document.getElementById("contactText1");
var flecheContact2 = document.getElementById("flecheContact2"); 
var flecheContactImg2 = document.getElementById("flecheContactImg2");
var contactText2 = document.getElementById("contactText2");
const SPLIT = document.getElementById("split");
const PRESENTATION = document.getElementById("presentation");
const HOME = document.getElementById("home");

function split() {
	PRESENTATION.style.display = 'none';
	SPLIT.style.display = 'inline-block';
	HOME.style.marginLeft = '200px';
}

function group() {

	PRESENTATION.style.display = 'inline-block';

	SPLIT.style.display = 'none';

	HOME.style.marginLeft = '290px';

}



PRESENTATION.onmouseover = split;
SPLIT.onmouseover = split;

PRESENTATION.onmouseout = group;
SPLIT.onmouseout = group;


function deployement1() {
	if (contactText1.style.display === 'none'){
			contactText1.style.display = 'block';
			flecheContactImg1.animate([
				{transform: 'rotate(180deg)'}
			], {
				duration: 200, 
				fill: 'forwards'
			});
	}
	else {
		contactText1.style.display = 'none';
		flecheContactImg1.animate([
			{transform: 'rotate(0deg)'}
		], {
			duration: 200, 
			fill: 'forwards'
		});
	}
}

function deployement2() {
	if (contactText2.style.display === 'none'){
			contactText2.style.display = 'block';

			flecheContactImg2.animate([
				{transform: 'rotate(180deg)'}
			], {
				duration: 200, 
				fill: 'forwards'
			});
	}

	else {
		contactText2.style.display = 'none';

		flecheContactImg2.animate([
				{transform: 'rotate(0deg)'}
			], {
				duration: 200, 
				fill: 'forwards'
			});
	}
}


flecheContact1.onclick = deployement1;
flecheContact2.onclick = deployement2;
