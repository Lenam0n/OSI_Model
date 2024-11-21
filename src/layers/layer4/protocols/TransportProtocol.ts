export interface TransportProtocol {
  getName(): string;
  send(data: string): string;
  receive(segment: string): string;
}
