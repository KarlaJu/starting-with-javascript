let string_song = "Love of my life you hurt me, you broken my heart now you leave me";

console.log('-----------String properties----------');
console.log(`The string: ${string_song}`);
console.log(`You can see how many characters has th string: ${string_song.length}`);
console.log(`You can cut the string form the beginning: ${string_song.substring(15)}`);
console.log(`You can cut where you want: ${string_song.substr(0, 15)}`);
console.log(`You can get the place of a character, in this exaple 'e': ${string_song.indexOf("e")}`);
console.log(`If you have more than one character, like 'o', you can search for it from the place you want: ${string_song.indexOf("o", 2)}`);