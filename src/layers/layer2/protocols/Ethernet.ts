import { DataLinkProtocolBase } from "./DataLinkProtocolBase";

export class Ethernet extends DataLinkProtocolBase {
  constructor() {
    super("Ethernet");
  }

  /**
   * Simulates Ethernet-specific functionality, such as VLAN tagging.
   * @param bits - The data to tag.
   * @param vlanId - The VLAN ID to apply.
   * @returns The tagged frame.
   */
  addVLANTag(bits: string, vlanId: number): string {
    console.log(`[Ethernet] Adding VLAN Tag (${vlanId}) to the frame...`);
    return `ETHERNET_VLAN(${vlanId})_${this.encode(bits)}`;
  }

  /**
   * Simulates adding a checksum for error detection in Ethernet frames.
   * @param bits - The data to add a checksum to.
   * @returns The frame with a checksum.
   */
  addChecksum(bits: string): string {
    const checksum = this.calculateChecksum(bits);
    console.log(`[Ethernet] Adding checksum (${checksum}) to the frame...`);
    return `${this.encode(bits)}_CHECKSUM(${checksum})`;
  }

  /**
   * Validates the checksum of an Ethernet frame.
   * @param frame - The frame to validate.
   * @returns True if the checksum is valid, otherwise false.
   */
  validateChecksum(frame: string): boolean {
    const data = frame.match(/ETHERNET_FRAME\((.+?)\)_CHECKSUM/);
    const checksum = frame.match(/CHECKSUM\((.+?)\)/)?.[1];
    if (!data || !checksum) {
      console.log("[Ethernet] Invalid frame format. Missing checksum.");
      return false;
    }

    const calculatedChecksum = this.calculateChecksum(data[1]);
    const isValid = calculatedChecksum === checksum;
    if (isValid) {
      console.log(`[Ethernet] Checksum is valid (${checksum}).`);
    } else {
      console.log(
        `[Ethernet] Checksum mismatch! Expected (${calculatedChecksum}), but got (${checksum}).`
      );
    }
    return isValid;
  }

  /**
   * Simulates fragmenting a large Ethernet frame into smaller ones.
   * @param bits - The data to fragment.
   * @param maxFrameSize - The maximum size of each frame.
   * @returns An array of fragmented frames.
   */
  fragment(bits: string, maxFrameSize: number): string[] {
    console.log(
      `[Ethernet] Fragmenting data into frames of size ${maxFrameSize}...`
    );
    const fragments: string[] = [];
    for (let i = 0; i < bits.length; i += maxFrameSize) {
      const fragment = bits.slice(i, i + maxFrameSize);
      fragments.push(this.encode(fragment));
    }
    console.log(`[Ethernet] Created ${fragments.length} fragments.`);
    return fragments;
  }

  /**
   * Simulates reassembling fragmented Ethernet frames into the original data.
   * @param frames - The array of fragmented frames.
   * @returns The reassembled data.
   */
  reassemble(frames: string[]): string {
    console.log("[Ethernet] Reassembling fragments into original data...");
    const reassembledData = frames.map((frame) => this.decode(frame)).join("");
    console.log("[Ethernet] Reassembly complete.");
    return reassembledData;
  }

  /**
   * Calculates a simple checksum for the given data.
   * @param data - The data to calculate a checksum for.
   * @returns The checksum as a string.
   */
  private calculateChecksum(data: string): string {
    let checksum = 0;
    for (const char of data) {
      checksum += char.charCodeAt(0);
    }
    return checksum.toString(16); // Return as a hexadecimal string
  }
}
