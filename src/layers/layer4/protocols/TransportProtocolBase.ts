export abstract class TransportProtocolBase {
  protected protocolName: string;
  protected port: number;

  constructor(protocolName: string, port: number) {
    this.protocolName = protocolName;
    this.port = port;
  }

  /**
   * Returns the name of the protocol.
   */
  getName(): string {
    return this.protocolName;
  }

  /**
   * Returns the default port of the protocol.
   */
  getPort(): number {
    return this.port;
  }

  /**
   * Simulates establishing a connection.
   * @returns True if the connection is established, otherwise false.
   */
  abstract establishConnection(): boolean;

  /**
   * Simulates encrypting data.
   * @param data - The plaintext data.
   * @returns The encrypted data.
   */
  abstract encryptData(data: string): string;

  /**
   * Simulates decrypting data.
   * @param data - The encrypted data.
   * @returns The decrypted plaintext.
   */
  abstract decryptData(data: string): string;
}
