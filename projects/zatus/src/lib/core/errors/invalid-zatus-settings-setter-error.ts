export class InvalidZatusSettingsSetterError extends Error {

    protected constructor(message: string) {
        super(message);
    }

    public static ThrowMe = (): void => {
        throw new InvalidZatusSettingsSetterError(`Settings setter is invalid. It must be defined and be a function.`);
    }
}
