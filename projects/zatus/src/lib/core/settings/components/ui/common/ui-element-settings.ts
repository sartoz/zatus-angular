import {ZatusBaseSettings} from "../../../zatus-base-settings";
import {UIElementPlainSettings} from "./ui-element-plain-settings";
import {BehaviorSubject, Observable} from "rxjs";
import {EventEmitter} from "@angular/core";

export abstract class UIElementSettings<T> extends ZatusBaseSettings implements UIElementPlainSettings<T> {

    // region background prop
    protected _background$: BehaviorSubject<string | undefined> = new BehaviorSubject<string | undefined>(undefined);

    get background(): string | undefined {
        return this._background$.value;
    }

    get background$(): Observable<string | undefined> {
        return this._background$.asObservable();
    }

    set background(value: string | undefined) {
        const oldValue = this.background;
        this._background$.next(value);
        this.notifySettingChange(`background`, `string | undefined`, oldValue, value);
    }

    // endregion
    // region border prop
    protected _border$: BehaviorSubject<string | undefined> = new BehaviorSubject<string | undefined>(undefined);

    get border(): string | undefined {
        return this._border$.value;
    }

    get border$(): Observable<string | undefined> {
        return this._border$.asObservable();
    }

    set border(value: string | undefined) {
        const oldValue = this.border;
        this._border$.next(value);
        this.notifySettingChange(`border`, `string | undefined`, oldValue, value);
    }

    // endregion
    // region borderColor prop
    protected _borderColor$: BehaviorSubject<string | undefined> = new BehaviorSubject<string | undefined>(undefined);

    get borderColor(): string | undefined {
        return this._borderColor$.value;
    }

    get borderColor$(): Observable<string | undefined> {
        return this._borderColor$.asObservable();
    }

    set borderColor(value: string | undefined) {
        const oldValue = this.borderColor;
        this._borderColor$.next(value);
        this.notifySettingChange(`borderColor`, `string | undefined`, oldValue, value);
    }

    // endregion
    // region borderRadius prop
    protected _borderRadius$: BehaviorSubject<string | undefined> = new BehaviorSubject<string | undefined>(undefined);

    get borderRadius(): string | undefined {
        return this._borderRadius$.value;
    }

    get borderRadius$(): Observable<string | undefined> {
        return this._borderRadius$.asObservable();
    }

    set borderRadius(value: string | undefined) {
        const oldValue = this.borderRadius;
        this._borderRadius$.next(value);
        this.notifySettingChange(`borderRadius`, `string | undefined`, oldValue, value);
    }

    // endregion
    // region borderStyle prop
    protected _borderStyle$: BehaviorSubject<string | undefined> = new BehaviorSubject<string | undefined>(undefined);

    get borderStyle(): string | undefined {
        return this._borderStyle$.value;
    }

    get borderStyle$(): Observable<string | undefined> {
        return this._borderStyle$.asObservable();
    }

    set borderStyle(value: string | undefined) {
        const oldValue = this.borderStyle;
        this._borderStyle$.next(value);
        this.notifySettingChange(`borderStyle`, `string | undefined`, oldValue, value);
    }

    // endregion
    // region borderWidth prop
    protected _borderWidth$: BehaviorSubject<string | undefined> = new BehaviorSubject<string | undefined>(undefined);

    get borderWidth(): string | undefined {
        return this._borderWidth$.value;
    }

    get borderWidth$(): Observable<string | undefined> {
        return this._borderWidth$.asObservable();
    }

    set borderWidth(value: string | undefined) {
        const oldValue = this.borderWidth;
        this._borderWidth$.next(value);
        this.notifySettingChange(`borderWidth`, `string | undefined`, oldValue, value);
    }

    // endregion
    // region color prop
    protected _color$: BehaviorSubject<string | undefined> = new BehaviorSubject<string | undefined>(undefined);

    get color(): string | undefined {
        return this._color$.value;
    }

    get color$(): Observable<string | undefined> {
        return this._color$.asObservable();
    }

    set color(value: string | undefined) {
        const oldValue = this.color;
        this._color$.next(value);
        this.notifySettingChange(`color`, `string | undefined`, oldValue, value);
    }

    // endregion
    // region contextMenu prop
    protected _contextMenu$: BehaviorSubject<any | undefined> = new BehaviorSubject<any | undefined>(undefined);

    get contextMenu(): any | undefined {
        return this._contextMenu$.value;
    }

    get contextMenu$(): Observable<any | undefined> {
        return this._contextMenu$.asObservable();
    }

    set contextMenu(value: any | undefined) {
        const oldValue = this.contextMenu;
        this._contextMenu$.next(value);
        this.notifySettingChange(`contextMenu`, `any | undefined`, oldValue, value);
    }

    // endregion
    // region fontFamily prop
    protected _fontFamily$: BehaviorSubject<string | undefined> = new BehaviorSubject<string | undefined>(undefined);

    get fontFamily(): string | undefined {
        return this._fontFamily$.value;
    }

    get fontFamily$(): Observable<string | undefined> {
        return this._fontFamily$.asObservable();
    }

    set fontFamily(value: string | undefined) {
        const oldValue = this.fontFamily;
        this._fontFamily$.next(value);
        this.notifySettingChange(`fontFamily`, `string | undefined`, oldValue, value);
    }

    // endregion
    // region fontSize prop
    protected _fontSize$: BehaviorSubject<string | undefined> = new BehaviorSubject<string | undefined>(undefined);

    get fontSize(): string | undefined {
        return this._fontSize$.value;
    }

    get fontSize$(): Observable<string | undefined> {
        return this._fontSize$.asObservable();
    }

    set fontSize(value: string | undefined) {
        const oldValue = this.fontSize;
        this._fontSize$.next(value);
        this.notifySettingChange(`fontSize`, `string | undefined`, oldValue, value);
    }

    // endregion
    // region fontWeight prop
    protected _fontWeight$: BehaviorSubject<string | undefined> = new BehaviorSubject<string | undefined>(undefined);

    get fontWeight(): string | undefined {
        return this._fontWeight$.value;
    }

    get fontWeight$(): Observable<string | undefined> {
        return this._fontWeight$.asObservable();
    }

    set fontWeight(value: string | undefined) {
        const oldValue = this.fontWeight;
        this._fontWeight$.next(value);
        this.notifySettingChange(`fontWeight`, `string | undefined`, oldValue, value);
    }

    // endregion
    // region height prop
    protected _height$: BehaviorSubject<string | undefined> = new BehaviorSubject<string | undefined>(undefined);

    get height(): string | undefined {
        return this._height$.value;
    }

    get height$(): Observable<string | undefined> {
        return this._height$.asObservable();
    }

    set height(value: string | undefined) {
        const oldValue = this.height;
        this._height$.next(value);
        this.notifySettingChange(`height`, `string | undefined`, oldValue, value);
    }

    // endregion
    // region margin prop
    protected _margin$: BehaviorSubject<string | undefined> = new BehaviorSubject<string | undefined>(undefined);

    get margin(): string | undefined {
        return this._margin$.value;
    }

    get margin$(): Observable<string | undefined> {
        return this._margin$.asObservable();
    }

    set margin(value: string | undefined) {
        const oldValue = this.margin;
        this._margin$.next(value);
        this.notifySettingChange(`margin`, `string | undefined`, oldValue, value);
    }

    // endregion
    // region marginBottom prop
    protected _marginBottom$: BehaviorSubject<string | undefined> = new BehaviorSubject<string | undefined>(undefined);

    get marginBottom(): string | undefined {
        return this._marginBottom$.value;
    }

    get marginBottom$(): Observable<string | undefined> {
        return this._marginBottom$.asObservable();
    }

    set marginBottom(value: string | undefined) {
        const oldValue = this.marginBottom;
        this._marginBottom$.next(value);
        this.notifySettingChange(`marginBottom`, `string | undefined`, oldValue, value);
    }

    // endregion
    // region marginLeft prop
    protected _marginLeft$: BehaviorSubject<string | undefined> = new BehaviorSubject<string | undefined>(undefined);

    get marginLeft(): string | undefined {
        return this._marginLeft$.value;
    }

    get marginLeft$(): Observable<string | undefined> {
        return this._marginLeft$.asObservable();
    }

    set marginLeft(value: string | undefined) {
        const oldValue = this.marginLeft;
        this._marginLeft$.next(value);
        this.notifySettingChange(`marginLeft`, `string | undefined`, oldValue, value);
    }

    // endregion
    // region marginRight prop
    protected _marginRight$: BehaviorSubject<string | undefined> = new BehaviorSubject<string | undefined>(undefined);

    get marginRight(): string | undefined {
        return this._marginRight$.value;
    }

    get marginRight$(): Observable<string | undefined> {
        return this._marginRight$.asObservable();
    }

    set marginRight(value: string | undefined) {
        const oldValue = this.marginRight;
        this._marginRight$.next(value);
        this.notifySettingChange(`marginRight`, `string | undefined`, oldValue, value);
    }

    // endregion
    // region marginTop prop
    protected _marginTop$: BehaviorSubject<string | undefined> = new BehaviorSubject<string | undefined>(undefined);

    get marginTop(): string | undefined {
        return this._marginTop$.value;
    }

    get marginTop$(): Observable<string | undefined> {
        return this._marginTop$.asObservable();
    }

    set marginTop(value: string | undefined) {
        const oldValue = this.marginTop;
        this._marginTop$.next(value);
        this.notifySettingChange(`marginTop`, `string | undefined`, oldValue, value);
    }

    // endregion
    // region padding prop
    protected _padding$: BehaviorSubject<string | undefined> = new BehaviorSubject<string | undefined>(undefined);

    get padding(): string | undefined {
        return this._padding$.value;
    }

    get padding$(): Observable<string | undefined> {
        return this._padding$.asObservable();
    }

    set padding(value: string | undefined) {
        const oldValue = this.padding;
        this._padding$.next(value);
        this.notifySettingChange(`padding`, `string | undefined`, oldValue, value);
    }

    // endregion
    // region paddingBottom prop
    protected _paddingBottom$: BehaviorSubject<string | undefined> = new BehaviorSubject<string | undefined>(undefined);

    get paddingBottom(): string | undefined {
        return this._paddingBottom$.value;
    }

    get paddingBottom$(): Observable<string | undefined> {
        return this._paddingBottom$.asObservable();
    }

    set paddingBottom(value: string | undefined) {
        const oldValue = this.paddingBottom;
        this._paddingBottom$.next(value);
        this.notifySettingChange(`paddingBottom`, `string | undefined`, oldValue, value);
    }

    // endregion
    // region paddingLeft prop
    protected _paddingLeft$: BehaviorSubject<string | undefined> = new BehaviorSubject<string | undefined>(undefined);

    get paddingLeft(): string | undefined {
        return this._paddingLeft$.value;
    }

    get paddingLeft$(): Observable<string | undefined> {
        return this._paddingLeft$.asObservable();
    }

    set paddingLeft(value: string | undefined) {
        const oldValue = this.paddingLeft;
        this._paddingLeft$.next(value);
        this.notifySettingChange(`paddingLeft`, `string | undefined`, oldValue, value);
    }

    // endregion
    // region paddingRight prop
    protected _paddingRight$: BehaviorSubject<string | undefined> = new BehaviorSubject<string | undefined>(undefined);

    get paddingRight(): string | undefined {
        return this._paddingRight$.value;
    }

    get paddingRight$(): Observable<string | undefined> {
        return this._paddingRight$.asObservable();
    }

    set paddingRight(value: string | undefined) {
        const oldValue = this.paddingRight;
        this._paddingRight$.next(value);
        this.notifySettingChange(`paddingRight`, `string | undefined`, oldValue, value);
    }

    // endregion
    // region paddingTop prop
    protected _paddingTop$: BehaviorSubject<string | undefined> = new BehaviorSubject<string | undefined>(undefined);

    get paddingTop(): string | undefined {
        return this._paddingTop$.value;
    }

    get paddingTop$(): Observable<string | undefined> {
        return this._paddingTop$.asObservable();
    }

    set paddingTop(value: string | undefined) {
        const oldValue = this.paddingTop;
        this._paddingTop$.next(value);
        this.notifySettingChange(`paddingTop`, `string | undefined`, oldValue, value);
    }

    // endregion
    // region styleClasses prop
    protected _styleClasses$: BehaviorSubject<string | undefined> = new BehaviorSubject<string | undefined>(undefined);

    get styleClasses(): string | undefined {
        return this._styleClasses$.value;
    }

    get styleClasses$(): Observable<string | undefined> {
        return this._styleClasses$.asObservable();
    }

    set styleClasses(value: string | undefined) {
        const oldValue = this.styleClasses;
        this._styleClasses$.next(value);
        this.notifySettingChange(`styleClasses`, `string | undefined`, oldValue, value);
    }

    // endregion
    // region textAlign prop
    protected _textAlign$: BehaviorSubject<string | undefined> = new BehaviorSubject<string | undefined>(undefined);

    get textAlign(): string | undefined {
        return this._textAlign$.value;
    }

    get textAlign$(): Observable<string | undefined> {
        return this._textAlign$.asObservable();
    }

    set textAlign(value: string | undefined) {
        const oldValue = this.textAlign;
        this._textAlign$.next(value);
        this.notifySettingChange(`textAlign`, `string | undefined`, oldValue, value);
    }

    // endregion
    // region textTransform prop
    protected _textTransform$: BehaviorSubject<string | undefined> = new BehaviorSubject<string | undefined>(undefined);

    get textTransform(): string | undefined {
        return this._textTransform$.value;
    }

    get textTransform$(): Observable<string | undefined> {
        return this._textTransform$.asObservable();
    }

    set textTransform(value: string | undefined) {
        const oldValue = this.textTransform;
        this._textTransform$.next(value);
        this.notifySettingChange(`textTransform`, `string | undefined`, oldValue, value);
    }

    // endregion
    // region width prop
    protected _width$: BehaviorSubject<string | undefined> = new BehaviorSubject<string | undefined>(undefined);

    get width(): string | undefined {
        return this._width$.value;
    }

    get width$(): Observable<string | undefined> {
        return this._width$.asObservable();
    }

    set width(value: string | undefined) {
        const oldValue = this.width;
        this._width$.next(value);
        this.notifySettingChange(`width`, `string | undefined`, oldValue, value);
    }

    // endregion
    // region onClick event
    protected _onClick: EventEmitter<T> | undefined = undefined;

    get onClick(): EventEmitter<T> | undefined {
        return this._onClick;
    }

    set onClick(value: EventEmitter<T> | undefined) {
        this._onClick = value;
    }

    // endregion
    // region onResize event
    protected _onResize: EventEmitter<T> | undefined = undefined;

    get onResize(): EventEmitter<T> | undefined {
        return this._onResize;
    }

    set onResize(value: EventEmitter<T> | undefined) {
        this._onResize = value;
    }

    // endregion

    protected constructor(settingOwner: string) {
        super(settingOwner)
    }

    protected safeGetValue = <T>(currentValue: T, nextValue: T, defaultValue: T | undefined = undefined): T | undefined =>
        (nextValue || currentValue || defaultValue);


    protected setAllPropertiesFromElementPlainSettings = (plainSettings: UIElementPlainSettings<T>): void => {
        this.background = this.safeGetValue<string | undefined>(this.background, plainSettings.background);
        this.border = this.safeGetValue<string | undefined>(this.border, plainSettings.border);
        this.borderColor = this.safeGetValue<string | undefined>(this.borderColor, plainSettings.borderColor);
        this.borderRadius = this.safeGetValue<string | undefined>(this.borderRadius, plainSettings.borderRadius);
        this.borderStyle = this.safeGetValue<string | undefined>(this.borderStyle, plainSettings.borderStyle);
        this.borderWidth = this.safeGetValue<string | undefined>(this.borderWidth, plainSettings.borderWidth);
        this.color = this.safeGetValue<string | undefined>(this.color, plainSettings.color);
        this.contextMenu = this.safeGetValue<any | undefined>(this.contextMenu, plainSettings.menuContext);
        this.fontFamily = this.safeGetValue<string | undefined>(this.fontFamily, plainSettings.fontFamily);
        this.fontSize = this.safeGetValue<string | undefined>(this.fontSize, plainSettings.fontSize);
        this.fontWeight = this.safeGetValue<string | undefined>(this.fontWeight, plainSettings.fontWeight);
        this.height = this.safeGetValue<string | undefined>(this.height, plainSettings.height);
        this.margin = this.safeGetValue<string | undefined>(this.margin, plainSettings.margin);
        this.marginBottom = this.safeGetValue<string | undefined>(this.marginBottom, plainSettings.marginBottom);
        this.marginLeft = this.safeGetValue<string | undefined>(this.marginLeft, plainSettings.marginLeft);
        this.marginRight = this.safeGetValue<string | undefined>(this.marginRight, plainSettings.marginRight);
        this.marginTop = this.safeGetValue<string | undefined>(this.marginTop, plainSettings.marginTop);
        this.padding = this.safeGetValue<string | undefined>(this.padding, plainSettings.padding);
        this.paddingBottom = this.safeGetValue<string | undefined>(this.paddingBottom, plainSettings.paddingBottom);
        this.paddingLeft = this.safeGetValue<string | undefined>(this.paddingLeft, plainSettings.paddingLeft);
        this.paddingRight = this.safeGetValue<string | undefined>(this.paddingRight, plainSettings.paddingRight);
        this.paddingTop = this.safeGetValue<string | undefined>(this.paddingTop, plainSettings.paddingTop);
        this.styleClasses = this.safeGetValue<string | undefined>(this.styleClasses, plainSettings.styleClasses);
        this.textAlign = this.safeGetValue<string | undefined>(this.textAlign, plainSettings.textAlign);
        this.textTransform = this.safeGetValue<string | undefined>(this.textTransform, plainSettings.textTransform);
        this.width = this.safeGetValue<string | undefined>(this.width, plainSettings.width);
        this.onClick = this.safeGetValue<EventEmitter<T> | undefined>(this.onClick, plainSettings.onClick);
        this.onResize = this.safeGetValue<EventEmitter<T> | undefined>(this.onResize, plainSettings.onResize);
    }
}
