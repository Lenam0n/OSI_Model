# OSI Model Simulation

Dieses Projekt simuliert das OSI-Schichtenmodell in TypeScript und zeigt, wie Daten durch die verschiedenen Schichten des OSI-Modells fließen. Es unterstützt dynamische Protokollwechsel und simuliert realistische Szenarien, einschließlich Verschlüsselung, Sitzungsmanagement und Port-Nutzung.

---

## 📂 Projektstruktur

```plaintext
src/
├── layers/
│   ├── layer1/                # Physical Layer
│   │   ├── PhysicalLayer.ts
│   │   ├── index-layer.ts
│   ├── layer2/                # Data Link Layer
│   │   ├── DataLinkLayer.ts
│   │   ├── protocols/         # Layer 2 Protokolle
│   │   │   ├── Ethernet.ts
│   │   │   ├── WiFi.ts
│   │   ├── index-layer.ts
│   ├── layer3/                # Network Layer
│   │   ├── NetworkLayer.ts
│   │   ├── protocols/         # Layer 3 Protokolle
│   │   │   ├── IPv4.ts
│   │   │   ├── IPv6.ts
│   │   ├── index-layer.ts
│   ├── layer4/                # Transport Layer
│   │   ├── TransportLayer.ts
│   │   ├── protocols/         # Layer 4 Protokolle
│   │   │   ├── TCP.ts
│   │   │   ├── UDP.ts
│   │   ├── index-layer.ts
│   ├── layer5/                # Session Layer
│   │   ├── SessionLayer.ts
│   │   ├── index-layer.ts
│   ├── layer6/                # Presentation Layer
│   │   ├── PresentationLayer.ts
│   │   ├── index-layer.ts
│   ├── layer7/                # Application Layer
│   │   ├── ApplicationLayer.ts
│   │   ├── index-layer.ts
├── ports/                     # Ports und Services
│   ├── Port20.ts
│   ├── Port21.ts
│   ├── SSH.ts
│   ├── index-ports.ts
├── OSIModel.ts                # Hauptklasse für die OSI-Simulation
├── main.ts                    # Einstiegspunkt des Programms

#🚀 Funktionen

	•	Schichten des OSI-Modells:
	•	Alle 7 Schichten sind vollständig implementiert, einschließlich dynamischer Protokoll- und Datenfluss-Simulation.
	•	Port-Simulation:
	•	Unterstützt Ports wie FTP (Port 21) und SSH (Port 22).
	•	Session Layer:
	•	Starten, Verwalten und Beenden von Sitzungen.
	•	Presentation Layer:
	•	Kodierung, Verschlüsselung und Dekodierung von Daten.
	•	Dynamischer Protokollwechsel:
	•	Unterstützt Protokolle wie Ethernet, IPv4, TCP, UDP und mehr.

##💻 Beispiel in main.ts

```typescript
import OSIModel from "./OSIModel";
import { TCP } from "./layers/layer4/protocols/TCP";
import { Ethernet } from "./layers/layer2/protocols/Ethernet";
import { IPv4 } from "./layers/layer3/protocols/IPv4";

const osiModel = new OSIModel(new TCP(), new Ethernet(), new IPv4());

// Set encryption key
osiModel.setEncryptionKey("SECURE_KEY");

// Start session
osiModel.startSession();

// Transmit data
osiModel.transmit("Hello, OSI Model!");

// End session
osiModel.endSession();

##Erklärung

	1.	Initialisierung des OSI-Modells:
	•	Erstelle eine neue Instanz von OSIModel mit:
	•	Transportprotokoll: TCP
	•	Data Link-Protokoll: Ethernet
	•	Netzwerkprotokoll: IPv4
	2.	Verschlüsselung aktivieren:
	•	Setze einen Verschlüsselungsschlüssel für den Presentation Layer mit setEncryptionKey.
	3.	Sitzung starten:
	•	Nutze startSession, um eine neue Sitzung zu starten.
	4.	Datenübertragung:
	•	Verwende transmit, um Daten über alle Layer zu senden.
	5.	Sitzung beenden:
	•	Beende die Sitzung mit endSession.

##Beispielausgabe
```plaintext
Presentation Layer: Encryption key updated.
Session Layer: Session started with ID SESSION-XYZ12345

--- OSI Transmission Start ---
Application Layer: Preparing data for transmission...
Presentation Layer: Encoding data with format UTF-8
Presentation Layer: Encrypting data...
Session Layer: Sending data in session SESSION-XYZ12345: Encrypted(SECURE_KEY): Encoded(UTF-8): Hello, OSI Model!
Transport Layer: Sending data using protocol - TCP on Port 22
Network Layer: Adding routing info using protocol - IPv4
Data Link Layer: Using protocol - Ethernet
Physical Layer: Transmitting bits...

--- OSI Transmission Complete ---

Session Layer: Session SESSION-XYZ12345 ended.

## ⚙️ Verfügbare Ports

| Port | Service       | Beschreibung                           |
|------|---------------|-----------------------------------------|
| 20   | FTP (Data)    | Datenübertragung für FTP               |
| 21   | FTP (Control) | Steuerung der FTP-Verbindung           |
| 22   | SSH           | Sicherer Zugriff auf Remote-Systeme    |
| 23   | Telnet        | Unsicherer Zugriff auf Remote-Systeme  |
| 25   | SMTP          | Versand von E-Mails                   |

---

## 📂 Verfügbare Protokolle

### Layer 2: Data Link
- Ethernet
- WiFi

### Layer 3: Network
- IPv4
- IPv6

### Layer 4: Transport
- TCP
- UDP
