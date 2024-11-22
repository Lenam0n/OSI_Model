import { PresentationProtocolBase } from "./PresentationProtocolBase";

export class JSONProtocol extends PresentationProtocolBase<string, string> {
  constructor() {
    super("JSON");
  }

  /**
   * Encodes raw data into JSON format.
   * @param data - The raw data to encode.
   * @returns The encoded JSON string.
   */
  encode(data: string): string {
    try {
      console.log(`[JSON] Encoding data...`);
      const jsonData = JSON.stringify({ data });
      console.log(`[JSON] Data successfully encoded: ${jsonData}`);
      return jsonData;
    } catch (error: any) {
      console.error(`[JSON] Encoding error: ${error.message}`);
      return "";
    }
  }

  /**
   * Decodes a JSON string back into raw data.
   * @param data - The JSON string to decode.
   * @returns The decoded raw data.
   */
  decode(data: string): string {
    try {
      console.log(`[JSON] Decoding data...`);
      const parsed = JSON.parse(data);
      const decodedData = parsed.data || "Invalid JSON";
      console.log(`[JSON] Data successfully decoded: ${decodedData}`);
      return decodedData;
    } catch (error: any) {
      console.error(`[JSON] Decoding error: ${error.message}`);
      return "Invalid JSON";
    }
  }

  /**
   * Encrypts data using Base64 encoding.
   * @param data - The plaintext data.
   * @param key - The encryption key.
   * @returns The encrypted data.
   */
  encrypt(data: string, key: string): string {
    try {
      console.log(`[JSON] Encrypting data with key: ${key}`);
      const encrypted = Buffer.from(data).toString("base64");
      const encryptedData = `ENCRYPTED(${encrypted})`;
      console.log(`[JSON] Data successfully encrypted: ${encryptedData}`);
      return encryptedData;
    } catch (error: any) {
      console.error(`[JSON] Encryption error: ${error.message}`);
      return "";
    }
  }

  /**
   * Decrypts data using Base64 decoding.
   * @param data - The encrypted data.
   * @param key - The decryption key.
   * @returns The decrypted plaintext data.
   */
  decrypt(data: string, key: string): string {
    try {
      console.log(`[JSON] Decrypting data with key: ${key}`);
      const decrypted = data.replace("ENCRYPTED(", "").replace(")", "");
      const decodedData = Buffer.from(decrypted, "base64").toString();
      console.log(`[JSON] Data successfully decrypted: ${decodedData}`);
      return decodedData;
    } catch (error: any) {
      console.error(`[JSON] Decryption error: ${error.message}`);
      return "Decryption Failed";
    }
  }

  /**
   * Converts JSON data to another format.
   * @param data - The JSON data to convert.
   * @param targetFormat - The target format (e.g., XML, YAML).
   * @returns The data in the converted format.
   */
  convertFormat(data: string, targetFormat: string): string {
    try {
      if (targetFormat === "XML") {
        console.log(`[JSON] Converting data to XML format...`);
        const parsed = JSON.parse(data);
        const xmlData = `<data>${parsed.data}</data>`;
        console.log(`[JSON] Data successfully converted to XML: ${xmlData}`);
        return xmlData;
      } else if (targetFormat === "YAML") {
        console.log(`[JSON] Converting data to YAML format...`);
        const parsed = JSON.parse(data);
        const yamlData = `data: ${parsed.data}`;
        console.log(`[JSON] Data successfully converted to YAML: ${yamlData}`);
        return yamlData;
      } else {
        console.log(
          `[JSON] Unsupported target format: ${targetFormat}. Returning raw JSON.`
        );
        return data;
      }
    } catch (error: any) {
      console.error(`[JSON] Conversion error: ${error.message}`);
      return "Conversion Failed";
    }
  }

  /**
   * Validates if a given string is a valid JSON.
   * @param data - The string to validate.
   * @returns True if the string is valid JSON, otherwise false.
   */
  validateJSON(data: string): boolean {
    try {
      console.log(`[JSON] Validating JSON...`);
      JSON.parse(data);
      console.log(`[JSON] JSON is valid.`);
      return true;
    } catch (error: any) {
      console.error(`[JSON] Validation failed: ${error.message}`);
      return false;
    }
  }
}
