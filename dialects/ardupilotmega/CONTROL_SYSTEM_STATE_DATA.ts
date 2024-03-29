// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.

export interface CONTROL_SYSTEM_STATE_DATA {
  time_usec: bigint;
  x_acc: number;
  y_acc: number;
  z_acc: number;
  x_vel: number;
  y_vel: number;
  z_vel: number;
  x_pos: number;
  y_pos: number;
  z_pos: number;
  airspeed: number;
  vel_variance: Array<number>;
  pos_variance: Array<number>;
  q: Array<number>;
  roll_rate: number;
  pitch_rate: number;
  yaw_rate: number;
}
