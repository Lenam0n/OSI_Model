import { DataLinkProtocolBase } from "./DataLinkProtocolBase";

export class LinkAggregationControlProtocol extends DataLinkProtocolBase {
  private aggregatedLinks: Record<string, string[]> = {}; // Speicher für aggregierte Links

  constructor() {
    super("Link Aggregation Control Protocol (LACP)");
  }

  /**
   * Describes the LACP protocol and its purpose.
   * @returns A detailed description of the protocol.
   */
  describeProtocol(): string {
    return `[LACP] Combines multiple physical links into a single logical channel to increase bandwidth, enhance fault tolerance, and provide redundancy.`;
  }

  /**
   * Simulates aggregating multiple links into a single logical link.
   * @param links - The list of physical links to aggregate.
   * @returns The ID of the aggregated logical link.
   */
  aggregateLinks(links: string[]): string {
    console.log(`[LACP] Aggregating physical links: ${links.join(", ")}...`);
    if (links.length < 2) {
      console.log(
        `[LACP] Error: At least two links are required for aggregation.`
      );
      return "Aggregation failed.";
    }

    const logicalLinkId = `LACP_GROUP_${Math.floor(Math.random() * 1000)}`;
    this.aggregatedLinks[logicalLinkId] = links;
    console.log(
      `[LACP] Aggregation complete. Logical Link ID: ${logicalLinkId}`
    );
    console.log(
      `[LACP] Links in ${logicalLinkId}: ${this.aggregatedLinks[
        logicalLinkId
      ].join(", ")}`
    );
    return logicalLinkId;
  }

  /**
   * Simulates checking the status of an aggregated link.
   * @param logicalLinkId - The ID of the logical link.
   * @returns True if the link is active, otherwise false.
   */
  checkAggregatedLinkStatus(logicalLinkId: string): boolean {
    console.log(`[LACP] Checking status of logical link: ${logicalLinkId}...`);
    const links = this.aggregatedLinks[logicalLinkId];
    if (!links) {
      console.log(
        `[LACP] Error: Logical link ${logicalLinkId} does not exist.`
      );
      return false;
    }

    const activeStatus = Math.random() > 0.1; // 90% Wahrscheinlichkeit für einen aktiven Link
    console.log(
      `[LACP] Logical link ${logicalLinkId} is ${
        activeStatus ? "active" : "inactive"
      }.`
    );
    return activeStatus;
  }

  /**
   * Simulates adding a new link to an existing logical group.
   * @param logicalLinkId - The ID of the logical link group.
   * @param newLink - The new physical link to add.
   * @returns True if the link is added successfully, otherwise false.
   */
  addLinkToGroup(logicalLinkId: string, newLink: string): boolean {
    console.log(
      `[LACP] Adding link ${newLink} to logical link group ${logicalLinkId}...`
    );
    const links = this.aggregatedLinks[logicalLinkId];
    if (!links) {
      console.log(
        `[LACP] Error: Logical link ${logicalLinkId} does not exist.`
      );
      return false;
    }

    if (links.includes(newLink)) {
      console.log(
        `[LACP] Error: Link ${newLink} is already part of the group.`
      );
      return false;
    }

    links.push(newLink);
    console.log(`[LACP] Link ${newLink} added to group ${logicalLinkId}.`);
    console.log(
      `[LACP] Updated links in ${logicalLinkId}: ${links.join(", ")}`
    );
    return true;
  }

  /**
   * Simulates removing a link from an existing logical group.
   * @param logicalLinkId - The ID of the logical link group.
   * @param link - The physical link to remove.
   * @returns True if the link is removed successfully, otherwise false.
   */
  removeLinkFromGroup(logicalLinkId: string, link: string): boolean {
    console.log(
      `[LACP] Removing link ${link} from logical link group ${logicalLinkId}...`
    );
    const links = this.aggregatedLinks[logicalLinkId];
    if (!links) {
      console.log(
        `[LACP] Error: Logical link ${logicalLinkId} does not exist.`
      );
      return false;
    }

    const index = links.indexOf(link);
    if (index === -1) {
      console.log(`[LACP] Error: Link ${link} is not part of the group.`);
      return false;
    }

    links.splice(index, 1);
    console.log(`[LACP] Link ${link} removed from group ${logicalLinkId}.`);
    console.log(
      `[LACP] Updated links in ${logicalLinkId}: ${links.join(", ")}`
    );
    return true;
  }
}
