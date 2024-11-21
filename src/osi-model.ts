import { PhysicalLayer } from "./layers/layer1/index-layer";
import { DataLinkLayer } from "./layers/layer2/index-layer";
import { NetworkLayer } from "./layers/layer3/index-layer";
import { TransportLayer } from "./layers/layer4/index-layer";
import { SessionLayer } from "./layers/layer5/index-layer";
import { PresentationLayer } from "./layers/layer6/index-layer";
import { ApplicationLayer } from "./layers/layer7/index-layer";
import { TransportProtocol } from "./layers/layer4/protocols/TransportProtocol";
import { DataLinkProtocol } from "./layers/layer2/protocols/DataLinkProtocol";
import { NetworkProtocol } from "./layers/layer3/protocols/NetworkProtocol";
import { SSH } from "./ports/index-ports"; // Import SSH and other ports from index-ports

export class OSIModel {
  private physical: PhysicalLayer;
  private dataLink: DataLinkLayer;
  private network: NetworkLayer;
  private transport: TransportLayer;
  private session: SessionLayer;
  private presentation: PresentationLayer;
  private application: ApplicationLayer;

  constructor(
    transportProtocol: TransportProtocol,
    dataLinkProtocol: DataLinkProtocol,
    networkProtocol: NetworkProtocol
  ) {
    this.physical = new PhysicalLayer();
    this.dataLink = new DataLinkLayer(dataLinkProtocol);
    this.network = new NetworkLayer(networkProtocol);
    this.transport = new TransportLayer(transportProtocol);
    this.session = new SessionLayer();
    this.presentation = new PresentationLayer();
    this.application = new ApplicationLayer();
  }

  setTransportProtocol(protocol: TransportProtocol): void {
    this.transport.setProtocol(protocol);
  }

  setDataLinkProtocol(protocol: DataLinkProtocol): void {
    this.dataLink.setProtocol(protocol);
  }

  setNetworkProtocol(protocol: NetworkProtocol): void {
    this.network.setProtocol(protocol);
  }

  setEncryptionKey(key: string): void {
    this.presentation.setEncryptionKey(key);
  }

  startSession(): void {
    this.session.startSession();
  }

  endSession(): void {
    this.session.endSession();
  }

  /**
   * Simulates using SSH (Port 22).
   */
  useSSH(data: string): void {
    const ssh = new SSH(
      this.transport,
      this.network,
      this.dataLink,
      this.physical
    );

    console.log("\n--- SSH Simulation ---");
    console.log(ssh.describeService());
    ssh.executeTask(data);
  }

  transmit(data: string): void {
    console.log("\n--- OSI Transmission Start ---");

    // Layer 7: Application Layer
    const applicationData = this.application.sendData(data);

    // Layer 6: Presentation Layer
    const encodedData = this.presentation.encode(applicationData);
    const encryptedData = this.presentation.encrypt(encodedData);

    // Layer 5: Session Layer
    if (!this.session) {
      console.log("Session Layer: No active session. Cannot transmit data.");
      return;
    }
    this.session.sendData(encryptedData);

    // Layer 4: Transport Layer
    const segment = this.transport.send(encryptedData);

    // Layer 3: Network Layer
    const packet = this.network.addRoutingInfo(segment);

    // Layer 2: Data Link Layer
    const frame = this.dataLink.encode(packet);

    // Layer 1: Physical Layer
    const bits = this.physical.transmit(frame);

    console.log("\n--- Transmission Complete ---\n");
    this.receive(bits);
  }

  receive(bits: string): void {
    console.log("\n--- OSI Receiving Start ---");

    // Layer 1: Physical Layer
    const frame = this.dataLink.decode(bits);

    // Layer 2: Data Link Layer
    const packet = this.network.removeRoutingInfo(frame);

    // Layer 3: Network Layer
    const segment = this.transport.receive(packet);

    // Layer 4: Transport Layer
    const encryptedData = segment;

    // Layer 5: Session Layer
    if (!this.session) {
      console.log("Session Layer: No active session. Cannot receive data.");
      return;
    }

    // Layer 6: Presentation Layer
    const decodedData = this.presentation.decrypt(encryptedData);
    const rawData = this.presentation.decode(decodedData);

    // Layer 7: Application Layer
    this.application.receiveData(rawData);

    console.log("\n--- Receiving Complete ---\n");
  }
}

export default OSIModel;
