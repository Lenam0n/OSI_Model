import { PresentationProtocolBase } from "./PresentationProtocolBase";

export class XMLProtocol extends PresentationProtocolBase<string, string> {
  constructor() {
    super("XML");
  }

  encode(data: string): string {
    console.log(`[XML] Encoding data...`);
    const xmlData = `<data>${data}</data>`;
    console.log(`[XML] Data successfully encoded: ${xmlData}`);
    return xmlData;
  }

  decode(data: string): string {
    console.log(`[XML] Decoding data...`);
    const match = data.match(/<data>(.+)<\/data>/);
    if (!match || match.length < 2) {
      console.error(`[XML] Decoding error: Invalid XML format`);
      return "Invalid XML";
    }
    const decodedData = match[1];
    console.log(`[XML] Data successfully decoded: ${decodedData}`);
    return decodedData;
  }
}
