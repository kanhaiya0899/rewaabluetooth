package capacitor.rewaabluetooth.com

import android.annotation.SuppressLint
import android.bluetooth.BluetoothAdapter
import android.bluetooth.BluetoothDevice
import android.bluetooth.BluetoothManager
import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.content.IntentFilter
import android.content.pm.PackageManager
import android.util.Log
import com.getcapacitor.JSObject
import com.getcapacitor.Plugin
import com.getcapacitor.PluginCall
import com.getcapacitor.PluginMethod
import com.getcapacitor.annotation.CapacitorPlugin
import com.google.gson.JsonArray
import com.google.gson.JsonObject

@CapacitorPlugin(name = "rewaabluetooth")
class rewaabluetoothPlugin : Plugin() {
    private val implementation = rewaabluetooth()
    private var bluetoothAdapter: BluetoothAdapter? = null
    private var TAG = "rewaabluetoothPlugin"
    override fun load() {}
    fun sendDevice(data: JSObject?) {
        notifyListeners("device", data)
    }

    fun sendPairedDevices(data: JSObject?) {
        notifyListeners("pairedDeviceList", data)
    }

    @PluginMethod
    fun initialize(call: PluginCall) {
        if (!activity.packageManager.hasSystemFeature(PackageManager.FEATURE_BLUETOOTH_LE)) {
            call.reject("BLE is not supported.")
            return
        }

        bluetoothAdapter = (activity.getSystemService(Context.BLUETOOTH_SERVICE)
                as BluetoothManager).adapter

        if (bluetoothAdapter == null) {
            call.reject("BLE is not available.")
            return
        }
        call.resolve()
    }

    @PluginMethod
    fun stopBluetoothDiscovery(){
        try {
            context.unregisterReceiver(discoveryReceiver)
        } catch (e: Exception) {
            e.printStackTrace()
        }
    }

    private val discoveryReceiver : BroadcastReceiver = object : BroadcastReceiver(){
        @SuppressLint("MissingPermission")
        override fun onReceive(context: Context?, intent: Intent?) {
            when(intent?.action) {
                BluetoothAdapter.ACTION_DISCOVERY_STARTED -> {
                    Log.d(TAG, "Discovery started")
                }
                BluetoothAdapter.ACTION_DISCOVERY_FINISHED -> {
                    Log.d(TAG, "Discovery finished")
                    stopBluetoothDiscovery()
                }
                BluetoothDevice.ACTION_FOUND -> {
                    val device: BluetoothDevice? =
                            intent.getParcelableExtra(BluetoothDevice.EXTRA_DEVICE)
                    if(device == null){
                        Log.d(TAG, "Null device")
                    }else {
                        if(device.name!=null) {
                            val result = JSObject()
                            result.put("name",  device.name)
                            result.put("address",  device.address)
                            sendDevice(result)
                        }
                    }
                }
            }
        }

    }

    @SuppressLint("MissingPermission")
    @PluginMethod(returnType = PluginMethod.RETURN_CALLBACK)
    fun startBluetoothDiscovery(call: PluginCall){
        val filter = IntentFilter()
        filter.addAction(BluetoothDevice.ACTION_FOUND)
        filter.addAction(BluetoothAdapter.ACTION_DISCOVERY_STARTED)
        filter.addAction(BluetoothAdapter.ACTION_DISCOVERY_FINISHED)
        context.registerReceiver(discoveryReceiver, filter)
        bluetoothAdapter?.startDiscovery()
    }

    private fun deviceToJSON(device: BluetoothDevice): JsonObject? {
        val json = JsonObject()
        json.addProperty("name", device.name)
        json.addProperty("address", device.address)
        json.addProperty("id", device.address)
        if (device.bluetoothClass != null) {
            json.addProperty("class", device.bluetoothClass.deviceClass)
        }
        return json
    }

    @PluginMethod
    fun listBondedDevices(call: PluginCall) {
        try {
//      if (ActivityCompat.checkSelfPermission(context, Manifest.permission.BLUETOOTH_CONNECT) != PackageManager.PERMISSION_GRANTED){
//        val jsObject =  JSObject()
//        jsObject.put("pairedDeviceList",null)
//        jsObject.put("error","Missing BLUETOOTH_CONNECT permission")
//        notifyListeners("pairedDeviceList", jsObject)
//          return
//      }
            val bondedDevices = bluetoothAdapter?.bondedDevices
            val pairedDeviceList = JsonArray()
            for (device in bondedDevices!!) {
                pairedDeviceList.add(deviceToJSON(device))
            }
//      if (bondedDevices != null) {
//        for (device in bondedDevices) {
//          pairedDeviceList.add(device)
//        }
//      }
            val jsonObject : JsonObject = JsonObject()
            jsonObject.add("pairedDeviceList",pairedDeviceList)
            val jsObject =  JSObject()
            jsObject.put("pairedDeviceList",jsonObject.toString())
            sendPairedDevices(jsObject)
        }catch (e:Exception){
            e.printStackTrace()
            val jsObject =  JSObject()
            jsObject.put("pairedDeviceList",null)
            jsObject.put("error",e.localizedMessage)
            sendPairedDevices(jsObject)
        }
    }
}