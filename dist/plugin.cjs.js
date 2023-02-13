'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const rewaabluetooth = core.registerPlugin('rewaabluetooth', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.rewaabluetoothWeb()),
});

class rewaabluetoothWeb extends core.WebPlugin {
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

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    rewaabluetoothWeb: rewaabluetoothWeb
});

exports.rewaabluetooth = rewaabluetooth;
//# sourceMappingURL=plugin.cjs.js.map
