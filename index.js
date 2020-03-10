const monster = require("./monster");
const mage = require("./mage");
const { countCooldowd, countMaxHealth } = require("./count");
const readlineSync = require("readline-sync");
const welcome = `
---------- Проект 2. RPG баттл -----------------------------------------

Боевой маг Евстафий сражается с лютым монстром.
Перед началом игры укажите сложность игры (начальное здоровье Евстафия).
------------------------------------------------------------------------
`;

function run(monster, mage) {
  // приветствие
  console.log(welcome);
  // счетчик ударов
  countCooldowd(monster.moves);
  countCooldowd(mage.moves);
  // начальное здоровье мага (в приложении не реализована проверка введеного пользователем значения, за исключение учета cooldown ходов)
  mage.maxHealth = readlineSync.question("> Начальное здоровье Евстафия = ");
  // цикл игры
  while (mage.maxHealth > 0 && monster.maxHealth > 0) {
    // удар монстра
    hitMonster = monster.hitMonster();
    // удар мага
    hitMage = mage.hitMage();
    // счетчик здоровья монстра и мага
    countMaxHealth(monster, hitMonster, mage, hitMage);
  }
}

run(monster, mage);
