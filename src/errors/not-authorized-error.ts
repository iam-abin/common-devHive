import { CustomError } from "./custom-error";

export class NotAuthorizedError extends CustomError {
	statusCode: number = 401;

	constructor(public message: string = 'Not authorized') {
        super(message);
        Object.setPrototypeOf(this, NotAuthorizedError.prototype);
    }

	serializeErrors() {
		return [{ message: this.message }];
	}
}