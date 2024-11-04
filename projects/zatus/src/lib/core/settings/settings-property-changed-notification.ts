import { SettingsProperty } from "./settings-property";

export interface SettingsPropertyChangedNotification {
    propName: string;
    propType: string;
    value: any;
    oldValue: any;
}

export class SettingsPropertyChangedNotificationBuilder {
    constructor() {}

    build = (
        settingsProperty: SettingsProperty,
    ): SettingsPropertyChangedNotification => ({
        propName: settingsProperty.name,
        propType: settingsProperty.propType,
        value: settingsProperty.value,
        oldValue: settingsProperty.oldValue,
    });
}
