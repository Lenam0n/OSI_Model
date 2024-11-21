import { DataLinkProtocol } from "./DataLinkProtocol";

export class MPLS implements DataLinkProtocol {
  getName(): string {
    return "MPLS";
  }

  encode(bits: string): string {
    console.log("MPLS: Adding MPLS label...");
    return `MPLS_LABEL(${bits})`;
  }

  decode(frame: string): string {
    console.log("MPLS: Removing MPLS label...");
    return frame.replace("MPLS_LABEL(", "").replace(")", "");
  }
}
