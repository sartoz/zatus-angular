import { Directive, EventEmitter, Input, Output } from "@angular/core";
import { ZatComponentDirective } from "../../common/zat-component.directive";
import { ZatUIComponent } from "../../interfaces/common/zat-ui-component";

@Directive({
    standalone: true,
})
export abstract class ZatUIComponentDirective<InterfaceType, ComponentType>
    extends ZatComponentDirective
    implements ZatUIComponent<InterfaceType, ComponentType>
{
    protected _contextMenu!: any | undefined;
    protected _enabled: boolean = true;
    protected _styleInline!: string | undefined;
    protected _styleClasses!: string | undefined;

    @Output() onClick = new EventEmitter<InterfaceType>();

    abstract get component(): ComponentType;

    @Input()
    set contextMenu(value: any | undefined) {
        this._contextMenu = value;
    }

    get contextMenu(): any {
        return this._contextMenu;
    }

    @Input()
    set enabled(value: boolean) {
        this._enabled = value;
    }

    get enabled(): boolean {
        return this._enabled;
    }

    @Input()
    set styleInline(value: string | undefined) {
        this._styleInline = value;
    }

    get styleInline(): string | undefined {
        return this._styleInline;
    }

    @Input()
    set styleClasses(value: string | undefined) {
        this._styleClasses = value;
    }

    get styleClasses(): string | undefined {
        return this._styleClasses;
    }

    protected constructor(componentClass: string) {
        super(componentClass);
    }
}
