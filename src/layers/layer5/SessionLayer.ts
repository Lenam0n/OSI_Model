export class SessionLayer {
  private activeSession: boolean;
  private sessionID: string | null;

  constructor() {
    this.activeSession = false;
    this.sessionID = null;
  }

  /**
   * Starts a new session and generates a session ID.
   */
  startSession(): void {
    if (this.activeSession) {
      console.log("Session Layer: A session is already active.");
      return;
    }

    this.sessionID = this.generateSessionID();
    this.activeSession = true;
    console.log(`Session Layer: Session started with ID ${this.sessionID}`);
  }

  /**
   * Ends the current session.
   */
  endSession(): void {
    if (!this.activeSession) {
      console.log("Session Layer: No active session to end.");
      return;
    }

    console.log(`Session Layer: Session ${this.sessionID} ended.`);
    this.activeSession = false;
    this.sessionID = null;
  }

  /**
   * Simulates sending data during an active session.
   * @param data - The data to send.
   */
  sendData(data: string): void {
    if (!this.activeSession) {
      console.log("Session Layer: No active session. Cannot send data.");
      return;
    }

    console.log(
      `Session Layer: Sending data in session ${this.sessionID}: ${data}`
    );
  }

  /**
   * Generates a unique session ID.
   */
  private generateSessionID(): string {
    return `SESSION-${Math.random()
      .toString(36)
      .substring(2, 10)
      .toUpperCase()}`;
  }
}

export default SessionLayer;
