import {ZatusSettings} from "../core/settings/zatus-settings";
import {ValidationResults} from "./validation-results";
import {FieldValidationFailure} from "./field-validation-failure";

export class ZatusSettingsValidator {

    protected _validationResult!: ValidationResults<FieldValidationFailure>;

    get validationResult(): ValidationResults<FieldValidationFailure> {
        if (!this._validationResult) {
            this._validationResult = new ValidationResults<FieldValidationFailure>();
        }
        return this._validationResult;
    }

    constructor() {
    }

    validate(settings: ZatusSettings): ValidationResults<FieldValidationFailure> {
        this.clearPreviousResults();
        return this.validationResult;
    }

    protected clearPreviousResults = (): void => {
        if (this.validationResult.hasFailure) {
            this.validationResult.clear();
        }
    }
}
