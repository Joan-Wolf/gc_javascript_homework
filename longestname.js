let nameOne = "Frasier";
let nameTwo = "Niles";
let nameThree = "Roz";

if (nameOne.length > nameTwo.length && nameOne.length > nameThree.length) {
    console.log(`${nameOne} is the longest name.`);
} else if (nameTwo.length > nameOne.length && nameTwo.length > nameThree.length) {
    console.log(`${nameTwo} is the longest name.`);
} else if (nameThree.length > nameOne.length && nameThree.length > nameTwo.length) {
    console.log(`${nameThree} is the longest name.`);
} else if (nameOne.length === nameTwo.length && nameOne.length > nameThree.length) {
    console.log(`${nameOne} and ${nameTwo} tie for the longest name.`);
} else if (nameOne.length === nameThree.length && nameOne.length > nameTwo.length) {
    console.log(`${nameOne} and ${nameThree} tie for the longest name.`);
} else if (nameTwo.length === nameThree.length && nameTwo.length > nameOne.length) {
    console.log(`${nameTwo} and ${nameThree} tie for the longest name.`);
} else if (nameOne.length === nameTwo.length && nameOne.length === nameThree.length) {
    console.log(`All three names, ${nameOne}, ${nameTwo}, and ${nameThree}, are the same length.`);
}