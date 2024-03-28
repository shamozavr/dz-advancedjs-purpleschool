function throwDice (dice) {
  return Math.floor (Math.random() * dice + 1)
}

console.log(throwDice(20));