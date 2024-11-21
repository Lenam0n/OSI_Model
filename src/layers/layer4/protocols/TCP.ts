import { TransportProtocol } from "./TransportProtocol";

export class TCP implements TransportProtocol {
  private sequenceNumber = 0;

  getName(): string {
    return "TCP";
  }

  send(data: string): string {
    this.sequenceNumber++;
    console.log(`TCP: Segmenting data with Seq=${this.sequenceNumber}`);
    return `TCP(Seq=${this.sequenceNumber}, Data=${data})`;
  }

  receive(segment: string): string {
    const data = segment.match(/Data=(.+)\)/)?.[1] || "UNKNOWN";
    console.log("TCP: Reassembling segment...");
    return data;
  }
}
