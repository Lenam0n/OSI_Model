export interface NetworkProtocol {
  getName(): string;
  addRoutingInfo(data: string): string;
  removeRoutingInfo(packet: string): string;
}
