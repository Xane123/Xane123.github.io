//This makes the internet a bit less "standard adults tryin' to be cool" language-heavy.
var bodaey = document.body.innerHTML;
var temp_content = bodaey;
 
//Fix all incorrectly-encoded quotation marks.
temp_content = temp_content.replace(/â€™/g, "'");
temp_content = temp_content.replace(/â€œ/g, "“");
temp_content = temp_content.replace(/â€/g, "”");

//Next, fix bad language.
temp_content = temp_content.replace(/fag /g, "laggy online game player ");
temp_content = temp_content.replace(/ fag/g, " laggy onlnie game player");
temp_content = temp_content.replace(/ cock/g, " toilet plunger-");	//That one phrase...sucker.
temp_content = temp_content.replace(/ cunt/g, " Runt");
temp_content = temp_content.replace(/ fuck/g, " fart");
temp_content = temp_content.replace(/Fucking /g, "Y'know who needs to be shot from a cannon? The guy running to ");
temp_content = temp_content.replace(/Fuck /g, "Y'know who needs to be shot from a cannon? Well, frankly, ");
temp_content = temp_content.replace(/FUCK/g, "EPIC FART");
temp_content = temp_content.replace(/ shitty/g, " poop-filled");
temp_content = temp_content.replace(/Shitty/g, "but it's named Poop Will Fill");
temp_content = temp_content.replace(/SHITTY/g, "POOP-FILLED EXPLOSION");
temp_content = temp_content.replace(/shit/g, "poop");
temp_content = temp_content.replace(/Shit/g, "The Poop");
temp_content = temp_content.replace(/SHIT/g, "POOP EXPLOSION");
temp_content = temp_content.replace(/ pissed/g, " pee sprayed at 'em then washed");
temp_content = temp_content.replace(/ Pissed/g, " ...Well, y'see, pee sprayed at 'em then they'd wash it");
temp_content = temp_content.replace(/ PISSED/g, " OH, I EXPLODED INTO PEE AND THEN LEFT");
temp_content = temp_content.replace(/ piss/g, " pee");
temp_content = temp_content.replace(/Piss/g, "Pee");
temp_content = temp_content.replace(/PISS/g, "DA YELLOW STUFF");
temp_content = temp_content.replace(/Sanic/g, "Sonikku~!");
temp_content = temp_content.replace(/SANIC/g, "SONIC-A~!");

//Remove outdated, useless Kickstarter "invoking".
temp_content = temp_content.replace(/have not received my reward. Please refund./g, "I'm stupid!");
temp_content = temp_content.replace(/I invoke my rights under Kickstarter's Terms of Use:/g, "I fell for this scam, fully trusting the weirdo that made it!");
temp_content = temp_content.replace(/terms-of-use/g, " sucks! I hate it!");
temp_content = temp_content.replace(/"Project Creators are required to fulfill all rewards of their successful fundraising campaigns or refund any Backer whose reward they do not or cannot fulfill."/g, "If only I could have my money back, but I'm too stupid to know this website isn't responsible, the idiot that made this is!");
temp_content = temp_content.replace(/I demand a full refund for my pledge amount./g, "What a scam... People, don't fall for this.");

document.body.innerHTML = temp_content; 