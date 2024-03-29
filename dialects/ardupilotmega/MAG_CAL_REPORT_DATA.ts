// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { MagCalStatus } from "./MagCalStatus";

export interface MAG_CAL_REPORT_DATA {
  fitness: number;
  ofs_x: number;
  ofs_y: number;
  ofs_z: number;
  diag_x: number;
  diag_y: number;
  diag_z: number;
  offdiag_x: number;
  offdiag_y: number;
  offdiag_z: number;
  compass_id: number;
  cal_mask: number;
  cal_status: MagCalStatus;
  autosaved: number;
}
