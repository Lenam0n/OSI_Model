import { PresentationProtocolBase } from "./PresentationProtocolBase";

export abstract class TextEncodingProtocolBase extends PresentationProtocolBase<
  string,
  Buffer
> {
  protected encodingName: string;

  constructor(encodingName: string) {
    super(encodingName);
    this.encodingName = encodingName;
  }

  /**
   * Encodes raw text data into the specific text encoding format.
   * @param text - The raw text to encode.
   * @returns The encoded data as a Buffer.
   */
  abstract encode(text: string): Buffer;

  /**
   * Decodes encoded text data back into raw text.
   * @param encodedData - The encoded text data.
   * @returns The decoded text.
   */
  abstract decode(encodedData: Buffer): string;

  /**
   * Validates whether a given string is valid in the specific encoding format.
   * @param text - The string to validate.
   * @returns True if valid, otherwise false.
   */
  abstract validate(text: string): boolean;
}
