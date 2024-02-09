import {BehaviorSubject} from "rxjs";
import {ZatusPanelSettings} from "./components/ui/zatus-panel-settings";

export class ZatusSettings {
    protected _zatusPanelSettings: BehaviorSubject<ZatusPanelSettings> = new BehaviorSubject<ZatusPanelSettings>(ZatusPanelSettings.createWithStandaloneSettings())

    static createWithStandaloneSettings = (): ZatusSettings => {

    }
}
