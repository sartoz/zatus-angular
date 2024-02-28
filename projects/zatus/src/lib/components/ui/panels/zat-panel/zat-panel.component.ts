import {Component, EventEmitter, Input} from '@angular/core';
import {ZatPanel} from "../../../interfaces/panels/zat-panel";
import {ZatusPanelSettings} from "../../../../core/settings/components/ui/zatus-panel-settings";
import {ZatusPanelPlainSettings} from "../../../../core/settings/components/ui/zatus-panel-plain-settings";

@Component({
    selector: 'zat-panel',
    standalone: true,
    imports: [],
    templateUrl: './zat-panel.component.html',
    styles: ``,
    host: {}
})
export class ZatPanelComponent implements ZatPanel {
    protected _settings!: ZatusPanelSettings;
    protected _background!: string;
    protected _border!: string;
    protected _borderColor!: string;
    protected _borderRadius!: string;
    protected _borderStyle!: string;
    protected _borderWidth!: string;
    protected _color!: string;
    protected _fontFamily!: string;
    protected _fontSize!: string;
    protected _fontWeight!: string;
    protected _height!: string;
    protected _margin!: string;
    protected _marginBottom!: string;
    protected _marginLeft!: string;
    protected _marginRight!: string;
    protected _marginTop!: string;
    protected _menuContext!: any;
    protected _paddingBottom!: string;
    protected _paddingLeft!: string;
    protected _paddingRight!: string;
    protected _paddingTop!: string;
    protected _styleClasses!: string;
    protected _textTransform!: string;
    protected _textAlign!: string;
    protected _padding!: string;
    protected _width!: string;
    protected _onClick!: EventEmitter<ZatPanel>;
    protected _onResize!: EventEmitter<ZatPanel>;

    get component(): ZatPanelComponent {
        return this;
    }

    @Input()
    set settings(value: ZatusPanelPlainSettings) {
        this._settings = ZatusPanelSettings.createFromPanelPlainSettings(value);
    }

    get settings(): ZatusPanelSettings {
        return this._settings;
    }

    @Input()
    set background(value: string) {
        this._background = value;
    }

    get background(): string {
        return this._background;
    }

    @Input()
    set border(value: string) {
        this._border = value;
    }

    get border(): string {
        return this._border;
    }

    @Input()
    set borderColor(value: string) {
        this._borderColor = value;
    }

    get borderColor(): string {
        return this._borderColor;
    }

    @Input()
    set borderRadius(value: string) {
        this._borderRadius = value;
    }

    get borderRadius(): string {
        return this._borderRadius;
    }

    @Input()
    set borderStyle(value: string) {
        this._borderStyle = value;
    }

    get borderStyle(): string {
        return this._borderStyle;
    }

    @Input()
    set borderWidth(value: string) {
        this._borderWidth = value;
    }

    get borderWidth(): string {
        return this._borderWidth;
    }

    @Input()
    set color(value: string) {
        this._color = value;
    }

    get color(): string {
        return this._color;
    }

    @Input()
    set fontFamily(value: string) {
        this._fontFamily = value;
    }

    get fontFamily(): string {
        return this._fontFamily;
    }

    @Input()
    set fontSize(value: string) {
        this._fontSize = value;
    }

    get fontSize(): string {
        return this._fontSize;
    }

    @Input()
    set fontWeight(value: string) {
        this._fontWeight = value;
    }

    get fontWeight(): string {
        return this._fontWeight;
    }

    @Input()
    set height(value: string) {
        this._height = value;
    }

    get height(): string {
        return this._height;
    }

    @Input()
    set margin(value: string) {
        this._margin = value;
    }

    get margin(): string {
        return this._margin;
    }

    @Input()
    set marginBottom(value: string) {
        this._marginBottom = value;
    }

    get marginBottom(): string {
        return this._marginBottom;
    }

    @Input()
    set marginLeft(value: string) {
        this._marginLeft = value;
    }

    get marginLeft(): string {
        return this._marginLeft;
    }

    @Input()
    set marginRight(value: string) {
        this._marginRight = value;
    }

    get marginRight(): string {
        return this._marginRight;
    }

    @Input()
    set marginTop(value: string) {
        this._marginTop = value;
    }

    get marginTop(): string {
        return this._marginTop;
    }

    @Input()
    set menuContext(value: string) {
        this._menuContext = value;
    }

    get menuContext(): string {
        return this._menuContext;
    }

    @Input()
    set paddingBottom(value: string) {
        this._paddingBottom = value;
    }

    get paddingBottom(): string {
        return this._paddingBottom;
    }

    @Input()
    set paddingLeft(value: string) {
        this._paddingLeft = value;
    }

    get paddingLeft(): string {
        return this._paddingLeft;
    }

    @Input()
    set paddingRight(value: string) {
        this._paddingRight = value;
    }

    get paddingRight(): string {
        return this._paddingRight;
    }

    @Input()
    set paddingTop(value: string) {
        this._paddingTop = value;
    }

    get paddingTop(): string {
        return this._paddingTop;
    }

    @Input()
    set styleClasses(value: string) {
        this._styleClasses = value;
    }

    get styleClasses(): string {
        return this._styleClasses;
    }

    @Input()
    set textTransform(value: string) {
        this._textTransform = value;
    }

    get textTransform(): string {
        return this._textTransform;
    }

    @Input()
    set textAlign(value: string) {
        this._textAlign = value;
    }

    get textAlign(): string {
        return this._textAlign;
    }

    @Input()
    set padding(value: string) {
        this._padding = value;
    }

    get padding(): string {
        return this._padding;
    }

    @Input()
    set width(value: string) {
        this._width = value;
    }

    get width(): string {
        return this._width;
    }

    constructor() {
    }

}
