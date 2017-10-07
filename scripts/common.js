

function SetupPage()
{var sitename = 'Xane.com';var text_header = document.getElementById('headerid');var text_logo = document.getElementById('logotextid');text_header.textContent = document.title;text_logo.textContent = sitename;document.title = sitename + ' - ' + document.title;}
//{var element = document.getElementById('headerid');element.innerHTML = element.innerText || element.textContent;document.title = element.innerHTML;}

//From the Official Microsoft Support scam website, getURLParameter()!
//This script is so you can get fields out of the URL to put in variables. UPDATED VERSION THAT ACTUALLY CHECKS FULL PARAMETER NAME BEGIN OF ? OR &amp;
function getURLParameter(name) {
	return decodeURIComponent((new RegExp('[?|&amp;]' + name + '=' + '([^&amp;;]+?)(&amp;|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null;}