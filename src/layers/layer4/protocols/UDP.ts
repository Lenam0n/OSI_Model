import { TransportProtocol } from "./TransportProtocol";

export class UDP implements TransportProtocol {
  private port: number;

  constructor(port: number = 0) {
    this.port = port; // Standardmäßig kein spezifischer Port
  }

  /**
   * Returns the name of the protocol.
   */
  getName(): string {
    return "UDP";
  }

  /**
   * Sets the port for the UDP connection.
   * @param port - The port number to set.
   */
  setPort(port: number): void {
    this.port = port;
    console.log(`[UDP] Port set to ${this.port}`);
  }

  /**
   * Simulates sending data using UDP.
   * @param data - The plaintext data to send.
   * @returns The UDP segment with headers.
   */
  send(data: string): string {
    console.log(`[UDP] Sending data on port ${this.port}...`);
    const packet = `UDP(Port=${this.port}, Data=${data})`;
    console.log(`[UDP] Data sent: ${packet}`);
    return packet;
  }

  /**
   * Simulates receiving data using UDP.
   * @param segment - The UDP segment received.
   * @returns The extracted data.
   */
  receive(segment: string): string {
    const data = segment.match(/Data=(.+)\)/)?.[1] || "UNKNOWN";
    console.log(`[UDP] Receiving data on port ${this.port}...`);
    console.log(`[UDP] Data received: ${data}`);
    return data;
  }

  /**
   * Simulates handling packet loss during transmission.
   * @returns True if the packet is successfully transmitted, otherwise false.
   */
  handlePacketLoss(): boolean {
    const isSuccessful = Math.random() > 0.2; // 80% Erfolgschance
    console.log(`[UDP] Simulating packet loss...`);
    console.log(
      `[UDP] Packet transmission ${
        isSuccessful ? "successful" : "failed due to loss"
      }.`
    );
    return isSuccessful;
  }

  /**
   * Simulates broadcasting data to all hosts in the network.
   * @param data - The data to broadcast.
   */
  broadcast(data: string): void {
    console.log(`[UDP] Broadcasting data to all hosts...`);
    console.log(`[UDP] Data broadcasted: ${data}`);
  }

  /**
   * Simulates multicasting data to a specific group.
   * @param data - The data to multicast.
   * @param group - The multicast group address.
   */
  multicast(data: string, group: string): void {
    console.log(`[UDP] Multicasting data to group ${group}...`);
    console.log(`[UDP] Data multicast: ${data}`);
  }

  /**
   * Simulates checking the integrity of a received packet.
   * @param segment - The received segment.
   * @returns True if the packet integrity is valid, otherwise false.
   */
  checkIntegrity(segment: string): boolean {
    console.log(`[UDP] Checking packet integrity...`);
    const isValid = Math.random() > 0.1; // 90% Erfolgschance
    console.log(`[UDP] Packet integrity ${isValid ? "valid" : "invalid"}.`);
    return isValid;
  }
}
