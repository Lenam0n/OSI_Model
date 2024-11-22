import OSIModel from "./osi-model";
import { TCP } from "./layers/layer4/protocols/TCP";
import { UDP } from "./layers/layer4/protocols/UDP";
import { Ethernet } from "./layers/layer2/protocols/Ethernet";
import { WiFi } from "./layers/layer2/protocols/WIFI";
import { IPv4 } from "./layers/layer3/protocols/IPv4";
import { IPv6 } from "./layers/layer3/protocols/IPv6";

// OSI Model Initialisierung mit den Startprotokollen
const osiModel = new OSIModel(new UDP(), new Ethernet(), new IPv4());

// Setze eine Verschlüsselung für die Presentation Layer
osiModel.setEncryptionKey("MY_SECURE_KEY");

// Starte eine Sitzung
osiModel.startSession();

// Erste Datenübertragung
console.log("\n--- Erste Übertragung ---");
osiModel.transmit("Hello, World!");

// Wechsel der Protokolle
/* console.log("\n--- Wechsel der Protokolle ---");
osiModel.setDataLinkProtocol(new WiFi());
osiModel.setNetworkProtocol(new IPv6());
osiModel.setTransportProtocol(new UDP()); */

// Zweite Datenübertragung mit geänderten Protokollen
/* console.log("\n--- Zweite Übertragung ---");
osiModel.transmit("Hello again!"); */

// Beende die Sitzung
osiModel.endSession();
