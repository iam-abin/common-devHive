export abstract class CustomError extends Error {
	abstract statusCode: number;

	constructor(message: string) {
		// this message is only for logging purpose,not to send to user in production
		super(message);
		// To make sure prototype inheritance(prototype chain) worke properly.
		Object.setPrototypeOf(this, CustomError.prototype);
	}

	abstract serializeErrors(): { message: string; field?: string }[];
}
