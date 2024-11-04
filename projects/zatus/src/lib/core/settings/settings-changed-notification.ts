import { SettingsPropertyChangedNotification } from "./settings-property-changed-notification";

export interface SettingsChangedNotification {
    propertyPath: string;
    settingsProperty: SettingsPropertyChangedNotification;
}
