	const expNeeded = [
	/* 0	*/	0,
	/* 1	*/	100,
	/* 2	*/	100,
	/* 3	*/	150,
	/* 4	*/	150,
	/* 5	*/	225,
	/* 6	*/	225,
	/* 7	*/	300,
	/* 8	*/	300,
	/* 9	*/	325,
	/* 10	*/	325,
	/* 11	*/	350,
	/* 12	*/	350,
	/* 13	*/	375,
	/* 14	*/	375,
	/* 15	*/	400,
	/* 16	*/	400,
	/* 17	*/	425,
	/* 18	*/	425,
	/* 19	*/	450,
	/* 20	*/	450,
	/* 21	*/	550,
	/* 22	*/	600,
	/* 23	*/	650,
	/* 24	*/	675,
	/* 25	*/	675,
	/* 26	*/	875,
	/* 27	*/	875,
	/* 28	*/	1000,
	/* 29	*/	1100,
	/* 30	*/	1200,
	/* 31	*/	1200,
	/* 32	*/	1250,
	/* 33	*/	1250,
	/* 34	*/	1300,
	/* 35	*/	1300,
	/* 36	*/	1350,
	/* 37	*/	1350,
	/* 38	*/	1400,
	/* 39	*/	1400,
	/* 40	*/	1450,
	/* 41	*/	1450,
	/* 42	*/	1500,
	/* 43	*/	1500,
	/* 44	*/	1550,
	/* 45	*/	1550,
	/* 46	*/	1600,
	/* 47	*/	1600,
	/* 48	*/	1650,
	/* 49	*/	1650,
	/* 50	*/	1700,
	/* 51	*/	1700,
	/* 52	*/	1750,
	/* 53	*/	1750,
	/* 54	*/	1800,
	/* 55	*/	1800,
	/* 56	*/	1850,
	/* 57	*/	1850,
	/* 58	*/	1900,
	/* 59	*/	1900,
	/* 60	*/	1950,
	/* 61	*/	1950,
	/* 62	*/	2000,
	/* 63	*/	2000,
	/* 64	*/	2050,
	/* 65	*/	2050,
	/* 66	*/	2125,
	/* 67	*/	2125,
	/* 68	*/	2250,
	/* 69	*/	2250,
	/* 70	*/	2375,
	/* 71	*/	2375,
	/* 72	*/	2500,
	/* 73	*/	2500,
	/* 74	*/	2500,
	/* 75	*/	2500,
	/* 76	*/	2500,
	/* 77	*/	2500,
	/* 78	*/	2500,
	/* 79	*/	2500,
	/* 80	*/	2500,
	/* 81	*/	2500,
	/* 82	*/	2500,
	/* 83	*/	2500,
	/* 84	*/	2500,
	/* 85	*/	2500,
	/* 86	*/	2500,
	/* 87	*/	2500,
	/* 88	*/	2500,
	/* 89	*/	2500,
	/* 90	*/	2500,
	/* 91	*/	2500,
	/* 92	*/	2500,
	/* 93	*/	2500,
	/* 94	*/	2500,
	/* 95	*/	2500,
	/* 96	*/	2500,
	/* 97	*/	2500,
	/* 98	*/	2500,
	/* 99	*/	2500,
	/* 100	*/ 	1325,
	/* 101	*/ 	1325,
	/* 102	*/ 	1350,
	/* 103	*/ 	1350,
	/* 104	*/ 	1350,
	/* 105	*/ 	1350,
	/* 106	*/ 	1350,
	/* 107	*/ 	1350,
	/* 108	*/ 	1375,
	/* 109	*/ 	1375,
	/* 110	*/ 	1375,
	/* 111	*/ 	1400,
	/* 112	*/ 	1400,
	/* 113	*/ 	1400,
	/* 114	*/ 	1400,
	/* 115	*/ 	1400,
	/* 116	*/ 	1400,
	/* 117	*/ 	1425,
	/* 118	*/ 	1425,
	/* 119	*/ 	1425,
	/* 120	*/ 	1450,
	/* 121	*/ 	1450,
	/* 122	*/ 	1450,
	/* 123	*/ 	1450,
	/* 124	*/ 	1450,
	/* 125	*/ 	1450,
	/* 126	*/ 	1475,
	/* 127	*/ 	1475,
	/* 128	*/ 	1475,
	/* 129	*/	1475,
	/* 130+ */	1500
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
	
