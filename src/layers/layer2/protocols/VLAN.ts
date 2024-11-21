import { DataLinkProtocol } from "./DataLinkProtocol";

export class VLAN implements DataLinkProtocol {
  getName(): string {
    return "VLAN";
  }

  encode(bits: string): string {
    console.log("VLAN: Adding VLAN tag...");
    return `VLAN_TAG(${bits})`;
  }

  decode(frame: string): string {
    console.log("VLAN: Removing VLAN tag...");
    return frame.replace("VLAN_TAG(", "").replace(")", "");
  }
}
