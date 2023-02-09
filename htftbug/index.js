module.exports = {
	name: "Halftime and Fulltime Big",
	description: "Bug for hallftime and full time score",
	category: "Basic",
	icon: "image",
	hasEntries: true,
	default: {
		style: {
			horizontal_position: "center",
			vertical_position: "center",
			height: "112",
			width: "112"
			
		}
	},
	entry_props: [

		{
			name: "hometeam",
			description: "Home Team",
			type: "String"
		},
		{
			name: "awayteam",
			description: "Away Team",
			type: "String"
		},
		{
			name: "homescore",
			description: "Home Score",
			type: "String"
		},
		{
			name: "awayscore",
			description: "Away Score",
			type: "String"
		},
		{
			name: "ht_ft",
			description: "HT or FT",
			type: "String"
		},
	],
	
	vue_template: renderPug(getFile("template.pug").toString()),
	css: renderStylus(getFile("style.styl").toString())
}
