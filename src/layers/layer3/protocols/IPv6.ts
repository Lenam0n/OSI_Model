import { NetworkProtocolBase } from "./NetworkProtocolBase";

export class IPv6 extends NetworkProtocolBase {
  constructor() {
    super({
      version: 6,
      payloadLength: 0, // Dynamisch basierend auf Daten
      source: "2001:db8::1",
      destination: "2001:db8::2",
      hopLimit: 128,
    });
  }

  getName(): string {
    return "IPv6";
  }

  addRoutingInfo(data: string): string {
    this.header.payloadLength = data.length; // Dynamisch setzen
    return super.addRoutingInfo(data);
  }
}
