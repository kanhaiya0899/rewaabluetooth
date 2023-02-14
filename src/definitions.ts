export interface rewaabluetoothPlugin {
  initialize(): Promise<void>;
  startBluetoothDiscovery(): Promise<void>;
  stopBluetoothDiscovery(): Promise<void>;
  listBondedDevices(): Promise<void>;
}
