export const Items: {[k: string]: ModdedItemData} = {
	abomasite: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	absolite: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	absorbbulb: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	adamantorb: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	aerodactylite: {
		inherit: true,
		isNonstandard: null,
	},
	aggronite: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	aguavberry: {
		inherit: true,
		onUpdate(pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 2) {
				pokemon.eatItem();
			}
		},
		onEat(pokemon) {
			this.heal(pokemon.baseMaxhp / 8);
			if (pokemon.getNature().minus === 'spd') {
				pokemon.addVolatile('confusion');
			}
		},
	},
	airballoon: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	alakazite: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	altarianite: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	ampharosite: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	apicotberry: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	armorfossil: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	aspearberry: {
		inherit: true,
		isNonstandard: null,
	},
	assaultvest: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	audinite: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	babiriberry: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	banettite: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	beedrillite: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	belueberry: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	berryjuice: {
		inherit: true,
		isNonstandard: null,
	},
	bigroot: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	bindingband: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	blackbelt: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	blackglasses: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	blacksludge: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	blastoisinite: {
		inherit: true,
		isNonstandard: null,
	},
	blazikenite: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	blueorb: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	brightpowder: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	burndrive: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	cameruptite: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	cellbattery: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	charcoal: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	charizarditex: {
		inherit: true,
		isNonstandard: null,
	},
	charizarditey: {
		inherit: true,
		isNonstandard: null,
	},
	chartiberry: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	cheriberry: {
		inherit: true,
		isNonstandard: null,
	},
	chestoberry: {
		inherit: true,
		isNonstandard: null,
	},
	chilanberry: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	chilldrive: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	choiceband: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	choicescarf: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	choicespecs: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	chopleberry: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	clawfossil: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	cobaberry: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	colburberry: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	cornnberry: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	coverfossil: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	custapberry: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	damprock: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	dawnstone: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	deepseascale: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	deepseatooth: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	destinyknot: {
		inherit: true,
		isNonstandard: null,
	},
	diancite: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	diveball: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	domefossil: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	dousedrive: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	dracoplate: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	dragonfang: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	dragonscale: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	dreadplate: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	dubiousdisc: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	durinberry: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	duskball: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	duskstone: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	earthplate: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	ejectbutton: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	electirizer: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	enigmaberry: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	eviolite: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	expertbelt: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	figyberry: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	firestone: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	fistplate: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	flameorb: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	flameplate: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	floatstone: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	focusband: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	focussash: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	friendball: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	fullincense: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	galladite: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	ganlonberry: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	garchompite: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	gardevoirite: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	gengarite: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	glalitite: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	greatball: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	grepaberry: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	gripclaw: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	griseousorb: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	gyaradosite: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	habanberry: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	hardstone: {
		inherit: true,
		isNonstandard: null,
	},
	healball: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	heatrock: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	helixfossil: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	heracronite: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	hondewberry: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	houndoominite: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	iapapaberry: {
		inherit: true,
		onUpdate(pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 2) {
				pokemon.eatItem();
			}
		},
		onEat(pokemon) {
			this.heal(pokemon.baseMaxhp / 8);
			if (pokemon.getNature().minus === 'def') {
				pokemon.addVolatile('confusion');
			}
		},
	},
	icicleplate: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	icyrock: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	insectplate: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	ironball: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	ironplate: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	jabocaberry: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	jawfossil: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	kangaskhanite: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	kasibberry: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	kebiaberry: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	keeberry: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	kelpsyberry: {
		inherit: true,
		isNonstandard: null,
	},
	kingsrock: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	laggingtail: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	lansatberry: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	latiasite: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	latiosite: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	laxincense: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	leafstone: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	leftovers: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	leppaberry: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	liechiberry: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	lifeorb: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	lightball: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	lightclay: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	lopunnite: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	lucarionite: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	luckypunch: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	lumberry: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	luminousmoss: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	lustrousorb: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	luxuryball: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	machobrace: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	magmarizer: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	magnet: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	magoberry: {
		inherit: true,
		onUpdate(pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 2) {
				pokemon.eatItem();
			}
		},
		onEat(pokemon) {
			this.heal(pokemon.baseMaxhp / 8);
			if (pokemon.getNature().minus === 'spe') {
				pokemon.addVolatile('confusion');
			}
		},
	},
	magostberry: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	manectite: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	marangaberry: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	masterball: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	mawilite: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	meadowplate: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	medichamite: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	mentalherb: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	metagrossite: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	metalcoat: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	metalpowder: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	metronome: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	mewtwonitex: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	mewtwonitey: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	micleberry: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	mindplate: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	miracleseed: {
		inherit: true,
		isNonstandard: null,
	},
	moonstone: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	muscleband: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	mysticwater: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	nanabberry: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	nestball: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	netball: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	nevermeltice: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	nomelberry: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	normalgem: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	occaberry: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	oddincense: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	oldamber: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	oranberry: {
		inherit: true,
		isNonstandard: null,
	},
	ovalstone: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	pamtreberry: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	passhoberry: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	payapaberry: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	pechaberry: {
		inherit: true,
		isNonstandard: null,
	},
	persimberry: {
		inherit: true,
		isNonstandard: null,
	},
	petayaberry: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	pidgeotite: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	pinsirite: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	pixieplate: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	plumefossil: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	poisonbarb: {
		inherit: true,
		isNonstandard: null,
	},
	pokeball: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	pomegberry: {
		inherit: true,
		isNonstandard: null,
	},
	poweranklet: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	powerband: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	powerbelt: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	powerbracer: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	powerherb: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	powerlens: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	powerweight: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	premierball: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	prismscale: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	protector: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	qualotberry: {
		inherit: true,
		isNonstandard: null,
	},
	quickball: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	quickclaw: {
		inherit: true,
		isNonstandard: null,
	},
	quickpowder: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	rabutaberry: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	rarebone: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	rawstberry: {
		inherit: true,
		isNonstandard: null,
	},
	razorclaw: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	razorfang: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	razzberry: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	reapercloth: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	redcard: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	redorb: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	repeatball: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	rindoberry: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	ringtarget: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	rockincense: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	rockyhelmet: {
		inherit: true,
		onDamagingHit(damage, target, source, move) {
			if (move.flags['contact']) {
				this.damage(source.baseMaxhp / 6, source, target, null, true);
			}
		},
	},
	rootfossil: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	roseincense: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	roseliberry: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	rowapberry: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	sablenite: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	sachet: {
		inherit: true,
		isNonstandard: null,
	},
	safetygoggles: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	sailfossil: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	salacberry: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	salamencite: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	sceptilite: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	scizorite: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	scopelens: {
		inherit: true,
		isNonstandard: null,
	},
	seaincense: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	sharpbeak: {
		inherit: true,
		isNonstandard: null,
	},
	sharpedonite: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	shedshell: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	shellbell: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	shinystone: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	shockdrive: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	shucaberry: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	silkscarf: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	silverpowder: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	sitrusberry: {
		inherit: true,
		isNonstandard: null,
	},
	skullfossil: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	skyplate: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	slowbronite: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	smoothrock: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	snowball: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	softsand: {
		inherit: true,
		isNonstandard: null,
	},
	souldew: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	spelltag: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	spelonberry: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	splashplate: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	spookyplate: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	starfberry: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	steelixite: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	stick: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	stickybarb: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	stoneplate: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	sunstone: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	swampertite: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	tamatoberry: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	tangaberry: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	thickclub: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	thunderstone: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	timerball: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	toxicorb: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	toxicplate: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	twistedspoon: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	tyranitarite: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	ultraball: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	upgrade: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	venusaurite: {
		inherit: true,
		isNonstandard: null,
	},
	wacanberry: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	waterstone: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	watmelberry: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	waveincense: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	weaknesspolicy: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	wepearberry: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	whippeddream: {
		inherit: true,
		isNonstandard: null,
	},
	whiteherb: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	widelens: {
		inherit: true,
		isNonstandard: null,
	},
	wikiberry: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	wiseglasses: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	yacheberry: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	zapplate: {
		inherit: true,
		isNonstandard: "Nuzlocke",
	},
	zoomlens: {
		inherit: true,
		isNonstandard: null,
	},
};
