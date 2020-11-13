import {Component, Input} from "@angular/core";

@Component({
    selector:'app-even-numbers',
    template:'<p style="color: green">Even - {{evenNumber}}</p>'
})

export class EvenComponent{
    @Input() evenNumber: number
}