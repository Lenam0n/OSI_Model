import { TransportLayer } from "../layers/layer4/TransportLayer";
import { NetworkLayer } from "../layers/layer3/NetworkLayer";
import { DataLinkLayer } from "../layers/layer2/DataLinkLayer";
import { PhysicalLayer } from "../layers/layer1/PhysicalLayer";

export class SSH {
  private port: number;
  private transportLayer: TransportLayer;
  private networkLayer: NetworkLayer;
  private dataLinkLayer: DataLinkLayer;
  private physicalLayer: PhysicalLayer;

  constructor(
    transportLayer: TransportLayer,
    networkLayer: NetworkLayer,
    dataLinkLayer: DataLinkLayer,
    physicalLayer: PhysicalLayer
  ) {
    this.port = 22;
    this.transportLayer = transportLayer;
    this.networkLayer = networkLayer;
    this.dataLinkLayer = dataLinkLayer;
    this.physicalLayer = physicalLayer;
  }

  /**
   * Returns the port number for this service.
   */
  getPort(): number {
    return this.port;
  }

  /**
   * Provides a detailed description of the service.
   */
  describeService(): string {
    return `Verschlüsselte Verbindung für Remote-Zugriff über Port ${this.port}.`;
  }

  /**
   * Executes the primary task associated with this port by simulating the flow through OSI layers.
   */
  executeTask(data: string): void {
    console.log("\n--- SSH Task Simulation Start ---");

    // Step 1: Application Layer (Task execution begins)
    console.log(`[Layer 7: Application] SSH Task: ${data}`);

    // Step 2: Transport Layer (Port and data segmentation)
    const transportSegment = this.transportLayer.send(data, this.port);
    console.log(`[Layer 4: Transport] Segment: ${transportSegment}`);

    // Step 3: Network Layer (IP routing)
    const networkPacket = this.networkLayer.addRoutingInfo(transportSegment);
    console.log(`[Layer 3: Network] Packet: ${networkPacket}`);

    // Step 4: Data Link Layer (Frame encoding)
    const dataFrame = this.dataLinkLayer.encode(networkPacket);
    console.log(`[Layer 2: Data Link] Frame: ${dataFrame}`);

    // Step 5: Physical Layer (Transmission)
    const transmittedBits = this.physicalLayer.transmit(dataFrame);
    console.log(`[Layer 1: Physical] Bits Transmitted: ${transmittedBits}`);

    console.log("\n--- SSH Task Simulation Complete ---\n");
  }
}

export default SSH;
