export interface DataLinkProtocol {
  getName(): string;
  encode(bits: string): string;
  decode(frame: string): string;
}
