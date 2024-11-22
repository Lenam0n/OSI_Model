import { ImageProtocolBase } from "./ImageProtocolBase";

export class GIFProtocol extends ImageProtocolBase {
  constructor(imageName: string = "default_image.gif") {
    super("GIF", imageName);
  }

  encode(imageData: Buffer): string {
    console.log(`[GIF] Encoding raw image data into GIF format...`);
    const encodedData = `GIF_ENCODED(${imageData.toString("base64")})`;
    console.log(`[GIF] Encoding complete: ${encodedData}`);
    return encodedData;
  }

  decode(encodedData: string): Buffer {
    console.log(`[GIF] Decoding GIF formatted image data...`);
    const match = encodedData.match(/GIF_ENCODED\((.+)\)/);
    if (!match) {
      console.error(`[GIF] Decoding error: Invalid GIF format`);
      return Buffer.alloc(0);
    }
    const decodedData = Buffer.from(match[1], "base64");
    console.log(`[GIF] Decoding complete.`);
    return decodedData;
  }

  compress(imageData: Buffer, compressionLevel: number): Buffer {
    console.log(`[GIF] Compressing image to ${compressionLevel}% quality...`);
    const compressedSize = Math.floor(
      imageData.length * (compressionLevel / 100)
    );
    const compressedData = imageData.slice(0, compressedSize); // Simuliert Kompression
    console.log(
      `[GIF] Compression complete. New size: ${compressedData.length} bytes.`
    );
    return compressedData;
  }

  extractMetadata(): Record<string, any> {
    console.log(`[GIF] Extracting metadata from ${this.imageName}...`);
    const metadata = {
      format: "GIF",
      resolution: "640x480",
      colorDepth: 8,
      size: "1.2MB",
      createdAt: new Date().toISOString(),
      animated: true,
    };
    console.log(
      `[GIF] Metadata extracted: ${JSON.stringify(metadata, null, 2)}`
    );
    return metadata;
  }

  resize(width: number, height: number): string {
    console.log(`[GIF] Resizing image to ${width}x${height}...`);
    const resizedMessage = `[GIF] Image resized to ${width}x${height}.`;
    console.log(resizedMessage);
    return resizedMessage;
  }
}
