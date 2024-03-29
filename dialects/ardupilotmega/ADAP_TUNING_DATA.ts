// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { PidTuningAxis } from "./PidTuningAxis";

export interface ADAP_TUNING_DATA {
  desired: number;
  achieved: number;
  error: number;
  theta: number;
  omega: number;
  sigma: number;
  theta_dot: number;
  omega_dot: number;
  sigma_dot: number;
  f: number;
  f_dot: number;
  u: number;
  axis: PidTuningAxis;
}
