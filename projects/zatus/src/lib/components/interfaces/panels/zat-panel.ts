import {ZatusPanelSettings} from "../../../core/settings/components/ui/zatus-panel-settings";
import {UIElementPlainSettings} from "../../../core/settings/components/ui/common/ui-element-plain-settings";
import {ZatPanelComponent} from "../../ui/panels/zat-panel/zat-panel.component";

export interface ZatPanel extends UIElementPlainSettings<ZatPanel> {
    settings: ZatusPanelSettings;
    component: ZatPanelComponent;
    buildStyle: () => string;
}
