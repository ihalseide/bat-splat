// Once the webpage loads, start the game up
window.onload = function() {
    // Game object
    var game = new Phaser.Game(800, 600, Phaser.AUTO, '', 
                               {preload: preload, create: create, update: update});

    // Main function to preload assets
    function preload () {
        game.load.image('logo', 'phaser.png');
    }

    // Main function to create the game
    function create () {
        var logo = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');
        logo.anchor.setTo(0.5, 0.5);
    }

    // Main function to update the game and display
    function update () {

    }
};