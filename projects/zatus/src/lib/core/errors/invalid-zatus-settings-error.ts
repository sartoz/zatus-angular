import {ValidationFailure} from "../../validators/validation-failure";
import {FieldValidationFailure} from "../../validators/field-validation-failure";
import {ValidationResults} from "../../validators/validation-results";

export class InvalidZatusSettingsError extends Error {

    validationResult: ValidationResults<ValidationFailure | FieldValidationFailure>;

    protected constructor(message: string, validationResult: ValidationResults<ValidationFailure | FieldValidationFailure>) {
        super(message);
        this.name = `INVALID_ZATUS_SETTINGS_ERROR`;
        this.validationResult = validationResult;
    }

    public static ThrowMe = (validationFailures: ValidationFailure[]): void => {

    }

}
