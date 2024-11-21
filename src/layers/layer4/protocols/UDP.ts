import { TransportProtocol } from "./TransportProtocol";

export class UDP implements TransportProtocol {
  getName(): string {
    return "UDP";
  }

  send(data: string): string {
    console.log("UDP: Sending data...");
    return `UDP(Data=${data})`;
  }

  receive(segment: string): string {
    const data = segment.match(/Data=(.+)\)/)?.[1] || "UNKNOWN";
    console.log("UDP: Receiving data...");
    return data;
  }
}
