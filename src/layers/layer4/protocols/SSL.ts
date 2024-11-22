import { TransportProtocolBase } from "./TransportProtocolBase";

export class SSL extends TransportProtocolBase {
  private encryptionKey: string;
  private sessionId: string | null;
  private isAuthenticated: boolean;

  constructor() {
    super("SSL", 443); // Standardport für HTTPS ist 443
    this.encryptionKey = "default_ssl_key";
    this.sessionId = null;
    this.isAuthenticated = false;
  }

  /**
   * Simulates establishing an SSL connection.
   * @returns True if the connection is established, otherwise false.
   */
  establishConnection(): boolean {
    console.log(
      `[SSL] Establishing a secure connection on port ${this.port}...`
    );
    const success = Math.random() > 0.1; // 90% Erfolgschance
    if (success) {
      this.sessionId = `SESSION_${Math.floor(Math.random() * 100000)}`;
      console.log(
        `[SSL] Connection established with Session ID: ${this.sessionId}.`
      );
    } else {
      console.log(`[SSL] Connection failed.`);
    }
    return success;
  }

  /**
   * Simulates authenticating the SSL connection.
   * @returns True if authentication is successful, otherwise false.
   */
  authenticate(): boolean {
    if (!this.sessionId) {
      console.log(`[SSL] Error: No active session. Cannot authenticate.`);
      return false;
    }

    console.log(
      `[SSL] Authenticating connection with Session ID: ${this.sessionId}...`
    );
    const authSuccess = Math.random() > 0.1; // 90% Erfolgschance
    this.isAuthenticated = authSuccess;

    if (authSuccess) {
      console.log(`[SSL] Authentication successful.`);
    } else {
      console.log(`[SSL] Authentication failed. Disconnecting...`);
      this.sessionId = null;
    }

    return authSuccess;
  }

  /**
   * Simulates encrypting data using SSL.
   * @param data - The plaintext data.
   * @returns The encrypted data.
   */
  encryptData(data: string): string {
    if (!this.isAuthenticated) {
      console.log(
        `[SSL] Error: Connection is not authenticated. Cannot encrypt data.`
      );
      return "";
    }

    console.log(`[SSL] Encrypting data with key: ${this.encryptionKey}...`);
    const encryptedData = `SSL_ENCRYPTED(${data})`;
    console.log(`[SSL] Data encrypted: ${encryptedData}`);
    return encryptedData;
  }

  /**
   * Simulates decrypting data using SSL.
   * @param data - The encrypted data.
   * @returns The decrypted plaintext.
   */
  decryptData(data: string): string {
    if (!this.isAuthenticated) {
      console.log(
        `[SSL] Error: Connection is not authenticated. Cannot decrypt data.`
      );
      return "";
    }

    console.log(`[SSL] Decrypting data with key: ${this.encryptionKey}...`);
    const decryptedData = data.replace("SSL_ENCRYPTED(", "").replace(")", "");
    console.log(`[SSL] Data decrypted: ${decryptedData}`);
    return decryptedData;
  }

  /**
   * Simulates terminating the SSL connection.
   */
  terminateConnection(): void {
    if (!this.sessionId) {
      console.log(`[SSL] No active session to terminate.`);
      return;
    }

    console.log(
      `[SSL] Terminating connection with Session ID: ${this.sessionId}...`
    );
    this.sessionId = null;
    this.isAuthenticated = false;
    console.log(`[SSL] Connection terminated.`);
  }

  /**
   * Simulates a session renegotiation.
   * @returns True if renegotiation is successful, otherwise false.
   */
  renegotiateSession(): boolean {
    if (!this.sessionId) {
      console.log(`[SSL] Error: No active session to renegotiate.`);
      return false;
    }

    console.log(
      `[SSL] Initiating session renegotiation for Session ID: ${this.sessionId}...`
    );
    const success = Math.random() > 0.2; // 80% Erfolgschance
    if (success) {
      this.sessionId = `SESSION_${Math.floor(Math.random() * 100000)}`;
      console.log(
        `[SSL] Session successfully renegotiated. New Session ID: ${this.sessionId}.`
      );
    } else {
      console.log(`[SSL] Session renegotiation failed. Disconnecting...`);
      this.terminateConnection();
    }

    return success;
  }
}
