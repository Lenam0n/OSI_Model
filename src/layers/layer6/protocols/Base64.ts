import { PresentationProtocolBase } from "./PresentationProtocolBase";

export class Base64Protocol extends PresentationProtocolBase<string, string> {
  constructor() {
    super("Base64");
  }

  /**
   * Encodes raw data into Base64 format.
   * @param data - The raw data to encode.
   * @returns The Base64 encoded string.
   */
  encode(data: string): string {
    try {
      console.log(`[Base64] Encoding data...`);
      const base64Data = Buffer.from(data).toString("base64");
      console.log(`[Base64] Data successfully encoded: ${base64Data}`);
      return base64Data;
    } catch (error: any) {
      console.error(`[Base64] Encoding error: ${error.message}`);
      return "";
    }
  }

  /**
   * Decodes Base64 formatted data back into raw data.
   * @param data - The Base64 encoded string.
   * @returns The decoded raw data.
   */
  decode(data: string): string {
    try {
      console.log(`[Base64] Decoding data...`);
      const decodedData = Buffer.from(data, "base64").toString();
      console.log(`[Base64] Data successfully decoded: ${decodedData}`);
      return decodedData;
    } catch (error: any) {
      console.error(`[Base64] Decoding error: ${error.message}`);
      return "Invalid Base64";
    }
  }

  /**
   * Validates if a given string is valid Base64.
   * @param data - The string to validate.
   * @returns True if the string is valid Base64, otherwise false.
   */
  validateBase64(data: string): boolean {
    console.log(`[Base64] Validating Base64 string...`);
    const base64Regex = /^[A-Za-z0-9+/]+={0,2}$/;
    const isValid = base64Regex.test(data);
    console.log(`[Base64] Validation result: ${isValid ? "Valid" : "Invalid"}`);
    return isValid;
  }

  /**
   * Simulates encrypting data using a key and encoding it in Base64.
   * @param data - The plaintext data.
   * @param key - The encryption key.
   * @returns The encrypted and Base64 encoded string.
   */
  encrypt(data: string, key: string): string {
    console.log(`[Base64] Encrypting data with key: ${key}`);
    const encrypted = `${key}:${data}`;
    return this.encode(encrypted);
  }

  /**
   * Simulates decrypting Base64 encoded data using a key.
   * @param data - The Base64 encoded string.
   * @param key - The decryption key.
   * @returns The decrypted plaintext data.
   */
  decrypt(data: string, key: string): string {
    try {
      console.log(`[Base64] Decrypting data with key: ${key}`);
      const decodedData = this.decode(data);
      if (!decodedData.startsWith(`${key}:`)) {
        console.error(
          `[Base64] Decryption error: Invalid key or corrupted data.`
        );
        return "Decryption Failed";
      }
      const plaintext = decodedData.replace(`${key}:`, "");
      console.log(`[Base64] Data successfully decrypted: ${plaintext}`);
      return plaintext;
    } catch (error: any) {
      console.error(`[Base64] Decryption error: ${error.message}`);
      return "Decryption Failed";
    }
  }

  /**
   * Converts Base64 data to another format.
   * @param data - The Base64 encoded string.
   * @param targetFormat - The target format (e.g., PlainText, JSON, Hexadecimal).
   * @returns The data in the converted format.
   */
  convertFormat(data: string, targetFormat: string): string {
    try {
      console.log(
        `[Base64] Converting Base64 data to ${targetFormat} format...`
      );
      const decodedData = this.decode(data);

      switch (targetFormat.toLowerCase()) {
        case "plaintext":
          console.log(`[Base64] Converted data to plain text: ${decodedData}`);
          return decodedData;

        case "json":
          const jsonData = JSON.stringify({ data: decodedData });
          console.log(`[Base64] Converted data to JSON: ${jsonData}`);
          return jsonData;

        case "hexadecimal":
          const hexData = Buffer.from(decodedData).toString("hex");
          console.log(`[Base64] Converted data to Hexadecimal: ${hexData}`);
          return hexData;

        default:
          throw new Error(`Unsupported target format: ${targetFormat}`);
      }
    } catch (error: any) {
      console.error(`[Base64] Conversion error: ${error.message}`);
      return "Conversion Failed";
    }
  }
}
