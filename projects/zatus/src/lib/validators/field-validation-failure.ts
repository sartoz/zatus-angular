// TODO: Migrate to the zatus-core-js lib

import {ValidationFailure} from "./validation-failure";

export class FieldValidationFailure extends ValidationFailure {

    get field(): string {
        return this.field;
    }

    constructor(protected field: string, failure: string, code?: string) {
        super(failure, code);
    }
}
