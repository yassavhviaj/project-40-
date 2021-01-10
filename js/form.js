class Form{
    constructor(){
       this.input = createInput("Name");
       this.button = createButton('Play');
       this.greeting = createElement('h2');
       this.title = createElement('h2');
       this.reset = createButton('Reset');
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
    display() {
        this.title.html("FRUIT CATCHER");
        this.title.position(700, 50);
        this.title.style('font-size', '70px');
        this.title.style('color', 'lightpink');
        this.input.position(550,400);
        this.input.style('width', '250px');
        this.input.style('height', '20px');
        this.input.style('background', 'lavender');
        this.button.position(560,450);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', 'lightgreen');
        this.reset.position(560,500);
        this.reset.style('width', '100px');
        this.reset.style('height', '40px');
        this.reset.style('background', 'YELLOW');

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name)
            this.greeting.position(700,250);
            this.greeting.style('color', 'white');
            this.greeting.style('font-size', '100px');
        });

        this.reset.mousePressed(() => {
            player.updateCount(0);
            game.update(0);
        });

    }
}