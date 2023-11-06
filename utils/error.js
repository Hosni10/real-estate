export default class CustomError extends Error {
  constructor(statusCode, errors) {
    this.super();
    this.errors = errors;
    this.statusCode = statusCode;
  }
}