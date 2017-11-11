var bodaey = document.body.innerHTML;
var temp_content = bodaey;

//Fix all incorrectly-encoded quotation marks.
temp_content = temp_content.replace(/â€™/g, "'");
temp_content = temp_content.replace(/â€œ/g, "“");
temp_content = temp_content.replace(/â€/g, "”");

//Next, fix some other things.
temp_content = temp_content.replace(/fuck/g, "fart");
temp_content = temp_content.replace(/shit/g, "poop");
temp_content = temp_content.replace(/piss/g, "pee");
temp_content = temp_content.replace(/Sanic/g, "Sonikku~!");
temp_content = temp_content.replace(/SANIC/g, "SONIC-A~!");

document.body.innerHTML = temp_content; 