import { WebPlugin } from '@capacitor/core';
export class rewaabluetoothWeb extends WebPlugin {
    async initialize(options) {
        console.log('initialize', options);
        return options;
    }
    async startBluetoothDiscovery(options) {
        console.log('startBluetoothDiscovery', options);
        return options;
    }
    async stopBluetoothDiscovery(options) {
        console.log('stopBluetoothDiscovery', options);
        return options;
    }
    async listBondedDevices(options) {
        console.log('EClistBondedDevicesO', options);
        return options;
    }
}
//# sourceMappingURL=web.js.map