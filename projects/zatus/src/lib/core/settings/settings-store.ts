import { SettingsProperty } from "./settings-property";
import { PriorityLevel } from "../common/priority-level";
import { SettingsIsNotDefinedError } from "../errors/settings-is-not-defined-error";
import { Observable, Subject } from "rxjs";
import { SettingsChangedNotification } from "./settings-changed-notification";
import { SettingsPropertyChangedNotificationBuilder } from "./settings-property-changed-notification";

export type StorableSettingsProperty = {
    settingsProperty: SettingsProperty;
    priorityLevel: PriorityLevel;
};

export class SettingsStore {
    protected _settingsStore = new Map<string, StorableSettingsProperty>();
    protected _settingsChange$ = new Subject<SettingsChangedNotification>();
    protected _settingsPropertyChangedNotificationBuilder!: SettingsPropertyChangedNotificationBuilder;

    protected get settingsPropertyChangedNotificationBuilder(): SettingsPropertyChangedNotificationBuilder {
        if (!this._settingsPropertyChangedNotificationBuilder) {
            this._settingsPropertyChangedNotificationBuilder =
                new SettingsPropertyChangedNotificationBuilder();
        }
        return this._settingsPropertyChangedNotificationBuilder;
    }

    get settingsChange$(): Observable<SettingsChangedNotification> {
        if (!this._settingsChange$) {
            this._settingsChange$ = new Subject<SettingsChangedNotification>();
        }
        return this._settingsChange$.asObservable();
    }

    protected notifySettingsChange = (
        storableSettingsProperty: StorableSettingsProperty,
    ): void => {
        if (!this._settingsChange$) {
            return;
        }
        const { settingsProperty, priorityLevel } = storableSettingsProperty;
        const newSettingChangedNotification: SettingsChangedNotification = {
            propertyPath: `${this.settingsOwner}.${settingsProperty.name}`,
            settingsProperty:
                this.settingsPropertyChangedNotificationBuilder.build(
                    settingsProperty,
                ),
        };
        this._settingsChange$.next(newSettingChangedNotification);
    };

    constructor(protected settingsOwner: string) {}

    protected normalizeKey = (key: string): string => {
        return `${key || ""}_settings`.trim().toLowerCase();
    };

    public hasSettings = (key: string): boolean => {
        return this._settingsStore.has(this.normalizeKey(key));
    };

    protected getStorableSettingsProperty = (
        key: string,
    ): StorableSettingsProperty | undefined => {
        return this._settingsStore.get(this.normalizeKey(key));
    };

    public getSettings = (key: string): SettingsProperty | undefined => {
        const storableSettingsProperty = this.getStorableSettingsProperty(key);
        return storableSettingsProperty?.settingsProperty || undefined;
    };

    public getSettingsPriorityLevel = (
        key: string,
    ): PriorityLevel | undefined => {
        const storableSettingsProperty = this.getStorableSettingsProperty(key);
        return storableSettingsProperty?.priorityLevel || undefined;
    };

    public getSettingsValue = (key: string): any | undefined => {
        const storableSettingsProperty = this.getStorableSettingsProperty(key);
        return storableSettingsProperty?.settingsProperty?.value || undefined;
    };

    public setSettingsValue = (
        key: string,
        newValue: any,
        priorityLevel: PriorityLevel = PriorityLevel.LEVEL_0,
    ): SettingsStore => {
        this.throwErrorIfSettingsIsNotDefined(key);
        const storableSettingsProperty = this.getStorableSettingsProperty(key);
        this.setSettingsValueIfThePriortyLevelIsHigher(
            storableSettingsProperty!,
            newValue,
            priorityLevel,
        );
        return this;
    };

    protected throwErrorIfSettingsIsNotDefined = (key: string): void => {
        if (!this._settingsStore.has(key)) {
            SettingsIsNotDefinedError.throwMe(key);
        }
    };

    protected setSettingsValueIfThePriortyLevelIsHigher = (
        storableSettingsProperty: StorableSettingsProperty,
        newValue: any,
        priorityLevel: PriorityLevel,
    ): void => {
        if (
            !this.isThePriorityLevelHigher(
                storableSettingsProperty.priorityLevel,
                priorityLevel,
            )
        ) {
            return;
        }
        storableSettingsProperty.settingsProperty.value = newValue;
        this.notifySettingsChange(storableSettingsProperty);
    };

    protected isThePriorityLevelHigher = (
        sourcePriorityLevel: PriorityLevel,
        targetPriorityLevel: PriorityLevel,
    ): boolean => {
        return targetPriorityLevel <= sourcePriorityLevel;
    };

    public addSettings = (
        key: string,
        propType: string,
        value: any,
        priorityLevel: PriorityLevel,
    ): SettingsStore => {
        if (!this.hasSettings(key)) {
            const newStorableSettingsProperty = {
                settingsProperty: new SettingsProperty(key, propType, value),
                priorityLevel: priorityLevel,
            };
            this._settingsStore.set(
                this.normalizeKey(key),
                newStorableSettingsProperty,
            );
            this.notifySettingsChange(newStorableSettingsProperty);
            return this;
        }
        this.setSettingsValue(key, value, priorityLevel);
        return this;
    };
}
