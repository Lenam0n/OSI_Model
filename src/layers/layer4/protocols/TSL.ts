import { TransportProtocolBase } from "./TransportProtocolBase";

export class TLS extends TransportProtocolBase {
  private encryptionKey: string;
  private sessionId: string | null;
  private isAuthenticated: boolean;
  private handshakeComplete: boolean;

  constructor() {
    super("TLS", 443); // Standardport für HTTPS ist 443
    this.encryptionKey = "default_tls_key";
    this.sessionId = null;
    this.isAuthenticated = false;
    this.handshakeComplete = false;
  }

  /**
   * Simulates establishing a TLS connection, including the handshake process.
   * @returns True if the connection is established, otherwise false.
   */
  establishConnection(): boolean {
    console.log(`[TLS] Initiating secure connection on port ${this.port}...`);
    console.log(`[TLS] Starting handshake process...`);

    const handshakeSuccess = Math.random() > 0.1; // 90% Erfolgschance für Handshake
    if (!handshakeSuccess) {
      console.log(`[TLS] Handshake failed. Connection cannot be established.`);
      return false;
    }

    console.log(`[TLS] Handshake successful.`);
    this.handshakeComplete = true;
    this.sessionId = `TLS_SESSION_${Math.floor(Math.random() * 100000)}`;
    console.log(
      `[TLS] Secure connection established with Session ID: ${this.sessionId}.`
    );

    return true;
  }

  /**
   * Simulates authenticating the TLS connection.
   * @returns True if authentication is successful, otherwise false.
   */
  authenticate(): boolean {
    if (!this.handshakeComplete) {
      console.log(`[TLS] Error: Handshake incomplete. Cannot authenticate.`);
      return false;
    }

    console.log(
      `[TLS] Authenticating connection with Session ID: ${this.sessionId}...`
    );
    const authSuccess = Math.random() > 0.05; // 95% Erfolgschance für Authentifizierung
    this.isAuthenticated = authSuccess;

    if (authSuccess) {
      console.log(`[TLS] Authentication successful.`);
    } else {
      console.log(
        `[TLS] Authentication failed. Connection will be terminated.`
      );
      this.terminateConnection();
    }

    return authSuccess;
  }

  /**
   * Simulates encrypting data using TLS.
   * @param data - The plaintext data.
   * @returns The encrypted data.
   */
  encryptData(data: string): string {
    if (!this.isAuthenticated) {
      console.log(
        `[TLS] Error: Connection is not authenticated. Cannot encrypt data.`
      );
      return "";
    }

    console.log(`[TLS] Encrypting data with key: ${this.encryptionKey}...`);
    const encryptedData = `TLS_ENCRYPTED(${data})`;
    console.log(`[TLS] Data encrypted: ${encryptedData}`);
    return encryptedData;
  }

  /**
   * Simulates decrypting data using TLS.
   * @param data - The encrypted data.
   * @returns The decrypted plaintext.
   */
  decryptData(data: string): string {
    if (!this.isAuthenticated) {
      console.log(
        `[TLS] Error: Connection is not authenticated. Cannot decrypt data.`
      );
      return "";
    }

    console.log(`[TLS] Decrypting data with key: ${this.encryptionKey}...`);
    const decryptedData = data.replace("TLS_ENCRYPTED(", "").replace(")", "");
    console.log(`[TLS] Data decrypted: ${decryptedData}`);
    return decryptedData;
  }

  /**
   * Simulates renegotiating the TLS session.
   * @returns True if renegotiation is successful, otherwise false.
   */
  renegotiateSession(): boolean {
    if (!this.sessionId) {
      console.log(`[TLS] Error: No active session to renegotiate.`);
      return false;
    }

    console.log(
      `[TLS] Initiating session renegotiation for Session ID: ${this.sessionId}...`
    );
    const renegotiationSuccess = Math.random() > 0.15; // 85% Erfolgschance
    if (renegotiationSuccess) {
      this.sessionId = `TLS_SESSION_${Math.floor(Math.random() * 100000)}`;
      console.log(
        `[TLS] Session successfully renegotiated. New Session ID: ${this.sessionId}.`
      );
    } else {
      console.log(
        `[TLS] Session renegotiation failed. Connection will be terminated.`
      );
      this.terminateConnection();
    }

    return renegotiationSuccess;
  }

  /**
   * Simulates terminating the TLS connection.
   */
  terminateConnection(): void {
    if (!this.sessionId) {
      console.log(`[TLS] No active session to terminate.`);
      return;
    }

    console.log(
      `[TLS] Terminating connection with Session ID: ${this.sessionId}...`
    );
    this.sessionId = null;
    this.isAuthenticated = false;
    this.handshakeComplete = false;
    console.log(`[TLS] Connection terminated.`);
  }

  /**
   * Simulates detecting a downgrade attack during the handshake.
   * @returns True if a downgrade attack is detected, otherwise false.
   */
  detectDowngradeAttack(): boolean {
    console.log(`[TLS] Checking for downgrade attack during handshake...`);
    const downgradeDetected = Math.random() < 0.05; // 5% Wahrscheinlichkeit für einen Angriff
    if (downgradeDetected) {
      console.log(`[TLS] Downgrade attack detected! Terminating connection.`);
      this.terminateConnection();
    } else {
      console.log(`[TLS] No downgrade attack detected.`);
    }
    return downgradeDetected;
  }
}
