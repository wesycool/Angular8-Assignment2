import {Component} from "@angular/core";

@Component({
    selector:'app-game-control',
    templateUrl:'./game.component.html'
})

export class GameComponent{
    interval = 0;
    seconds = 0;
    
    onStartGame() {
        this.interval = window.setInterval(() => {
            this.seconds ++
            console.log(this.seconds)
        }, 1000);
      }
    
    onPauseGame() {
        clearInterval(this.interval)
    }
    
}