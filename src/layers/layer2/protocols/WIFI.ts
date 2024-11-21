import { DataLinkProtocol } from "./DataLinkProtocol";

export class WiFi implements DataLinkProtocol {
  getName(): string {
    return "Wi-Fi";
  }

  encode(bits: string): string {
    console.log("Wi-Fi: Encoding data into Wi-Fi frames...");
    return `WIFI_FRAME(${bits})`;
  }

  decode(frame: string): string {
    console.log("Wi-Fi: Decoding Wi-Fi frames...");
    return frame.replace("WIFI_FRAME(", "").replace(")", "");
  }
}
