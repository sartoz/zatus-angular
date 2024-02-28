export interface SettingChangedNotification {
    prop: string;
    propPath: string;
    propType: string;
    value: any;
    oldValue: any;
}
