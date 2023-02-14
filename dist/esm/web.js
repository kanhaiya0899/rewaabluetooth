import { WebPlugin } from '@capacitor/core';
export class rewaabluetoothWeb extends WebPlugin {
    async initialize() { }
    async startBluetoothDiscovery() { }
    async stopBluetoothDiscovery() { }
    async listBondedDevices() { }
    async isEnabled() {
        return false;
    }
}
//# sourceMappingURL=web.js.map