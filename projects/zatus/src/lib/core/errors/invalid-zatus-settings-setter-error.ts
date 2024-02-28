export class InvalidZatusSettingsSetterError extends Error {

    protected constructor(message: string) {
        super(message);
        this.name = `INVALID_ZATUS_SETTINGS_SETTER_ERROR`;
    }

    public static ThrowMe = (): void => {
        throw new InvalidZatusSettingsSetterError(`Settings setter is invalid. It must be defined and be a function.`);
    }
}
