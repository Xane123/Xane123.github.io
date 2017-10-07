function SetPageTitle()
{var element = document.getElementById('headerid');element.innerHTML = element.innerText || element.textContent;document.title = element.innerHTML;}