import { DataLinkProtocol } from "./DataLinkProtocol";

export class Ethernet implements DataLinkProtocol {
  getName(): string {
    return "Ethernet";
  }

  encode(bits: string): string {
    console.log("Ethernet: Encoding data into Ethernet frames...");
    return `ETHERNET_FRAME(${bits})`;
  }

  decode(frame: string): string {
    console.log("Ethernet: Decoding Ethernet frames...");
    return frame.replace("ETHERNET_FRAME(", "").replace(")", "");
  }
}
