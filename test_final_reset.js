// ============================================================
// FINAL TEST: Simulating Full Reset Flow
// ============================================================

// --- MOCK INITIAL STATE ---
let trainingHistory = {
  "2026-01-15": { salva: true },
  "2026-01-16": { salva: true },
  "2026-01-28": { salva: true },
  "2026-01-29": { salva: true },
};
let gamification = {
  salva: { streak: 4, points: 400, freezes: 0, lastReset: 0 },
};

console.log("=== INITIAL STATE ===");
console.log("Training History Keys:", Object.keys(trainingHistory));
console.log("Gamification:", JSON.stringify(gamification.salva));

// --- MOCK HELPER ---
function getDateKey(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

// --- CALCULATE STREAK (PATCHED VERSION) ---
function calculateUserStreak(user) {
  const userDates = new Set();
  const lastReset = gamification.salva.lastReset || 0;

  Object.keys(trainingHistory).forEach((key) => {
    if (trainingHistory[key][user] && !trainingHistory[key].deleted) {
      let dateObj;
      if (key.match(/^\d{4}-\d{2}-\d{2}$/)) {
        dateObj = new Date(key + "T00:00:00");
      } else {
        dateObj = new Date(key);
      }

      if (!isNaN(dateObj.getTime())) {
        // TIME-BOMB CHECK: Only count dates AFTER lastReset
        if (dateObj.getTime() >= lastReset) {
          const normalizedKey = getDateKey(dateObj);
          userDates.add(normalizedKey);
        } else {
          console.log(`  [FILTERED OUT] ${key} is older than lastReset.`);
        }
      }
    }
  });

  console.log(`Valid dates for streak: ${userDates.size}`);
  return userDates.size;
}

// --- TEST 1: STREAK BEFORE RESET ---
console.log("\n=== TEST 1: STREAK BEFORE RESET ===");
const streakBefore = calculateUserStreak("salva");
console.log(`Streak Before Reset: ${streakBefore}`);

// --- PERFORM RESET ---
console.log("\n=== PERFORMING RESET ===");
const now = Date.now();
trainingHistory = {}; // Clear local
gamification.salva = {
  points: 0,
  streak: 0,
  freezes: 0,
  frozenDays: [],
  lastReset: now,
};
console.log(`lastReset set to: ${now}`);

// --- SIMULATE CLOUD SYNC (Zombie Data Returns) ---
console.log("\n=== SIMULATING ZOMBIE DATA FROM CLOUD ===");
trainingHistory = {
  "2026-01-15": { salva: true },
  "2026-01-16": { salva: true },
  "2026-01-28": { salva: true },
  "2026-01-29": { salva: true },
};
console.log("Zombie data restored. Keys:", Object.keys(trainingHistory));

// --- TEST 2: STREAK AFTER RESET (WITH ZOMBIE DATA) ---
console.log("\n=== TEST 2: STREAK AFTER RESET (WITH ZOMBIE DATA) ===");
const streakAfter = calculateUserStreak("salva");
console.log(`Streak After Reset (with zombie data): ${streakAfter}`);

// --- FINAL VERDICT ---
console.log("\n=== RESULT ===");
if (streakAfter === 0) {
  console.log("SUCCESS! Streak is 0 even with zombie data.");
} else {
  console.log("FAILURE! Streak is NOT 0. Something went wrong.");
}
