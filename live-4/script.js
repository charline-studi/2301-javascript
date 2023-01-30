// Boucle for
// Pour toutes mes ... (valeur)
// Pour chacun de ... (enfants)
// Pour tous mes nombres pairs / impairs
// Pour les 10 premiers utilisateurs ...

// Array = tableau
const colorsString = ["blue", "red", "green"];

// Programme Soldes :
// Calcule automatiquement une réduction de 50%
// Sur les prix de mon magasin
const prices = [10, 13, 14, 15];
console.log("Nombre elements dans mon tableau", prices.length);
console.log("index 4", prices[4]);

const pricesPromo = [];

// commence à 0 ; tu t'arrêtes à 3; +1
for (let index = 0; index < prices.length; index++) {
  const initialPrice = prices[index];
  const priceWithPromo = initialPrice / 2;
  pricesPromo.push(priceWithPromo);
}

console.log("Mes nouveaux prix sont", pricesPromo);

// Tableau d'object
const shop = [
  {
    name: "Sac A",
    price: 10,
  },
  {
    name: "Sac B",
    price: 13,
  },
  {
    name: "Sac C",
    price: 15,
  },
];

for (let index = 0; index < shop.length; index++) {
  const priceWithPromo = shop[index].price / 2;
  shop[index].promo = priceWithPromo;
}
console.table(shop);
