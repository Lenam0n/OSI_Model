import { NetworkProtocol } from "./protocols/NetworkProtocol";

export class NetworkLayer {
  private protocol: NetworkProtocol;
  private destinationIP: string;

  constructor(protocol: NetworkProtocol, destinationIP: string = "127.0.0.1") {
    this.protocol = protocol;
    this.destinationIP = destinationIP;
  }

  /**
   * Sets the network protocol (e.g., IPv4, IPv6).
   * @param protocol - The network protocol to use.
   */
  setProtocol(protocol: NetworkProtocol): void {
    this.protocol = protocol;
  }

  /**
   * Sets the destination IP address.
   * @param ip - The IP address to route packets to.
   */
  setDestinationIP(ip: string): void {
    this.destinationIP = ip;
    console.log(`Network Layer: Destination IP updated to ${ip}`);
  }

  /**
   * Adds routing information (IP headers) to the data.
   * @param data - The data to route.
   * @returns The packet with routing information.
   */
  addRoutingInfo(data: string): string {
    console.log(
      `Network Layer: Adding routing info using protocol - ${this.protocol.getName()}`
    );
    return this.protocol.addRoutingInfo(
      `DestIP=${this.destinationIP}, ${data}`
    );
  }

  /**
   * Removes routing information (IP headers) from the packet.
   * @param packet - The incoming packet.
   * @returns The raw data after removing routing information.
   */
  removeRoutingInfo(packet: string): string {
    console.log(
      `Network Layer: Removing routing info using protocol - ${this.protocol.getName()}`
    );
    return this.protocol.removeRoutingInfo(packet);
  }

  /**
   * Gets the current destination IP address.
   * @returns The destination IP address.
   */
  getDestinationIP(): string {
    return this.destinationIP;
  }
}

export default NetworkLayer;
