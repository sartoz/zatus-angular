import {Injectable} from '@angular/core';
import {ZatusSettings} from "../../core/settings/zatus-settings";
import {BehaviorSubject, Observable} from "rxjs";
import {InvalidZatusSettingsSetterError} from "../../core/errors/invalid-zatus-settings-setter-error";

export type ZatusSettingsSetter = (currentSettings: ZatusSettings) => ZatusSettings;

@Injectable({
    providedIn: 'root'
})
export class ZatusSettingsService {

    protected _zatusSettings$!: BehaviorSubject<ZatusSettings>;

    protected get zatusSettings$(): BehaviorSubject<ZatusSettings> {
        if (!this._zatusSettings$) {
            this._zatusSettings$ = new BehaviorSubject<ZatusSettings>(ZatusSettings.createWithStandaloneSettings());
        }
        return this._zatusSettings$;
    }

    constructor() {
    }

    public currentSettings = (): ZatusSettings => this.zatusSettings$.value;

    public currentSettingsAsObservable = (): Observable<ZatusSettings> => this.zatusSettings$.asObservable();

    public configure = (settingsSetter: ZatusSettingsSetter): ZatusSettings => {
        this.throwErrorIfSettingsSetterIsInvalid(settingsSetter);
        this.setZatusSettings(settingsSetter(this.currentSettings()));
        return this.currentSettings();
    }

    protected throwErrorIfSettingsSetterIsInvalid = (settingsSetter: ZatusSettingsSetter): void => {
        if (!settingsSetter || typeof settingsSetter !== "function") {
            InvalidZatusSettingsSetterError.ThrowMe();
        }
    }

    protected setZatusSettings = (newSettings: ZatusSettings): void => {
        this.throwErrorIfZatusSettingsIsInvalid(newSettings);
        this.zatusSettings$.next(newSettings);
    }

    protected throwErrorIfZatusSettingsIsInvalid = (zatusSettings: ZatusSettings): void => {
        const zatusSettingsErrors = ZatusSettings.IsValid(zatusSettings);
        if (zatusSettingsErrors.length > 0) {
            InvalidZatusSettingsError.ThrowMe(zatusSettingsErrors);
        }
    }

    public resetSettingsToStandalone = (): ZatusSettings => {
        this.zatusSettings$.next(ZatusSettings.createWithStandaloneSettings());
        return this.currentSettings();
    }
}
