export abstract class ApplicationProtocolBase {
  protected protocolName: string;

  constructor(protocolName: string) {
    this.protocolName = protocolName;
  }

  /**
   * Returns the name of the application protocol.
   */
  getProtocolName(): string {
    return this.protocolName;
  }

  /**
   * Simulates sending data using the application protocol.
   * @param data - The data to send.
   * @param destination - The destination address or identifier.
   * @returns A message indicating the status of the operation.
   */
  abstract sendData(data: string, destination: string): string;

  /**
   * Simulates receiving data using the application protocol.
   * @param data - The incoming data.
   * @returns The processed data.
   */
  abstract receiveData(data: string): string;

  /**
   * Simulates setting up a connection or session for the application protocol.
   * @param destination - The destination address or identifier.
   * @returns True if the connection is successful, otherwise false.
   */
  abstract setupConnection(destination: string): boolean;

  /**
   * Simulates tearing down a connection or session for the application protocol.
   * @param destination - The destination address or identifier.
   * @returns A message indicating the disconnection status.
   */
  abstract teardownConnection(destination: string): string;

  /**
   * Logs detailed information about the protocol operation.
   * @param message - The log message.
   */
  log(message: string): void {
    console.log(`[${this.protocolName}] ${message}`);
  }
}
