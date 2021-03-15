	const expNeeded = [
	/*0 */	0,
	/*1 */	100, 	 	
	/*2 */	150, 	 	
	/*3 */	200, 	 	
	/*4 */	300, 	 	
	/*5 */	450, 	 	
	/*6 */	600, 	 	
	/*7 */	750, 	 	
	/*8 */	900, 	 	
	/*9 */	1050, 	 	
	/*10*/ 	1250, 	 	
	/*11*/ 	1500, 	 	
	/*12*/ 	1750, 	 	
	/*13*/ 	2000, 	 	
	/*14*/ 	2200, 	 	
	/*15*/ 	2400, 	 	
	/*16*/ 	2500, 	 	
	/*17*/ 	2600, 	 	
	/*18*/ 	2700, 	 	
	/*19*/ 	2800, 	 	 
	/*20*/ 	2900,
	/*21*/ 	3000,
	/*22*/ 	3100,
	/*23*/ 	3200,
	/*24*/ 	3300,
	/*25*/ 	3400,
	/*26*/ 	3500,
	/*27*/ 	3600,
	/*28*/ 	3700,
	/*29*/ 	3800,
	/*30*/ 	3900,
	/*31*/ 	4000,
	/*32*/ 	4100,
	/*33*/ 	4250,
	/*34*/ 	4500,
	/*35*/ 	4750,
	/*36*/ 	5000,
	/*37*/ 	5000,
	/*38*/ 	5000,
	/*39*/ 	5000,
	/*40*/ 	5000,
	/*41*/ 	5000,
	/*42*/ 	5000,
	/*43*/ 	5000,
	/*44*/ 	5000,
	/*45*/ 	5000,
	/*46*/ 	5000,
	/*47*/ 	5000,
	/*48*/ 	5000,
	/*49*/ 	5000,
	/*50*/ 	1325,
	/*51*/ 	1325,
	/*52*/ 	1325,
	/*53*/ 	1350,
	/*54*/ 	1350,
	/*55*/ 	1350,
	/*56*/ 	1350,
	/*57*/ 	1350,
	/*58*/ 	1350,
	/*59*/ 	1375,
	/*60*/ 	1375,
	/*61*/ 	1375,
	/*62*/ 	1400,
	/*63*/ 	1400,
	/*64*/ 	1400,
	/*65*/ 	1400,
	/*66*/ 	1400,
	/*67*/ 	1400,
	/*68*/ 	1425,
	/*69*/ 	1425,
	/*70*/ 	1425,
	/*71*/ 	1450,
	/*72*/ 	1450,
	/*73*/ 	1450,
	/*74*/ 	1450,
	/*75*/ 	1450,
	/*76*/ 	1450,
	/*77*/ 	1475,
	/*78*/ 	1475,
	/*79*/ 	1475,
	/*80*/ 	1500
	];
		
	const rewards = [
	/*00*/	{gold: 0,		other: null},
	/*01*/	{gold: 0,		other: "1 Legendary Card"},
	/*02*/	{gold: 0,		other: "1 Card Pack from latest expansion"},
	/*03*/	{gold: 0,		other: "1 Card Pack from latest expansion"},
	/*04*/	{gold: 0,		other: "1 Card Pack from latest expansion"},
	/*05*/	{gold: 0,		other: "1 Epic Card"},
	/*06*/	{gold: 100,		other: null},
	/*07*/	{gold: 100,		other: null},
	/*08*/	{gold: 0,		other: null},
	/*09*/	{gold: 100,		other: null},
	/*10*/	{gold: 0,		other: null},
	/*11*/	{gold: 100,		other: null},
	/*12*/	{gold: 0,		other: "1 Card Pack"},
	/*13*/	{gold: 100,		other: null},
	/*14*/	{gold: 100,		other: null},
	/*15*/	{gold: 0,		other: "1 Tavern Ticket"},
	/*16*/	{gold: 100,		other: null},
	/*17*/	{gold: 0,		other: "1 Card Pack"},
	/*18*/	{gold: 100,		other: null},
	/*19*/	{gold: 100,		other: null},
	/*20*/	{gold: 0, 		other: "1 Card Pack from latest expansion"},
	/*21*/	{gold: 100,		other: null},
	/*22*/	{gold: 100,		other: null},
	/*23*/	{gold: 0,		other: "1 Card Pack"},
	/*24*/	{gold: 100,		other: null},
	/*25*/	{gold: 0,		other: "1 Legendary Card"},
	/*26*/	{gold: 150,		other: null},
	/*27*/	{gold: 50,		other: "1 Card Pack"},
	/*28*/	{gold: 150,		other: null},
	/*29*/	{gold: 150,		other: null},
	/*30*/	{gold: 50,		other: "1 Card Pack from the latest expansion"},
	/*31*/	{gold: 150, 	other: null},
	/*32*/	{gold: 150, 	other: null},
	/*33*/	{gold: 150, 	other: null},
	/*34*/	{gold: 150, 	other: null},
	/*35*/	{gold: 0,		other: "1 Tavern Ticket"},
	/*36*/	{gold: 200, 	other: null},
	/*37*/	{gold: 200, 	other: null},
	/*38*/	{gold: 200, 	other: null},
	/*39*/	{gold: 200, 	other: null},
	/*40*/	{gold: 200, 	other: null},
	/*41*/	{gold: 200, 	other: null},
	/*42*/	{gold: 200, 	other: null},
	/*43*/	{gold: 200, 	other: null},
	/*44*/	{gold: 200, 	other: null},
	/*45*/	{gold: 300, 	other: null},
	/*46*/	{gold: 300, 	other: null},
	/*47*/	{gold: 300, 	other: null},
	/*48*/	{gold: 300, 	other: null},
	/*49*/	{gold: 300, 	other: null},
	/*50*/	{gold: 0,		other: "1 Hero Skin"},
	/*51*/	{gold: 50,		other: null}
	];
	
	const weeklyExp = 2500 + 1750 + 1750;
	const dailyExp = 900;
	
	if (isNaN(document.getElementById("currentlevel").valueAsNumber)) {
		document.getElementById("currentlevel").value = 1;
	}
	if (isNaN(document.getElementById("goallevel").valueAsNumber)) {
		document.getElementById("goallevel").value = document.getElementById("currentlevel").valueAsNumber + 1;
	}
	if (isNaN(document.getElementById("currentexp").valueAsNumber)) {
		document.getElementById("currentexp").value = 0;
	}
	
	
	function calculate(currentLevel, goalLevel, currentExp, rewardPass) {
		let totalExp = 0;

		for (let i = currentLevel; i < goalLevel; i++) {
			if (i > 80) {
				expAdd = 1500;
			}
			else {
				expAdd = expNeeded[i];
			}
			if (rewardPass) {
				if (i >= 35) {
					expAdd /= 1.2;
				}
				else if (i >= 10) {
					expAdd /= 1.15;
				}
				else {
					expAdd /= 1.1;
				}
			}
			totalExp += expAdd;
			// console.log(i);
			// console.log(totalExp);
		}
		
		totalExp -= currentExp;
		return totalExp;
	}
	
	function calculateRewards(currentLevel, goalLevel) {
		let reward = {
			gold: 0,
			other: []
		};
		
		for (let i = currentLevel + 1; i <= goalLevel; i++) {
			if (i > 50) {
				reward.gold += rewards[51].gold;
				if (i == 350) {
					reward.other.push("Level: 350 get: How on earth");
				}
			}
			else {
				reward.gold += rewards[i].gold;
				if (rewards[i].other !== null) {
					reward.other.push("Level: " + i + " get: " + rewards[i].other);
				}
			}

		}
		
		return reward;
	}
	
	function calculateDays(neededExp, currentDay) {
		let result = new Object;
		
		if (neededExp <= 0) {
			result.approximateWeeks = 0;
			result.exactWeeks = 0;
			result.exactDays = 0;
			return result;
		}
		
		result.approximateWeeks = neededExp / (weeklyExp + (dailyExp * 7));
		let questExp = 0;
		let lastDay = currentDay;
		for (let i = currentDay; ((i < 7) && (i != 0)); i++) {
			lastDay++;
			questExp += 900;
			// console.log("Part 1 | Last Day: " + lastDay + "; questExp: " + questExp);
			if (questExp >= neededExp) {
				break;
			}
		}
		
		while (questExp <= neededExp) {
			lastDay++;
			if(lastDay%7 === 1) {
				questExp += weeklyExp;
			}
			questExp += dailyExp;
			// console.log("Part 2 | Last Day: " + lastDay + "; questExp: " + questExp);
		}
		
		result.exactWeeks	= Math.floor((lastDay - currentDay)/7);
		result.exactDays	= (lastDay - currentDay)%7;
		
		// console.log(result);
		
		return result;
	}
	
	function levelMath() {
		let currentLevel = document.getElementById("currentlevel").valueAsNumber;
		let goalLevel = document.getElementById("goallevel").valueAsNumber;
		let currentExp = document.getElementById("currentexp").valueAsNumber;
		let rewardPass = document.getElementById("rewardpass").checked;
		let startDate = document.getElementById("startdate").valueAsDate;
		let resultSpot = document.getElementById("resultspot");
		let goldRewards = document.getElementById("gold");
		let otherRewards = document.getElementById("other");
		let error = document.getElementById("error");
		
		if (isNaN(currentLevel) || isNaN(goalLevel) || isNaN(currentExp)) {
			error.innerHTML = "Hey wait a moment, please put some numbers in those fields";
			return;
		}
		// console.log(currentLevel);
		// console.log(goalLevel);
		// console.log(resultSpot);
		// console.log(error);
		
		if (goalLevel > 350) {
			goalLevel = 350;
			error.innerHTML = "Whoa calm down, they don't let you get past level 350...";
		}
		if ((goalLevel < currentLevel) || (goalLevel < 1) || (currentLevel < 0)) {
			error.innerHTML = "Hey wait just one second here";
			return;
		}
		
		let result = calculate(currentLevel, goalLevel, currentExp, rewardPass);
		let reward = calculateRewards(currentLevel, goalLevel);
		// console.log(reward);
		
		let d;
		
		if (startDate === null) {
			d = new Date();
		}
		else {
			d = new Date(startDate);
		}
		
		let maxTimeTilGoal = calculateDays(result, d.getDay());
		
		let tomorrow = new Date(d);
		let goalDay = new Date(d);
		tomorrow.setDate(tomorrow.getDate() + 1);
		goalDay.setDate(goalDay.getDate() + (maxTimeTilGoal.exactWeeks * 7) + maxTimeTilGoal.exactDays);
		
		resultSpot.innerHTML = "Result Spot: " + result.toFixed(0) + " needed exp; Max time to complete with quests: " + maxTimeTilGoal.approximateWeeks.toFixed(2) + " weeks. Or specifically " + maxTimeTilGoal.exactWeeks + " weeks and " + maxTimeTilGoal.exactDays + " days or (" + goalDay.toLocaleDateString() + ") if you complete all quests starting with the quest(s) you get on " + tomorrow.toLocaleDateString();
		
		
		goldRewards.innerHTML = "Amount of Gold Earned: " + reward.gold;
		
		let oldRewards = document.querySelectorAll("div#other p.otherrewards");
		
		for (let i = 0; i < oldRewards.length; i++) {
			oldRewards[i].remove();
		}
		
		for (let i = 0; i < reward.other.length; i++) {
			let addP = document.createElement("p");
			addP.appendChild(document.createTextNode(reward.other[i]));
			addP.className = "otherrewards";
			otherRewards.appendChild(addP);
		}
	}
	
	function clear() {
		document.getElementById("currentlevel").value = 1;
		document.getElementById("goallevel").value = 2;
		document.getElementById("currentexp").value = 0;
		document.getElementById("rewardpass").checked = false;
		document.getElementById("resultspot").innerHTML = "Result Spot: ";
		document.getElementById("gold").innerHTML = "Amount of Gold Earned:";
		document.getElementById("error").innerHTML = "";
		
		let otherRewards = document.querySelectorAll("div#other p.otherrewards");
		
		for (let i = 0; i < otherRewards.length; i++) {
			otherRewards[i].remove();
		}
	}
	
	document.getElementById("calculate").addEventListener("click", levelMath);
	document.getElementById("clear").addEventListener("click", clear);
	
