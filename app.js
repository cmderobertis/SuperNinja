class Ninja {
  constructor(name, health = 100, speed = 3, strength = 3) {
    this.name = name
    this.health = health
    this.speed = speed
    this.strength = strength
  }

  sayName() {
    console.log(this.name)
  }

  showStats() {
    console.log(
      `Name: ${this.name} Strength: ${this.strength} Speed: ${this.speed} Health: ${this.health}`
    )
  }

  drinkSake() {
    this.health += 10
  }
}

class Sensei extends Ninja {
  constructor(name, wisdom = 10) {
    super(name, 200, 10, 10)
    this.wisdom = wisdom
  }

  speakWisdom() {
    super.drinkSake()
    console.log("20 hours of coding saves 1 hour of planning...")
  }
}

ciso = new Sensei("Ciso")
ciso.showStats()
ciso.speakWisdom()
ciso.showStats()
