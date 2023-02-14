'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const rewaabluetooth = core.registerPlugin('rewaabluetooth', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.rewaabluetoothWeb()),
});

class rewaabluetoothWeb extends core.WebPlugin {
    async initialize() { }
    async startBluetoothDiscovery() { }
    async stopBluetoothDiscovery() { }
    async listBondedDevices() { }
    async isEnabled() {
        return false;
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    rewaabluetoothWeb: rewaabluetoothWeb
});

exports.rewaabluetooth = rewaabluetooth;
//# sourceMappingURL=plugin.cjs.js.map
