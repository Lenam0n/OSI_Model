import { NetworkProtocol } from "./NetworkProtocol";

export class IPv4 implements NetworkProtocol {
  getName(): string {
    return "IPv4";
  }

  addRoutingInfo(data: string): string {
    console.log("IPv4: Adding IPv4 header...");
    return `IPv4_HEADER(${data})`;
  }

  removeRoutingInfo(packet: string): string {
    console.log("IPv4: Removing IPv4 header...");
    return packet.replace("IPv4_HEADER(", "").replace(")", "");
  }
}
