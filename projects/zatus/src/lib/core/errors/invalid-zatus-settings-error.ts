export class InvalidZatusSettingsError extends Error {


    protected constructor(message: string, validationFailures: ValidationFailure[]) {
        super(message);
    }

    public static ThrowMe = (validationFailures: ValidationFailure[]): void => {

    }

}
