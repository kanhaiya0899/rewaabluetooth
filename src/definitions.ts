export interface rewaabluetoothPlugin {
  initialize(options: { value: string }): Promise<{ value: string }>;
  startBluetoothDiscovery(options: { value: string }): Promise<{ value: string }>;
  stopBluetoothDiscovery(options: { value: string }): Promise<{ value: string }>;
  listBondedDevices(options: { value: string }): Promise<{ value: string }>;
}
