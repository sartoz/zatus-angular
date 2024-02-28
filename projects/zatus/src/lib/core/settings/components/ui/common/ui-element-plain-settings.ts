import {BoxPlainSettings} from "./box-plain-settings";
import {EventEmitter} from "@angular/core";

export interface UIElementPlainSettings<T> extends BoxPlainSettings {
    background?: string;
    styleClasses?: string;
    color?: string;
    fontFamily?: string;
    fontSize?: string;
    fontWeight?: string;
    menuContext?: any;
    textTransform?: string;
    textAlign?: string;
    onClick?: EventEmitter<T>;
    onResize?: EventEmitter<T>;
}
