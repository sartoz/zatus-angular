export class SettingsIsNotDefinedError extends Error {
    protected constructor(message: string) {
        super(message);
        this.name = `SETTINGS_IS_NOT_DEFINED_ERROR`;
    }

    public static throwMe = (settingsName: string): void => {
        throw new SettingsIsNotDefinedError(
            `The "${settingsName}" setting has not been defined.`,
        );
    };
}
