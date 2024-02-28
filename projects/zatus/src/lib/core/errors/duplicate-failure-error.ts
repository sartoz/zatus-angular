import {ValidationFailure} from "../../validators/validation-failure";
import {FieldValidationFailure} from "../../validators/field-validation-failure";

export type DuplicateFailure = ValidationFailure | FieldValidationFailure;

export class DuplicateFailureError extends Error {
    failure: DuplicateFailure

    private constructor(message: string, failure: DuplicateFailure) {
        super(message);
        this.name = `DUPLICATE_FAILURE_ERROR`;
        this.failure = failure;
    }

    public static ThrowMe = (failure: DuplicateFailure): void => {
        throw new DuplicateFailureError(`Duplicate failure is not allowed.`, failure);
    }
}
