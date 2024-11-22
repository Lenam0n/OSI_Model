import { NetworkProtocolBase } from "./NetworkProtocolBase";

export class ICMP extends NetworkProtocolBase {
  constructor() {
    super({
      type: 8, // Echo request (typischer Ping)
      code: 0, // Code für keinen Fehler
      checksum: "abcd1234", // Beispiel-Checksumme
      identifier: 12345, // Eindeutige ID für die Anfrage
      sequenceNumber: 1, // Sequenznummer für Nachverfolgung
    });
  }

  getName(): string {
    return "ICMP";
  }

  /**
   * Simulates sending an ICMP Echo Request.
   * @param payload - The data to include in the ICMP request.
   * @returns The complete ICMP packet.
   */
  sendEchoRequest(payload: string): string {
    console.log(`[ICMP] Sending Echo Request...`);
    console.log(`Type: ${this.header.type} (Echo Request)`);
    console.log(`Code: ${this.header.code}`);
    console.log(`Identifier: ${this.header.identifier}`);
    console.log(`Sequence Number: ${this.header.sequenceNumber}`);
    console.log(`Payload: ${payload}`);

    // Increment the sequence number for the next request
    this.header.sequenceNumber++;

    return `ICMP_PACKET(${JSON.stringify(this.header)}|${payload})`;
  }

  /**
   * Simulates receiving an ICMP Echo Reply.
   * @param packet - The incoming ICMP packet.
   * @returns The extracted payload if the packet is valid.
   */
  receiveEchoReply(packet: string): string {
    console.log(`[ICMP] Receiving Echo Reply...`);

    const headerMatch = packet.match(/ICMP_PACKET\((.+?)\|/);
    const payload = packet.match(/\|(.+?)\)$/)?.[1] || "";

    if (headerMatch) {
      const header = JSON.parse(headerMatch[1]);
      console.log(`Type: ${header.type} (Echo Reply)`);
      console.log(`Code: ${header.code}`);
      console.log(`Identifier: ${header.identifier}`);
      console.log(`Sequence Number: ${header.sequenceNumber}`);
      console.log(`Payload: ${payload}`);

      // Validate the response (e.g., matching identifier)
      if (header.identifier !== this.header.identifier) {
        console.log("[ICMP] Warning: Identifier mismatch!");
      }

      return payload;
    } else {
      console.log("[ICMP] Error: Invalid packet format.");
      return "";
    }
  }
}
