import { NetworkProtocolBase } from "./NetworkProtocolBase";

export class OSPF extends NetworkProtocolBase {
  private topologyDatabase: Record<string, number>; // Adjazenzliste zur Simulation der Topologie
  private routerId: string;

  constructor(routerId: string) {
    super({
      version: 2,
      routerId: routerId,
      areaId: "0.0.0.0", // Standard Area ID für Backbone
    });
    this.routerId = routerId;
    this.topologyDatabase = {};
  }

  getName(): string {
    return "OSPF";
  }
  /**
   * Describes the OSPF protocol and its purpose.
   * @returns A detailed description of the protocol.
   */
  describeProtocol(): string {
    return `[OSPF] A Link-State Routing Protocol used to dynamically determine the shortest path between routers in an IP network.`;
  }

  /**
   * Simulates advertising a link to the network.
   * @param destination - The destination network.
   * @param cost - The cost to reach the destination.
   */
  advertiseLink(destination: string, cost: number): void {
    console.log(
      `[OSPF] Advertising link to ${destination} with cost ${cost}...`
    );
    this.topologyDatabase[destination] = cost;
    console.log(
      `[OSPF] Link added to topology database: ${JSON.stringify(
        this.topologyDatabase
      )}`
    );
  }

  /**
   * Simulates calculating the shortest path to all destinations.
   * Uses Dijkstra's algorithm to simulate OSPF's SPF calculation.
   */
  calculateShortestPath(): void {
    console.log(
      `[OSPF] Calculating shortest path using Dijkstra's algorithm...`
    );
    const sortedDestinations = Object.entries(this.topologyDatabase).sort(
      ([, costA], [, costB]) => costA - costB
    );
    console.log(
      `[OSPF] Shortest path calculation complete. Routes in order of cost:`
    );
    sortedDestinations.forEach(([destination, cost]) => {
      console.log(`  - Destination: ${destination}, Cost: ${cost}`);
    });
  }

  /**
   * Simulates sending a Hello packet to establish OSPF neighbor relationships.
   * @param neighborId - The ID of the neighboring router.
   * @returns True if the neighbor responds, otherwise false.
   */
  sendHelloPacket(neighborId: string): boolean {
    console.log(`[OSPF] Sending Hello packet to neighbor ${neighborId}...`);
    const response = Math.random() > 0.2; // 80% Wahrscheinlichkeit für eine Antwort
    if (response) {
      console.log(
        `[OSPF] Neighbor ${neighborId} responded. Relationship established.`
      );
    } else {
      console.log(`[OSPF] No response from neighbor ${neighborId}.`);
    }
    return response;
  }

  /**
   * Simulates a link-state update when the topology changes.
   * @param destination - The destination network affected.
   * @param newCost - The updated cost to the destination.
   */
  updateLinkState(destination: string, newCost: number): void {
    console.log(
      `[OSPF] Link-state update received for ${destination} with new cost ${newCost}.`
    );
    if (this.topologyDatabase[destination]) {
      this.topologyDatabase[destination] = newCost;
      console.log(
        `[OSPF] Topology database updated: ${JSON.stringify(
          this.topologyDatabase
        )}`
      );
      this.calculateShortestPath();
    } else {
      console.log(
        `[OSPF] Destination ${destination} not found in topology database.`
      );
    }
  }
}
