Hooks.once('diceSoNiceReady', (dice3d) => {
	dice3d.addSystem({id: "timaresh-spg-dice", name: "Timaresh - StartPlaying.Games Dice"}, false);
	dice3d.addDicePreset({
		type: "df",
		labels: "",
		modelFile: "modules/timaresh-spg-dice/models/df.glb",
		system: "timaresh-spg-dice"
	});
	dice3d.addDicePreset({
		type: "d2",
		labels: "",
		modelFile: "modules/timaresh-spg-dice/models/d2.glb",
		system: "timaresh-spg-dice"
	});
	dice3d.addDicePreset({
		type: "dc",
		labels: "",
		modelFile: "modules/timaresh-spg-dice/models/dc.glb",
		system: "timaresh-spg-dice"
	});
	dice3d.addDicePreset({
		type: "d4",
		labels: "",
		modelFile: "modules/timaresh-spg-dice/models/d4.glb",
		system: "timaresh-spg-dice"
	});
	dice3d.addDicePreset({
		type: "d6",
		labels: "",
		modelFile: "modules/timaresh-spg-dice/models/d6.glb",
		system: "timaresh-spg-dice"
	});
	dice3d.addDicePreset({
		type: "d8",
		labels: "",
		modelFile: "modules/timaresh-spg-dice/models/d8.glb",
		system: "timaresh-spg-dice"
	});
	dice3d.addDicePreset({
		type: "d10",
		labels: "",
		modelFile: "modules/timaresh-spg-dice/models/d10.glb",
		system: "timaresh-spg-dice"
	});
	dice3d.addDicePreset({
		type: "d100",
		labels: "",
		modelFile: "modules/timaresh-spg-dice/models/d100.glb",
		system: "timaresh-spg-dice"
	});
	dice3d.addDicePreset({
		type: "d12",
		labels: "",
		modelFile: "modules/timaresh-spg-dice/models/d12.glb",
		system: "timaresh-spg-dice"
	});	
	dice3d.addDicePreset({
		type: "d20",
		labels: "",
		modelFile: "modules/timaresh-spg-dice/models/d20.glb",
		system: "timaresh-spg-dice"
	});
});
