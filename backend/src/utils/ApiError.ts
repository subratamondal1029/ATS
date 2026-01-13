class ApiError extends Error {
  public status: number;
  public success: boolean;
  public message: string;
  public data: null;
  private stackTrace: string | undefined;

  constructor(
    status: number = 500,
    message: string = "Something went wrong",
    stack?: string
  ) {
    super(message);
    this.status = status;
    this.success = false;
    this.message = message;
    this.data = null;

    if (!stack) {
      Error.captureStackTrace(this, this.constructor);
      this.stackTrace = this.stack;
    } else {
      this.stackTrace = stack;
    }
  }

  toJSON() {
    return {
      status: this.status,
      success: this.success,
      message: this.message,
      data: this.data,
    };
  }

  getStack() {
    return this.stackTrace;
  }
}

export default ApiError;
