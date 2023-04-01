// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { GimbalManagerFlags } from "./GimbalManagerFlags";

export interface GIMBAL_MANAGER_STATUS_DATA {
  time_boot_ms: number;
  flags: GimbalManagerFlags;
  gimbal_device_id: number;
  primary_control_sysid: number;
  primary_control_compid: number;
  secondary_control_sysid: number;
  secondary_control_compid: number;
}