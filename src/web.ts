import { WebPlugin } from '@capacitor/core';

import type { rewaabluetoothPlugin } from './definitions';

export class rewaabluetoothWeb
  extends WebPlugin
  implements rewaabluetoothPlugin
{
  async initialize(options: { value: string; }): Promise<{ value: string; }> {
    console.log('initialize', options);
    return options;
  }
  async startBluetoothDiscovery(options: { value: string; }): Promise<{ value: string; }> {
    console.log('startBluetoothDiscovery', options);
    return options;
  }
  async stopBluetoothDiscovery(options: { value: string; }): Promise<{ value: string; }> {
    console.log('stopBluetoothDiscovery', options);
    return options;
  }
  async listBondedDevices(options: { value: string; }): Promise<{ value: string; }> {
    console.log('EClistBondedDevicesO', options);
    return options;
  }
}
