const flecheDeployImg = document.getElementById("flecheDeployImg"); 
const flecheDeploy = document.getElementById("flecheDeploy"); 
const toDeploy = document.getElementById("section2");

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


function deployement() {
	if (toDeploy.style.display === 'block'){

		toDeploy.style.display = 'inline-block';

		toDeploy.animate([
		{opacity: '.85'}
		], {
			duration: 500, 
			fill: 'forwards'
		});

		flecheDeployImg.animate([
		{transform: 'rotate(180deg)'}
		], {
			duration: 500, 
			fill: 'forwards'
		});
	}
	else {
		toDeploy.animate([
		{opacity: '0'}
		], {
			duration: 500, 
			fill: 'forwards'
		});

		flecheDeployImg.animate([
		{transform: 'rotate(0deg)'}
		], {
			duration: 500, 
			fill: 'forwards'
		});
		toDeploy.style.display = 'block';
	}
}


flecheDeploy.onclick = deployement;


