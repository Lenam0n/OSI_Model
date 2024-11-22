import { ImageProtocolBase } from "./ImageProtocolBase";

export class PNGProtocol extends ImageProtocolBase {
  constructor(imageName: string = "default_image.png") {
    super("PNG", imageName);
  }

  encode(imageData: Buffer): string {
    console.log(`[PNG] Encoding raw image data into PNG format...`);
    const encodedData = `PNG_ENCODED(${imageData.toString("base64")})`;
    console.log(`[PNG] Encoding complete: ${encodedData}`);
    return encodedData;
  }

  decode(encodedData: string): Buffer {
    console.log(`[PNG] Decoding PNG formatted image data...`);
    const match = encodedData.match(/PNG_ENCODED\((.+)\)/);
    if (!match) {
      console.error(`[PNG] Decoding error: Invalid PNG format`);
      return Buffer.alloc(0);
    }
    const decodedData = Buffer.from(match[1], "base64");
    console.log(`[PNG] Decoding complete.`);
    return decodedData;
  }

  compress(imageData: Buffer, compressionLevel: number): Buffer {
    console.log(`[PNG] Compressing image to ${compressionLevel}% quality...`);
    const compressedSize = Math.floor(
      imageData.length * (compressionLevel / 100)
    );
    const compressedData = imageData.slice(0, compressedSize); // Simuliert Kompression
    console.log(
      `[PNG] Compression complete. New size: ${compressedData.length} bytes.`
    );
    return compressedData;
  }

  extractMetadata(): Record<string, any> {
    console.log(`[PNG] Extracting metadata from ${this.imageName}...`);
    const metadata = {
      format: "PNG",
      resolution: "1920x1080",
      colorDepth: 32,
      size: "3.4MB",
      createdAt: new Date().toISOString(),
      alphaChannel: true,
    };
    console.log(
      `[PNG] Metadata extracted: ${JSON.stringify(metadata, null, 2)}`
    );
    return metadata;
  }

  resize(width: number, height: number): string {
    console.log(`[PNG] Resizing image to ${width}x${height}...`);
    const resizedMessage = `[PNG] Image resized to ${width}x${height}.`;
    console.log(resizedMessage);
    return resizedMessage;
  }
}
