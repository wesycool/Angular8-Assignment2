import {Component, Input} from "@angular/core";

@Component({
    selector:'app-even',
    template:'<p>{{even}}</p>'
})

export class EvenComponent{
    @Input() even: Number;
}