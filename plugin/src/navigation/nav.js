function hamburgerClick() {
	document.getElementById('main-nav').classList.toggle('expanded')
}

window.onload = function() {
		document.getElementById('main-nav-hamburger').addEventListener("click", hamburgerClick)
}
