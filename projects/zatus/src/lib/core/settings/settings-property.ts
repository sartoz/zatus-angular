import { BehaviorSubject, Observable } from "rxjs";
import {
    SettingsPropertyChangedNotification,
    SettingsPropertyChangedNotificationBuilder,
} from "./settings-property-changed-notification";

export class SettingsProperty {
    protected _valueChange$!: BehaviorSubject<SettingsPropertyChangedNotification>;
    protected _value?: any;
    protected _oldValue?: any;
    protected _notificationBuilder!: SettingsPropertyChangedNotificationBuilder;

    get valueChange$(): Observable<SettingsPropertyChangedNotification> {
        if (!this._valueChange$) {
            this._value =
                new BehaviorSubject<SettingsPropertyChangedNotification>(
                    this.buildSettingPropertyChangedNotification(),
                );
        }
        return this._valueChange$.asObservable();
    }

    get value(): any {
        return this._value;
    }

    set value(value: any) {
        this._oldValue = this._value;
        this._value = value;
        this.notifySettingChange();
    }

    get oldValue(): any {
        return this._oldValue;
    }

    constructor(
        readonly name: string,
        readonly propType: string,
        value: any = undefined,
    ) {
        this.value = value;
    }

    protected buildSettingPropertyChangedNotification =
        (): SettingsPropertyChangedNotification => {
            if (!this._notificationBuilder) {
                this._notificationBuilder =
                    new SettingsPropertyChangedNotificationBuilder();
            }
            return this._notificationBuilder.build(this);
        };

    protected notifySettingChange = (): void => {
        if (this._valueChange$) {
            this._valueChange$.next(
                this.buildSettingPropertyChangedNotification(),
            );
        }
    };
}
