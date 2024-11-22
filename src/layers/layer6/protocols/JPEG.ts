import { ImageProtocolBase } from "./ImageProtocolBase";

export class JPEGProtocol extends ImageProtocolBase {
  constructor(imageName: string = "default_image.jpg") {
    super("JPEG", imageName);
  }

  encode(imageData: Buffer): string {
    console.log(`[JPEG] Encoding raw image data into JPEG format...`);
    const encodedData = `JPEG_ENCODED(${imageData.toString("base64")})`;
    console.log(`[JPEG] Encoding complete: ${encodedData}`);
    return encodedData;
  }

  decode(encodedData: string): Buffer {
    console.log(`[JPEG] Decoding JPEG formatted image data...`);
    const match = encodedData.match(/JPEG_ENCODED\((.+)\)/);
    if (!match) {
      console.error(`[JPEG] Decoding error: Invalid JPEG format`);
      return Buffer.alloc(0);
    }
    const decodedData = Buffer.from(match[1], "base64");
    console.log(`[JPEG] Decoding complete.`);
    return decodedData;
  }

  compress(imageData: Buffer, compressionLevel: number): Buffer {
    console.log(`[JPEG] Compressing image to ${compressionLevel}% quality...`);
    const compressedSize = Math.floor(
      imageData.length * (compressionLevel / 100)
    );
    const compressedData = imageData.slice(0, compressedSize); // Simuliert Kompression
    console.log(
      `[JPEG] Compression complete. New size: ${compressedData.length} bytes.`
    );
    return compressedData;
  }

  extractMetadata(): Record<string, any> {
    console.log(`[JPEG] Extracting metadata from ${this.imageName}...`);
    const metadata = {
      format: "JPEG",
      resolution: "1920x1080",
      colorDepth: 24,
      size: "2.1MB",
      createdAt: new Date().toISOString(),
    };
    console.log(
      `[JPEG] Metadata extracted: ${JSON.stringify(metadata, null, 2)}`
    );
    return metadata;
  }

  resize(width: number, height: number): string {
    console.log(`[JPEG] Resizing image to ${width}x${height}...`);
    const resizedMessage = `[JPEG] Image resized to ${width}x${height}.`;
    console.log(resizedMessage);
    return resizedMessage;
  }
}
