// TODO: Migrate to the zatus-core-js lib
import {ValidationFailure} from "./validation-failure";

export class ValidationResults<T> {
    protected _failures: T[];

    constructor(protected allowDuplicateFailures: boolean = true) {
        this._failures = [];
    }

    public static createWithPreviousFailures = <T>(previousFailures?: T[] | ValidationResults<T>, allowDuplicateFailures: boolean = true): ValidationResults<T> => {
        const validationResult = new ValidationResults<T>(allowDuplicateFailures);
        return previousFailures instanceof ValidationFailure<T> ?
            validationResult.fillWithPreviousFailuresFromValidationResults(previousFailures as any) :
            validationResult.fillWithPreviousFailuresFromGenericArray(previousFailures as any);
    }

    protected fillWithPreviousFailuresFromValidationResults = (previousFailures: ValidationResults<T>): ValidationResults<T> => {
        if (previousFailures.totalFailures > 0) {
            this.addFailures(previousFailures.failures);
        }
        return this;
    }

    protected fillWithPreviousFailuresFromGenericArray = (previousFailures: T[]): ValidationResults<T> => this.addFailures(previousFailures)

    get hasFailure(): boolean {
        return this._failures.length > 0;
    }

    get totalFailures(): number {
        return this._failures.length;
    }

    get failures(): T[] {
        return JSON.parse(JSON.stringify(this._failures)); // TODO: Replace with lodash.cloneDeep
    }

    public addFailure = (failure: T): ValidationResults<T> => {
        this.throwErrorIfNotAllowDuplicateFailure(failure);
        this._failures.push(failure);
        return this;
    }

    protected throwErrorIfNotAllowDuplicateFailure = (failures: T | T[]): void => {
        if (this.allowDuplicateFailures) {
            return;
        }
        const duplicateFailureFound = Array.isArray(failures) ?
            failures.find(failure => this._failures.includes(failure)) :
            this._failures.find(failure => failure == failures);
        if (duplicateFailureFound) {
            throw new Error('Duplicate failure is not allowed');
        }
    }

    public addFailures = (failures: T[]): ValidationResults<T> => {
        this.throwErrorIfNotAllowDuplicateFailure(failures);
        this._failures = this._failures.concat(failures || []);
        return this;
    }
}
