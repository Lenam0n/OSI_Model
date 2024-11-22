import { PhysicalProtocolBase } from "./PhysicalProtocolBase";

export class FiberOptic extends PhysicalProtocolBase {
  constructor() {
    super("Fiber Optic");
  }

  /**
   * Describes the Fiber Optic protocol and its purpose.
   * @returns A detailed description of the protocol.
   */
  describeProtocol(): string {
    return `[Fiber Optic] Uses light signals transmitted through glass or plastic fibers for high-speed, long-distance data transmission. Known for its low latency and high bandwidth capabilities.`;
  }

  /**
   * Simulates checking the light signal in the fiber optic cable.
   * @returns True if the signal is stable, otherwise false.
   */
  checkLightSignal(): boolean {
    console.log(`[Fiber Optic] Checking light signal integrity...`);
    const status = Math.random() > 0.1; // 90% Wahrscheinlichkeit für ein funktionierendes Signal
    console.log(
      `[Fiber Optic] Light signal is ${status ? "stable" : "unstable"}.`
    );
    return status;
  }

  /**
   * Simulates measuring the attenuation of the fiber optic signal.
   * @returns The attenuation in dB/km.
   */
  measureSignalAttenuation(): number {
    console.log(`[Fiber Optic] Measuring signal attenuation...`);
    const attenuation = (Math.random() * 0.5).toFixed(2); // Beispiel: Werte zwischen 0 und 0.5 dB/km
    console.log(`[Fiber Optic] Signal attenuation: ${attenuation} dB/km.`);
    return parseFloat(attenuation);
  }

  /**
   * Simulates transmitting data over a fiber optic connection.
   * @param data - The data to transmit.
   * @returns A confirmation of successful transmission or an error message.
   */
  transmitData(data: string): string {
    console.log(`[Fiber Optic] Preparing to transmit data...`);
    if (!this.checkLightSignal()) {
      return `[Fiber Optic] Transmission failed due to unstable light signal.`;
    }

    console.log(`[Fiber Optic] Modulating light signals with data...`);
    const transmittedData = `FIBER_LIGHT(${data})`;
    console.log(`[Fiber Optic] Data transmitted: ${transmittedData}`);
    return transmittedData;
  }

  /**
   * Simulates receiving data over a fiber optic connection.
   * @param data - The modulated light signal to decode.
   * @returns The decoded data.
   */
  receiveData(data: string): string {
    console.log(`[Fiber Optic] Receiving modulated light signals...`);
    const match = data.match(/FIBER_LIGHT\((.+?)\)/);
    if (!match) {
      console.log(`[Fiber Optic] Error: Received corrupted light signal.`);
      return "";
    }

    const decodedData = match[1];
    console.log(`[Fiber Optic] Data received and decoded: ${decodedData}`);
    return decodedData;
  }

  /**
   * Simulates detecting and repairing broken fiber strands.
   * @returns True if the repair is successful, otherwise false.
   */
  repairFiberStrand(): boolean {
    console.log(`[Fiber Optic] Detecting broken fiber strands...`);
    const strandStatus = Math.random() > 0.2; // 80% Wahrscheinlichkeit für eine erfolgreiche Reparatur
    if (strandStatus) {
      console.log(`[Fiber Optic] Broken fiber strand repaired successfully.`);
    } else {
      console.log(`[Fiber Optic] Failed to repair the broken fiber strand.`);
    }
    return strandStatus;
  }
}
