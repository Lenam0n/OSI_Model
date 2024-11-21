import { NetworkProtocol } from "./NetworkProtocol";

export class ICMP implements NetworkProtocol {
  getName(): string {
    return "ICMP";
  }

  addRoutingInfo(data: string): string {
    console.log("ICMP: Adding ICMP header...");
    return `ICMP_HEADER(${data})`;
  }

  removeRoutingInfo(packet: string): string {
    console.log("ICMP: Removing ICMP header...");
    return packet.replace("ICMP_HEADER(", "").replace(")", "");
  }
}
