// =====================================================================
//  settings/cars.js – the cars
// =====================================================================

const TOP_SPEED = 93;       // m/s, the highest speed of an ideal car (93 m/s = 335 km/h)
const FOLLOW_BRAKING = 32;  // m/s², how hard a driver brakes for a car in front (they react early)
const BLOCK_BRAKING = 60;   // m/s², the hardest braking when a car comes too close
const FUEL_EFFECT = 0.00032; // pace lost per kg of fuel (0.00032 = ~0.03 s per kg on a 90 s lap)

// Overtaking aids and the 2026 battery
const DRS_SPEED = 1.035;           // top speed gain with DRS open
const STRAIGHT_MODE_SPEED = 1.025; // top speed gain with Straight Mode (2026, all cars)
const OVERTAKE_SPEED = 1.015;      // extra speed with Overtake Mode on the fast parts of the lap (2026)
const CLIPPING_SPEED = 0.97;       // empty battery on a straight (2026)
const RECHARGE_SPEED = 0.995;      // the driver saves energy – lift and coast (2026)

const REGS_INFO = {
  GE2023:  { name: "2011-2025 · DRS + non hybrid", short: "2011–25", aid: "DRS" },
  GEN2026: { name: "2026 · active aero + 50/50 hybrid", short: "2026", aid: "Overtake Mode" }
}; // Car regulations, for example 2026 cars have active aero and a 50/50 hybrid system, while 2023 cars have DRS and no hybrid.