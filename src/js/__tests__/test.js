import sortHeroesByHealth from '../index';

test('Expect heroes to be sorted by health', () => {
  const heroes = [
    { name: 'лучник', health: 80 },
    { name: 'маг', health: 100 },
    { name: 'вор', health: 10 },
    { name: 'мечник', health: 30 },
  ];
  const heroesExpected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 30 },
    { name: 'вор', health: 10 },
  ];
  expect(sortHeroesByHealth(heroes)).toEqual(heroesExpected);
});
