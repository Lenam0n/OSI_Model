import { TextEncodingProtocolBase } from "./TextEncodingProtocolBase";

export class ASCIIProtocol extends TextEncodingProtocolBase {
  constructor() {
    super("ASCII");
  }

  /**
   * Encodes text into ASCII format as a Buffer.
   * @param text - The plaintext to encode.
   * @returns The encoded buffer.
   */
  encode(text: string): Buffer {
    console.log(`[ASCII] Encoding text...`);
    const encodedBuffer = Buffer.from(text, "ascii" as BufferEncoding);
    console.log(
      `[ASCII] Encoding complete. Buffer: ${encodedBuffer.toString("hex")}`
    );
    return encodedBuffer;
  }

  /**
   * Decodes ASCII Buffer back into text.
   * @param encodedData - The encoded ASCII data.
   * @returns The decoded text.
   */
  decode(encodedData: Buffer): string {
    console.log(`[ASCII] Decoding buffer...`);
    const decodedText = encodedData.toString("ascii");
    console.log(`[ASCII] Decoding complete. Text: ${decodedText}`);
    return decodedText;
  }

  /**
   * Validates whether the input text contains only valid ASCII characters.
   * @param text - The input text to validate.
   * @returns True if valid, false otherwise.
   */
  validate(text: string): boolean {
    console.log(`[ASCII] Validating text...`);
    const isValid = /^[\x00-\x7F]*$/.test(text);
    console.log(`[ASCII] Validation result: ${isValid ? "Valid" : "Invalid"}`);
    return isValid;
  }

  /**
   * Extracts metadata about the ASCII text.
   * @param encodedData - The encoded data buffer.
   * @returns Metadata about the text.
   */
  extractMetadata(encodedData: Buffer): Record<string, any> {
    console.log(`[ASCII] Extracting metadata...`);
    const sizeInBytes = encodedData.length;
    const charCount = sizeInBytes; // 1 Byte per character in ASCII
    const metadata = {
      format: "ASCII",
      size: `${sizeInBytes} bytes`,
      characters: charCount,
      encoding: "ASCII",
    };
    console.log(
      `[ASCII] Metadata extracted: ${JSON.stringify(metadata, null, 2)}`
    );
    return metadata;
  }

  /**
   * Converts ASCII text to another encoding.
   * @param text - The ASCII text to convert.
   * @param targetEncoding - The target encoding format (e.g., "UTF-8").
   * @returns The converted data in the target format as a Buffer.
   */
  convertEncoding(text: string, targetEncoding: string): Buffer {
    console.log(`[ASCII] Converting text to ${targetEncoding} encoding...`);
    const convertedBuffer = Buffer.from(text, targetEncoding as BufferEncoding);
    console.log(
      `[ASCII] Conversion complete. Buffer: ${convertedBuffer.toString("hex")}`
    );
    return convertedBuffer;
  }

  /**
   * Simulates trimming non-ASCII characters from the text.
   * @param text - The input text.
   * @returns The text containing only valid ASCII characters.
   */
  trimNonASCIICharacters(text: string): string {
    console.log(`[ASCII] Trimming non-ASCII characters...`);
    const trimmedText = text.replace(/[^\x00-\x7F]/g, "");
    console.log(`[ASCII] Trimmed text: ${trimmedText}`);
    return trimmedText;
  }
}
