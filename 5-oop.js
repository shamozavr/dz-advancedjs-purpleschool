const Char = function(race, name, language) {
  this.race = race;
  this.name = name;
  this.language = language;
}

Char.prototype.speak = function() {
  String(this.race).toUpperCase() === 'ORC' ?
  console.log(`${this.name} (speaks ${this.language}): The name is ${this.name}, I challenge you mak'gora`) :
  console.log(`${this.name} (speaks ${this.language}): my name is ${this.name}, nice to meet you`)
}

const Orc = function(race, name, language, weapon) {
  Char.call(this, race, name, language);
  this.weapon = weapon;
}
Orc.prototype = Object.create(Char.prototype);
Orc.prototype.constructor = Orc;
Orc.prototype.attack = function() {
  console.log(`${this.name} hit with ${this.weapon}`)
}

const Elf = function(race, name, language, spell) {
  Char.call(this, race, name, language);
  this.spell = spell;
}
Elf.prototype = Object.create(Char.prototype);
Elf.prototype.constructor = Elf;
Elf.prototype.cast = function() {
  console.log(`${this.name} casts ${this.spell}`);
}

let orc1 = new Orc('Orc', 'Garrosh', 'Orcish', 'Axe');
orc1.speak();
orc1.attack();

let elf1 = new Elf('Elf', 'Invoker', 'Elven', 'Fireball');
elf1.speak();
elf1.cast();
