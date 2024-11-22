import { TransportProtocol } from "./TransportProtocol";

export class TCP implements TransportProtocol {
  private sequenceNumber: number;
  private acknowledgmentNumber: number;
  private isConnected: boolean;

  constructor() {
    this.sequenceNumber = 0;
    this.acknowledgmentNumber = 0;
    this.isConnected = false;
  }

  /**
   * Returns the name of the protocol.
   */
  getName(): string {
    return "TCP";
  }

  /**
   * Simulates establishing a TCP connection using a three-way handshake.
   * @returns True if the connection is established, otherwise false.
   */
  establishConnection(): boolean {
    console.log(`[TCP] Initiating three-way handshake...`);
    console.log(`[TCP] Sending SYN (Seq=${this.sequenceNumber})`);
    this.sequenceNumber++;

    const synAck = Math.random() > 0.1; // 90% Erfolgschance für SYN-ACK
    if (!synAck) {
      console.log(`[TCP] SYN-ACK not received. Connection failed.`);
      return false;
    }

    console.log(
      `[TCP] Received SYN-ACK. Sending ACK (Seq=${this.sequenceNumber})`
    );
    this.acknowledgmentNumber = this.sequenceNumber;
    this.sequenceNumber++;
    this.isConnected = true;
    console.log(`[TCP] Connection established successfully.`);
    return true;
  }

  /**
   * Simulates terminating a TCP connection using a four-way handshake.
   */
  terminateConnection(): void {
    if (!this.isConnected) {
      console.log(`[TCP] No active connection to terminate.`);
      return;
    }

    console.log(`[TCP] Terminating connection...`);
    console.log(`[TCP] Sending FIN (Seq=${this.sequenceNumber})`);
    this.sequenceNumber++;

    console.log(`[TCP] Waiting for ACK and FIN from remote...`);
    const ackReceived = Math.random() > 0.05; // 95% Erfolgschance
    if (ackReceived) {
      console.log(`[TCP] Received ACK and FIN. Sending final ACK.`);
      this.sequenceNumber++;
      this.isConnected = false;
      console.log(`[TCP] Connection terminated successfully.`);
    } else {
      console.log(`[TCP] Connection termination failed. Timeout occurred.`);
    }
  }

  /**
   * Simulates sending data as TCP segments.
   * @param data - The data to send.
   * @returns The TCP segment with headers.
   */
  send(data: string): string {
    if (!this.isConnected) {
      console.log(`[TCP] Error: No active connection. Cannot send data.`);
      return "";
    }

    this.sequenceNumber++;
    console.log(`[TCP] Segmenting data with Seq=${this.sequenceNumber}`);
    return `TCP(Seq=${this.sequenceNumber}, Data=${data})`;
  }

  /**
   * Simulates receiving and reassembling data.
   * @param segment - The incoming TCP segment.
   * @returns The reassembled data.
   */
  receive(segment: string): string {
    if (!this.isConnected) {
      console.log(`[TCP] Error: No active connection. Cannot receive data.`);
      return "";
    }

    const data = segment.match(/Data=(.+)\)/)?.[1] || "UNKNOWN";
    console.log(
      `[TCP] Reassembling segment with Ack=${this.acknowledgmentNumber}...`
    );
    this.acknowledgmentNumber++;
    console.log(`[TCP] Data reassembled: ${data}`);
    return data;
  }

  /**
   * Simulates handling packet loss during transmission.
   * @param segment - The TCP segment being transmitted.
   * @returns True if the packet is acknowledged, otherwise false.
   */
  handlePacketLoss(segment: string): boolean {
    console.log(`[TCP] Sending segment: ${segment}`);
    const ackReceived = Math.random() > 0.2; // 80% Erfolgschance für ACK
    if (ackReceived) {
      console.log(`[TCP] ACK received for segment.`);
      return true;
    } else {
      console.log(`[TCP] Packet loss detected. Retransmitting segment...`);
      return false;
    }
  }

  /**
   * Simulates flow control by adjusting the window size dynamically.
   * @returns The current window size.
   */
  manageFlowControl(): number {
    const windowSize = Math.floor(Math.random() * 1000) + 1; // Fenstergröße zwischen 1 und 1000
    console.log(`[TCP] Current flow control window size: ${windowSize} bytes`);
    return windowSize;
  }
}
