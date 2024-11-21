export class PhysicalLayer {
  private transmissionErrorRate: number;

  constructor(errorRate: number = 0.0) {
    this.transmissionErrorRate = errorRate; // Fehlerwahrscheinlichkeit (0.0 bis 1.0)
  }

  /**
   * Simulates transmitting bits over the physical medium.
   * Introduces errors based on the configured error rate.
   */
  transmit(bits: string): string {
    console.log("Physical Layer: Transmitting bits...");

    if (Math.random() < this.transmissionErrorRate) {
      console.log("Physical Layer: Transmission error occurred!");
      return this.introduceError(bits);
    }

    console.log("Physical Layer: Transmission successful.");
    return bits;
  }

  /**
   * Simulates introducing errors into the transmitted bits.
   */
  private introduceError(bits: string): string {
    const bitArray = bits.split("");
    const randomIndex = Math.floor(Math.random() * bitArray.length);
    bitArray[randomIndex] = bitArray[randomIndex] === "0" ? "1" : "0"; // Flip ein Bit
    return bitArray.join("");
  }

  /**
   * Simulates calculating the transmission duration based on data size.
   */
  calculateTransmissionTime(
    dataSizeInBits: number,
    bandwidthInMbps: number
  ): number {
    const timeInSeconds = dataSizeInBits / (bandwidthInMbps * 1_000_000);
    console.log(
      `Physical Layer: Transmission time calculated: ${timeInSeconds.toFixed(
        6
      )} seconds`
    );
    return timeInSeconds;
  }

  /**
   * Sets the error rate for transmission.
   */
  setErrorRate(errorRate: number): void {
    this.transmissionErrorRate = errorRate;
    console.log(
      `Physical Layer: Transmission error rate updated to ${errorRate}`
    );
  }
}
