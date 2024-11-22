import { ApplicationProtocolBase } from "./ApplicationProtocolBase";

export class HTTPProtocol extends ApplicationProtocolBase {
  private connected: boolean;
  private headers: Record<string, string>;

  constructor() {
    super("HTTP");
    this.connected = false;
    this.headers = {};
  }

  /**
   * Simulates setting up a connection for HTTP.
   * @param destination - The destination address or identifier.
   * @returns True if the connection is successful, otherwise false.
   */
  setupConnection(destination: string): boolean {
    this.log(`Attempting to establish connection to ${destination}...`);
    const success = Math.random() > 0.1; // 90% Erfolgschance
    if (success) {
      this.connected = true;
      this.log(`Connection to ${destination} established successfully.`);
    } else {
      this.log(`Connection to ${destination} failed.`);
    }
    return success;
  }

  /**
   * Simulates tearing down a connection for HTTP.
   * @param destination - The destination address or identifier.
   * @returns A message indicating the disconnection status.
   */
  teardownConnection(destination: string): string {
    if (this.connected) {
      this.log(`Tearing down connection to ${destination}...`);
      this.connected = false;
      return `Connection to ${destination} closed successfully.`;
    } else {
      this.log(`No active connection to ${destination} to tear down.`);
      return `No connection to close.`;
    }
  }

  /**
   * Sets an HTTP header for the current session.
   * @param key - The header name.
   * @param value - The header value.
   */
  setHeader(key: string, value: string): void {
    this.headers[key] = value;
    this.log(`Header set: ${key} = ${value}`);
  }

  /**
   * Logs all HTTP headers for the current session.
   */
  private logHeaders(): void {
    this.log(`Headers: ${JSON.stringify(this.headers, null, 2)}`);
  }

  /**
   * Simulates sending an HTTP request with headers.
   * @param data - The data to send in the HTTP request body.
   * @param destination - The destination URL or address.
   * @returns A message indicating the status of the request.
   */
  sendData(data: string, destination: string): string {
    if (!this.connected) {
      this.log(`Cannot send data. No active connection to ${destination}.`);
      return "Failed to send data. Connection not established.";
    }

    this.log(`Sending HTTP request to ${destination} with data: ${data}`);
    this.logHeaders();
    return `HTTP_REQUEST_SENT(${data})`;
  }

  /**
   * Simulates receiving an HTTP response.
   * @param data - The incoming response data.
   * @returns The processed response data.
   */
  receiveData(data: string): string {
    if (!this.connected) {
      this.log(`Cannot receive data. No active connection.`);
      return "Failed to receive data. Connection not established.";
    }

    this.log(`Receiving HTTP response: ${data}`);
    this.logHeaders();
    return `HTTP_RESPONSE(${data})`;
  }

  /**
   * Simulates sending an HTTP GET request.
   * @param destination - The destination URL or address.
   * @returns A message indicating the response.
   */
  sendGET(destination: string): string {
    if (!this.connected) {
      this.log(`Cannot perform GET. No active connection to ${destination}.`);
      return "Failed to perform GET. Connection not established.";
    }

    this.log(`Sending HTTP GET request to ${destination}...`);
    this.logHeaders();
    return `HTTP_GET_RESPONSE(Success: Data retrieved from ${destination})`;
  }

  /**
   * Simulates sending an HTTP POST request.
   * @param destination - The destination URL or address.
   * @param body - The body of the POST request.
   * @returns A message indicating the response.
   */
  sendPOST(destination: string, body: string): string {
    if (!this.connected) {
      this.log(`Cannot perform POST. No active connection to ${destination}.`);
      return "Failed to perform POST. Connection not established.";
    }

    this.log(`Sending HTTP POST request to ${destination} with body: ${body}`);
    this.logHeaders();
    return `HTTP_POST_RESPONSE(Success: Data posted to ${destination})`;
  }

  /**
   * Simulates sending an HTTP PUT request.
   * @param destination - The destination URL or address.
   * @param body - The body of the PUT request.
   * @returns A message indicating the response.
   */
  sendPUT(destination: string, body: string): string {
    if (!this.connected) {
      this.log(`Cannot perform PUT. No active connection to ${destination}.`);
      return "Failed to perform PUT. Connection not established.";
    }

    this.log(`Sending HTTP PUT request to ${destination} with body: ${body}`);
    this.logHeaders();
    return `HTTP_PUT_RESPONSE(Success: Data updated at ${destination})`;
  }

  /**
   * Simulates sending an HTTP DELETE request.
   * @param destination - The destination URL or address.
   * @returns A message indicating the response.
   */
  sendDELETE(destination: string): string {
    if (!this.connected) {
      this.log(
        `Cannot perform DELETE. No active connection to ${destination}.`
      );
      return "Failed to perform DELETE. Connection not established.";
    }

    this.log(`Sending HTTP DELETE request to ${destination}...`);
    this.logHeaders();
    return `HTTP_DELETE_RESPONSE(Success: Data deleted at ${destination})`;
  }
}
