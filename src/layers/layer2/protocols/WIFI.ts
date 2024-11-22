import { DataLinkProtocolBase } from "./DataLinkProtocolBase";

export class WiFi extends DataLinkProtocolBase {
  constructor() {
    super("Wi-Fi");
  }

  /**
   * Simulates signal strength measurement.
   * @returns The current signal strength in dBm.
   */
  measureSignalStrength(): number {
    const signalStrength = Math.floor(Math.random() * 100) - 100; // Example: Random -100 to 0 dBm
    console.log(`[Wi-Fi] Measuring signal strength...`);
    console.log(`[Wi-Fi] Current signal strength: ${signalStrength} dBm`);
    return signalStrength;
  }

  /**
   * Simulates adding encryption to Wi-Fi frames.
   * @param bits - The data to encrypt.
   * @param key - The encryption key.
   * @returns The encrypted frame.
   */
  encrypt(bits: string, key: string): string {
    console.log(`[Wi-Fi] Starting encryption process...`);
    console.log(`[Wi-Fi] Using key: ${key}`);
    const encryptedFrame = `WIFI_ENCRYPTED(${key})_${this.encode(bits)}`;
    console.log(`[Wi-Fi] Frame successfully encrypted: ${encryptedFrame}`);
    return encryptedFrame;
  }

  /**
   * Simulates decrypting Wi-Fi frames.
   * @param frame - The encrypted frame.
   * @param key - The decryption key.
   * @returns The decrypted data if the key matches.
   */
  decrypt(frame: string, key: string): string {
    console.log(`[Wi-Fi] Starting decryption process...`);
    const match = frame.match(/WIFI_ENCRYPTED\((.+?)\)_(.+)/);
    if (!match) {
      console.log(`[Wi-Fi] Invalid frame format. Cannot decrypt.`);
      return "";
    }

    const [_, encryptionKey, data] = match;
    if (encryptionKey !== key) {
      console.log(`[Wi-Fi] Decryption failed. Key mismatch!`);
      return "";
    }

    const decryptedData = this.decode(data);
    console.log(`[Wi-Fi] Frame successfully decrypted: ${decryptedData}`);
    return decryptedData;
  }

  /**
   * Simulates handling interference and adjusting frequency channels.
   * @returns The new channel being used.
   */
  handleInterference(): number {
    console.log(`[Wi-Fi] Detecting interference...`);
    const currentChannel = Math.floor(Math.random() * 13) + 1; // Example: Random channel between 1 and 13
    const newChannel = currentChannel === 13 ? 1 : currentChannel + 1; // Switch to next channel
    console.log(
      `[Wi-Fi] Interference detected on channel ${currentChannel}. Switching to channel ${newChannel}.`
    );
    return newChannel;
  }

  /**
   * Simulates frame fragmentation for Wi-Fi.
   * @param bits - The data to fragment.
   * @param maxFragmentSize - The maximum size of each fragment.
   * @returns An array of fragmented frames.
   */
  fragment(bits: string, maxFragmentSize: number): string[] {
    console.log(`[Wi-Fi] Starting fragmentation...`);
    console.log(`[Wi-Fi] Max fragment size: ${maxFragmentSize}`);
    const fragments: string[] = [];
    for (let i = 0; i < bits.length; i += maxFragmentSize) {
      const fragment = bits.slice(i, i + maxFragmentSize);
      fragments.push(this.encode(fragment));
      console.log(`[Wi-Fi] Created fragment: ${this.encode(fragment)}`);
    }
    console.log(
      `[Wi-Fi] Fragmentation complete. Total fragments: ${fragments.length}`
    );
    return fragments;
  }

  /**
   * Simulates reassembling Wi-Fi frames into the original data.
   * @param fragments - The array of fragmented frames.
   * @returns The reassembled data.
   */
  reassemble(fragments: string[]): string {
    console.log(`[Wi-Fi] Starting reassembly process...`);
    const reassembledData = fragments
      .map((frame) => this.decode(frame))
      .join("");
    console.log(
      `[Wi-Fi] Reassembly complete. Reassembled data: ${reassembledData}`
    );
    return reassembledData;
  }
}
