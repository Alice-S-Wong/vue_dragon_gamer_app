<template>
  <div class="fe_stat_calculator">
    <h1>Fire Emblem Stat Calculator</h1>
    <p>Base Stats</p>
    <p>Level: <input v-model="baseLevel"> Promoted? <select v-model="promoted">
      <option value="false">false</option>
      <option value= "true">true</option>
    </select></p>
    <p>HP: <input v-model="baseHP"> Strength: <input v-model="baseStrength"> Magic: <input v-model="baseMagic"> Skill: <input v-model="baseSkill"></p>
    <p>Speed: <input v-model="baseSpeed"> Luck: <input v-model="baseLuck"> Defense: <input v-model="baseDefense"> Resistance: <input v-model="baseResistance"></p>
    <p>Growth Rates</p>
    <p>HP: <input v-model="growthHP"> Strength: <input v-model="growthStrength"> Magic: <input v-model="growthMagic"> Skill: <input v-model="growthSkill"></p>
    <p>Speed: <input v-model="growthSpeed"> Luck: <input v-model="growthLuck"> Defense: <input v-model="growthDefense"> Resistance: <input v-model="growthResistance"></p>
    <p>Promotion Gains</p>
    <p>HP: <input v-model="promoHP"> Strength: <input v-model="promoStrength"> Magic: <input v-model="promoMagic"> Skill: <input v-model="promoSkill"></p>
    <p>Speed: <input v-model="promoSpeed"> Luck: <input v-model="promoLuck"> Defense: <input v-model="promoDefense"> Resistance: <input v-model="promoResistance"></p>
    <p>Base Class Caps</p>
    <p>HP: <input v-model="baseCapHP"> Strength: <input v-model="baseCapStrength"> Magic: <input v-model="baseCapMagic"> Skill: <input v-model="baseCapSkill"></p>
    <p>Speed: <input v-model="baseCapSpeed"> Luck: <input v-model="baseCapLuck"> Defense: <input v-model="baseCapDefense"> Resistance: <input v-model="baseCapResistance"></p>
    <p>Promoted Class Caps</p>
    <p>HP: <input v-model="promoCapHP"> Strength: <input v-model="promoCapStrength"> Magic: <input v-model="promoCapMagic"> Skill: <input v-model="promoCapSkill"></p>
    <p>Speed: <input v-model="promoCapSpeed"> Luck: <input v-model="promoCapLuck"> Defense: <input v-model="promoCapDefense"> Resistance: <input v-model="promoCapResistance"></p>
    <button v-on:click="calculateStats()">Calculate Stats</button>
    <br>
    <table>
      <tbody v-for="stats in calculatedStats">
        <tr>
          <td>{{stats.level}}</td>
          <td>{{stats.hp}}</td>
          <td>{{stats.strength}}</td>
          <td>{{stats.magic}}</td>
          <td>{{stats.skill}}</td>
          <td>{{stats.speed}}</td>
          <td>{{stats.luck}}</td>
          <td>{{stats.defense}}</td>
          <td>{{stats.resistance}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
</style>

<script>
export default {
  data: function() {
    return {
      promoted: "false",
      baseLevel: 1,
      baseHP: 0,
      baseStrength: 0,
      baseMagic: 0,
      baseSkill: 0,
      baseSpeed: 0,
      baseLuck: 0,
      baseDefense: 0,
      baseResistance: 0,
      growthHP: 0,
      growthStrength: 0,
      growthMagic: 0,
      growthSkill: 0,
      growthSpeed: 0,
      growthLuck: 0,
      growthDefense: 0,
      growthResistance: 0,
      promoHP: 0,
      promoStrength: 0,
      promoMagic: 0,
      promoSkill: 0,
      promoSpeed: 0,
      promoLuck: 0,
      promoDefense: 0,
      promoResistance: 0,
      baseCapHP: 60,
      baseCapStrength: 25,
      baseCapMagic: 25,
      baseCapSkill: 25,
      baseCapSpeed: 25,
      baseCapLuck: 30,
      baseCapDefense: 25,
      baseCapResistance: 25,
      promoCapHP: 80,
      promoCapStrength: 40,
      promoCapMagic: 40,
      promoCapSkill: 40,
      promoCapSpeed: 40,
      promoCapLuck: 45,
      promoCapDefense: 40,
      promoCapResistance: 40,
      calculatedStats: [
        {
          level: "Level",
          hp: "HP", 
          strength: "Strength", 
          magic: "Magic",
          skill: "Skill",
          speed: "Speed",
          luck: "Luck",
          defense: "Defense",
          resistance: "Resistance"
        }
      ],
      statsHash: {}
    };
  },
  created: function() {},
  methods: {
    calculateStats: function() {
      this.calculatedStats = [
        {
          level: "Level",
          hp: "HP", 
          strength: "Strength", 
          magic: "Magic",
          skill: "Skill",
          speed: "Speed",
          luck: "Luck",
          defense: "Defense",
          resistance: "Resistance"
        }
      ];
      if (this.promoted === "false") {
        var level = parseInt(this.baseLevel);
        var loopBaseLevel = level;
        var i;
        var currentHP = parseInt(this.baseHP);
        var currentStrength = parseInt(this.baseStrength);
        var currentMagic = parseInt(this.baseMagic);
        var currentSkill = parseInt(this.baseSkill);
        var currentSpeed = parseInt(this.baseSpeed);
        var currentLuck = parseInt(this.baseLuck);
        var currentDefense = parseInt(this.baseDefense);
        var currentResistance = parseInt(this.baseResistance);
        this.statsHash.level = level;
        this.statsHash.hp = currentHP.toFixed(2);
        this.statsHash.strength = currentStrength.toFixed(2);
        this.statsHash.magic = currentMagic.toFixed(2);
        this.statsHash.skill = currentSkill.toFixed(2);
        this.statsHash.speed = currentSpeed.toFixed(2);
        this.statsHash.luck = currentLuck.toFixed(2);
        this.statsHash.defense = currentDefense.toFixed(2);
        this.statsHash.resistance = currentResistance.toFixed(2);
        this.calculatedStats.push(this.statsHash);
        this.statsHash = {};
        var trueHP = parseInt(this.growthHP) / 100;
        var trueStrength = parseInt(this.growthStrength) / 100;
        var trueMagic = parseInt(this.growthMagic) / 100;
        var trueSkill = parseInt(this.growthSkill) / 100;
        var trueSpeed = parseInt(this.growthSpeed) / 100;
        var trueLuck = parseInt(this.growthLuck) / 100;
        var trueDefense = parseInt(this.growthDefense) / 100;
        var trueResistance = parseInt(this.growthResistance) / 100;
        for (i = 0; i < (20 - loopBaseLevel); i++) {
          level++;
          if (currentHP < this.baseCapHP) {
            currentHP += trueHP;
          } else {
            currentHP = parseInt(this.baseCapHP);
          }
          if (currentStrength < this.baseCapStrength) {
            currentStrength += trueStrength;
          } else {
            currentStrength = parseInt(this.baseCapStrength);
          }
          if (currentMagic < this.baseCapMagic) {
            currentMagic += trueMagic;
          } else {
            currentMagic = parseInt(this.baseCapMagic);
          }
          if (currentSkill < this.baseCapSkill) {
            currentSkill += trueSkill;
          } else {
            currentSkill = parseInt(this.baseCapSkill);
          }
          if (currentSpeed < this.baseCapSpeed) {
            currentSpeed += trueSpeed;
          } else {
            currentSpeed = parseInt(this.baseCapSpeed);
          }
          if (currentLuck < this.baseCapLuck) {
            currentLuck += trueLuck;
          } else {
            currentLuck = parseInt(this.baseCapLuck);
          }
          if (currentDefense < this.baseCapDefense) {
            currentDefense += trueDefense;
          } else {
            currentDefense = parseInt(this.baseCapDefense);
          }
          if (currentResistance < this.baseCapResistance) {
            currentResistance += trueResistance;
          } else {
            currentResistance = parseInt(this.baseCapResistance);
          }
          this.statsHash.level = level;
          this.statsHash.hp = currentHP.toFixed(2);
          this.statsHash.strength = currentStrength.toFixed(2);
          this.statsHash.magic = currentMagic.toFixed(2);
          this.statsHash.skill = currentSkill.toFixed(2);
          this.statsHash.speed = currentSpeed.toFixed(2);
          this.statsHash.luck = currentLuck.toFixed(2);
          this.statsHash.defense = currentDefense.toFixed(2);
          this.statsHash.resistance = currentResistance.toFixed(2);
          this.calculatedStats.push(this.statsHash);
          this.statsHash = {};
        }
        this.statsHash = {
          level: "Level",
          hp: "HP", 
          strength: "Strength", 
          magic: "Magic",
          skill: "Skill",
          speed: "Speed",
          luck: "Luck",
          defense: "Defense",
          resistance: "Resistance"
        };
        this.calculatedStats.push(this.statsHash);
        this.statsHash = {};
        level = 1;
        currentHP += parseInt(this.promoHP);
        currentStrength += parseInt(this.promoStrength);
        currentMagic += parseInt(this.promoMagic);
        currentSkill += parseInt(this.promoSkill);
        currentSpeed += parseInt(this.promoSpeed);
        currentLuck += parseInt(this.promoLuck);
        currentDefense += parseInt(this.promoDefense);
        currentResistance += parseInt(this.promoResistance);
        this.statsHash.level = level;
        this.statsHash.hp = currentHP.toFixed(2);
        this.statsHash.strength = currentStrength.toFixed(2);
        this.statsHash.magic = currentMagic.toFixed(2);
        this.statsHash.skill = currentSkill.toFixed(2);
        this.statsHash.speed = currentSpeed.toFixed(2);
        this.statsHash.luck = currentLuck.toFixed(2);
        this.statsHash.defense = currentDefense.toFixed(2);
        this.statsHash.resistance = currentResistance.toFixed(2);
        this.calculatedStats.push(this.statsHash);
        this.statsHash = {};
        for (i = 0; i < 19; i++) {
          level++;
          if (currentHP < this.promoCapHP) {
            currentHP += trueHP;
          } else {
            currentHP = parseInt(this.promoCapHP);
          }
          if (currentStrength < this.promoCapStrength) {
            currentStrength += trueStrength;
          } else {
            currentStrength = parseInt(this.promoCapStrength);
          }
          if (currentMagic < this.promoCapMagic) {
            currentMagic += trueMagic;
          } else {
            currentMagic = parseInt(this.promoCapMagic);
          }
          if (currentSkill < this.promoCapSkill) {
            currentSkill += trueSkill;
          } else {
            currentSkill = parseInt(this.promoCapSkill);
          }
          if (currentSpeed < this.promoCapSpeed) {
            currentSpeed += trueSpeed;
          } else {
            currentSpeed = parseInt(this.promoCapSpeed);
          }
          if (currentLuck < this.promoCapLuck) {
            currentLuck += trueLuck;
          } else {
            currentLuck = parseInt(this.promoCapLuck);
          }
          if (currentDefense < this.promoCapDefense) {
            currentDefense += trueDefense;
          } else {
            currentDefense = parseInt(this.promoCapDefense);
          }
          if (currentResistance < this.promoCapResistance) {
            currentResistance += trueResistance;
          } else {
            currentResistance = parseInt(this.promoCapResistance);
          }
          this.statsHash.level = level;
          this.statsHash.hp = currentHP.toFixed(2);
          this.statsHash.strength = currentStrength.toFixed(2);
          this.statsHash.magic = currentMagic.toFixed(2);
          this.statsHash.skill = currentSkill.toFixed(2);
          this.statsHash.speed = currentSpeed.toFixed(2);
          this.statsHash.luck = currentLuck.toFixed(2);
          this.statsHash.defense = currentDefense.toFixed(2);
          this.statsHash.resistance = currentResistance.toFixed(2);
          this.calculatedStats.push(this.statsHash);
          this.statsHash = {};
        }
      }
      if (this.promoted === "true") {
        this.calculatedStats.push(this.statsHash);
        this.statsHash = {};
        var promotedLevel = parseInt(this.baseLevel);
        var promotedBaseLevel = promotedLevel;
        var promotedI;
        var promotedCurrentHP = parseInt(this.baseHP);
        var promotedCurrentStrength = parseInt(this.baseStrength);
        var promotedCurrentMagic = parseInt(this.baseMagic);
        var promotedCurrentSkill = parseInt(this.baseSkill);
        var promotedCurrentSpeed = parseInt(this.baseSpeed);
        var promotedCurrentLuck = parseInt(this.baseLuck);
        var promotedCurrentDefense = parseInt(this.baseDefense);
        var promotedCurrentResistance = parseInt(this.baseResistance);
        this.statsHash.level = promotedLevel;
        this.statsHash.hp = promotedCurrentHP.toFixed(2);
        this.statsHash.strength = promotedCurrentStrength.toFixed(2);
        this.statsHash.magic = promotedCurrentMagic.toFixed(2);
        this.statsHash.skill = promotedCurrentSkill.toFixed(2);
        this.statsHash.speed = promotedCurrentSpeed.toFixed(2);
        this.statsHash.luck = promotedCurrentLuck.toFixed(2);
        this.statsHash.defense = promotedCurrentDefense.toFixed(2);
        this.statsHash.resistance = promotedCurrentResistance.toFixed(2);
        this.calculatedStats.push(this.statsHash);
        this.statsHash = {};
        var promotedTrueHP = parseInt(this.growthHP) / 100;
        var promotedTrueStrength = parseInt(this.growthStrength) / 100;
        var promotedTrueMagic = parseInt(this.growthMagic) / 100;
        var promotedTrueSkill = parseInt(this.growthSkill) / 100;
        var promotedTrueSpeed = parseInt(this.growthSpeed) / 100;
        var promotedTrueLuck = parseInt(this.growthLuck) / 100;
        var promotedTrueDefense = parseInt(this.growthDefense) / 100;
        var promotedTrueResistance = parseInt(this.growthResistance) / 100;
        for (i = 0; i < (20 - promotedBaseLevel); i++) {
          promotedLevel++;
          if (promotedCurrentHP < this.promoCapHP) {
            promotedCurrentHP += promotedTrueHP;
          } else {
            promotedCurrentHP = parseInt(this.promoCapHP);
          }
          if (promotedCurrentStrength < this.promoCapStrength) {
            promotedCurrentStrength += promotedTrueStrength;
          } else {
            promotedCurrentStrength = parseInt(this.promoCapStrength);
          }
          if (promotedCurrentMagic < this.promoCapMagic) {
            promotedCurrentMagic += promotedTrueMagic;
          } else {
            promotedCurrentMagic = parseInt(this.promoCapMagic);
          }
          if (promotedCurrentSkill < this.promoCapSkill) {
            promotedCurrentSkill += promotedTrueSkill;
          } else {
            promotedCurrentSkill = parseInt(this.promoCapSkill);
          }
          if (promotedCurrentSpeed < this.promoCapSpeed) {
            promotedCurrentSpeed += promotedTrueSpeed;
          } else {
            promotedCurrentSpeed = parseInt(this.promoCapSpeed);
          }
          if (promotedCurrentLuck < this.promoCapLuck) {
            promotedCurrentLuck += promotedTrueLuck;
          } else {
            promotedCurrentLuck = parseInt(this.promoCapLuck);
          }
          if (promotedCurrentDefense < this.promoCapDefense) {
            promotedCurrentDefense += promotedTrueDefense;
          } else {
            promotedCurrentDefense = parseInt(this.promoCapDefense);
          }
          if (promotedCurrentResistance < this.promoCapResistance) {
            promotedCurrentResistance += promotedTrueResistance;
          } else {
            promotedCurrentResistance = parseInt(this.promoCapResistance);
          }
          this.statsHash.level = promotedLevel;
          this.statsHash.hp = promotedCurrentHP.toFixed(2);
          this.statsHash.strength = promotedCurrentStrength.toFixed(2);
          this.statsHash.magic = promotedCurrentMagic.toFixed(2);
          this.statsHash.skill = promotedCurrentSkill.toFixed(2);
          this.statsHash.speed = promotedCurrentSpeed.toFixed(2);
          this.statsHash.luck = promotedCurrentLuck.toFixed(2);
          this.statsHash.defense = promotedCurrentDefense.toFixed(2);
          this.statsHash.resistance = promotedCurrentResistance.toFixed(2);
          this.calculatedStats.push(this.statsHash);
          this.statsHash = {};
        }
      }
    }
  }
};
</script>