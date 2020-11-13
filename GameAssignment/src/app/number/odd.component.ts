import {Component, Input} from "@angular/core";

@Component({
    selector:'app-odd-numbers',
    template:'<p style="color: blue">Odd - {{oddNumber}}</p>'
})

export class OddComponent{
    @Input() oddNumber: number
}