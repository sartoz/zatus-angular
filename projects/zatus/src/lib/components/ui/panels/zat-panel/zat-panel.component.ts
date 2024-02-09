import {Component, Input} from '@angular/core';
import {ZatPanel} from "../../../interfaces/panels/zat-panel";

@Component({
    selector: 'zat-zat-panel',
    standalone: true,
    imports: [],
    templateUrl: './zat-panel.component.html',
    styleUrl: './zat-panel.component.css'
})
export class ZatPanelComponent implements ZatPanel {

    @Input() backgroundColor!: string;
}
