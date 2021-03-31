class Information{
    constructor(){
        this.title = createElement('h2');
        this.information = createElement('h2');
        this.button = createButton('Next');
    }

    display(){
        this.title.html("GRANDMA'S HOME REMEDIES!!");
        this.title.position(displayWidth/2 - 50, 0);
    }
}