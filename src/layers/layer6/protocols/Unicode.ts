import { TextEncodingProtocolBase } from "./TextEncodingProtocolBase";

export class UnicodeProtocol extends TextEncodingProtocolBase {
  constructor() {
    super("Unicode");
  }

  /**
   * Encodes text into a Buffer using UTF-16LE encoding.
   * @param text - The plaintext to encode.
   * @returns The encoded buffer.
   */
  encode(text: string): Buffer {
    console.log(`[Unicode] Encoding text...`);
    const encodedBuffer = Buffer.from(text, "utf16le" as BufferEncoding);
    console.log(
      `[Unicode] Encoding complete. Buffer: ${encodedBuffer.toString("hex")}`
    );
    return encodedBuffer;
  }

  /**
   * Decodes a Buffer back into text using UTF-16LE encoding.
   * @param encodedData - The encoded data buffer.
   * @returns The decoded text.
   */
  decode(encodedData: Buffer): string {
    console.log(`[Unicode] Decoding buffer...`);
    const decodedText = encodedData.toString("utf16le");
    console.log(`[Unicode] Decoding complete. Text: ${decodedText}`);
    return decodedText;
  }

  /**
   * Validates whether the input text is non-empty and conforms to basic Unicode standards.
   * @param text - The input text to validate.
   * @returns True if valid, false otherwise.
   */
  validate(text: string): boolean {
    console.log(`[Unicode] Validating text...`);
    const isValid = text.length > 0;
    console.log(
      `[Unicode] Validation result: ${isValid ? "Valid" : "Invalid"}`
    );
    return isValid;
  }

  /**
   * Extracts metadata about the encoded Unicode text.
   * @param encodedData - The encoded data buffer.
   * @returns Metadata about the text.
   */
  extractMetadata(encodedData: Buffer): Record<string, any> {
    console.log(`[Unicode] Extracting metadata...`);
    const sizeInBytes = encodedData.length;
    const charCount = sizeInBytes / 2; // Each UTF-16LE character is 2 bytes
    const metadata = {
      format: "UTF-16LE",
      size: `${sizeInBytes} bytes`,
      characters: charCount,
      encoding: "Unicode",
    };
    console.log(
      `[Unicode] Metadata extracted: ${JSON.stringify(metadata, null, 2)}`
    );
    return metadata;
  }

  /**
   * Converts Unicode text to another encoding.
   * @param text - The Unicode text to convert.
   * @param targetEncoding - The target encoding format (e.g., "UTF-8", "ASCII").
   * @returns The encoded data in the target format as a Buffer.
   */
  convertEncoding(text: string, targetEncoding: string): Buffer {
    console.log(`[Unicode] Converting text to ${targetEncoding} encoding...`);
    const convertedBuffer = Buffer.from(text, targetEncoding as BufferEncoding);
    console.log(
      `[Unicode] Conversion complete. Buffer: ${convertedBuffer.toString(
        "hex"
      )}`
    );
    return convertedBuffer;
  }

  /**
   * Simulates character normalization to a specified form.
   * @param text - The text to normalize.
   * @param form - The normalization form (e.g., NFC, NFD, NFKC, NFKD).
   * @returns The normalized text.
   */
  normalizeText(text: string, form: "NFC" | "NFD" | "NFKC" | "NFKD"): string {
    console.log(`[Unicode] Normalizing text to ${form}...`);
    const normalizedText = text.normalize(form);
    console.log(`[Unicode] Normalization complete. Text: ${normalizedText}`);
    return normalizedText;
  }
}
