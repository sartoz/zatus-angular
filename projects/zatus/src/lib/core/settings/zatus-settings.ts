import {BehaviorSubject} from "rxjs";
import {ZatusBaseSettings} from "./zatus-base-settings";
import {ZatusPlainSettings} from "./zatus-plain-settings";
import {ZatusPanelSettings} from "./components/ui/zatus-panel-settings";

export class ZatusSettings extends ZatusBaseSettings {
    protected _zatusPanelSettings: BehaviorSubject<ZatusPanelSettings> = new BehaviorSubject<ZatusPanelSettings>(ZatusPanelSettings.createWithStandaloneSettings())

    public static createWithStandaloneSettings = (): ZatusSettings => {
        const zatusSettings = ZatusSettings.createFromPlainSettings({});
        return zatusSettings;
    }

    public static createFromPlainSettings = (plainSettings: ZatusPlainSettings): ZatusSettings => {
        const zatusSettings = new ZatusSettings();
        zatusSettings.setAllPropertiesFromPlainSettings(plainSettings);
        return zatusSettings;
    }

    constructor() {
        super(`zatus`);
    }

    public setAllPropertiesFromPlainSettings = (plainSettings: ZatusPlainSettings): ZatusSettings => {
        return this;
    }
}
