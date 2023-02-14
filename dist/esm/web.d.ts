import { WebPlugin } from '@capacitor/core';
import type { rewaabluetoothPlugin } from './definitions';
export declare class rewaabluetoothWeb extends WebPlugin implements rewaabluetoothPlugin {
    initialize(): Promise<void>;
    startBluetoothDiscovery(): Promise<void>;
    stopBluetoothDiscovery(): Promise<void>;
    listBondedDevices(): Promise<void>;
    isEnabled(): Promise<boolean>;
}
