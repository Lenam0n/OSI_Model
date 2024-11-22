# OSI Model Simulation

Dieses Projekt simuliert das OSI-Schichtenmodell in TypeScript und zeigt, wie Daten durch die verschiedenen Schichten des OSI-Modells fließen. Es unterstützt dynamische Protokollwechsel und simuliert realistische Szenarien, einschließlich Verschlüsselung, Sitzungsmanagement, Header-Verwaltung und Port-Nutzung.

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
│   │   │   ├── VLAN.ts
│   │   │   ├── LACP.ts
│   │   ├── index-layer.ts
│   ├── layer3/                # Network Layer
│   │   ├── NetworkLayer.ts
│   │   ├── protocols/         # Layer 3 Protokolle
│   │   │   ├── IPv4.ts
│   │   │   ├── IPv6.ts
│   │   │   ├── ICMP.ts
│   │   │   ├── OSPF.ts
│   │   ├── index-layer.ts
│   ├── layer4/                # Transport Layer
│   │   ├── TransportLayer.ts
│   │   ├── protocols/         # Layer 4 Protokolle
│   │   │   ├── TCP.ts
│   │   │   ├── UDP.ts
│   │   │   ├── TLS.ts
│   │   │   ├── SSL.ts
│   │   ├── index-layer.ts
│   ├── layer5/                # Session Layer
│   │   ├── SessionLayer.ts
│   │   ├── protocols/
│   │   │   ├── NetBIOS.ts
│   │   ├── index-layer.ts
│   ├── layer6/                # Presentation Layer
│   │   ├── PresentationLayer.ts
│   │   ├── protocols/
│   │   │   ├── JSONProtocol.ts
│   │   │   ├── XMLProtocol.ts
│   │   │   ├── Base64.ts
│   │   │   ├── ASCII.ts
│   │   │   ├── Unicode.ts
│   │   │   ├── ImageProtocols/
│   │   │   │   ├── PNG.ts
│   │   │   │   ├── JPEG.ts
│   │   │   │   ├── GIF.ts
│   │   ├── index-layer.ts
│   ├── layer7/                # Application Layer
│   │   ├── ApplicationLayer.ts
│   │   ├── protocols/
│   │   │   ├── HTTPProtocol.ts
│   │   │   ├── HTTPSProtocol.ts
│   │   ├── index-layer.ts
├── ports/                     # Ports und Services
│   ├── Port20.ts
│   ├── Port21.ts
│   ├── SSH.ts
│   ├── index-ports.ts
├── OSIModel.ts                # Hauptklasse für die OSI-Simulation
├── main.ts                    # Einstiegspunkt des Programms

```

## 🚀Neue Funktionen
---

# Schichten des OSI-Modells

	•	Schicht 1 (Physical): Simuliert reale Übertragungsprotokolle wie Bluetooth und DSL.
	•	Schicht 2 (Data Link): Unterstützt Protokolle wie Ethernet, WiFi und VLAN.
	•	Schicht 3 (Network): Unterstützt IPv4, IPv6, ICMP und OSPF.
	•	Schicht 4 (Transport): Enthält TCP, UDP, TLS und SSL.
	•	Schicht 5 (Session): Sitzungsmanagement durch NetBIOS.
	•	Schicht 6 (Presentation): Kodierung und Verschlüsselung mit JSON, XML, Base64, ASCII, und Bildformaten.
	•	Schicht 7 (Application): HTTP und HTTPS unterstützen GET, POST, PUT, DELETE sowie Header-Verwaltung.

 ## 💻 Beispiel in main.ts

 ```typescript

import OSIModel from "./OSIModel";
import { HTTPProtocol } from "./layers/layer7/protocols/HTTPProtocol";
import { Ethernet } from "./layers/layer2/protocols/Ethernet";
import { IPv4 } from "./layers/layer3/protocols/IPv4";

const osiModel = new OSIModel(new HTTPProtocol(), new Ethernet(), new IPv4());

// Setze Header
osiModel.setHeader("Authorization", "Bearer token");
osiModel.setHeader("Content-Type", "application/json");

// Transmit data
osiModel.transmit("Hello, OSI Model!");
```

## ⚙️ Befehle
---

# Verbindung und Datenübertragung:
```plaintext
setupConnection(destination: string): boolean
teardownConnection(destination: string): string
sendData(data: string, destination: string): string
receiveData(data: string): string
```

## HTTP/HTTPS-spezifische Methoden
---

Port	Service	Beschreibung
20	FTP (Data)	Datenübertragung für FTP
21	FTP (Control)	Steuerung der FTP-Verbindung
22	SSH	Sicherer Zugriff auf Remote-Systeme
23	Telnet	Unsicherer Zugriff auf Remote-Systeme
25	SMTP	Versand von E-Mails


## 📂 Verfügbare Protokolle

# Layer 2: Data Link

	•	Ethernet
	•	WiFi
	•	VLAN
	•	LACP

# Layer 3: Network

	•	IPv4
	•	IPv6
	•	ICMP
	•	OSPF

# Layer 4: Transport

	•	TCP
	•	UDP
	•	TLS
	•	SSL

# Layer 5: Session

	•	NetBIOS

# Layer 6: Presentation

	•	JSON
	•	XML
	•	Base64
	•	ASCII
	•	Unicode
	•	PNG, JPEG, GIF

# Layer 7: Application

	•	HTTP
	•	HTTPS

## Beispielausgabe
---

```plaintext
--- HTTP Protocol with Headers Example ---
[HTTP] Attempting to establish connection to www.example.com...
[HTTP] Connection to www.example.com established successfully.
[HTTP] Header set: Authorization = Bearer token
[HTTP] Header set: Content-Type = application/json
[HTTP] Sending HTTP GET request to www.example.com...
[HTTP] Headers: {
  "Authorization": "Bearer token",
  "Content-Type": "application/json"
}
[HTTP] GET Response: Data retrieved from www.example.com
[HTTP] Sending HTTP POST request to www.example.com with body: {"key":"value"}
[HTTP] Headers: {
  "Authorization": "Bearer token",
  "Content-Type": "application/json"
}
[HTTP] POST Response: Data posted to www.example.com

[HTTP] Sending HTTP PUT request to www.example.com with body: {"updatedKey":"newValue"}
[HTTP] Headers: {
  "Authorization": "Bearer token",
  "Content-Type": "application/json"
}
[HTTP] PUT Response: Data updated at www.example.com

[HTTP] Sending HTTP DELETE request to www.example.com...
[HTTP] Headers: {
  "Authorization": "Bearer token",
  "Content-Type": "application/json"
}
[HTTP] DELETE Response: Data deleted at www.example.com

[HTTP] Tearing down connection to www.example.com...
[HTTP] Connection to www.example.com closed successfully.
´´´

