// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { GoproCommand } from "./GoproCommand";

export interface GOPRO_SET_REQUEST_DATA {
  target_system: number;
  target_component: number;
  cmd_id: GoproCommand;
  value: Array<number>;
}
