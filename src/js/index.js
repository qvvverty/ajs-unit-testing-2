// const heroes = [
//   { name: 'мечник', health: 10 },
//   { name: 'маг', health: 100 },
//   { name: 'лучник', health: 80 },
// ];

export default function sortHeroesByHealth(heroes) {
  function sortByHealth(a, b) {
    if (a.health > b.health) return 1;
    if (a.health === b.health) return 0;
    return -1;
  }
  return heroes.sort(sortByHealth).reverse();
}
