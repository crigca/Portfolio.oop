export class InsufficientUnitsError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'InsufficientUnitsError';
    }
}
