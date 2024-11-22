import { SessionProtocolBase } from "./SessionProtocolBase";

export class NetBIOS extends SessionProtocolBase {
  private activeSession: boolean;

  constructor() {
    super("NetBIOS");
    this.activeSession = false;
  }

  /**
   * Simulates starting a NetBIOS session.
   * @returns True if the session starts successfully, otherwise false.
   */
  startSession(): boolean {
    console.log(`[NetBIOS] Starting session...`);
    const success = Math.random() > 0.1; // 90% Erfolgschance
    if (success) {
      this.activeSession = true;
      console.log(`[NetBIOS] Session started successfully.`);
    } else {
      console.log(`[NetBIOS] Session failed to start.`);
    }
    return success;
  }

  /**
   * Simulates sending data during an active NetBIOS session.
   * @param data - The data to send.
   */
  sendData(data: string): void {
    if (!this.activeSession) {
      console.log(`[NetBIOS] Error: No active session. Cannot send data.`);
      return;
    }
    console.log(`[NetBIOS] Sending data: "${data}"`);
    console.log(`[NetBIOS] Data successfully sent.`);
  }

  /**
   * Simulates receiving data during an active NetBIOS session.
   * @param data - The data to receive.
   */
  receiveData(data: string): void {
    if (!this.activeSession) {
      console.log(`[NetBIOS] Error: No active session. Cannot receive data.`);
      return;
    }
    console.log(`[NetBIOS] Receiving data: "${data}"`);
    console.log(`[NetBIOS] Data successfully received.`);
  }

  /**
   * Simulates resolving a NetBIOS name.
   * @param name - The NetBIOS name to resolve.
   * @returns The resolved IP address.
   */
  resolveName(name: string): string {
    console.log(`[NetBIOS] Resolving name: ${name}...`);
    const ipAddress = `192.168.${Math.floor(Math.random() * 255)}.${Math.floor(
      Math.random() * 255
    )}`;
    console.log(
      `[NetBIOS] Resolved name "${name}" to IP address: ${ipAddress}`
    );
    return ipAddress;
  }

  /**
   * Simulates ending a NetBIOS session.
   */
  endSession(): void {
    if (!this.activeSession) {
      console.log(`[NetBIOS] Error: No active session to end.`);
      return;
    }
    console.log(`[NetBIOS] Ending session...`);
    this.activeSession = false;
    console.log(`[NetBIOS] Session ended.`);
  }
}
