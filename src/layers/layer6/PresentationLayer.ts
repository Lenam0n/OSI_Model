export class PresentationLayer {
  private encodingFormat: string;
  private encryptionKey: string | null;

  constructor(
    encodingFormat: string = "UTF-8",
    encryptionKey: string | null = null
  ) {
    this.encodingFormat = encodingFormat;
    this.encryptionKey = encryptionKey;
  }

  /**
   * Encodes data into the specified format.
   * @param data - The raw data to encode.
   * @returns The encoded data.
   */
  encode(data: string): string {
    console.log(
      `Presentation Layer: Encoding data with format ${this.encodingFormat}`
    );
    return `Encoded(${this.encodingFormat}): ${data}`;
  }

  /**
   * Decodes data from the specified format.
   * @param encodedData - The encoded data to decode.
   * @returns The raw data.
   */
  decode(encodedData: string): string {
    console.log(
      `Presentation Layer: Decoding data with format ${this.encodingFormat}`
    );
    return encodedData.replace(`Encoded(${this.encodingFormat}): `, "");
  }

  /**
   * Encrypts data using the configured encryption key.
   * @param data - The data to encrypt.
   * @returns The encrypted data.
   */
  encrypt(data: string): string {
    if (!this.encryptionKey) {
      console.log("Presentation Layer: No encryption key set. Cannot encrypt.");
      return data;
    }

    console.log("Presentation Layer: Encrypting data...");
    return `Encrypted(${this.encryptionKey}): ${data}`;
  }

  /**
   * Decrypts data using the configured encryption key.
   * @param encryptedData - The encrypted data to decrypt.
   * @returns The raw data.
   */
  decrypt(encryptedData: string): string {
    if (!this.encryptionKey) {
      console.log("Presentation Layer: No encryption key set. Cannot decrypt.");
      return encryptedData;
    }

    console.log("Presentation Layer: Decrypting data...");
    return encryptedData.replace(`Encrypted(${this.encryptionKey}): `, "");
  }

  /**
   * Sets the encryption key for secure data transmission.
   * @param key - The encryption key.
   */
  setEncryptionKey(key: string): void {
    this.encryptionKey = key;
    console.log(`Presentation Layer: Encryption key updated.`);
  }
}

export default PresentationLayer;
