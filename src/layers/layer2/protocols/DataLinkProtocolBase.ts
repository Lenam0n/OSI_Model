import { DataLinkProtocol } from "./DataLinkProtocol";

export abstract class DataLinkProtocolBase implements DataLinkProtocol {
  protected protocolName: string;

  constructor(protocolName: string) {
    this.protocolName = protocolName;
  }

  getName(): string {
    return this.protocolName;
  }

  encode(bits: string): string {
    console.log(`[${this.getName()}] Encoding data into frames...`);
    return `${this.getName().toUpperCase()}_FRAME(${bits})`;
  }

  decode(frame: string): string {
    console.log(`[${this.getName()}] Decoding frames...`);
    return frame
      .replace(`${this.getName().toUpperCase()}_FRAME(`, "")
      .replace(")", "");
  }

  /**
   * Simulates frame collision.
   */
  handleCollision(): void {
    console.log(
      `[${this.getName()}] Frame collision detected! Retransmitting...`
    );
  }

  /**
   * Simulates frame error detection (e.g., checksum validation).
   * @param frame - The received frame.
   * @returns True if the frame is valid, otherwise false.
   */
  validateFrame(frame: string): boolean {
    const isValid = frame.includes(`${this.getName().toUpperCase()}_FRAME`);
    if (isValid) {
      console.log(`[${this.getName()}] Frame validation successful.`);
    } else {
      console.log(
        `[${this.getName()}] Frame validation failed. Corrupted frame.`
      );
    }
    return isValid;
  }

  /**
   * Analyzes frame structure and extracts metadata (e.g., source, destination).
   * @param frame - The received frame.
   * @returns Metadata and raw data.
   */
  analyzeFrame(frame: string): {
    source: string;
    destination: string;
    data: string;
  } {
    console.log(`[${this.getName()}] Analyzing frame structure...`);

    // Simulated metadata extraction
    const metadata = {
      source: "00:1A:2B:3C:4D:5E", // Example MAC address
      destination: "00:5E:4D:3C:2B:1A", // Example MAC address
      data: frame
        .replace(`${this.getName().toUpperCase()}_FRAME(`, "")
        .replace(")", ""),
    };

    console.log(
      `[${this.getName()}] Frame Metadata: ${JSON.stringify(metadata)}`
    );
    return metadata;
  }
}
