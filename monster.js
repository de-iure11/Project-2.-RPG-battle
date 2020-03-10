const readlineSync = require("readline-sync");

const monster = {
  maxHealth: 10,
  name: "Лютый",
  moves: [
    {
      name: "Удар когтистой лапой",
      physicalDmg: 3, // физический урон
      magicDmg: 0, // магический урон
      physicArmorPercents: 20, // физическая броня
      magicArmorPercents: 20, // магическая броня
      cooldown: 0 // ходов на восстановление
    },
    {
      name: "Огненное дыхание",
      physicalDmg: 0,
      magicDmg: 4,
      physicArmorPercents: 0,
      magicArmorPercents: 0,
      cooldown: 3
    },
    {
      name: "Удар хвостом",
      physicalDmg: 2,
      magicDmg: 0,
      physicArmorPercents: 50,
      magicArmorPercents: 0,
      cooldown: 2
    }
  ]
};

// метод выбора произвольного удара монтстра Лютого c учетом cooldown ходов
monster.hitMonster = function() {
  let numHit = 0;
  let hitAllowed = false;

  while (hitAllowed == false) {
    //this.listHitMonster();
    num = Math.floor(Math.random() * this.moves.length);
    if (this.moves[num].countCooldowd == 0) {
      numHit = num;
      console.log(
        `
        > Монтстр ${this.name} наносит удар - ${this.moves[numHit].name}
        `
      );
      this.moves.forEach((iter, i) => {
        if (iter.countCooldowd != 0) {
          iter.countCooldowd--;
        }
      });
      this.moves[numHit].countCooldowd = this.moves[numHit].cooldown;
      hitAllowed = true;
    }
  }
  return numHit;
};

// метод выводит перед ударом информацию по разрешенным ударам монтстра
// метод закомментирован и не вызывается в рабочей версии приложения
// примечание: в скобках указано оставшихся cooldown (если 0, то удар разрешен)
monster.listHitMonster = function() {
  console.log(
    `
	| Доступные удары монтстра:`
  );
  this.moves.forEach((iter, i) => {
    if (iter.countCooldowd == 0) {
      console.log(
        `	| ${i} | ${iter.name} - удар разрешен (${iter.countCooldowd})`
      );
    } else {
      console.log(
        `	| ${i} | ${iter.name} - удар запрещен (${iter.countCooldowd})`
      );
    }
  });
};

module.exports = monster;
