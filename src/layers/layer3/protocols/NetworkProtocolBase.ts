export abstract class NetworkProtocolBase {
  protected header: Record<string, any>;

  constructor(initialHeader: Record<string, any>) {
    this.header = initialHeader;
  }

  /**
   * Returns the name of the protocol (e.g., IPv4, IPv6, ICMP).
   */
  abstract getName(): string;

  /**
   * Adds routing information to the packet.
   * @param data - The raw data to transmit.
   * @returns The packet with routing information.
   */
  addRoutingInfo(data: string): string {
    console.log(`[Layer 3: Network] ${this.getName()}: Adding header...`);
    console.log(`Header: ${JSON.stringify(this.header, null, 2)}`);
    return `${this.getName()}_HEADER(${JSON.stringify(this.header)}|${data})`;
  }

  /**
   * Removes routing information from the packet.
   * @param packet - The packet to process.
   * @returns The raw data after removing the header.
   */
  removeRoutingInfo(packet: string): string {
    console.log(`[Layer 3: Network] ${this.getName()}: Removing header...`);
    const headerMatch = packet.match(
      new RegExp(`${this.getName()}_HEADER\\((.+?)\\|`)
    );
    if (headerMatch) {
      console.log(`Extracted Header: ${headerMatch[1]}`);
    } else {
      console.log(`No ${this.getName()} header found.`);
    }
    return packet
      .replace(new RegExp(`${this.getName()}_HEADER\\((.+?)\\|`), "")
      .replace(/\)$/, "");
  }
}
