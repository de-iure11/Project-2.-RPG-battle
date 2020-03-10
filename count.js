const readlineSync = require("readline-sync");

// счетчик ударов (начальное начение)
function countCooldowd(arr) {
  arr.forEach(item => (item.countCooldowd = 0));
}

// счетчик здоровья монстра и мага
function countMaxHealth(monster, hitMonster, mage, hitMage) {
  monster.maxHealth =
    monster.maxHealth -
    mage.moves[hitMage].physicalDmg *
      (monster.moves[hitMonster].physicArmorPercents = 0
        ? 1
        : 1 - monster.moves[hitMonster].physicArmorPercents * 0.01) -
    mage.moves[hitMage].magicDmg *
      (monster.moves[hitMonster].magicArmorPercents = 0
        ? 1
        : 1 - monster.moves[hitMonster].magicArmorPercents * 0.01);
  monster.maxHealth = Number(monster.maxHealth.toFixed(1));

  mage.maxHealth =
    mage.maxHealth -
    monster.moves[hitMonster].physicalDmg *
      (mage.moves[hitMage].physicArmorPercents = 0
        ? 1
        : 1 - mage.moves[hitMage].physicArmorPercents * 0.01) -
    monster.moves[hitMonster].magicDmg *
      (mage.moves[hitMage].magicArmorPercents = 0
        ? 1
        : 1 - mage.moves[hitMage].magicArmorPercents * 0.01);
  mage.maxHealth = Number(mage.maxHealth.toFixed(1));

  if (mage.maxHealth > 0 && monster.maxHealth > 0) {
    console.log(`Здоровье монстра Лютого = ${monster.maxHealth}
Здоровье мага Евстафия = ${mage.maxHealth}
    `);
  } else if (mage.maxHealth <= 0 && monster.maxHealth <= 0) {
    console.log(`Здоровье монстра Лютого = 0
Здоровье мага Евстафия = 0
  `);
    console.log("> Ничья...¯\\_(ツ)_/¯\n");
  } else if (mage.maxHealth > 0 && monster.maxHealth <= 0) {
    console.log("> Победил маг Евстафий!\n");
  } else if (mage.maxHealth <= 0 && monster.maxHealth > 0) {
    console.log("> Победил монстр Лютый!\n");
  }
}

module.exports = { countCooldowd, countMaxHealth };
