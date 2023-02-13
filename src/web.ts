import { WebPlugin } from '@capacitor/core';

import type { rewaabluetoothPlugin } from './definitions';

export class rewaabluetoothWeb
  extends WebPlugin
  implements rewaabluetoothPlugin
{
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
