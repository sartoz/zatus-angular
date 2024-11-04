import { EventEmitter } from "@angular/core";
import { ZatComponent } from "./zat-component";

export interface ZatUIComponent<InterfaceType, ComponentType>
    extends ZatComponent {
    component: ComponentType;
    contextMenu?: any;
    enabled?: boolean;
    styleClasses?: string;
    styleInline?: string;
    onClick?: EventEmitter<InterfaceType>;
    onResize?: EventEmitter<InterfaceType>;
}
