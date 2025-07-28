// soundMap.js
// Maps Launchpad button note values to corresponding audio files
// I am using these: https://bit.ly/4kkKtHb (Google Sheet)
/*
red: 'bump'
org: ''
yel: 'crowd sounds'
gre: 'correct'
aqu: 'vocalizations'
blu: 'crickets?'
mag: 'incorrect'
whi: ''
*/

const soundMap = {
  21: new Audio("sounds/magenta/341033__vikuserro__oh-no.wav"), // oh no! by vikuserro -- https://freesound.org/s/341033/ -- License: Attribution 4.0
  22: new Audio("sounds/magenta/216090__richerlandtv__bad-beep-incorrect.mp3"), // 216090__richerlandtv__bad-beep-incorrect.mp3
  23: new Audio("sounds/magenta/52079__guitarguy1985__diminishedslide.wav"), // diminishedslide.wav by guitarguy1985 -- https://freesound.org/s/52079/ -- License: Creative Commons 0
  24: new Audio("sounds/magenta/587253__beetlemuse__dats-wrong.wav"), // Dat's Wrong! by Beetlemuse -- https://freesound.org/s/587253/ -- License: Attribution 4.0
  25: new Audio("sounds/magenta/49940__simonrue__felplacerad-atom-v1.wav"), // felplacerad atom v1.wav by simon.rue -- https://freesound.org/s/49940/ -- License: Creative Commons 0
  26: new Audio("sounds/magenta/351563__bertrof__game-sound-incorrect-with-delay.wav"), // Game Sound Incorrect With Delay by Bertrof -- https://freesound.org/s/351563/ -- License: Attribution 3.0
  27: new Audio("sounds/magenta/341732__sgtpepperarc360__wrong-answer.wav"), // Wrong answer. by SgtPepperArc360 -- https://freesound.org/s/341732/ -- License: Attribution NonCommercial 4.0
  28: new Audio("sounds/magenta/364335__mialena24__oh-no-robot-2.wav"), // “Oh no” robot 2.wav by mialena24 -- https://freesound.org/s/364335/ -- License: Creative Commons 0
  31: new Audio("sounds/blue/121511__damonmensch__cricket-sound.mp3"), // Cricket Sound.mp3 by damonmensch -- https://freesound.org/s/121511/ -- License: Attribution 3.0
  41: new Audio("sounds/aqua/209739__manuelgraf__minion_yahoo_3.wav"), // minion_yahoo_3.wav by ManuelGraf -- https://freesound.org/s/209739/ -- License: Attribution 4.0
  42: new Audio("sounds/aqua/482219__komanderkyle__snd_cheer.wav"), // snd_cheer.wav by komanderkyle -- https://freesound.org/s/482219/ -- License: Creative Commons 0
  43: new Audio("sounds/aqua/241132__xtrgamr__shortapplause_01.wav"), // shortapplause_01.wav by xtrgamr -- https://freesound.org/s/241132/ -- License: Attribution 4.0
  44: new Audio("sounds/aqua/333404__jayfrosting__cheer-2.wav"), // Cheer 2.wav by jayfrosting -- https://freesound.org/s/333404/ -- License: Creative Commons 0
  51: new Audio("sounds/green/109662__grunz__success.wav"), // success.wav by grunz -- https://freesound.org/s/109662/ -- License: Attribution 3.0
  52: new Audio("sounds/green/428156__higgs01__yay.wav"), // yay.wav by Higgs01 -- https://freesound.org/s/428156/ -- License: Creative Commons 0
  53: new Audio("sounds/green/397354__plasterbrain__tada-fanfare-f.flac"), // Tada Fanfare F by plasterbrain -- https://freesound.org/s/397354/ -- License: Creative Commons 0
  54: new Audio("sounds/green/221937__sonsdebarcelona__celebration.wav"), // Celebration by sonsdebarcelona -- https://freesound.org/s/221937/ -- License: Attribution 3.0
  55: new Audio("sounds/green/325805__wagna__collect.wav"), // collect.wav by Wagna -- https://freesound.org/s/325805/ -- License: Creative Commons 0
  56: new Audio("sounds/green/426233__robinhood76__07075-small-girl-shouting-yes-yes-yes.wav"), // 07075 small girl shouting yes yes yes.wav by Robinhood76 -- https://freesound.org/s/426233/ -- License: Attribution NonCommercial 4.0
  57: new Audio("sounds/green/426889__thisusernameis__beep3.wav"), // beep3.wav by thisusernameis -- https://freesound.org/s/426889/ -- License: Creative Commons 0
  58: new Audio("sounds/green/333418__jayfrosting__woo-1-just-guys.wav"), // Woo 1 just guys.wav by jayfrosting -- https://freesound.org/s/333418/ -- License: Creative Commons 0
  61: new Audio("sounds/yellow/applause_cheer.mp3"), // urla.aif by man -- https://freesound.org/s/16672/ -- License: Attribution 3.0
  81: new Audio("sounds/red/sound1.mp3"), //
  82: new Audio("sounds/red/sound2.mp3"), //
  83: new Audio("sounds/red/sound3.mp3"), //
  84: new Audio("sounds/red/138489__justinvoke__shield-hit-2.wav"), // Shield Hit 2 by JustInvoke -- https://freesound.org/s/138489/ -- License: Creative Commons 0
};
