const GAMES = [{
	"gameTitle": "Borderlands 2",
	"gameThumbImg": "bl2_300x400.jpeg",
	"gameFullImg": "",
	"gameShortDescription": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eum autem impedit voluptatibus quibusdam mollitia unde non ipsa!",
	"gameDescription": "",
	"gameRating": "M"
},
{
	"gameTitle": "DragonBall Fighterz",
	"gameThumbImg": "dbfz_300x400.jpeg",
	"gameFullImg": "",
	"gameShortDescription": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eum autem impedit voluptatibus quibusdam mollitia unde non ipsa!",
	"gameDescription": "",
	"gameRating": "T"
},
{
	"gameTitle": "Dota 2",
	"gameThumbImg": "dota2_300x400.jpeg",
	"gameFullImg": "",
	"gameShortDescription": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eum autem impedit voluptatibus quibusdam mollitia unde non ipsa!",
	"gameDescription": "",
	"gameRating": "M"
},
{
	"gameTitle": "Elden Ring",
	"gameThumbImg": "elden-ring_300x400.jpeg",
	"gameFullImg": "",
	"gameShortDescription": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eum autem impedit voluptatibus quibusdam mollitia unde non ipsa!",
	"gameDescription": "",
	"gameRating": "M"
},
{
	"gameTitle": "Final Fantasy IIV",
	"gameThumbImg": "ff7_300x400.jpeg",
	"gameFullImg": "",
	"gameShortDescription": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eum autem impedit voluptatibus quibusdam mollitia unde non ipsa!",
	"gameDescription": "",
	"gameRating": "T"
},
{
	"gameTitle": "Guilty Gear Strive",
	"gameThumbImg": "guilty-gear-strive_300x400.jpeg",
	"gameFullImg": "",
	"gameShortDescription": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eum autem impedit voluptatibus quibusdam mollitia unde non ipsa!",
	"gameDescription": "",
	"gameRating": "T"
},
{
	"gameTitle": "RimWorld",
	"gameThumbImg": "rimworld_300x400.jpeg",
	"gameFullImg": "",
	"gameShortDescription": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eum autem impedit voluptatibus quibusdam mollitia unde non ipsa!",
	"gameDescription": "",
	"gameRating": "T"
},
{
	"gameTitle": "Risk of Rain 2",
	"gameThumbImg": "ror2_300x400.jpeg",
	"gameFullImg": "",
	"gameShortDescription": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eum autem impedit voluptatibus quibusdam mollitia unde non ipsa!",
	"gameDescription": "",
	"gameRating": "T"
},
{
	"gameTitle": "Stardew Valley",
	"gameThumbImg": "stardew-valley_300x400.jpeg",
	"gameFullImg": "",
	"gameShortDescription": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eum autem impedit voluptatibus quibusdam mollitia unde non ipsa!",
	"gameDescription": "",
	"gameRating": "E"
},
{
	"gameTitle": "ULTRAKILL",
	"gameThumbImg": "ultrakill_300x400.jpeg",
	"gameFullImg": "",
	"gameShortDescription": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eum autem impedit voluptatibus quibusdam mollitia unde non ipsa!",
	"gameDescription": "",
	"gameRating": "M"
}
];

function loadData () {
	$.each(GAMES, function (index, game) {
		$("#app").append(`
		<div id="${index}" class="game-container">
		  <h4>${game.gameTitle}</h4>
		  <div class="game-image">
			<img src="images/${game.gameThumbImg}" alt="${game.gameTitle}" Thumbnail" />
		  </div>
		  <div class="game-details">
			<div class="short-description">
				${game.gameShortDescription}
			</div>
			<div class="rating">ESRB Rating: ${game.gameRating}</div>
		  </div>
		</div>`);
	});
};

function initListeners () {};

document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM Loaded and Parsed');
    // initListeners ();
    loadData ();
});