import { DataLinkProtocolBase } from "./DataLinkProtocolBase";

export class PointToPointProtocol extends DataLinkProtocolBase {
  private connectionStatus: boolean;
  private authenticated: boolean;

  constructor() {
    super("Point-to-Point Protocol (PPP)");
    this.connectionStatus = false;
    this.authenticated = false;
  }

  /**
   * Describes the PPP protocol and its purpose.
   * @returns A detailed description of the protocol.
   */
  describeProtocol(): string {
    return `[PPP] Provides reliable data link layer communication over point-to-point connections. Includes support for authentication, compression, and error detection. Commonly used in broadband connections.`;
  }

  /**
   * Simulates establishing a point-to-point connection.
   * @returns True if the connection is established, otherwise false.
   */
  establishConnection(): boolean {
    console.log(`[PPP] Initiating connection establishment process...`);
    console.log(`[PPP] Verifying line integrity...`);
    const lineStatus = Math.random() > 0.1; // 90% Wahrscheinlichkeit für eine stabile Leitung
    if (!lineStatus) {
      console.log(
        `[PPP] Line integrity check failed. Connection cannot be established.`
      );
      this.connectionStatus = false;
      return false;
    }

    console.log(`[PPP] Line integrity verified.`);
    console.log(`[PPP] Negotiating link parameters...`);
    const negotiationSuccess = Math.random() > 0.2; // 80% Wahrscheinlichkeit für erfolgreiche Verhandlung
    if (!negotiationSuccess) {
      console.log(`[PPP] Link parameter negotiation failed.`);
      this.connectionStatus = false;
      return false;
    }

    console.log(`[PPP] Link parameters successfully negotiated.`);
    this.connectionStatus = true;
    console.log(`[PPP] Point-to-point connection established.`);
    return true;
  }

  /**
   * Simulates authenticating a PPP connection.
   * @returns True if authentication is successful, otherwise false.
   */
  authenticate(): boolean {
    if (!this.connectionStatus) {
      console.log(`[PPP] Error: No active connection. Cannot authenticate.`);
      this.authenticated = false;
      return false;
    }

    console.log(`[PPP] Starting authentication process...`);
    console.log(`[PPP] Verifying credentials...`);
    const authSuccess = Math.random() > 0.1; // 90% Wahrscheinlichkeit für erfolgreiche Authentifizierung
    if (!authSuccess) {
      console.log(`[PPP] Authentication failed. Disconnecting...`);
      this.connectionStatus = false;
      this.authenticated = false;
      return false;
    }

    console.log(`[PPP] Credentials verified successfully.`);
    this.authenticated = true;
    console.log(`[PPP] Authentication complete.`);
    return true;
  }

  /**
   * Simulates data transmission over the PPP connection.
   * @param data - The data to transmit.
   * @returns A confirmation message or an error.
   */
  transmitData(data: string): string {
    if (!this.connectionStatus || !this.authenticated) {
      console.log(
        `[PPP] Error: Cannot transmit data. Connection is not authenticated or established.`
      );
      return "Transmission failed.";
    }

    console.log(`[PPP] Compressing data for efficient transmission...`);
    const compressedData = `PPP_COMPRESSED(${data})`;
    console.log(`[PPP] Data compressed: ${compressedData}`);
    console.log(`[PPP] Transmitting data...`);
    return `Data transmitted: ${compressedData}`;
  }

  /**
   * Simulates receiving data over the PPP connection.
   * @param compressedData - The compressed data received.
   * @returns The decompressed data.
   */
  receiveData(compressedData: string): string {
    if (!this.connectionStatus || !this.authenticated) {
      console.log(
        `[PPP] Error: Cannot receive data. Connection is not authenticated or established.`
      );
      return "";
    }

    console.log(`[PPP] Receiving data...`);
    console.log(`[PPP] Decompressing received data...`);
    const match = compressedData.match(/PPP_COMPRESSED\((.+?)\)/);
    if (!match) {
      console.log(`[PPP] Error: Received corrupted data.`);
      return "";
    }

    const decompressedData = match[1];
    console.log(`[PPP] Data decompressed successfully: ${decompressedData}`);
    return decompressedData;
  }

  /**
   * Simulates disconnecting the PPP connection.
   */
  disconnect(): void {
    console.log(`[PPP] Disconnecting the point-to-point connection...`);
    this.connectionStatus = false;
    this.authenticated = false;
    console.log(`[PPP] Connection successfully terminated.`);
  }
}
