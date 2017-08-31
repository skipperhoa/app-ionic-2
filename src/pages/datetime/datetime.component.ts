import { Component } from "@angular/core";

@Component({
    selector: "my-datetime",
    templateUrl: "datetime.component.html"
})

export class DateTimeComponent {
    public event = {
        month: '1990-02-19',
        timeStarts: '07:43',
        timeEnds: '1990-02-20'
    }
}