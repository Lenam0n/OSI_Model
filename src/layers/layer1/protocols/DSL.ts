import { PhysicalProtocolBase } from "./PhysicalProtocolBase";

export class DSL extends PhysicalProtocolBase {
  constructor() {
    super("DSL (Digital Subscriber Line)");
  }

  /**
   * Describes the DSL protocol and its purpose.
   * @returns A detailed description of the protocol.
   */
  describeProtocol(): string {
    return `[DSL] A technology for transmitting digital data over traditional copper telephone lines. Supports both voice and data simultaneously using frequency division multiplexing.`;
  }

  /**
   * Simulates measuring the noise level on the DSL line.
   * @returns The noise level in dB.
   */
  measureLineNoise(): number {
    console.log(`[DSL] Measuring line noise...`);
    const noiseLevel = Math.floor(Math.random() * 50); // Simuliert Rauschpegel zwischen 0 und 50 dB
    console.log(`[DSL] Line noise measured: ${noiseLevel} dB`);
    return noiseLevel;
  }

  /**
   * Simulates synchronizing the DSL connection.
   * @returns True if synchronization is successful, otherwise false.
   */
  synchronizeConnection(): boolean {
    console.log(`[DSL] Synchronizing connection...`);
    const noiseLevel = this.measureLineNoise();
    const isSynchronized = noiseLevel < 30; // Synchronisation erfolgreich, wenn Rauschpegel < 30 dB
    if (isSynchronized) {
      console.log(`[DSL] Connection synchronized successfully.`);
    } else {
      console.log(
        `[DSL] Synchronization failed due to high line noise (${noiseLevel} dB).`
      );
    }
    return isSynchronized;
  }

  /**
   * Simulates transmitting data over a DSL connection.
   * @param data - The data to transmit.
   * @returns A confirmation of successful transmission or an error message.
   */
  transmitData(data: string): string {
    console.log(`[DSL] Preparing to transmit data...`);
    if (!this.synchronizeConnection()) {
      return `[DSL] Data transmission failed due to unsynchronized connection.`;
    }

    console.log(`[DSL] Data is being modulated and transmitted...`);
    const transmittedData = `DSL_MODULATED(${data})`;
    console.log(`[DSL] Data transmitted: ${transmittedData}`);
    return transmittedData;
  }

  /**
   * Simulates receiving data over a DSL connection.
   * @param data - The modulated data to decode.
   * @returns The decoded data.
   */
  receiveData(data: string): string {
    console.log(`[DSL] Receiving data...`);
    const match = data.match(/DSL_MODULATED\((.+?)\)/);
    if (!match) {
      console.log(`[DSL] Error: Received corrupted data.`);
      return "";
    }

    const decodedData = match[1];
    console.log(`[DSL] Data received and decoded: ${decodedData}`);
    return decodedData;
  }

  /**
   * Simulates detecting line errors and requesting retransmission.
   */
  detectAndHandleErrors(): void {
    console.log(`[DSL] Detecting line errors...`);
    const errorDetected = Math.random() > 0.8; // 20% Wahrscheinlichkeit für einen Fehler
    if (errorDetected) {
      console.log(`[DSL] Line error detected! Requesting retransmission...`);
    } else {
      console.log(`[DSL] No errors detected. Line is stable.`);
    }
  }
}
