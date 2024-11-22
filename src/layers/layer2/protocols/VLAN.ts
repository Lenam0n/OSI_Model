import { DataLinkProtocol } from "./DataLinkProtocol";

export class VLAN implements DataLinkProtocol {
  private vlanId: number | null = null;

  constructor(vlanId?: number) {
    if (vlanId !== undefined) {
      this.vlanId = vlanId;
    }
  }

  getName(): string {
    return "VLAN";
  }

  /**
   * Encodes data with a VLAN tag.
   * @param bits - The raw data to encode.
   * @returns The encoded frame with a VLAN tag.
   */
  encode(bits: string): string {
    if (this.vlanId === null) {
      console.log("[VLAN] Error: VLAN ID not set. Cannot add VLAN tag.");
      return bits;
    }

    console.log(`[VLAN] Adding VLAN tag (ID: ${this.vlanId}) to the frame...`);
    return `VLAN_TAG(ID:${this.vlanId})_${bits}`;
  }

  /**
   * Decodes data by removing the VLAN tag.
   * @param frame - The frame to decode.
   * @returns The raw data without the VLAN tag.
   */
  decode(frame: string): string {
    console.log("[VLAN] Removing VLAN tag from the frame...");
    const match = frame.match(/VLAN_TAG\(ID:(\d+)\)_(.+)/);
    if (!match) {
      console.log("[VLAN] Error: No VLAN tag found in the frame.");
      return frame;
    }

    const [_, vlanId, data] = match;
    console.log(`[VLAN] Removed VLAN tag with ID: ${vlanId}`);
    return data;
  }

  /**
   * Sets the VLAN ID for tagging frames.
   * @param vlanId - The VLAN ID to set.
   */
  setVLANId(vlanId: number): void {
    this.vlanId = vlanId;
    console.log(`[VLAN] VLAN ID set to: ${vlanId}`);
  }

  /**
   * Simulates prioritization of VLAN frames based on QoS.
   * @param frame - The frame to prioritize.
   * @param priority - The priority level (0-7).
   * @returns The prioritized frame.
   */
  prioritizeFrame(frame: string, priority: number): string {
    if (priority < 0 || priority > 7) {
      console.log(
        "[VLAN] Error: Invalid priority level. Must be between 0 and 7."
      );
      return frame;
    }

    console.log(`[VLAN] Adding priority level (${priority}) to the frame...`);
    return `VLAN_PRIORITY(${priority})_${frame}`;
  }

  /**
   * Simulates traffic filtering based on VLAN ID.
   * @param frame - The frame to filter.
   * @returns True if the frame matches the VLAN ID, otherwise false.
   */
  filterTraffic(frame: string): boolean {
    const match = frame.match(/VLAN_TAG\(ID:(\d+)\)/);
    if (!match) {
      console.log("[VLAN] No VLAN tag found. Frame is not filtered.");
      return true;
    }

    const vlanId = parseInt(match[1], 10);
    if (this.vlanId !== null && vlanId !== this.vlanId) {
      console.log(
        `[VLAN] Frame with VLAN ID ${vlanId} does not match filter ID ${this.vlanId}. Dropping frame.`
      );
      return false;
    }

    console.log(
      `[VLAN] Frame with VLAN ID ${vlanId} matches filter ID ${this.vlanId}. Allowing frame.`
    );
    return true;
  }
}
