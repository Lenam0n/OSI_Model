import { PresentationProtocolBase } from "./PresentationProtocolBase";

export abstract class ImageProtocolBase extends PresentationProtocolBase<
  Buffer,
  string
> {
  protected imageName: string;

  constructor(formatName: string, imageName: string = "default_image") {
    super(formatName);
    this.imageName = imageName;
  }

  /**
   * Encodes raw image data into the specific format.
   * @param imageData - The raw image data to encode.
   * @returns The encoded image data as a string.
   */
  abstract encode(imageData: Buffer): string;

  /**
   * Decodes formatted image data back into raw data.
   * @param encodedData - The formatted image data.
   * @returns The raw image data as a Buffer.
   */
  abstract decode(encodedData: string): Buffer;

  /**
   * Simulates compressing the image.
   * @param imageData - The raw image data to compress.
   * @param compressionLevel - The compression level (e.g., 0 to 100).
   * @returns The compressed image data.
   */
  abstract compress(imageData: Buffer, compressionLevel: number): Buffer;

  /**
   * Simulates metadata extraction from an image file.
   * @returns The extracted metadata.
   */
  abstract extractMetadata(): Record<string, any>;

  /**
   * Simulates resizing the image.
   * @param width - The new width.
   * @param height - The new height.
   * @returns A message indicating the resizing status.
   */
  abstract resize(width: number, height: number): string;
}
