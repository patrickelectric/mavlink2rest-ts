# MAVLink2Rest TypeScript Definitions

MAVLink2Rest typescript definition for [MAVLink2Rest](https://github.com/mavlink/mavlink2rest) and [MAVLink2Rest-wasm](https://github.com/patrickelectric/mavlink2rest-wasm).
Import the provided contracts to parse, validate, or craft REST payloads with type safety.

## Project Layout
- `messages/` — base TypeScript contracts such as `Message`, `Package`, and enums.
- `dialects/ardupilotmega/` — generated ArduPilot Mega dialect typings; do not edit by hand.

## Example

An usage example is availble in [cockpit here](https://github.com/search?q=repo%3Abluerobotics%2Fcockpit+m2r%2Fmessages&type=code).