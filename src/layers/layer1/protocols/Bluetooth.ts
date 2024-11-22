import { PhysicalProtocolBase } from "./PhysicalProtocolBase";

export class BluetoothPhysical extends PhysicalProtocolBase {
  constructor() {
    super("Bluetooth");
  }

  /**
   * Describes the Bluetooth protocol and its purpose.
   * @returns A detailed description of the protocol.
   */
  describeProtocol(): string {
    return `[Bluetooth] Short-range wireless communication protocol for devices operating in the 2.4 GHz ISM band, supporting data and voice transmission.`;
  }

  /**
   * Simulates checking the pairing status between devices.
   * @returns True if pairing is successful, otherwise false.
   */
  checkPairingStatus(): boolean {
    console.log(`[Bluetooth] Starting pairing process...`);
    console.log(`[Bluetooth] Searching for nearby devices...`);
    const devicesFound = Math.random() > 0.2 ? ["Device_1", "Device_2"] : [];
    console.log(
      `[Bluetooth] Devices found: ${
        devicesFound.length > 0 ? devicesFound.join(", ") : "None"
      }`
    );

    if (devicesFound.length === 0) {
      console.log("[Bluetooth] Pairing failed: No devices found.");
      return false;
    }

    const paired = Math.random() > 0.3; // 70% Wahrscheinlichkeit für erfolgreiches Pairing
    console.log(`[Bluetooth] Attempting to pair with ${devicesFound[0]}...`);
    console.log(
      `[Bluetooth] Pairing is ${paired ? "successful" : "unsuccessful"}.`
    );
    return paired;
  }

  /**
   * Simulates measuring the signal strength of the Bluetooth connection.
   * @returns The signal strength in dBm.
   */
  measureSignalStrength(): number {
    console.log(`[Bluetooth] Measuring signal strength...`);
    const signalStrength = Math.floor(Math.random() * 50) - 90; // Simuliert Signalstärke zwischen -90 dBm und -40 dBm
    console.log(`[Bluetooth] Signal strength: ${signalStrength} dBm`);
    return signalStrength;
  }

  /**
   * Simulates transmitting data over Bluetooth.
   * @param data - The data to transmit.
   * @returns A confirmation of successful transmission.
   */
  transmitData(data: string): string {
    console.log(`[Bluetooth] Preparing to transmit data...`);
    const signalStrength = this.measureSignalStrength();
    if (signalStrength < -80) {
      console.log(
        `[Bluetooth] Signal strength too weak (${signalStrength} dBm). Transmission failed.`
      );
      return "Transmission failed due to weak signal.";
    }

    console.log(`[Bluetooth] Encoding data for transmission...`);
    const encodedData = `BLUETOOTH_ENCODED(${data})`;
    console.log(`[Bluetooth] Transmitting data: ${encodedData}`);
    return `Data transmitted successfully: ${encodedData}`;
  }

  /**
   * Simulates receiving data over Bluetooth.
   * @param data - The data received.
   * @returns The decoded data.
   */
  receiveData(data: string): string {
    console.log(`[Bluetooth] Receiving data...`);
    const decodedData = data.replace("BLUETOOTH_ENCODED(", "").replace(")", "");
    console.log(`[Bluetooth] Data received and decoded: ${decodedData}`);
    return decodedData;
  }

  /**
   * Simulates handling interference on the Bluetooth channel.
   * @returns The new frequency channel used.
   */
  handleInterference(): number {
    console.log(`[Bluetooth] Detecting interference on the current channel...`);
    const currentChannel = Math.floor(Math.random() * 79) + 1; // Bluetooth nutzt 79 Kanäle
    const newChannel = currentChannel === 79 ? 1 : currentChannel + 1;
    console.log(
      `[Bluetooth] Switching from channel ${currentChannel} to channel ${newChannel} to avoid interference.`
    );
    return newChannel;
  }
}
