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
