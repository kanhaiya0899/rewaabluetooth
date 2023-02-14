import { WebPlugin } from '@capacitor/core';

import type { rewaabluetoothPlugin } from './definitions';

export class rewaabluetoothWeb
  extends WebPlugin
  implements rewaabluetoothPlugin
{
  async initialize(): Promise<void> {}
  async startBluetoothDiscovery(): Promise<void> {}
  async stopBluetoothDiscovery(): Promise<void> {}
  async listBondedDevices(): Promise<void> {}
  async isEnabled(): Promise<boolean> {
    return false;
  }
}
