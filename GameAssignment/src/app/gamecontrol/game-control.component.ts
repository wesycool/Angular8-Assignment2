import {Component, Output, EventEmitter} from "@angular/core";

@Component({
    selector:'app-game-control',
    templateUrl:'./game-control.component.html'
})

export class GameControlComponent{
    @Output() intervalFired = new EventEmitter<number>();
    interval: number = 0;
    seconds: number = 0;
    
    onStartGame() {
        this.interval = window.setInterval(() => {
            this.seconds ++
            this.intervalFired.emit(this.seconds)
        }, 1000);
      }
    
    onPauseGame() {
        clearInterval(this.interval)
    }
    
}