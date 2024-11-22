export abstract class SessionProtocolBase {
  protected protocolName: string;

  constructor(protocolName: string) {
    this.protocolName = protocolName;
  }

  /**
   * Returns the name of the protocol.
   */
  getName(): string {
    return this.protocolName;
  }

  /**
   * Simulates starting a session.
   * @returns True if the session starts successfully, otherwise false.
   */
  abstract startSession(): boolean;

  /**
   * Simulates sending data during an active session.
   * @param data - The data to send.
   */
  abstract sendData(data: string): void;

  /**
   * Simulates receiving data during an active session.
   * @param data - The data to receive.
   */
  abstract receiveData(data: string): void;

  /**
   * Simulates ending a session.
   */
  abstract endSession(): void;
}
