var bodaey = document.body.innerHTML;
var temp_content = bodaey;

//Fix all incorrectly-encoded quotation marks.
temp_content = temp_content.replace(/â€™/g, "'");
temp_content = temp_content.replace(/â€œ/g, "“");
temp_content = temp_content.replace(/â€/g, "”");

//Next, fix some other things.
temp_content = temp_content.replace(/fuck/g, "fart");
temp_content = temp_content.replace(/Fuck/g, "Fart");
temp_content = temp_content.replace(/FUCK/g, "EPIC FART");
temp_content = temp_content.replace(/shit/g, "poop");
temp_content = temp_content.replace(/Shit/g, "Poop");
temp_content = temp_content.replace(/SHIT/g, "POOP EXPLOSION");
temp_content = temp_content.replace(/pissed/g, "pee sprayed at 'em then washed");
temp_content = temp_content.replace(/Pissed/g, "...Well, y'see, pee sprayed at 'em then they'd wash it");
temp_content = temp_content.replace(/PISSED/g, "EXPLODED IN PEE AND THEN WENT");
temp_content = temp_content.replace(/piss/g, "pee");
temp_content = temp_content.replace(/Piss/g, "Pee");
temp_content = temp_content.replace(/piss/g, "DA YELLOW STUFF");
temp_content = temp_content.replace(/Sanic/g, "Sonikku~!");
temp_content = temp_content.replace(/SANIC/g, "SONIC-A~!");

document.body.innerHTML = temp_content; 