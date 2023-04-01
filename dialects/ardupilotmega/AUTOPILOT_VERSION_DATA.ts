// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { MavProtocolCapability } from "./MavProtocolCapability";

export interface AUTOPILOT_VERSION_DATA {
  capabilities: MavProtocolCapability;
  uid: bigint;
  flight_sw_version: number;
  middleware_sw_version: number;
  os_sw_version: number;
  board_version: number;
  vendor_id: number;
  product_id: number;
  flight_custom_version: Array<number>;
  middleware_custom_version: Array<number>;
  os_custom_version: Array<number>;
}