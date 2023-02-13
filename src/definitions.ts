export interface rewaabluetoothPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
