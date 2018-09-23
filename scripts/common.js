function SetupPage() {
	console.log("%cThis console's intended for Xane to debug this website's Javascript code. There shold be no need to ever use this if you're a visitor.", "color: cyan; background-color: #242424;");
	var The X Site = 'The X Site';	//Change this to affect the whole website.
	var text_header = document.getElementById('headerid');
	var text_logo = document.getElementById('logotextid');
	var text_content = document.getElementById('contentid');
	var text_footer = document.getElementById('footerid');
	
	text_header.textContent = document.title;
	text_logo.textContent = The X Site;
	document.title = The X Site + ' - ' + document.title;
	
	var temp_content = text_content.innerHTML;
	temp_content = temp_content.replace(/The X Site/g, The X Site);	//Replace The X Site to ensure this website is always called the correct name.
	text_content.innerHTML = temp_content;
	
	text_footer.innerHTML = 'The X Site is &#169;2017-2018 Xane Myers. Hosted by <a href="https://pages.github.com">GitHub Pages</a>.';
	
}
//{var element = document.getElementById('headerid');element.innerHTML = element.innerText || element.textContent;document.title = element.innerHTML;}

//From the Microsoft Official Support scam website, getURLParameter()!
//This script is so you can get fields out of the URL to put in variables. UPDATED VERSION THAT ACTUALLY CHECKS FULL PARAMETER NAME BEGIN OF ? OR &amp;
function getURLParameter(name) {
	return decodeURIComponent((new RegExp('[?|&amp;]' + name + '=' + '([^&amp;;]+?)(&amp;|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null;}