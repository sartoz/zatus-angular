import {ZatPanel} from "../../../../components/interfaces/panels/zat-panel";
import {ZatusPanelPlainSettings} from "./zatus-panel-plain-settings";
import {UIElementSettings} from "./common/ui-element-settings";

export class ZatusPanelSettings extends UIElementSettings<ZatPanel> {

    constructor() {
        super(`panel`);
    }

    public static createWithStandaloneSettings = (): ZatusPanelSettings => {
        return ZatusPanelSettings.createFromPanelPlainSettings({});
    }

    public static createFromPanelPlainSettings = (plainSettings: ZatusPanelPlainSettings): ZatusPanelSettings => {
        const panelSettings = new ZatusPanelSettings();
        panelSettings.setAllPropertiesFromPanelPlainSettings(plainSettings);
        return panelSettings;
    }

    public setAllPropertiesFromPanelPlainSettings = (plainSettings: ZatusPanelPlainSettings): ZatusPanelSettings => {
        this.setAllPropertiesFromElementPlainSettings(plainSettings);
        return this;
    }
}
