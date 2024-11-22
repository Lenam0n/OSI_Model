import { NetworkProtocolBase } from "./NetworkProtocolBase";

export class RIP extends NetworkProtocolBase {
  private routingTable: Record<string, { cost: number; nextHop: string }>;
  private maxHops: number;

  constructor() {
    super({
      version: 2,
      command: "response",
      entries: [],
    });
    this.routingTable = {};
    this.maxHops = 15; // Standard-Hop-Limit für RIP
  }

  /**
   * Returns the name of the protocol.
   */
  getName(): string {
    return "RIP";
  }

  /**
   * Describes the RIP protocol and its purpose.
   * @returns A detailed description of the protocol.
   */
  describeProtocol(): string {
    return `[RIP] A distance-vector routing protocol that uses hop count as a routing metric. Limited to a maximum of ${this.maxHops} hops to prevent loops.`;
  }

  /**
   * Simulates adding a route to the routing table.
   * @param destination - The destination network.
   * @param cost - The cost (number of hops) to reach the destination.
   * @param nextHop - The next hop router.
   */
  addRoute(destination: string, cost: number, nextHop: string): void {
    if (cost > this.maxHops) {
      console.log(
        `[RIP] Cannot add route to ${destination}. Cost exceeds max hop limit of ${this.maxHops}.`
      );
      return;
    }

    this.routingTable[destination] = { cost, nextHop };
    console.log(
      `[RIP] Route added: Destination: ${destination}, Cost: ${cost}, Next Hop: ${nextHop}`
    );
  }

  /**
   * Simulates broadcasting routing updates to neighbors.
   */
  broadcastUpdate(): void {
    console.log(`[RIP] Broadcasting routing updates to neighbors...`);
    const updates = Object.entries(this.routingTable).map(
      ([destination, { cost }]) => {
        return { destination, cost: cost + 1 }; // Erhöht die Kosten beim Senden
      }
    );

    this.header.entries = updates;
    console.log(
      `[RIP] Routing update sent with entries: ${JSON.stringify(
        updates,
        null,
        2
      )}`
    );
  }

  /**
   * Simulates receiving a routing update from a neighbor.
   * @param neighbor - The neighbor sending the update.
   * @param updates - The routing updates received.
   */
  receiveUpdate(
    neighbor: string,
    updates: Array<{ destination: string; cost: number }>
  ): void {
    console.log(`[RIP] Receiving routing update from neighbor ${neighbor}...`);

    updates.forEach(({ destination, cost }) => {
      const totalCost = cost + 1; // Hinzufügen eines Hops für den nächsten Sprung
      const existingRoute = this.routingTable[destination];

      if (!existingRoute || totalCost < existingRoute.cost) {
        this.routingTable[destination] = { cost: totalCost, nextHop: neighbor };
        console.log(
          `[RIP] Route updated: Destination: ${destination}, Cost: ${totalCost}, Next Hop: ${neighbor}`
        );
      } else {
        console.log(
          `[RIP] No update needed for ${destination}. Existing route is better or equal.`
        );
      }
    });
  }

  /**
   * Simulates handling a route timeout for a given destination.
   * @param destination - The destination route to time out.
   */
  handleRouteTimeout(destination: string): void {
    if (this.routingTable[destination]) {
      console.log(
        `[RIP] Route to ${destination} has timed out. Removing from routing table...`
      );
      delete this.routingTable[destination];
    } else {
      console.log(`[RIP] No route to ${destination} found to time out.`);
    }
  }

  /**
   * Prints the current routing table.
   */
  printRoutingTable(): void {
    console.log(`[RIP] Current Routing Table:`);
    Object.entries(this.routingTable).forEach(
      ([destination, { cost, nextHop }]) => {
        console.log(
          `  - Destination: ${destination}, Cost: ${cost}, Next Hop: ${nextHop}`
        );
      }
    );
  }
}
