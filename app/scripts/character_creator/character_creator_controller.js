(function() {
	angular.module('RPG')
		.controller('CharacterCreator', ['$scope', '$location', '$http', '$cookieStore',
			function($scope, $location, $http, $cookieStore) {
				console.log("Hey there! Come on and create some characters.");

				var races = [];
				$scope.races = races;

				var charClasses = [];
				$scope.charClasses = charClasses;


				$scope.creator = {
					inProgChar: {},
					rollsLeft: 0,
					rollsSet: [],
					// standardSet: [15, 14, 13, 12, 10, 8],
					standardSet: [1, 4, 3, 2, 10, 8],
					statModels: {
						d20: ["strength", "intellect", "charisma", "dexterity", "constitution", "wisdom"]
					},
					rollDice: function(min, max) {
						var roll = Math.floor(Math.random() * (max - min + 1)) + min;
						return roll;
					},
					multiRoll: function(numberRolls, min, max) {
						var rolls = 0;
						var total = 0;
						while (rolls < numberRolls) {
							total += this.rollDice(min, max);
							rolls += 1;
						}
						return total;
					},
					reroll: function(skill, numberRolls, min, max) {
						if (this.rollsLeft > 0) {
							var newStat = this.multiRoll(numberRolls, min, max)
							this.inProgChar.skills[skill] = newStat;
							this.rollsLeft -= 1;
							console.log(this.rollsLeft + " rolls left..");
							console.log(this.inProgChar);
						} else {
							console.error("No rerolls left...");
						}
					},
					getRollsSet: function() {
						this.rollsSet = [];
						var model = this.statModels.d20;
						for (var i = 0; i < model.length; i++) {
							this.rollsSet.push(this.multiRoll(3, 1, 6));
						}
						console.log(this.rollsSet);
					},
					rollAllStats: function() {
						var model = this.statModels.d20;
						this.inProgChar.skills = {}
						this.rollsLeft = 3;
						for (var i = 0; i < model.length; i++) {
							this.inProgChar.skills[model[i]] = this.multiRoll(3, 1, 6)
						}
						console.log(this.inProgChar);
					},
					rollAgain: function(index) {
						// console.log(index);
						var origValue = this.standardSet[index];
						var newRoll = this.multiRoll(3, 1, 6);
						// this.standardSet.splice(index, 1, newRoll);
						// console.log('new value: ' + newRoll);
						if (origValue < newRoll) {
							console.log('original value: ' + origValue)
							console.log('new value: ' + newRoll);
							// this.standardSet[index] = newRoll;
							this.standardSet.splice(index, 1, newRoll);
							// this.standardSet.push(newRoll);
							// console.log(this.standardSet);
						}
					}
				}
			}
		]);
}())