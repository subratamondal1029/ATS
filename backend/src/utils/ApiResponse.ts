class ApiResponse {
  public success: boolean;
  public status: number;
  public message: string;
  public data: object;

  constructor(
    status: number = 200,
    message: string = "Success",
    data: object = {}
  ) {
    this.success = true;
    this.status = status;
    this.message = message;
    this.data = data;
  }

  toJSON() {
    return {
      success: this.success,
      status: this.status,
      message: this.message,
      data: this.data,
    };
  }
}

export default ApiResponse;
