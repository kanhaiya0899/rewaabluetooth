import { registerPlugin } from '@capacitor/core';

import type { rewaabluetoothPlugin } from './definitions';

const rewaabluetooth = registerPlugin<rewaabluetoothPlugin>('rewaabluetooth', {
  web: () => import('./web').then(m => new m.rewaabluetoothWeb()),
});

export * from './definitions';
export { rewaabluetooth };
