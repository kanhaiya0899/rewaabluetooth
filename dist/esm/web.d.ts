import { WebPlugin } from '@capacitor/core';
import type { rewaabluetoothPlugin } from './definitions';
export declare class rewaabluetoothWeb extends WebPlugin implements rewaabluetoothPlugin {
    initialize(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
    startBluetoothDiscovery(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
    stopBluetoothDiscovery(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
    listBondedDevices(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
