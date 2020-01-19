<template>
  <div class="fea-avatar-creator">
    <h1>Fire Emblem Awakening Avatar Creator</h1>
    <p>Asset: <select v-model="asset">
      <option value="hp">HP</option>
      <option value= "strength">strength</option>
      <option value= "magic">magic</option>
      <option value= "skill">skill</option>
      <option value= "speed">speed</option>
      <option value= "luck">luck</option>
      <option value= "defense">defense</option>
      <option value= "resistance">resistance</option>
    </select>
    Flaw: <select v-model="flaw">
      <option value="hp">HP</option>
      <option value= "strength">strength</option>
      <option value= "magic">magic</option>
      <option value= "skill">skill</option>
      <option value= "speed">speed</option>
      <option value= "luck">luck</option>
      <option value= "defense">defense</option>
      <option value= "resistance">resistance</option>
    </select></p>
    <p><button v-on:click="initializeAvatar()">See Stats</button></p>
    <p>Bases Stats</p>
    <p>HP: {{baseHP}} Strength: {{baseStrength}} Magic: {{baseMagic}} Skill: {{baseSkill}} Speed: {{baseSpeed}} Luck: {{baseLuck}} Defense: {{baseDefense}} Resistance: {{baseResistance}}</p>
    <p>Growth Rates</p>
    <p>HP: {{growthHP}} Strength: {{growthStrength}} Magic: {{growthMagic}} Skill: {{growthSkill}} Speed: {{growthSpeed}} Luck: {{growthLuck}} Defense: {{growthDefense}} Resistance: {{growthResistance}}</p>
    <p>Stat Cap Modifiers</p>
    <p>HP: {{capHP}} Strength: {{capStrength}} Magic: {{capMagic}} Skill: {{capSkill}} Speed: {{capSpeed}} Luck: {{capLuck}} Defense: {{capDefense}} Resistance: {{capResistance}}</p>
  </div>
</template>

<style>
</style>

<script>
export default {
  data: function() {
    return {
      asset: "hp",
      flaw: "luck",
      baseHP: 19,
      baseStrength: 6,
      baseMagic: 5,
      baseSkill: 5,
      baseSpeed: 6,
      baseLuck: 4,
      baseDefense: 6,
      baseResistance: 4,
      growthHP: 80,
      growthStrength: 55,
      growthMagic: 50,
      growthSkill: 50,
      growthSpeed: 50,
      growthLuck: 55,
      growthDefense: 40,
      growthResistance: 30,
      capHP: 0,
      capStrength: 0,
      capMagic: 0,
      capSkill: 0,
      capSpeed: 0,
      capLuck: 0,
      capDefense: 0,
      capResistance: 0,
    };
  },
  created: function() {},
  methods: {
    initializeAvatar: function() {
      this.baseHP = 19;
      this.baseStrength = 6;
      this.baseMagic = 5;
      this.baseSkill = 5;
      this.baseSpeed = 6;
      this.baseLuck = 4;
      this.baseDefense = 6;
      this.baseResistance = 4;
      this.growthHP = 80;
      this.growthStrength = 55;
      this.growthMagic = 50;
      this.growthSkill = 50;
      this.growthSpeed = 50;
      this.growthLuck = 55;
      this.growthDefense = 40;
      this.growthResistance = 30;
      this.capHP = 0;
      this.capStrength = 0;
      this.capMagic = 0;
      this.capSkill = 0;
      this.capSpeed = 0;
      this.capLuck = 0;
      this.capDefense = 0;
      this.capResistance = 0;
      if (this.asset === "hp") {
        this.baseHP += 5;
        this.growthHP += 30;
        this.growthDefense += 5;
        this.growthResistance += 5;
        this.capStrength += 1;
        this.capMagic += 1;
        this.capLuck += 2;
        this.capDefense += 2;
        this.capResistance += 2;
      } else if (this.asset === "strength") {
        this.baseStrength += 2;
        this.growthStrength += 15;
        this.growthSkill += 5;
        this.growthDefense += 5;
        this.capStrength += 4;
        this.capSkill += 2;
        this.capDefense += 2;
      } else if (this.asset === "magic") {
        this.baseMagic += 2;
        this.growthMagic += 15;
        this.growthSpeed += 5;
        this.growthResistance += 5;
        this.capMagic += 4;
        this.capSpeed += 2;
        this.capResistance += 2;
      } else if (this.asset === "skill") {
        this.baseSkill += 2;
        this.growthSkill += 15;
        this.growthStrength += 5;
        this.growthDefense += 5;
        this.capSkill += 4;
        this.capStrength += 2;
        this.capDefense += 2;
      } else if (this.asset === "speed") {
        this.baseSpeed += 2;
        this.growthSpeed += 15;
        this.growthSkill += 5;
        this.growthLuck += 5;
        this.capSpeed += 4;
        this.capSkill += 2;
        this.capLuck += 2;
      } else if (this.asset === "luck") {
        this.baseLuck += 4;
        this.growthLuck += 15;
        this.growthStrength += 5;
        this.growthMagic += 5;
        this.capLuck += 4;
        this.capStrength += 2;
        this.capMagic += 2;
      } else if (this.asset === "defense") {
        this.baseDefense += 2;
        this.growthDefense += 15;
        this.growthLuck += 5;
        this.growthResistance += 5;
        this.capDefense += 4;
        this.capLuck += 2;
        this.capResistance += 2;
      } else if (this.asset === "resistance") {
        this.baseResistance += 2;
        this.growthResistance += 15;
        this.growthMagic += 5;
        this.growthSpeed += 5;
        this.capResistance += 4;
        this.capMagic += 2;
        this.capSpeed += 2;
      } 
      if (this.flaw === "hp") {
        this.baseHP -= 3;
        this.growthHP -= 20;
        this.growthDefense -= 5;
        this.growthResistance -= 5;
        this.capStrength -= 1;
        this.capMagic -= 1;
        this.capLuck -= 1;
        this.capDefense -= 1;
        this.capResistance -= 1;
      } else if (this.flaw === "strength") {
        this.baseStrength -= 1;
        this.growthStrength -= 10;
        this.growthSkill -= 5;
        this.growthDefense -= 5;
        this.capStrength -= 3;
        this.capSkill -= 1;
        this.capDefense -= 1;
      } else if (this.flaw === "magic") {
        this.baseMagic -= 1;
        this.growthMagic -= 10;
        this.growthSpeed -= 5;
        this.growthResistance -= 5;
        this.capMagic -= 3;
        this.capSpeed -= 1;
        this.capResistance -= 1;
      } else if (this.flaw === "skill") {
        this.baseSkill -= 1;
        this.growthSkill -= 10;
        this.growthStrength -= 5;
        this.growthDefense -= 5;
        this.capSkill -= 3;
        this.capStrength -= 1;
        this.capDefense -= 1;
      } else if (this.flaw === "speed") {
        this.baseSpeed -= 1;
        this.growthSpeed -= 10;
        this.growthSkill -= 5;
        this.growthLuck -= 5;
        this.capSpeed -= 3;
        this.capSkill -= 1;
        this.capLuck -= 1;
      } else if (this.flaw === "luck") {
        this.baseLuck -= 2;
        this.growthLuck -= 10;
        this.growthStrength -= 5;
        this.growthMagic -= 5;
        this.capLuck -= 3;
        this.capStrength -= 1;
        this.capMagic -= 1;
      } else if (this.flaw === "defense") {
        this.baseDefense -= 1;
        this.growthDefense -= 10;
        this.growthLuck -= 5;
        this.growthResistance -= 5;
        this.capDefense -= 3;
        this.capLuck -= 1;
        this.capResistance -= 1;
      } else if (this.flaw === "resistance") {
        this.baseResistance -= 1;
        this.growthResistance -= 10;
        this.growthMagic -= 5;
        this.growthSpeed -= 5;
        this.capResistance -= 3;
        this.capMagic -= 1;
        this.capSpeed -= 1;
      } 
    }
  }
};
</script>