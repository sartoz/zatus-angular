// TODO: Migrate to the zatus-core-js lib

export class ValidationFailure {

    get failure(): string {
        return this.failure;
    }

    get code(): string | null {
        return this.code;
    }

    constructor(protected failure: string, protected code?: string) {
    }
}
