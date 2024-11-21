import { NetworkProtocol } from "./NetworkProtocol";

export class IPv6 implements NetworkProtocol {
  getName(): string {
    return "IPv6";
  }

  addRoutingInfo(data: string): string {
    console.log("IPv6: Adding IPv6 header...");
    return `IPv6_HEADER(${data})`;
  }

  removeRoutingInfo(packet: string): string {
    console.log("IPv6: Removing IPv6 header...");
    return packet.replace("IPv6_HEADER(", "").replace(")", "");
  }
}
