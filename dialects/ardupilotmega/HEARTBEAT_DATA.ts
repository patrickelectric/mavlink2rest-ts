// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { MavAutopilot } from "./MavAutopilot";
import type { MavModeFlag } from "./MavModeFlag";
import type { MavState } from "./MavState";
import type { MavType } from "./MavType";

export interface HEARTBEAT_DATA {
  custom_mode: number;
  mavtype: MavType;
  autopilot: MavAutopilot;
  base_mode: MavModeFlag;
  system_status: MavState;
  mavlink_version: number;
}
