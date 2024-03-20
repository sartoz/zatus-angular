export class InlineStyleBuilder {
    protected _properties = new Map<string, any>();

    public hasStyleProperty = (propertyName: string): boolean => this._properties.has(propertyName);

    public getStyleProperties = (): string[] => Array.from(this._properties.keys());

    public getValuesOfStyleProperties = (): any[] => Array.from(this._properties.values());

    public getStyleProperty = (propertyName: string): any | undefined => this._properties.get(propertyName);

    public setStyleProperty = (propertyName: string, propertyValue: any): void => {
        this._properties.set(propertyName, propertyValue)
    }
    public setStylePropertyOrRemoveIfValueIsEmpty = (propertyName: string, propertyValue: any): void => {
        if (!this._isAnEmptyValue(propertyValue)) {
            this._properties.set(propertyName, propertyValue)
            return;
        }
        if (this.hasStyleProperty(propertyName)) {
            this.removeStyleProperty(propertyName);
        }
    }

    protected _isAnEmptyValue = (value: any): boolean =>
        value === null || value === undefined || (typeof value === "string" && value.trim() === "")

    public removeStyleProperty = (propertyName: string): void => {
        if (!this.hasStyleProperty(propertyName)) {
            return;
        }
        this._properties.delete(propertyName);
    }

    public clear = (): void => this._properties.clear();

    public build = (): string => {
        const propertiesStyle: string[] = [];
        this._properties.forEach((value: any, key: string) => {
            propertiesStyle.push(this._buildStyleProperty(key, value));
        });
        return propertiesStyle.join(" ").trim();
    }

    protected _buildStyleProperty = (propertyName: string, propertyValue: any): string => `${propertyName}: ${propertyValue};`

}
