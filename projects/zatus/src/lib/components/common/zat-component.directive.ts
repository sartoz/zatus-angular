import { Directive } from "@angular/core";
import { ZatComponent } from "../interfaces/common/zat-component";
import { SettingsStore } from "../../core/settings/settings-store";
import { Observable } from "rxjs";
import { SettingsChangedNotification } from "../../core/settings/settings-changed-notification";

@Directive({
    standalone: true,
})
export class ZatComponentDirective implements ZatComponent {
    private readonly _componentClass!: string;
    private readonly _zid!: string;
    protected _settingsStore!: SettingsStore;
    protected _componentName!: string;
    protected _tag!: number;

    get componentClass(): string {
        return this._componentClass;
    }

    get zid(): string {
        return this._zid;
    }

    get settingsChanges$(): Observable<SettingsChangedNotification> {
        return this.settingsStore.settingsChange$;
    }

    protected get settingsStore(): SettingsStore {
        if (!this._settingsStore) {
            this._settingsStore = new SettingsStore(this.componentClass);
        }
        return this._settingsStore;
    }

    get componentName(): string {
        return this._componentName;
    }

    set componentName(value: string) {
        this._componentName = value;
    }

    get tag(): number {
        return this._tag;
    }

    set tag(value: number) {
        this._tag = value;
    }

    constructor(componentClass: string) {
        this._componentClass = componentClass;
        this._zid = this.generateNewZID();
    }

    protected generateNewZID = (): string => {
        return `ZID_${new Date().toISOString()}_UUID_`; // TODO: Generate UUID
    };
}
