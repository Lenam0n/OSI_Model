import { TextEncodingProtocolBase } from "./TextEncodingProtocolBase";

export class EBCDICProtocol extends TextEncodingProtocolBase {
  constructor() {
    super("EBCDIC");
  }

  encode(text: string): Buffer {
    console.log(`[EBCDIC] Encoding text...`);
    // Simulating EBCDIC encoding (replace with a real mapping for actual use)
    const encodedBuffer = Buffer.from(
      text.split("").map((char) => char.charCodeAt(0) + 128)
    );
    console.log(
      `[EBCDIC] Encoding complete. Buffer: ${encodedBuffer.toString("hex")}`
    );
    return encodedBuffer;
  }

  decode(encodedData: Buffer): string {
    console.log(`[EBCDIC] Decoding buffer...`);
    // Simulating EBCDIC decoding (replace with a real mapping for actual use)
    const decodedText = encodedData
      .toString("ascii")
      .split("")
      .map((char) => String.fromCharCode(char.charCodeAt(0) - 128))
      .join("");
    console.log(`[EBCDIC] Decoding complete. Text: ${decodedText}`);
    return decodedText;
  }

  validate(text: string): boolean {
    console.log(`[EBCDIC] Validating text...`);
    const isValid = /^[\x00-\xFF]*$/.test(text);
    console.log(`[EBCDIC] Validation result: ${isValid ? "Valid" : "Invalid"}`);
    return isValid;
  }
}
