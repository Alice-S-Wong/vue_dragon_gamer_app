<template>
  <div class="iv-calculator">
    <h1>Pokemon IV Calculator</h1>
    <p>Current Stats</p>
    <p>Level: <input v-model="level"> Nature: <select v-model="nature">
      <option value="hardy">hardy</option>
      <option value="lonely">lonely</option>
      <option value="brave">brave</option>
      <option value="adamant">adamant</option>
      <option value="naughty">naughty</option>
      <option value="bold">bold</option>
      <option value="docile">docile</option>
      <option value="relaxed">relaxed</option>
      <option value="impish">impish</option>
      <option value="lax">lax</option>
      <option value="timid">timid</option>
      <option value="hasty">hasty</option>
      <option value="serious">serious</option>
      <option value="jolly">jolly</option>
      <option value="naive">naive</option>
      <option value="modest">modest</option>
      <option value="mild">mild</option>
      <option value="quiet">quiet</option>
      <option value="bashful">bashful</option>
      <option value="rash">rash</option>
      <option value="calm">calm</option>
      <option value="gentle">gentle</option>
      <option value="sassy">sassy</option>
      <option value="careful">careful</option>
      <option value="quirky">quirky</option>
    </select></p>
    <p>HP: <input v-model="hp"> Attack: <input v-model="attack"> Defense: <input v-model="defense"></p>
    <p>Special Attack: <input v-model="specialAttack"> Special Defense: <input v-model="specialDefense"> Speed: <input v-model="speed"></p>
    <p>Species Base Stats</p>
    <p>HP: <input v-model="baseHP"> Attack: <input v-model="baseAttack"> Defense: <input v-model="baseDefense"></p>
    <p>Special Attack: <input v-model="baseSpecialAttack"> Special Defense: <input v-model="baseSpecialDefense"> Speed: <input v-model="baseSpeed"></p>
    <p>Effort Values (EVs)</p>
    <p>HP: <input v-model="evHP"> Attack: <input v-model="evAttack"> Defense: <input v-model="evDefense"></p>
    <p>Special Attack: <input v-model="evSpecialAttack"> Special Defense: <input v-model="evSpecialDefense"> Speed: <input v-model="evSpeed"></p>
    <p>Individual Values (IVs)</p>
    <p>HP: <input v-model="ivHP"> Attack: <input v-model="ivAttack"> Defense: <input v-model="ivDefense"></p>
    <p>Special Attack: <input v-model="ivSpecialAttack"> Special Defense: <input v-model="ivSpecialDefense"> Speed: <input v-model="ivSpeed"></p>
    <p><button v-on:click="calculateIVs()">Calculate IVs</button></p>
    <p>Calculated Individual Values (IVs)</p>
    <p>HP: {{ivArrayHP}}</p>
    <p>Attack: {{ivArrayAttack}}</p>
    <p>Defense: {{ivArrayDefense}}</p>
    <p>Special Attack: {{ivArraySpecialAttack}}</p>
    <p>Special Defense: {{ivArraySpecialDefense}}</p>
    <p>Speed: {{ivArraySpeed}}</p>
    <p>Calculated Stats</p>
    <p>Level: <input v-model="calculatedLevel"></p>
    <p><button v-on:click="calculateStats()">Calculate Stats</button></p>
    <p>HP: {{calculatedHP}}</p>
    <p>Attack: {{calculatedAttack}}</p>
    <p>Defense: {{calculatedDefense}}</p>
    <p>Special Attack: {{calculatedSpecialAttack}}</p>
    <p>Special Defense: {{calculatedSpecialDefense}}</p>
    <p>Speed: {{calculatedSpeed}}</p>
  </div>
</template>

<style>
</style>

<script>
export default {
  data: function() {
    return {
      level: 15,
      nature: "hardy",
      hp: 40,
      attack: 24,
      defense: 32,
      specialAttack: 15,
      specialDefense: 15,
      speed: 9,
      baseHP: 50,
      baseAttack: 65,
      baseDefense: 90,
      baseSpecialAttack: 35,
      baseSpecialDefense: 35,
      baseSpeed: 15,
      evHP: 0,
      evAttack: 0,
      evDefense: 0,
      evSpecialAttack: 0,
      evSpecialDefense: 0,
      evSpeed: 0,
      ivHP: 0,
      ivAttack: 0,
      ivDefense: 0,
      ivSpecialAttack: 0,
      ivSpecialDefense: 0,
      ivSpeed: 0,
      calculatedLevel: 100,
      calculatedHP: 0,
      calculatedAttack: 0,
      calculatedDefense: 0,
      calculatedSpecialAttack: 0,
      calculatedSpecialDefense: 0,
      calculatedSpeed: 0,
      attackModifier: 1,
      defenseModifier: 1,
      specialAttackModifier: 1,
      specialDefenseModifier: 1,
      speedModifier: 1,
      ivArrayHP: [],
      ivArrayAttack: [],
      ivArrayDefense: [],
      ivArraySpecialAttack: [],
      ivArraySpecialDefense: [],
      ivArraySpeed: [],
    };
  },
  created: function() {},
  methods: {
    natureModifier: function() {
      if (this.nature === "lonely") {
        this.attackModifier = 1.1;
        this.defenseModifier = 0.9;
      } else if (this.nature === "brave") {
        this.attackModifier = 1.1;
        this.speedModifier = 0.9;
      } else if (this.nature === "adamant") {
        this.attackModifier = 1.1;
        this.specialAttackModifier = 0.9;
      } else if (this.nature === "naughty") {
        this.attackModifier = 1.1;
        this.specialDefenseModifier = 0.9;
      } else if (this.nature === "bold") {
        this.defenseModifier = 1.1;
        this.attackModifier = 0.9;
      } else if (this.nature === "relaxed") {
        this.defenseModifier = 1.1;
        this.speedModifier = 0.9;
      } else if (this.nature === "impish") {
        this.defenseModifier = 1.1;
        this.specialAttackModifier = 0.9;
      } else if (this.nature === "lax") {
        this.defenseModifier = 1.1;
        this.specialDefenseModifier = 0.9;
      } else if (this.nature === "timid") {
        this.speedModifier = 1.1;
        this.attackModifier = 0.9;
      } else if (this.nature === "hasty") {
        this.speedModifier = 1.1;
        this.defenseModifier = 0.9;
      } else if (this.nature === "jolly") {
        this.speedModifier = 1.1;
        this.specialAttackModifier = 0.9;
      } else if (this.nature === "naive") {
        this.speedModifier = 1.1;
        this.specialDefenseModifier = 0.9;
      } else if (this.nature === "modest") {
        this.specialAttackModifier = 1.1;
        this.attackModifier = 0.9;
      } else if (this.nature === "mild") {
        this.specialAttackModifier = 1.1;
        this.defenseModifier = 0.9;
      } else if (this.nature === "quiet") {
        this.specialAttackModifier = 1.1;
        this.speedModifier = 0.9;
      } else if (this.nature === "rash") {
        this.specialAttackModifier = 1.1;
        this.specialDefenseModifier = 0.9;
      } else if (this.nature === "calm") {
        this.specialDefenseModifier = 1.1;
        this.attackModifier = 0.9;
      } else if (this.nature === "gentle") {
        this.specialDefenseModifier = 1.1;
        this.defenseModifier = 0.9;
      } else if (this.nature === "sassy") {
        this.specialDefenseModifier = 1.1;
        this.speedModifier = 0.9;
      } else if (this.nature === "careful") {
        this.specialDefenseModifier = 1.1;
        this.specialAttackModifier = 0.9;
      } 
    },
    calculateIVs: function() {
      this.ivArrayHP = [];
      this.ivArrayAttack = [];
      this.ivArrayDefense = [];
      this.ivArraySpecialAttack = [];
      this.ivArraySpecialDefense = [];
      this.ivArraySpeed = [];
      this.natureModifier();
      var i = 0;
      var testHP = 0;
      var testAttack = 0;
      var testDefense = 0;
      var testSpecialAttack = 0;
      var testSpecialDefense = 0;
      var testSpeed = 0;
      for (i = 0; i < 32; i++) {
        testHP = (((2 * parseInt(this.baseHP) + i + (parseInt(this.evHP) / 4)) * parseInt(this.level)) / 100) + parseInt(this.level) + 10;
        testHP = Math.floor(testHP);
        if (parseInt(this.hp) === testHP) {
          this.ivArrayHP.push(i);
        }
      }
      for (i = 0; i < 32; i++) {
        testAttack = ((((2 * parseInt(this.baseAttack) + i + (parseInt(this.evAttack) / 4)) * parseInt(this.level)) / 100) + 5) * parseFloat(this.attackModifier).toFixed(1);
        testAttack = Math.floor(testAttack);
        if (parseInt(this.attack) === testAttack) {
          this.ivArrayAttack.push(i);
        }
      }
      for (i = 0; i < 32; i++) {
        testDefense = ((((2 * parseInt(this.baseDefense) + i + (parseInt(this.evDefense) / 4)) * parseInt(this.level)) / 100) + 5) * parseFloat(this.defenseModifier).toFixed(1);
        testDefense = Math.floor(testDefense);
        if (parseInt(this.defense) === testDefense) {
          this.ivArrayDefense.push(i);
        }
      }
      for (i = 0; i < 32; i++) {
        testSpecialAttack = ((((2 * parseInt(this.baseSpecialAttack) + i + (parseInt(this.evSpecialAttack) / 4)) * parseInt(this.level)) / 100) + 5) * parseFloat(this.specialAttackModifier).toFixed(1);
        testSpecialAttack = Math.floor(testSpecialAttack);
        if (parseInt(this.specialAttack) === testSpecialAttack) {
          this.ivArraySpecialAttack.push(i);
        }
      }
      for (i = 0; i < 32; i++) {
        testSpecialDefense = ((((2 * parseInt(this.baseSpecialDefense) + i + (parseInt(this.evSpecialDefense) / 4)) * parseInt(this.level)) / 100) + 5) * parseFloat(this.specialDefenseModifier).toFixed(1);
        testSpecialDefense = Math.floor(testSpecialDefense);
        if (parseInt(this.specialDefense) === testSpecialDefense) {
          this.ivArraySpecialDefense.push(i);
        }
      }
      for (i = 0; i < 32; i++) {
        testSpeed = ((((2 * parseInt(this.baseSpeed) + i + (parseInt(this.evSpeed) / 4)) * parseInt(this.level)) / 100) + 5) * parseFloat(this.speedModifier).toFixed(1);
        testSpeed = Math.floor(testSpeed);
        if (parseInt(this.speed) === testSpeed) {
          this.ivArraySpeed.push(i);
        }
      }
    },
    calculateStats: function() {
      this.natureModifier();
      this.calculatedHP = (((2 * parseInt(this.baseHP) + parseInt(this.ivHP) + (parseInt(this.evHP) / 4)) * parseInt(this.calculatedLevel)) / 100) + parseInt(this.calculatedLevel) + 10;
      this.calculatedHP = Math.floor(this.calculatedHP);
      this.calculatedAttack = ((((2 * parseInt(this.baseAttack) + parseInt(this.ivAttack) + (parseInt(this.evAttack) / 4)) * parseInt(this.calculatedLevel)) / 100) + 5) * parseFloat(this.attackModifier).toFixed(1);
      this.calculatedAttack = Math.floor(this.calculatedAttack);
      this.calculatedDefense = ((((2 * parseInt(this.baseDefense) + parseInt(this.ivDefense) + (parseInt(this.evDefense) / 4)) * parseInt(this.calculatedLevel)) / 100) + 5) * parseFloat(this.defenseModifier).toFixed(1);
      this.calculatedDefense = Math.floor(this.calculatedDefense);
      this.calculatedSpecialAttack = ((((2 * parseInt(this.baseSpecialAttack) + parseInt(this.ivSpecialAttack) + (parseInt(this.evSpecialAttack) / 4)) * parseInt(this.calculatedLevel)) / 100) + 5) * parseFloat(this.specialAttackModifier).toFixed(1);
      this.calculatedSpecialAttack = Math.floor(this.calculatedSpecialAttack);
      this.calculatedSpecialDefense = ((((2 * parseInt(this.baseSpecialDefense) + parseInt(this.ivSpecialDefense) + (parseInt(this.evSpecialDefense) / 4)) * parseInt(this.calculatedLevel)) / 100) + 5) * parseFloat(this.specialDefenseModifier).toFixed(1);
      this.calculatedSpecialDefense = Math.floor(this.calculatedSpecialDefense);
      this.calculatedSpeed = ((((2 * parseInt(this.baseSpeed) + parseInt(this.ivSpeed) + (parseInt(this.evSpeed) / 4)) * parseInt(this.calculatedLevel)) / 100) + 5) * parseFloat(this.speedModifier).toFixed(1);
      this.calculatedSpeed = Math.floor(this.calculatedSpeed);
    }
  }
};
</script>