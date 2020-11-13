import {Component, Input} from "@angular/core";

@Component({
    selector:'app-odd',
    template:'<p>{{odd}}</p>'
})

export class OddComponent{
    @Input() odd: Number;
}