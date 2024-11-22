export abstract class PresentationProtocolBase<TInput, TOutput> {
  protected formatName: string;

  constructor(formatName: string) {
    this.formatName = formatName;
  }

  /**
   * Returns the name of the protocol.
   */
  getName(): string {
    return this.formatName;
  }

  /**
   * Encodes raw data into the specific protocol format.
   * @param data - The raw data to encode.
   * @returns The encoded data.
   */
  abstract encode(data: TInput): TOutput;

  /**
   * Decodes formatted data back into raw data.
   * @param data - The encoded data to decode.
   * @returns The raw data.
   */
  abstract decode(data: TOutput): TInput;
}
