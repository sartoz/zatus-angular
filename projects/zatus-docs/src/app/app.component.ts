import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {ZatPanelComponent} from "zatus";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, ZatPanelComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {

}
