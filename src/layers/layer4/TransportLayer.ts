import { TransportProtocol } from "./protocols/TransportProtocol";

export class TransportLayer {
  private protocol: TransportProtocol;
  private port: number;

  constructor(protocol: TransportProtocol, port?: number) {
    this.protocol = protocol;
    this.port = port || 0; // Standardport auf 0 setzen, falls keiner angegeben ist
  }

  /**
   * Sets the protocol to be used by the transport layer.
   * @param protocol - The transport protocol (e.g., TCP, UDP)
   */
  setProtocol(protocol: TransportProtocol): void {
    this.protocol = protocol;
  }

  /**
   * Sets the port number for the transport layer.
   * @param port - The port number
   */
  setPort(port: number): void {
    this.port = port;
  }

  /**
   * Simulates sending data through the transport layer.
   * @param data - The data to send
   * @param port - Optional port to override the current port
   * @returns The segmented data with transport protocol headers
   */
  send(data: string, port?: number): string {
    const targetPort = port || this.port;
    console.log(
      `Transport Layer: Sending data using protocol - ${this.protocol.getName()} on Port ${targetPort}`
    );
    return this.protocol.send(`Port=${targetPort}, Data=${data}`);
  }

  /**
   * Simulates receiving data through the transport layer.
   * @param segment - The incoming segment
   * @returns The reassembled data
   */
  receive(segment: string): string {
    console.log(
      `Transport Layer: Receiving data using protocol - ${this.protocol.getName()}`
    );
    return this.protocol.receive(segment);
  }

  /**
   * Provides the current port number in use.
   * @returns The port number
   */
  getPort(): number {
    return this.port;
  }
}

export default TransportLayer;
