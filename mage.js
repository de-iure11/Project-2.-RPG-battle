const readlineSync = require("readline-sync");

const mage = {
  maxHealth: 0,
  name: "Евстафий",
  moves: [
    {
      name: "Удар боевым кадилом",
      physicalDmg: 2,
      magicDmg: 0,
      physicArmorPercents: 0,
      magicArmorPercents: 50,
      cooldown: 0
    },
    {
      name: "Вертушка левой пяткой",
      physicalDmg: 4,
      magicDmg: 0,
      physicArmorPercents: 0,
      magicArmorPercents: 0,
      cooldown: 4
    },
    {
      name: "Каноничный фаербол",
      physicalDmg: 0,
      magicDmg: 5,
      physicArmorPercents: 0,
      magicArmorPercents: 0,
      cooldown: 3
    },
    {
      name: "Магический блок",
      physicalDmg: 0,
      magicDmg: 0,
      physicArmorPercents: 100,
      magicArmorPercents: 100,
      cooldown: 4
    }
  ]
};

// метод выводит перед ударом информацию по разрешенным ударам мага
// метод закомментирована и не вызывается в рабочей версии приложения
// примечание: в скобках указано оставшихся cooldown (если 0, то удар разрешен)
mage.hitMage = function() {
  console.log(`	| Маг Евстафий может выбрать ответный удар:`);

  // выводим список ударов
  this.moves.forEach((iter, i) => {
    if (iter.countCooldowd == 0) {
      console.log(
        `	| ${i + 1} | ${iter.name} - удар разрешен (${iter.countCooldowd})`
      );
    } else {
      console.log(
        `	| ${i + 1} | ${iter.name} - удар запрещен (${iter.countCooldowd})`
      );
    }
  });

  let numHit = 0;
  let hitAllowed = false;

  while (hitAllowed == false) {
    // запрос номара удара мага Евстафия
    let num =
      readlineSync.question(`
        > Укажите номер ответного удара = `) - 1;

    if (this.moves[num].countCooldowd == 0) {
      numHit = num;
      console.log(`
        > Маг Ефстафий ${this.name} наносит удар - ${this.moves[numHit].name}
      `);
      this.moves.forEach(iter => {
        if (iter.countCooldowd != 0) {
          iter.countCooldowd--;
        }
      });
      this.moves[numHit].countCooldowd = this.moves[numHit].cooldown;
      hitAllowed = true;
    } else {
      console.log(`
        Этот удар не может быть выбран в течении ${this.moves[num].countCooldowd} ходов.`);
    }
  }
  return numHit;
};

module.exports = mage;
