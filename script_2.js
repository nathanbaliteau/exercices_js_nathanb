let number = prompt("De quel nombre veux-tu calculer la factorielle ?");
let factorielle = 1;
for (let count = 1; count <= number; count ++) {
	factorielle *= count
};
console.log(`Le résultat est : ${factorielle}`);