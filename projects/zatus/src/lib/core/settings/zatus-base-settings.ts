import {Observable, Subject} from "rxjs";
import {SettingChangedNotification} from "./setting-changed-notification";

export abstract class ZatusBaseSettings {

    protected _notifySettingChange$: Subject<SettingChangedNotification> = new Subject<SettingChangedNotification>();

    get settingChanges$(): Observable<SettingChangedNotification> {
        return this._notifySettingChange$.asObservable();
    }

    protected constructor(protected settingOwner: string) {
    }

    protected notifySettingChange = (prop: string, propType: string, oldValue: any, newValue: any): void => {
        const newSettingChangedNotification: SettingChangedNotification = {
            propPath: this.settingOwner, prop, propType, value: newValue, oldValue,
        };
        this._notifySettingChange$.next(newSettingChangedNotification);
    }


}
