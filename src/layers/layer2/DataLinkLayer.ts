import { DataLinkProtocol } from "./protocols/DataLinkProtocol";

export class DataLinkLayer {
  private protocol: DataLinkProtocol;
  private macAddressSource: string;
  private macAddressDestination: string;

  constructor(
    protocol: DataLinkProtocol,
    macAddressSource: string = "00:00:00:00:00:01",
    macAddressDestination: string = "00:00:00:00:00:02"
  ) {
    this.protocol = protocol;
    this.macAddressSource = macAddressSource;
    this.macAddressDestination = macAddressDestination;
  }

  /**
   * Sets the data link protocol (e.g., Ethernet, WiFi).
   */
  setProtocol(protocol: DataLinkProtocol): void {
    this.protocol = protocol;
    console.log(`Data Link Layer: Protocol switched to ${protocol.getName()}`);
  }

  /**
   * Encodes data into a frame and includes MAC addressing information.
   */
  encode(bits: string): string {
    console.log(`Data Link Layer: Using protocol - ${this.protocol.getName()}`);
    return this.protocol.encode(
      `SRC=${this.macAddressSource}, DEST=${this.macAddressDestination}, ${bits}`
    );
  }

  /**
   * Decodes a frame, removes MAC addressing information, and extracts raw data.
   */
  decode(frame: string): string {
    console.log(
      `Data Link Layer: Decoding frame using protocol - ${this.protocol.getName()}`
    );
    const rawData = this.protocol.decode(frame);
    return rawData.replace(/SRC=.*?, DEST=.*?, /, ""); // Entfernt MAC-Header
  }

  /**
   * Sets the source MAC address.
   */
  setSourceMAC(mac: string): void {
    this.macAddressSource = mac;
    console.log(`Data Link Layer: Source MAC updated to ${mac}`);
  }

  /**
   * Sets the destination MAC address.
   */
  setDestinationMAC(mac: string): void {
    this.macAddressDestination = mac;
    console.log(`Data Link Layer: Destination MAC updated to ${mac}`);
  }
}
