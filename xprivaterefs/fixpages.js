//This makes the internet a bit less frustrating with language.
var bodaey = document.body.innerHTML;
var temp_content = bodaey;

//Fix all incorrectly-encoded quotation marks.
temp_content = temp_content.replace(/â€™/g, "'");
temp_content = temp_content.replace(/â€œ/g, "“");
temp_content = temp_content.replace(/â€/g, "”");

//Next, fix some other things.
temp_content = temp_content.replace(/ cunt/g, " Runt");
temp_content = temp_content.replace(/ fuck/g, " fart");
temp_content = temp_content.replace(/Fuck/g, "Y'know who needs to be shot from a cannon?");
temp_content = temp_content.replace(/FUCK/g, "EPIC FART");
temp_content = temp_content.replace(/ shitty/g, " poop-filled");
temp_content = temp_content.replace(/Shitty/g, "but it's named Poop Will Fill");
temp_content = temp_content.replace(/SHITTY/g, "POOP-FILLED EXPLOSION");
temp_content = temp_content.replace(/shit/g, "poop");
temp_content = temp_content.replace(/Shit/g, "The Poop");
temp_content = temp_content.replace(/SHIT/g, "POOP EXPLOSION");
temp_content = temp_content.replace(/ pissed/g, " pee sprayed at 'em then washed");
temp_content = temp_content.replace(/ Pissed/g, " ...Well, y'see, pee sprayed at 'em then they'd wash it");
temp_content = temp_content.replace(/ PISSED/g, " OH, I EXPLODED INTO PEE AND THEN LEFT,");
temp_content = temp_content.replace(/ piss/g, " pee");
temp_content = temp_content.replace(/Piss/g, "Pee");
temp_content = temp_content.replace(/PISS/g, "DA YELLOW STUFF");
temp_content = temp_content.replace(/Sanic/g, "Sonikku~!");
temp_content = temp_content.replace(/SANIC/g, "SONIC-A~!");

//For people on Kickstarter that can't realize they're quoting an outdated terms of service from six years ago.
temp_content = temp_content.replace(/invoke my rights/g, "copy and paste this outdated ToS (because I'm weird)");
temp_content = temp_content.replace(/Project Creators are required to fulfill all rewards of their successful fundraising campaigns or refund any Backer whose reward they do not or cannot fulfill./g, "Fart! Cancel the poop! Outdated ToS from 2012!");

document.body.innerHTML = temp_content; 