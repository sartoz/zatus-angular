import { Component, ViewEncapsulation } from "@angular/core";
import { ZatPanel } from "../../../interfaces/panels/zat-panel";
import { ZatUIComponentDirective } from "../../common/zat-ui-component.directive";

@Component({
    selector: "zat-panel",
    standalone: true,
    imports: [],
    templateUrl: "./zat-panel.component.html",
})
export class ZatPanelComponent
    extends ZatUIComponentDirective<ZatPanel, ZatPanelComponent>
    implements ZatPanel
{
    override get component(): ZatPanelComponent {
        return this;
    }

    constructor() {
        super(`ZatPanelComponent`);
        this.componentName = `ZatPanel_${this.zid}`;
    }

    doClick();
}
