export abstract class PhysicalProtocolBase {
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
   * Simulates data transmission on the physical layer.
   * @param bits - The data to transmit as bits.
   * @returns The status of the transmission.
   */
  transmit(bits: string): string {
    console.log(`[${this.getName()}] Transmitting data: ${bits}`);
    return `Transmitted via ${this.getName()}: ${bits}`;
  }

  /**
   * Simulates data reception on the physical layer.
   * @param bits - The received data as bits.
   * @returns The status of the reception.
   */
  receive(bits: string): string {
    console.log(`[${this.getName()}] Receiving data: ${bits}`);
    return `Received via ${this.getName()}: ${bits}`;
  }

  /**
   * Abstract method to define specific features of the protocol.
   */
  abstract describeProtocol(): string;
}
