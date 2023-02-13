import { registerPlugin } from '@capacitor/core';
const rewaabluetooth = registerPlugin('rewaabluetooth', {
    web: () => import('./web').then(m => new m.rewaabluetoothWeb()),
});
export * from './definitions';
export { rewaabluetooth };
//# sourceMappingURL=index.js.map