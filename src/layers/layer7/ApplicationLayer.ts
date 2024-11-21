export class ApplicationLayer {
  sendData(data: string): string {
    console.log("Application Layer: Preparing data for transmission...");
    return data;
  }

  receiveData(data: string): void {
    console.log("Application Layer: Received data -", data);
  }
}
