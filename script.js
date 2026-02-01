// --- DATA ---
const routineData = [
  {
    day: "Lunes",
    title: "Día 1: Pull & Core (The Muscle-Up Path)",
    exercises: [
      {
        name: "Calentamiento: Cinta",
        sets: "-",
        reps: "10 min",
        rir: "-",
        notes: "12% Incline / 3.2 MPH. No te agarres de las barandas.",
        muscles: { primary: ["legs", "cardio"], secondary: [] },
      },
      {
        name: "Negative Pull-ups",
        sets: "5",
        reps: "5",
        rir: "-",
        notes: "Bajada lenta de 5 segundos.",
        muscles: { primary: ["lats"], secondary: ["biceps"] },
      },
      {
        name: "Lat Pulldown (Agarre Ancho)",
        sets: "4",
        reps: "10-12",
        rir: "-",
        notes: "Controla el movimiento.",
        muscles: { primary: ["lats"], secondary: ["biceps"] },
      },
      {
        name: "Seated Cable Row (Agarre Neutro)",
        sets: "4",
        reps: "12",
        rir: "-",
        notes: "Espalda recta, saca pecho.",
        muscles: { primary: ["lats", "rhomboids"], secondary: ["biceps"] },
      },
      {
        name: "Face Pulls",
        sets: "3",
        reps: "15",
        rir: "-",
        notes: "A la frente. Salud de hombros.",
        muscles: { primary: ["shoulders"], secondary: ["traps"] },
      },
      {
        name: "Kneeling Cable Crunches",
        sets: "4",
        reps: "20",
        rir: "-",
        notes: "Contrae el abdomen, no jales con los brazos.",
        muscles: { primary: ["abs"], secondary: [] },
      },
      {
        name: "Hollow Body Hold",
        sets: "4",
        reps: "45 seg",
        rir: "-",
        notes: "Zona lumbar pegada al suelo.",
        muscles: { primary: ["abs"], secondary: ["core"] },
      },
      {
        name: "Finisher: Remo o Escaladora",
        sets: "-",
        reps: "10 min",
        rir: "-",
        notes: "Alta intensidad.",
        muscles: { primary: ["cardio"], secondary: [] },
      },
    ],
  },
  {
    day: "Martes",
    title: "Día 2: Lower Body (The Strength Base)",
    exercises: [
      {
        name: "Calentamiento: Cinta",
        sets: "-",
        reps: "10 min",
        rir: "-",
        notes: "12% Incline / 3.2 MPH. No te agarres de las barandas.",
        muscles: { primary: ["legs", "cardio"], secondary: [] },
      },
      {
        name: "Back Squat",
        sets: "5",
        reps: "5",
        rir: "-",
        notes: "Pesado. Apunta a 1.5x tu peso corporal.",
        muscles: { primary: ["quads", "glutes"], secondary: ["lower_back"] },
      },
      {
        name: "Leg Press",
        sets: "4",
        reps: "10",
        rir: "-",
        notes: "Rango completo de movimiento.",
        muscles: { primary: ["quads"], secondary: ["glutes"] },
      },
      {
        name: "Leg Extensions",
        sets: "3",
        reps: "15",
        rir: "-",
        notes: "Contrae arriba (1 seg).",
        muscles: { primary: ["quads"], secondary: [] },
      },
      {
        name: "Lying Leg Curls",
        sets: "3",
        reps: "15",
        rir: "-",
        notes: "Controla la negativa.",
        muscles: { primary: ["hamstrings"], secondary: [] },
      },
      {
        name: "Hanging Leg Raises",
        sets: "4",
        reps: "15",
        rir: "-",
        notes: "Sube las rodillas al pecho sin balanceo.",
        muscles: { primary: ["abs"], secondary: ["hip_flexors"] },
      },
      {
        name: "Finisher: Remo o Escaladora",
        sets: "-",
        reps: "10 min",
        rir: "-",
        notes: "Alta intensidad.",
        muscles: { primary: ["cardio"], secondary: [] },
      },
    ],
  },
  {
    day: "Miércoles",
    title: "Descanso Activo / Stretching",
    exercises: [
      {
        name: "Caminata Ligera",
        sets: "1",
        reps: "30-45 min",
        rir: "-",
        notes: "Paso ligero, disfruta el día.",
        muscles: { primary: ["cardio"], secondary: [] },
      },
      {
        name: "Sesión de Estiramientos",
        sets: "1",
        reps: "15 min",
        rir: "-",
        notes: "Enfocate en movilidad de cadera y hombros.",
        muscles: { primary: ["flexibility"], secondary: [] },
      },
    ],
  },
  {
    day: "Jueves",
    title: "Día 3: Push & Shoulders (The Transition)",
    exercises: [
      {
        name: "Calentamiento: Cinta",
        sets: "-",
        reps: "10 min",
        rir: "-",
        notes: "12% Incline / 3.2 MPH. No te agarres de las barandas.",
        muscles: { primary: ["legs", "cardio"], secondary: [] },
      },
      {
        name: "Bodyweight Dips",
        sets: "4",
        reps: "8-10",
        rir: "-",
        notes: "Usa bandas si es necesario.",
        muscles: { primary: ["chest", "triceps"], secondary: ["shoulders"] },
      },
      {
        name: "Chest Press Machine",
        sets: "4",
        reps: "10",
        rir: "-",
        notes: "Empuje controlado.",
        muscles: { primary: ["chest"], secondary: ["triceps"] },
      },
      {
        name: "Shoulder Press Machine",
        sets: "4",
        reps: "12",
        rir: "-",
        notes: "Rango completo.",
        muscles: { primary: ["shoulders"], secondary: ["triceps"] },
      },
      {
        name: "Tricep Pushdowns",
        sets: "3",
        reps: "15",
        rir: "-",
        notes: "Codos pegados al cuerpo.",
        muscles: { primary: ["triceps"], secondary: [] },
      },
      {
        name: "Plank",
        sets: "4",
        reps: "60 seg",
        rir: "-",
        notes: "Cuerpo recto, contrae glúteos y abdomen.",
        muscles: { primary: ["abs"], secondary: ["core"] },
      },
      {
        name: "Finisher: Remo o Escaladora",
        sets: "-",
        reps: "10 min",
        rir: "-",
        notes: "Alta intensidad.",
        muscles: { primary: ["cardio"], secondary: [] },
      },
    ],
  },
  {
    day: "Viernes",
    title: "Día 4: Metabolic Conditioning (The Fat Burn)",
    exercises: [
      {
        name: "Burpees",
        sets: "4",
        reps: "15",
        rir: "-",
        notes: "Pecho al suelo.",
        muscles: { primary: ["cardio", "full_body"], secondary: [] },
      },
      {
        name: "Inverted Rows",
        sets: "4",
        reps: "12",
        rir: "-",
        notes: "Barra a la altura de la cintura.",
        muscles: { primary: ["back"], secondary: ["biceps"] },
      },
      {
        name: "Box Jumps",
        sets: "4",
        reps: "15",
        rir: "-",
        notes: "Aterrizaje suave.",
        muscles: { primary: ["legs", "cardio"], secondary: [] },
      },
      {
        name: "Mountain Climbers",
        sets: "4",
        reps: "45 seg",
        rir: "-",
        notes: "Rodillas al pecho, ritmo rápido.",
        muscles: { primary: ["abs", "cardio"], secondary: [] },
      },
    ],
  },
];

// --- STATE ---
// Auto-select Day
const currentDayOfWeek = new Date().getDay(); // 0=Sun, 1=Mon, ..., 6=Sat
// Mon(1) -> 0, Fri(5) -> 4. Saturday(6)/Sunday(0) -> 0 (Monday)
let activeTab =
  currentDayOfWeek >= 1 && currentDayOfWeek <= 5 ? currentDayOfWeek - 1 : 0;

// Auto-reset daily logic
const todayStr = new Date().toDateString();
const lastVisit = localStorage.getItem("gymLastVisitDate");
if (lastVisit !== todayStr) {
  localStorage.removeItem("gymRoutineSets");
  localStorage.setItem("gymLastVisitDate", todayStr);
}

let completedSets = JSON.parse(localStorage.getItem("gymSalvaSets")) || {};

// --- TIMER STATE ---
const timerState = {
  salva: {
    endTime: null,
    totalSeconds: 0,
    currentSeconds: 0,
    exerciseName: "",
    minimized: false,
    active: false,
  },
};

let globalTimerInterval = null;
let activeFullModalUser = null; // 'facu', 'alma', or null
let savedScrollY = 0;

// --- CALENDAR STATE ---
let currentView = "routine"; // 'routine' or 'history'
let calendarMonth = new Date().getMonth();
let calendarYear = new Date().getFullYear();
let trainingHistory = {};
let isSyncing = false;

// --- JSONBIN CONFIG ---
// Historial compartido entre Alma y Facu via JSONBin.io
const JSONBIN_API_KEY =
  "$2a$10$ARqbaMZJCBkzpOxFKlDU6.QpRQOwWN.7KMBcx7a7IH/pKOZD5uNye";
const JSONBIN_BIN_ID = "697c1aaad0ea881f4091d090"; // Salva's new isolated bin
const JSONBIN_ENABLED = true; // Enabled for Salva

// --- CLOUD SYNC FUNCTIONS ---
async function loadFromCloud() {
  if (!JSONBIN_ENABLED) {
    // Fallback to localStorage
    trainingHistory = JSON.parse(localStorage.getItem("gymSalvaHistory")) || {};
    return;
  }

  try {
    isSyncing = true;
    const response = await fetch(
      `https://api.jsonbin.io/v3/b/${JSONBIN_BIN_ID}/latest`,
      {
        method: "GET",
        headers: {
          "X-Master-Key": JSONBIN_API_KEY,
        },
      },
    );

    if (response.ok) {
      // 0. CHECK WIPE FLAG (Priority #1)
      if (localStorage.getItem("FORCE_WIPE_CLOUD") === "true") {
        console.warn("🧨 FORCE_WIPE_CLOUD flag detected. Nuking cloud data.");
        localStorage.removeItem("FORCE_WIPE_CLOUD");
        // User wanted a clean slate, so we overwrote local. Now overwrite cloud.
        saveToCloud();
        return;
      }

      const data = await response.json();
      const cloudHistory = data.record || {};

      // 0. CHECK RESET PRIORITY (Anti-Resurrection Logic)
      // If local reset is NEWER than cloud reset, Local Wins.
      // We ignore cloud data and force-push our clean state.
      const localLastReset = gamification?.salva?.lastReset || 0;
      const cloudLastReset =
        cloudHistory?.gamificationState?.salva?.lastReset || 0;

      if (localLastReset > cloudLastReset) {
        console.warn(
          "🛡️ Local Reset is newer than Cloud. Ignoring stale cloud data.",
        );
        // Trigger a push to wipe the cloud with our fresh empty state
        saveToCloud();
        return;
      }

      // 1. Extract and Sync Gamification
      if (cloudHistory.gamificationState) {
        // Simple strategy: Cloud wins for gamification state (to prevent infinite point glitches)
        if (
          JSON.stringify(gamification) !==
          JSON.stringify(cloudHistory.gamificationState)
        ) {
          gamification = cloudHistory.gamificationState;
          localStorage.setItem(
            "gymSalvaGamification",
            JSON.stringify(gamification),
          );
          if (typeof updateGamificationUI === "function") {
            updateGamificationUI();
          }
        }
        delete cloudHistory.gamificationState; // Remove so it doesn't pollute history iteration
      }

      // 2. Sync Exercise Weights from cloud
      if (cloudHistory.weightsState) {
        // Merge with local weights (preserve local if newer)
        const localWeights = JSON.parse(
          localStorage.getItem("gymSalvaWeights") || "{}",
        );
        const mergedWeights = { ...cloudHistory.weightsState, ...localWeights };

        // Check if data actually changed before re-rendering to avoid flicker
        if (JSON.stringify(setWeights) !== JSON.stringify(mergedWeights)) {
          setWeights = mergedWeights;
          localStorage.setItem(
            "gymSalvaWeights",
            JSON.stringify(mergedWeights),
          );
          console.log("⚖️ Pesos sincronizados desde la nube");

          // Refresh UI to show loaded weights
          if (typeof renderContent === "function") {
            renderContent();
            lucide.createIcons();
          }
        }
        delete cloudHistory.weightsState;
      }

      // 3. Merge Training History (Preserve local keys that aren't in cloud)
      // This prevents losing today's offline workout if we sync with yesterday's cloud data.
      // MERGE STRATEGY:
      // - If Local has { deleted: true }, keep it (Local deletion wins).
      // - If Cloud has { deleted: true }, keep it (Cloud deletion wins).
      // - If one side has data and other doesn't, allow data (unless deleted).

      const mergedHistory = { ...trainingHistory, ...cloudHistory };

      // Explicitly check for local tombstones that might have been overwritten by ...cloudHistory
      Object.keys(trainingHistory).forEach((key) => {
        if (trainingHistory[key].deleted) {
          mergedHistory[key] = trainingHistory[key]; // Restore local deletion
        }
      });

      // --- TIME-BOMB RESET LOGIC ---
      // If we have a lastReset timestamp, any record older than that DAY is invalid.
      // Normalize to start of day to avoid filtering out same-day entries
      const lastResetRaw = gamification.salva.lastReset || 0;
      const lastResetDate = new Date(lastResetRaw);
      lastResetDate.setHours(0, 0, 0, 0);
      const lastReset = lastResetDate.getTime();
      if (lastResetRaw > 0) {
        Object.keys(mergedHistory).forEach((key) => {
          // Skip special keys or metadata if they exist (though we usually have YYYY-MM-DD or legacy date strings)
          let dateObj;
          if (key.match(/^\d{4}-\d{2}-\d{2}$/)) {
            dateObj = new Date(key + "T00:00:00");
          } else {
            dateObj = new Date(key);
          }

          if (!isNaN(dateObj.getTime())) {
            if (dateObj.getTime() < lastReset) {
              // Mark as deleted in memory so it doesn't show up,
              // and potentially sync back as deleted (or just ignored)
              delete mergedHistory[key];
            }
          }
        });
      }
      // -----------------------------

      // Also, if cloud has deletion, it naturally overwrites via spread, which is good.

      if (JSON.stringify(trainingHistory) !== JSON.stringify(mergedHistory)) {
        trainingHistory = mergedHistory;
        localStorage.setItem(
          "gymSalvaHistory",
          JSON.stringify(trainingHistory),
        );
        console.log("✅ Historial cargado desde la nube");
      }

      // --- SYNC HYDRATION FROM CLOUD TO LOCAL ---
      const todayKey = getDateKey(new Date());
      if (trainingHistory[todayKey] && trainingHistory[todayKey].water) {
        // We found water data for today in cloud
        const cloudWater = trainingHistory[todayKey].water;

        let changed = false;
        if (cloudWater.salva !== undefined) {
          const newVal = Math.max(waterState.salva || 0, cloudWater.salva);
          if (newVal !== waterState.salva) {
            waterState.salva = newVal;
            changed = true;
          }
        }

        if (changed) {
          saveWaterState(); // Save to local storage
          if (typeof renderAquaFlow === "function") renderAquaFlow(); // Update UI
          console.log("💧 Hidratación sincronizada desde la nube");
        }
      }
    }
  } catch (error) {
    console.warn(
      "⚠️ Error cargando desde la nube, usando datos locales:",
      error,
    );
    trainingHistory = JSON.parse(localStorage.getItem("gymSalvaHistory")) || {};
  } finally {
    isSyncing = false;
  }
}

// --- GAMIFICATION STATE ---
let gamification = JSON.parse(localStorage.getItem("gymSalvaGamification")) || {
  salva: { points: 0, freezes: 0, frozenWeeks: [] },
};

// Ensure structure integrity
if (!gamification.salva)
  gamification.salva = { points: 0, freezes: 0, frozenWeeks: [] };
if (!gamification.salva.frozenWeeks) gamification.salva.frozenWeeks = [];

// Optimization: Update Render immediately with local data (don't wait for cloud/init)
if (typeof updateGamificationUI === "function") {
  updateGamificationUI();
}

async function saveToCloud() {
  // Check Achievements before saving (to include any new unlocks in this sync)
  // Avoid recursion if this function is called FROM checkAchievements
  // We can pass a flag or just assume checks act on local state which settles.
  // Actually, let's call it here safely.
  try {
    // Only check if function exists (safeguard)
    if (typeof checkAchievements === "function") {
      // We won't await it, just run it.
      // But wait, checkAchievements calls saveToCloud() on unlock.
      // If we call checkAchievements here, we might double-save.
      // Better to NOT call it here, but call it where state changes (addWater, addSet).
    }
  } catch (e) {}

  // Always save locally first
  localStorage.setItem("gymSalvaHistory", JSON.stringify(trainingHistory));
  localStorage.setItem("gymSalvaGamification", JSON.stringify(gamification)); // Save Gamification

  if (!JSONBIN_ENABLED) return;
  // ... rest of saveToCloud functionality wraps gamification too?
  // Since we are using JSONBIN, we should structure the payload to include both or have a separate bin.
  // Current implementation saves `trainingHistory` directly as the body.
  // To avoid breaking changes or complex migration of the bin structure,
  // I will attach gamification to the trainingHistory object TEMPORARILY as a hidden field `_gamification`.
  // Or better, I'll update the structure if I can.
  // User said "trainingHistory = data.record".
  // Let's attach it to trainingHistory as a special key "gamificationState".

  trainingHistory.gamificationState = gamification;

  // Also sync exercise weights (setWeights)
  const savedWeights = localStorage.getItem("gymSalvaWeights");
  if (savedWeights) {
    trainingHistory.weightsState = JSON.parse(savedWeights);
  }

  try {
    isSyncing = true;
    const response = await fetch(
      `https://api.jsonbin.io/v3/b/${JSONBIN_BIN_ID}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "X-Master-Key": JSONBIN_API_KEY,
        },
        body: JSON.stringify(trainingHistory),
      },
    );

    if (response.ok) {
      console.log("✅ Datos guardados en la nube");
    }
  } catch (error) {
    console.warn("⚠️ Error guardando en la nube:", error);
  } finally {
    isSyncing = false;
  }
}

// Load from cloud on startup
loadFromCloud().then(() => {
  if (currentView === "history") {
    renderCalendar();
    updateStats();
  }
  // Refresh Gamification UI (Streaks, Points)
  if (typeof updateGamificationUI === "function") {
    updateGamificationUI();
  }

  // Refresh Achievements Logic
  if (typeof checkAchievements === "function") {
    checkAchievements();
  }

  // Refresh Charts/Achievements Views if active
  if (currentView === "stats" && typeof renderCharts === "function")
    renderCharts();
  if (
    currentView === "achievements" &&
    typeof renderAchievements === "function"
  )
    renderAchievements();
});

// --- THEME STATE ---
let currentTheme = localStorage.getItem("gymTheme") || "dark";

function toggleTheme() {
  currentTheme = currentTheme === "dark" ? "light" : "dark";
  applyTheme();
  localStorage.setItem("gymTheme", currentTheme);
}

function applyTheme() {
  const body = document.body;
  const html = document.documentElement; // Tailwind looks here by default
  const icon = document.getElementById("theme-icon");

  if (currentTheme === "light") {
    body.classList.add("light");
    body.classList.remove("dark");
    html.classList.remove("dark"); // Remove from HTML
    if (icon) icon.setAttribute("data-lucide", "sun");
  } else {
    body.classList.remove("light");
    body.classList.add("dark");
    html.classList.add("dark"); // Add to HTML for Tailwind
    if (icon) icon.setAttribute("data-lucide", "moon");
  }
  lucide.createIcons();
}

// Apply saved theme on load
// Apply saved theme on load
document.addEventListener("DOMContentLoaded", () => {
  applyTheme();

  // Format Date for Header and Sidebar
  const dateResult = document.getElementById("header-full-date");
  const sidebarDate = document.getElementById("sidebar-date");
  const now = new Date();
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const formatted = now.toLocaleDateString("es-ES", options);
  const formattedUpper = formatted.toUpperCase();

  if (dateResult) dateResult.textContent = formattedUpper;
  if (sidebarDate) sidebarDate.textContent = formatted;
});

// --- VIEW FUNCTIONS ---
let scrollPosition = 0;

function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("sidebar-overlay");
  const isOpen = !sidebar.classList.contains("-translate-x-full");

  if (isOpen) {
    sidebar.classList.add("-translate-x-full");
    overlay.classList.remove("opacity-100");
    setTimeout(() => overlay.classList.add("hidden"), 300);
    // Unlock body scroll (restore position)
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.width = "";
    window.scrollTo(0, scrollPosition);
  } else {
    // Save scroll position before locking
    scrollPosition = window.pageYOffset;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.width = "100%";

    overlay.classList.remove("hidden");
    setTimeout(() => overlay.classList.add("opacity-100"), 10);
    sidebar.classList.remove("-translate-x-full");
  }
}

function navigateTo(view) {
  currentView = view;

  // Hide all main views
  const viewIds = [
    "routine-view",
    "history-view",
    "view-water",
    "view-stats",
    "view-achievements",
  ];
  viewIds.forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.classList.add("hidden");
  });

  // Show selected view and trigger render
  if (view === "routine") {
    document.getElementById("routine-view").classList.remove("hidden");
  } else if (view === "history") {
    const historyView = document.getElementById("history-view");
    if (historyView) historyView.classList.remove("hidden");
    renderCalendar();
    updateStats();
  } else if (view === "water") {
    const waterView = document.getElementById("view-water");
    if (waterView) {
      waterView.classList.remove("hidden");
      calculateAndRenderWaterGoal();
    }
  } else if (view === "stats") {
    const statsView = document.getElementById("view-stats");
    if (statsView) {
      statsView.classList.remove("hidden");
      renderCharts();
    }
  } else if (view === "achievements") {
    const achievementsView = document.getElementById("view-achievements");
    if (achievementsView) {
      achievementsView.classList.remove("hidden");
      renderAchievements();
    }
  }

  // Update Sidebar Active State
  const navItems = document.querySelectorAll("#sidebar nav button");
  navItems.forEach((btn) => {
    if (btn.onclick && btn.onclick.toString().includes(`'${view}'`)) {
      btn.classList.add("bg-slate-800", "text-white");
      btn.classList.remove("text-slate-300");
    } else {
      btn.classList.remove("bg-slate-800", "text-white");
      btn.classList.add("text-slate-300");
    }
  });

  // Close Sidebar on Mobile
  const sidebar = document.getElementById("sidebar");
  if (!sidebar.classList.contains("-translate-x-full")) {
    toggleSidebar();
  }

  lucide.createIcons();
}

// --- CALENDAR FUNCTIONS ---
function getDateKey(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
    2,
    "0",
  )}-${String(date.getDate()).padStart(2, "0")}`;
}

function markDayCompleted() {
  const today = getDateKey(new Date());

  if (!trainingHistory[today]) {
    trainingHistory[today] = { salva: false, weights: {} };
  }

  // Ensure weights object exists if migrating from old data
  if (!trainingHistory[today].weights) {
    trainingHistory[today].weights = {};
  }

  // Snapshot current weights into history for today
  trainingHistory[today].weights = {
    ...trainingHistory[today].weights,
    ...setWeights,
  };

  // AWARD POINTS
  const POINTS_PER_WORKOUT = 100;
  trainingHistory[today].salva = true;
  delete trainingHistory[today].deleted; // Clear any previous deletion flag
  gamification.salva.points += POINTS_PER_WORKOUT;
  const pointsMsg = ` (+${POINTS_PER_WORKOUT} pts)`;

  if (typeof checkAchievements === "function") {
    checkAchievements();
  }

  saveToCloud();
  updateGamificationUI();

  showToast(
    "user",
    "text-emerald-400",
    `¡Día registrado para Salva!${pointsMsg}`,
  );

  // Always update calendar and stats
  renderCalendar();
  updateStats();
}
window.markDayCompleted = markDayCompleted; // Expose to HTML onclick

function showToast(iconType, iconColor, message) {
  const toast = document.getElementById("toast");
  const iconEl = document.getElementById("toast-icon");
  iconEl.setAttribute("data-lucide", iconType);
  iconEl.className = `w-6 h-6 ${iconColor}`;
  document.getElementById("toast-message").textContent = message;
  toast.classList.remove("hidden");
  lucide.createIcons();
  setTimeout(() => {
    toast.classList.add("hidden");
  }, 3000);
}

function changeMonth(delta) {
  calendarMonth += delta;
  if (calendarMonth > 11) {
    calendarMonth = 0;
    calendarYear++;
  } else if (calendarMonth < 0) {
    calendarMonth = 11;
    calendarYear--;
  }
  renderCalendar();
  updateStats();
}

// --- CALENDAR RENDERER ---
function renderCalendar() {
  const grid = document.getElementById("calendar-grid");
  const monthLabel = document.getElementById("calendar-month");

  const monthNames = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  monthLabel.textContent = `${monthNames[calendarMonth]} ${calendarYear}`;

  grid.innerHTML = "";

  const firstDay = new Date(calendarYear, calendarMonth, 1);
  const lastDay = new Date(calendarYear, calendarMonth + 1, 0);
  const startDayOfWeek = firstDay.getDay();
  const daysInMonth = lastDay.getDate();
  const today = new Date();
  const todayKey = getDateKey(today);

  // Empty cells for days before month starts
  for (let i = 0; i < startDayOfWeek; i++) {
    grid.innerHTML += `<div class="p-2"></div>`;
  }

  // Days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(calendarYear, calendarMonth, day);
    const dateKey = getDateKey(date);

    // Legacy support
    const legacyKey = date.toDateString();

    const isToday = dateKey === todayKey;

    // Check both
    const history = trainingHistory[dateKey] || trainingHistory[legacyKey];

    let bgClass = "bg-slate-800/50 hover:bg-slate-800";
    let borderClass = "border-transparent";
    let icon = "";

    // TIME-BOMB CHECK: Ignore history if date is before lastReset
    // Normalize lastReset to start of its day for fair comparison
    const lastResetRaw = gamification.salva.lastReset || 0;
    let lastResetDayStart = 0;
    if (lastResetRaw > 0) {
      const lastResetDate = new Date(lastResetRaw);
      lastResetDate.setHours(0, 0, 0, 0);
      lastResetDayStart = lastResetDate.getTime();
    }
    const dateTimestamp = date.getTime();
    const isValidHistory =
      history && !history.deleted && dateTimestamp >= lastResetDayStart;

    if (isValidHistory) {
      if (history.salva) {
        bgClass = "bg-emerald-500/20";
        borderClass = "border-emerald-500";
        icon = '<i data-lucide="check" class="w-3 h-3 text-emerald-400"></i>';
      }
    }

    // Water indicators
    let waterIndicators = "";
    if (history && history.water) {
      if (history.water.salva >= (history.water.salvaGoal || 2500)) {
        waterIndicators +=
          '<div class="w-1.5 h-1.5 rounded-full bg-blue-500" title="Meta cumplida"></div>';
      } else if (history.water.salva > 0) {
        waterIndicators +=
          '<div class="w-1.5 h-1.5 rounded-full bg-slate-600" title="' +
          history.water.salva +
          'ml"></div>';
      }
    }

    // Check if we have hydration data in waterState (for TODAY live update)
    if (isToday && waterState) {
      waterIndicators = "";
      if (waterState.salva >= (waterState.salvaGoal || 2500)) {
        waterIndicators +=
          '<div class="w-1.5 h-1.5 rounded-full bg-blue-500" title="Meta cumplida"></div>';
      } else if (waterState.salva > 0) {
        waterIndicators +=
          '<div class="w-1.5 h-1.5 rounded-full bg-slate-600" title="' +
          waterState.salva +
          'ml"></div>';
      }
    }

    const todayRing = isToday
      ? "ring-2 ring-emerald-400 ring-offset-2 ring-offset-slate-900"
      : "";

    grid.innerHTML += `
                    <div class="aspect-square p-1 ${bgClass} border ${borderClass} rounded-lg flex flex-col items-center justify-center ${todayRing} transition-colors cursor-pointer" 
                         onclick="toggleDayModal('${dateKey}')">
                        <span class="text-sm font-medium ${
                          isToday ? "text-emerald-400" : "text-slate-300"
                        }">${day}</span>
                        <div class="flex gap-1 items-center justify-center mt-1">
                            ${icon}
                            ${waterIndicators ? `<div class="flex gap-0.5">${waterIndicators}</div>` : ""}
                        </div>
                    </div>
                `;
  }
}

function getVolumeHistory(user, days) {
  const history = [];
  const date = new Date();

  // Go back 'days' amount
  for (let i = days - 1; i >= 0; i--) {
    const d = new Date();
    d.setDate(date.getDate() - i);
    const key = getDateKey(d);

    // Legacy mapping
    const legacyKey = d.toDateString();

    // Calculate volume for that day
    let vol = 0;

    // Check both keys
    const record = trainingHistory[key] || trainingHistory[legacyKey];

    if (record && record.weights) {
      // Iterate all keys in weights
      Object.values(record.weights).forEach((pair) => {
        // pair = {facu: 50, alma: 30}
        // Use 10 reps as volume proxy
        if (pair[user]) vol += (parseInt(pair[user]) || 0) * 10;
      });
    }
    // Correct format for new chart logic {date, value}
    history.push({ date: key, value: vol });
  }
  return history;
}

function toggleDayModal(dateKey) {
  const history = trainingHistory[dateKey];
  const [year, month, day] = dateKey.split("-");
  const dateStr = `${day}/${month}/${year}`;

  let status = "Sin registro";
  if (history && !history.deleted) {
    if (history.salva) status = "Entrenado";
  }

  // Water status
  let waterStatus = "";
  if (history && history.water) {
    const salvaWater = history.water.salva || 0;

    if (salvaWater > 0) {
      waterStatus = `<div class="mt-3 pt-3 border-t border-slate-700">
        <div class="flex items-center gap-2 mb-2">
          <i data-lucide="droplets" class="w-4 h-4 text-sky-400"></i>
          <span class="text-xs font-bold text-slate-400">HIDRATACIÓN</span>
        </div>
        <div class="flex gap-4 text-sm">
          ${
            salvaWater > 0
              ? `<div class="flex items-center gap-1">
            <span>💧</span>
            <span class="${salvaWater >= 2500 ? "text-emerald-400" : "text-sky-300"}">${salvaWater >= 2500 ? "✅ Meta" : salvaWater + "ml"}</span>
          </div>`
              : ""
          }
        </div>
      </div>`;
    }
  }

  // Show custom modal
  document.getElementById("day-modal-title").textContent = dateStr;
  document.getElementById("day-modal-status").innerHTML = status + waterStatus;
  selectedDateKey = dateKey;

  const modal = document.getElementById("day-modal");
  modal.classList.remove("hidden");
  modal.classList.add("flex");
  lucide.createIcons();
}

let selectedDateKey = null;

// --- WEATHER & WATER LOGIC ---

// Persistent User Data
let userProfile = JSON.parse(localStorage.getItem("gymUserProfile")) || {
  salva: { weight: 80, height: 175, age: 25 },
};

// Ensure fields exist
if (!userProfile.salva)
  userProfile.salva = { weight: 80, height: 175, age: 25 };
if (!userProfile.salva.height) userProfile.salva.height = 175;
if (!userProfile.salva.age) userProfile.salva.age = 25;

// Water State
let waterState = JSON.parse(localStorage.getItem("water_tracker_state")) || {
  salva: 0,
  salvaGoal: 2500,
  history: [],
  date: new Date().toDateString(),
};

// Reset if new day
if (waterState.date !== new Date().toDateString()) {
  waterState.salva = 0;
  waterState.history = [];
  waterState.date = new Date().toDateString();
  saveWaterState();
}

let currentTemp = parseInt(localStorage.getItem("cachedTemp")) || 25; // Load cached or default

// Show cached temp immediately on load
if (localStorage.getItem("cachedTemp")) {
  setTimeout(() => updateWeatherUI(), 0);
}

async function fetchWeather() {
  try {
    // Obtener ubicación del usuario
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          await fetchWeatherFromCoords(lat, lon);
        },
        async () => {
          // Si el usuario niega permisos, usar ubicación por defecto (Mendoza)
          await fetchWeatherFromCoords(-32.8895, -68.8458);
        },
        { timeout: 10000, enableHighAccuracy: true },
      );
    } else {
      // Fallback a Mendoza si no hay geolocalización
      await fetchWeatherFromCoords(-32.8895, -68.8458);
    }
  } catch (e) {
    console.warn("Weather fetch failed", e);
  }
}

async function fetchWeatherFromCoords(lat, lon) {
  try {
    // Usar Open-Meteo API (gratis y confiable)
    const res = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`,
    );
    if (res.ok) {
      const data = await res.json();
      if (data.current_weather) {
        currentTemp = Math.round(data.current_weather.temperature);
        localStorage.setItem("cachedTemp", currentTemp);
        updateWeatherUI();
      }
    }
  } catch (e) {
    console.warn("Weather fetch failed", e);
  }
}

function updateWeatherUI() {
  // Header (desktop)
  const el = document.getElementById("weather-temp-header");
  const container = document.getElementById("header-weather");

  if (el) {
    el.textContent = `${currentTemp}°C`;
    if (container) container.classList.remove("hidden");
  }

  // Sidebar (mobile)
  const sidebarTemp = document.getElementById("sidebar-temp");
  const sidebarWeatherContainer = document.getElementById("sidebar-weather");

  if (sidebarTemp) {
    sidebarTemp.textContent = `${currentTemp}°C`;
    if (sidebarWeatherContainer)
      sidebarWeatherContainer.classList.remove("hidden");
  }
}

// --- AQUAFLOW LOGIC ---

const TANK_HEIGHT_SVG = 605; // Matches SVG ViewBox Height

// Smart Water Goal Calculator
function calculateSmartWaterGoal(user) {
  const profile = userProfile[user];
  const weight = profile.weight || 70;
  const height = profile.height || 170;
  const age = profile.age || 25;

  // Base: 35ml per kg of body weight
  let goal = weight * 35;

  // Height adjustment: +100ml if taller than 170cm
  if (height > 170) {
    goal += 100;
  }

  // Age adjustment: +100ml if under 30 (more active metabolism)
  if (age < 30) {
    goal += 100;
  } else if (age > 50) {
    goal -= 100;
  }

  // Temperature bonus
  if (currentTemp > 30) {
    goal += 500;
  } else if (currentTemp > 25) {
    goal += 300;
  }

  // Training day bonus: check if today is a training day
  const today = getDateKey(new Date());
  const history = trainingHistory[today];
  if (history && history[user]) {
    goal += 400;
  }

  // Round to nearest 50
  goal = Math.round(goal / 50) * 50;

  // Clamp between 1500 and 4500
  return Math.max(1500, Math.min(4500, goal));
}

function initAquaFlow() {
  // Calculate smart goals based on profile and conditions
  waterState.salvaGoal = calculateSmartWaterGoal("salva");
  saveWaterState();

  renderAquaFlow();
  startBubbleEngine("salva");

  // Set Slider Values
  const sliderSalva = document.getElementById("goal-input-salva");
  if (sliderSalva) {
    sliderSalva.value = waterState.salvaGoal;
    sliderSalva.addEventListener("input", (e) => {
      waterState.salvaGoal = parseInt(e.target.value);
      saveWaterState();
      renderAquaFlow();
    });
  }
}

function calculateAndRenderWaterGoal() {
  // Redirect to new renderer
  renderAquaFlow();
  renderWaterHistory();
}

function renderAquaFlow() {
  renderUserWater("salva");
}

function renderUserWater(user) {
  console.log(`[DEBUG] renderUserWater called for ${user}`);
  const current = waterState[user] || 0;
  const goal = waterState[`${user}Goal`] || 2500;
  console.log(`[DEBUG] Code State: current=${current}, goal=${goal}`);

  // Update Text
  const percent = Math.min(100, Math.floor((current / goal) * 100));
  const percentEl = document.getElementById(`percent-${user}`);
  const amountEl = document.getElementById(`amount-${user}`);
  const goalTextEl = document.getElementById(`goal-text-${user}`);

  console.log(
    `[DEBUG] Elements found? percent=${!!percentEl}, amount=${!!amountEl}`,
  );

  if (percentEl) percentEl.textContent = `${percent}%`;
  if (amountEl) amountEl.textContent = `${current} / ${goal} ml`;
  if (goalTextEl) goalTextEl.textContent = `${goal} ml`;

  // Update SVG Water Level
  // visualPercent clamped to 1 (100%) so it doesn't overflow visually
  const visualPercent = Math.min(1, current / goal);
  const newY = TANK_HEIGHT_SVG - visualPercent * TANK_HEIGHT_SVG;
  console.log(`[DEBUG] NewY: ${newY}`);

  const rect = document.getElementById(`water-rect-${user}`);
  console.log(`[DEBUG] Rect found? ${!!rect}`);
  if (rect) {
    rect.setAttribute("y", newY);
  }
}

// Override addWater to handle new signature
// Old: addWater(amount) -> implied Facu? No, original app didn't specify user clearly in addWater,
// actually the previous code had specific buttons? Let's check.
// The new HTML uses addWater('facu', 250).

// We need to keep a compatible signature or update all calls.
// The HTML calls `addWater('facu', 250)`, so we update global addWater.

// Override addWater to handle new signature
// Override addWater to handle new signature
function addWater(user, amount) {
  // Always Salva
  user = "salva";
  console.log(`[DEBUG] addWater called for ${user}, amount: ${amount}`);
  if (!amount || amount === 0) return;

  const current = waterState[user] || 0;
  const goal = waterState[`${user}Goal`] || 2500;
  const oldPercent = current / goal;

  // Update State
  waterState[user] = Math.max(0, current + amount);

  // Add to History
  if (!waterState.history) waterState.history = [];
  waterState.history.unshift({
    user: user,
    amount: amount,
    time: new Date().toLocaleTimeString("es-ES", {
      hour: "2-digit",
      minute: "2-digit",
    }),
  });
  // Keep last 20 entries
  if (waterState.history.length > 20) waterState.history.pop();

  saveWaterState();

  // SYNC WITH TRAINING HISTORY (for calendar display)
  try {
    const todayKey = getDateKey(new Date());
    if (!trainingHistory[todayKey]) {
      trainingHistory[todayKey] = { salva: false, weights: {} };
    }
    if (!trainingHistory[todayKey].water) {
      trainingHistory[todayKey].water = {};
    }
    trainingHistory[todayKey].water.salva = waterState.salva;
    localStorage.setItem("gymTrainingHistory", JSON.stringify(trainingHistory));

    // TRIGGER CLOUD SYNC IMMEDIATELY
    saveToCloud();
  } catch (e) {
    console.error("Error syncing water:", e);
  }

  // Visuals
  try {
    if (amount > 0) {
      animateShake(user);

      // Check Goal
      const newPercent = waterState[user] / goal;
      const oldPercent = Math.max(0, waterState[user] - amount) / goal; // Approx existing logic
      if (oldPercent < 1 && newPercent >= 1) {
        triggerConfetti();
      }
    }
  } catch (e) {
    console.warn("Anim error", e);
  }

  console.log(`[DEBUG] Calling renderAquaFlow from addWater`);
  renderAquaFlow();
  renderWaterHistory();
}

// --- HELPERS ---
function getDateKey(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function renderWaterHistory() {
  const container = document.getElementById("water-history-list");
  if (!container) return; // Need to create this in HTML first

  container.innerHTML = "";
  const history = waterState.history || [];

  if (history.length === 0) {
    container.innerHTML =
      '<p class="text-slate-500 text-xs italic text-center">Sin registros hoy</p>';
    return;
  }

  history.forEach((entry) => {
    const item = document.createElement("div");
    item.className =
      "flex justify-between items-center bg-slate-800/50 p-2 rounded-lg text-xs";
    const color = "text-blue-400";
    const icon = "💧";
    item.innerHTML = `
            <span class="flex items-center gap-2 ${color}">
                <span>${icon}</span>
                <span class="font-bold">Salva</span>
            </span>
            <span class="text-white font-mono">${entry.amount > 0 ? "+" : ""}${entry.amount}ml</span>
            <span class="text-slate-500">${entry.time}</span>
        `;
    container.appendChild(item);
  });
}

function saveWaterState() {
  localStorage.setItem("water_tracker_state", JSON.stringify(waterState));
}

function resetDay(user) {
  // Reset water for this user
  waterState[user] = 0;

  // Also clear history entries for this user
  if (waterState.history) {
    waterState.history = waterState.history.filter(
      (entry) => entry.user !== user,
    );
  }

  saveWaterState();
  renderAquaFlow();
  renderWaterHistory();

  showToast("rotate-ccw", "text-blue-400", `Consumo reiniciado`);
}

// Animations
function animateStream(user) {
  const stream = document.getElementById(`water-stream-${user}`);
  const bottle = document.getElementById(`bottle-container-${user}`);
  if (!stream || !bottle) return;

  // Approx height logic
  const goal = waterState[`${user}Goal`] || 2500;
  const current = waterState[user] || 0;
  const percent = Math.min(1, current / goal);

  const waterHeightPx = bottle.offsetHeight * percent;
  const dropDistance = bottle.offsetHeight - waterHeightPx + 15;

  stream.style.height = `${dropDistance}px`;
  stream.classList.add("active");

  setTimeout(() => {
    stream.classList.remove("active");
    stream.style.height = "0";
  }, 600);
}

function animateShake(user) {
  const b = document.getElementById(`bottle-container-${user}`);
  if (b) {
    b.classList.remove("shaking");
    void b.offsetWidth; // trigger reflow
    b.classList.add("shaking");
  }
}

function startBubbleEngine(user) {
  const group = document.getElementById(`bubbles-group-${user}`);
  if (!group) return;

  setInterval(
    () => {
      // Only if water exists
      if ((waterState[user] || 0) > 0) {
        const bubble = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "circle",
        );
        const x = Math.random() * 100 + 40;
        const r = Math.random() * 5 + 2;
        const startY = 600;

        bubble.setAttribute("cx", x);
        bubble.setAttribute("cy", startY);
        bubble.setAttribute("r", r);
        bubble.classList.add("svg-bubble");

        group.appendChild(bubble);
        setTimeout(() => bubble.remove(), 4000);
      }
    },
    1500 + Math.random() * 1000,
  ); // Randomize
}

function triggerConfetti() {
  const canvas = document.getElementById("confetti-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Simple confetti
  let particles = [];
  const colors = ["#0ea5e9", "#ec4899", "#fcd34d"];

  for (let i = 0; i < 100; i++) {
    particles.push({
      x: canvas.width / 2,
      y: canvas.height / 2,
      vx: (Math.random() - 0.5) * 15,
      vy: (Math.random() - 0.5) * 15 - 5,
      color: colors[Math.floor(Math.random() * colors.length)],
      life: 100,
    });
  }

  function tick() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let active = false;
    particles.forEach((p) => {
      if (p.life > 0) {
        active = true;
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.5;
        p.life--;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 5, 0, Math.PI * 2);
        ctx.fill();
      }
    });
    if (active) requestAnimationFrame(tick);
  }
  tick();
}

// --- PROFILE MODAL FUNCTIONS ---
function openProfileModal() {
  document.getElementById("profile-weight-salva").value =
    userProfile.salva.weight;
  document.getElementById("profile-height-salva").value =
    userProfile.salva.height;
  document.getElementById("profile-age-salva").value = userProfile.salva.age;

  const modal = document.getElementById("profile-modal");
  modal.classList.remove("hidden");
  modal.classList.add("flex");

  setTimeout(() => {
    modal.classList.remove("opacity-0");
    modal.querySelector("div").classList.remove("scale-95");
  }, 10);

  lucide.createIcons();
}

function closeProfileModal() {
  const modal = document.getElementById("profile-modal");
  modal.classList.add("opacity-0");
  modal.querySelector("div").classList.add("scale-95");
  setTimeout(() => {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }, 300);
}

function saveProfile() {
  const wFacu = document.getElementById("profile-weight-facu").value;
  const wAlma = document.getElementById("profile-weight-alma").value;
  const hFacu = document.getElementById("profile-height-facu").value;
  const hAlma = document.getElementById("profile-height-alma").value;
  const aFacu = document.getElementById("profile-age-facu").value;
  const aAlma = document.getElementById("profile-age-alma").value;

  if (wFacu) userProfile.facu.weight = parseInt(wFacu);
  if (wAlma) userProfile.alma.weight = parseInt(wAlma);
  if (hFacu) userProfile.facu.height = parseInt(hFacu);
  if (hAlma) userProfile.alma.height = parseInt(hAlma);
  if (aFacu) userProfile.facu.age = parseInt(aFacu);
  if (aAlma) userProfile.alma.age = parseInt(aAlma);

  localStorage.setItem("gymUserProfile", JSON.stringify(userProfile));

  // Recalculate water goals based on new profile
  waterState.facuGoal = calculateSmartWaterGoal("facu");
  waterState.almaGoal = calculateSmartWaterGoal("alma");
  saveWaterState();

  renderAquaFlow();
  closeProfileModal();
  showToast(
    "user-cog",
    "text-violet-400",
    "Perfil actualizado - metas de agua recalculadas",
  );
}

// --- ADVANCED STATS LOGIC ---
// --- ADVANCED STATS LOGIC ---
function renderAdvancedStats() {
  const now = new Date();

  // 1. Weekly Progress (Mon-Sun) - Goal: 4 days
  const day = now.getDay(); // 0 (Sun) - 6 (Sat)
  const diff = now.getDate() - day + (day === 0 ? -6 : 1); // adjust when day is sunday
  const monday = new Date(now.setDate(diff));

  let salvaWeekCount = 0;

  // Iterate 7 days from Monday
  for (let i = 0; i < 7; i++) {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    const k = getDateKey(d);
    if (trainingHistory[k]) {
      if (trainingHistory[k].salva) salvaWeekCount++;
    }
  }

  // Update Week UI (Assuming simplified single bar in HTML, or reusing one of the existing slots)
  // We'll update the "week-facu-current" slots as primary for Salva if specific IDs weren't updated in HTML
  // But ideally HTML IDs should be updated to 'week-salva-...'
  const weekCurrentEl = document.getElementById("week-salva-current");
  if (weekCurrentEl) weekCurrentEl.textContent = salvaWeekCount;

  const weekPct = Math.min(100, (salvaWeekCount / 4) * 100); // Goal 4 days
  const weekBar = document.getElementById("week-salva-bar");
  if (weekBar) weekBar.style.width = `${weekPct}%`;

  // Badge status
  const weekBadge = document.getElementById("week-status-badge");
  if (weekBadge) {
    if (salvaWeekCount >= 4) {
      weekBadge.textContent = "¡Objetivo Cumplido!";
      weekBadge.className =
        "px-2 py-1 rounded-md bg-emerald-500/20 text-xs font-bold text-emerald-400 border border-emerald-500/50";
    } else {
      weekBadge.textContent = "En Progreso";
      weekBadge.className =
        "px-2 py-1 rounded-md bg-slate-800 text-xs font-bold text-slate-500 border border-slate-700";
    }
  }

  // 2. Month & Year Totals - VOLUME BASED (Kg)
  let monthVolume = 0;
  let yearVolume = 0;
  let totalSalvaYearVol = 0;

  const currentMonthKey = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
  const currentYearKey = `${now.getFullYear()}`;
  const AVG_REPS = 10;

  Object.keys(trainingHistory).forEach((key) => {
    const isMonth = key.startsWith(currentMonthKey);
    const isYear = key.startsWith(currentYearKey);

    if (!isYear) return;

    const dayWeights = trainingHistory[key].weights || {};
    let dayVolSalva = 0;

    Object.values(dayWeights).forEach((val) => {
      // Structure: setWeights[key] = {salva: '20'}
      if (val.salva) dayVolSalva += (parseFloat(val.salva) || 0) * AVG_REPS;
    });

    if (isMonth) monthVolume += dayVolSalva;
    if (isYear) {
      yearVolume += dayVolSalva;
      totalSalvaYearVol += dayVolSalva;
    }
  });

  // Render Volume Stats
  const monthEl = document.getElementById("month-volume");
  if (monthEl) monthEl.textContent = monthVolume.toLocaleString("es-AR");

  const yearEl = document.getElementById("year-volume");
  if (yearEl) yearEl.textContent = (yearVolume / 1000).toFixed(1);

  // Re-purpose the specific ID for Salva
  const totalVolEl = document.getElementById("total-salva-volume");
  if (totalVolEl)
    totalVolEl.textContent = (totalSalvaYearVol / 1000).toFixed(1) + " t";
}

// Hook into existing updateStats
const originalUpdateStats = updateStats;
updateStats = function () {
  originalUpdateStats(); // Call original
  renderAdvancedStats(); // Update new stats
  fetchWeather(); // Ensure weather is refreshing
  if (typeof renderCharts === "function") renderCharts();
};

// Initialize on Load
document.addEventListener("DOMContentLoaded", () => {
  fetchWeather(); // Get weather immediately
  setInterval(fetchWeather, 30 * 60 * 1000); // Refresh every 30 minutes
  calculateAndRenderWaterGoal(); // Render water based on stored/default
});
function setDayTraining(who) {
  if (!selectedDateKey) return;

  if (who === "clear") {
    // Soft delete: Mark as deleted to prevent cloud resurrection
    trainingHistory[selectedDateKey] = { salva: false, deleted: true };
    showToast("trash-2", "text-red-400", "¡Registro eliminado!");
  } else if (who === "salva") {
    trainingHistory[selectedDateKey] = { salva: true };
    showToast("check", "text-emerald-400", "¡Día completado!");
  }

  saveToCloud();
  closeDayModal();
  renderCalendar();
  updateStats();
  updateGamificationUI(); // Recalculate streak when history changes
}

function closeDayModal() {
  const modal = document.getElementById("day-modal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
  selectedDateKey = null;
}

function updateStats() {
  let salvaCount = 0;
  let totalDays = 0;

  // Count for current month only
  Object.keys(trainingHistory).forEach((dateKey) => {
    const [year, month] = dateKey.split("-").map(Number);
    if (year === calendarYear && month === calendarMonth + 1) {
      const h = trainingHistory[dateKey];
      if (h.salva) {
        salvaCount++;
        totalDays++;
      }
    }
  });

  const statTotal = document.getElementById("stat-total");
  if (statTotal)
    statTotal.innerHTML = `${totalDays} <span class="text-sm text-slate-500">días</span>`;
}

// --- HELPER: Parse rest time from notes ---
function parseRestTime(notes) {
  const match = notes.match(/Descanso:\s*(\d+)(?:-\d+)?\s*(min|seg)/i);
  if (match) {
    const value = parseInt(match[1]);
    const unit = match[2].toLowerCase();
    return unit === "min" ? value * 60 : value;
  }
  return 90; // Default 90 seconds
}

// --- SILENT AUDIO FOR BACKGROUND & LOCK SCREEN ---
// 1 second of silence mp3
const SILENT_AUDIO_URI =
  "data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//OEAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAEAAABIADAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMD//////////////////////////////////////////////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAAAAAAAAAAAAACCAAAAAAAAAAAAAA//OEMAAAAAAABiAAAAAAAAAAAgAAAAAAAAAAAAAA//OEMAAAAAAABiAAAAAAAAAAAgAAAAAAAAAAAAAA//OEMAAAAAAABiAAAAAAAAAAAgAAAAAAAAAAAAAA//OEMAAAAAAABiAAAAAAAAAAAgAAAAAAAAAAAAAA//OEMAAAAAAABiAAAAAAAAAAAgAAAAAAAAAAAAAA";
let bgAudio = new Audio(SILENT_AUDIO_URI);
bgAudio.loop = true;

function enableBackgroundMode(exerciseName, duration) {
  // Play silent audio to keep background active
  bgAudio
    .play()
    .then(() => {
      logToScreen("🔊 Audio Silencioso ACTIVO (Lock Screen Mode)", "success");
      // Setup Lock Screen Media Controls
      if ("mediaSession" in navigator) {
        navigator.mediaSession.metadata = new MediaMetadata({
          title: `Descanso: ${exerciseName}`,
          artist: "GymRutina",
          artwork: [
            { src: "favicon.svg", sizes: "96x96", type: "image/svg+xml" },
            { src: "favicon.svg", sizes: "128x128", type: "image/svg+xml" },
          ],
        });
        navigator.mediaSession.playbackState = "playing";

        // Attempt to show progress bar
        try {
          navigator.mediaSession.setPositionState({
            duration: duration,
            playbackRate: 1,
            position: 0,
          });
        } catch (e) {
          logToScreen("Media Session Position Error: " + e, "error");
        }
      }
    })
    .catch((e) => logToScreen("❌ Audio Silencioso FALLÓ: " + e, "error"));
}

// --- Note: navigateTo is defined earlier in the file ---

// --- CHARTS LOGIC ---
function renderCharts() {
  try {
    const container = document.getElementById("charts-container");
    if (!container) return;
    container.innerHTML = "";

    // 1 Chart for Salva using "Daily Volume" over last 14 days.
    const user = "salva";

    // Get Data
    let dataPoints = getVolumeHistory(user, 14);

    // Fallback/Debug Log if empty
    if (dataPoints.every((d) => d.value === 0)) {
      console.log("No data found for charts (all zeros).");
    }

    const chartHTML = generateSVGLineChart(dataPoints, "#10b981", user);

    const card = document.createElement("div");
    card.className = "bg-slate-900 border border-slate-800 p-4 rounded-2xl";
    card.innerHTML = `
          <h3 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
              📊 Volumen de Salva
              <span class="text-xs text-slate-500 font-normal">(Últimos 14 días)</span>
          </h3>
          ${chartHTML}
        `;
    container.appendChild(card);
  } catch (e) {
    console.error("Error renderizando gráfico: ", e);
    // Optional: alert check during debug
    // alert("Error renderizando gráfico: " + e.message);
  }
}

function getVolumeHistory(user, days) {
  const history = [];
  const date = new Date();
  // Go back 'days' amount
  for (let i = days - 1; i >= 0; i--) {
    const d = new Date();
    d.setDate(date.getDate() - i);
    const key = getDateKey(d);

    // Legacy Key Support (toDateString)
    // Some data might be saved as "Mon Jan 22 2026"
    const legacyKey = d.toDateString();

    // Calculate volume for that day
    let vol = 0;

    // Check both keys
    let record = trainingHistory[key] || trainingHistory[legacyKey];

    // UX IMPROVEMENT: If looking at TODAY (i=0), merge with live 'setWeights'
    // This ensures the chart shows progress immediately, even before hitting "Complete"
    if (i === 0) {
      const liveWeights = typeof setWeights !== "undefined" ? setWeights : {};

      if (record && record.weights) {
        // Merge existing history with live updates
        record = { ...record, weights: { ...record.weights, ...liveWeights } };
      } else {
        // No history yet for today? Use live weights entirely
        record = { weights: liveWeights };
      }
    }

    if (record && record.weights) {
      // Iterate all keys in weights
      Object.values(record.weights).forEach((pair) => {
        // pair = {facu: 50, alma: 30}
        // Sum roughly: Weight * 10 reps (Approximation for Volume)
        if (pair[user]) vol += (parseInt(pair[user]) || 0) * 10;
      });
    }
    // Expected format for new SVG chart: { date: "YYYY-MM-DD", value: 123 }
    history.push({ date: key, value: vol });
  }
  return history;
}

function generateSVGLineChart(data, color, user) {
  const width = 600;
  const height = 250; // Increased height for labels
  const padding = 40; // Increased padding for axis text

  if (data.every((d) => d.value === 0)) {
    return `<div class="h-64 flex flex-col items-center justify-center text-slate-500 gap-2">
                <i data-lucide="bar-chart-2" class="w-8 h-8 opacity-50"></i>
                <span class="text-sm font-medium">Sin datos recientes</span>
            </div>`;
  }

  const maxValue = Math.max(...data.map((d) => d.value)) || 100;
  const roundedMax = Math.ceil(maxValue / 100) * 100; // Round up to nearest 100 for cleaner scale

  // Helper to map Value to Y
  const getY = (val) =>
    height - padding - (val / roundedMax) * (height - padding * 2);

  // Helper to map Index to X
  const getX = (i) => padding + (i / (data.length - 1)) * (width - padding * 2);

  // Grid Lines & Labels (0, 50%, 100%)
  const gridLines = [0, roundedMax / 2, roundedMax]
    .map((val) => {
      const y = getY(val);
      return `
      <line x1="${padding}" y1="${y}" x2="${width - padding}" y2="${y}" stroke="#334155" stroke-width="1" stroke-dasharray="4" opacity="0.5" />
      <text x="${padding - 10}" y="${y + 4}" fill="#94a3b8" font-size="10" text-anchor="end">${Math.round(val)}</text>
    `;
    })
    .join("");

  // X Axis Labels (Show approx 5 dates)
  const xLabels = data
    .map((d, i) => {
      // Show label only for specific indices to avoid clutter
      if (i % 3 === 0 || i === data.length - 1) {
        const dateStr = d.date.split("-").slice(1).join("/"); // MM/DD
        const x = getX(i);
        return `<text x="${x}" y="${height - 10}" fill="#94a3b8" font-size="10" text-anchor="middle">${dateStr}</text>`;
      }
      return "";
    })
    .join("");

  const points = data.map((d, i) => `${getX(i)},${getY(d.value)}`).join(" ");

  // Gradient area below the line
  const areaPoints = `${getX(0)},${getY(0)} ${points} ${getX(data.length - 1)},${getY(0)}`;
  const gradientId = `grad-${user}`;

  return `
      <svg viewBox="0 0 ${width} ${height}" class="w-full h-auto drop-shadow-xl font-mono" style="overflow: visible;">
         <defs>
            <linearGradient id="${gradientId}" x1="0%" y1="0%" x2="0%" y2="100%">
               <stop offset="0%" style="stop-color:${color};stop-opacity:0.2" />
               <stop offset="100%" style="stop-color:${color};stop-opacity:0" />
            </linearGradient>
         </defs>

         <!-- Grid & Axis Labels -->
         ${gridLines}
         ${xLabels}
         
         <!-- Axis Lines -->
         <line x1="${padding}" y1="${height - padding}" x2="${width - padding}" y2="${height - padding}" stroke="#475569" stroke-width="1" />
         <line x1="${padding}" y1="${padding}" x2="${padding}" y2="${height - padding}" stroke="#475569" stroke-width="1" />
         
         <!-- Area Fill -->
         <polygon points="${areaPoints}" fill="url(#${gradientId})" stroke="none" />

         <!-- Path -->
         <polyline fill="none" stroke="${color}" stroke-width="3" points="${points}" 
                   stroke-linecap="round" stroke-linejoin="round"
                   class="animate-draw-line" />
                   
         <!-- Inteactive Points -->
         ${data
           .map((d, i) => {
             const x = getX(i);
             const y = getY(d.value);
             return `
               <g class="group">
                 <circle cx="${x}" cy="${y}" r="4" fill="${color}" stroke="#0f172a" stroke-width="2" class="group-hover:scale-150 transition-transform origin-center cursor-pointer" />
                 <!-- Tooltip (Simulated via title, usually handled via JS for HTML tooltips, but SVG title works on hover) -->
                 <title>${d.date}: ${d.value} kg</title>
               </g>
             `;
           })
           .join("")}
      </svg>
    `;
}

// --- TIMER FUNCTIONS ---
let wakeLock = null;
let lastNotificationSeconds = null;

async function requestWakeLock() {
  try {
    if ("wakeLock" in navigator) {
      wakeLock = await navigator.wakeLock.request("screen");
      console.log("Wake Lock active");
    }
  } catch (err) {
    console.error(`Wake Lock error: ${err.name}, ${err.message}`);
  }
}

async function releaseWakeLock() {
  if (wakeLock !== null) {
    await wakeLock.release();
    wakeLock = null;
    console.log("Wake Lock released");
  }
}

function showTimer(user, exerciseName, seconds) {
  // 1. Set State for this user
  timerState[user] = {
    endTime: Date.now() + seconds * 1000,
    totalSeconds: seconds,
    currentSeconds: seconds,
    exerciseName: exerciseName,
    minimized: false,
    active: true,
  };

  // 2. Logic to determine display
  // If another user is already Full Screen, minimize them?
  // OR just force this new one to be Full Screen and minimize the other.
  // We'll force this one to Full Screen.

  if (activeFullModalUser && activeFullModalUser !== user) {
    // Minimize the currently active user
    timerState[activeFullModalUser].minimized = true;
  }

  activeFullModalUser = user;
  timerState[user].minimized = false;
  savedScrollY = window.scrollY; // Update scroll position

  // 3. Render and Start
  renderTimerUI();
  startGlobalTimerIfNeeded();

  // 4. System controls
  document.body.style.overflow = "hidden";
  document.body.style.position = "fixed";
  document.body.style.top = `-${savedScrollY}px`;
  document.body.style.width = "100%";
  document.body.style.touchAction = "none";

  // Audio & Lock
  requestWakeLock();
  enableBackgroundMode(exerciseName, seconds);
}

function startGlobalTimerIfNeeded() {
  if (globalTimerInterval) return;

  globalTimerInterval = setInterval(() => {
    const now = Date.now();
    let anyoneActive = false;

    // Iterate only Salva
    ["salva"].forEach((user) => {
      const state = timerState[user];
      if (!state.active) return;
      anyoneActive = true;

      const diff = state.endTime - now;
      state.currentSeconds = Math.ceil(diff / 1000);

      if (state.currentSeconds <= 0) {
        state.currentSeconds = 0;
        // Timer Finished Logic
        handleTimerComplete(user);
      }
    });

    if (!anyoneActive) {
      clearInterval(globalTimerInterval);
      globalTimerInterval = null;
      releaseWakeLock();
      disableBackgroundMode();
    } else {
      updateTimerDisplay(); // Updates values only

      // Update Lock Screen Media Player
      if (
        "mediaSession" in navigator &&
        activeFullModalUser &&
        timerState[activeFullModalUser].active
      ) {
        const state = timerState[activeFullModalUser];
        if (
          state.currentSeconds >= 0 &&
          state.totalSeconds >= state.currentSeconds
        ) {
          try {
            navigator.mediaSession.setPositionState({
              duration: state.totalSeconds,
              playbackRate: 1,
              position: state.totalSeconds - state.currentSeconds,
            });
          } catch (e) {}
        }
      }

      handleNotifications();
    }
  }, 200);
}

function handleTimerComplete(user) {
  const state = timerState[user];
  state.active = false;

  // Sound
  playTimerEnd();

  // Notifications
  if (Notification.permission === "granted") {
    const title = "¡Tiempo Terminado!";
    const options = {
      body: `Descanso finalizado para ${state.exerciseName}`,
      icon: "favicon.svg",
      vibrate: [200, 100, 200, 100, 200],
      tag: `timer-end-${user}`,
      renotify: true,
    };

    if (navigator.serviceWorker && navigator.serviceWorker.controller) {
      navigator.serviceWorker.ready.then((reg) =>
        reg.showNotification(title, options),
      );
    } else {
      new Notification(title, options);
    }
  }

  // Auto-hide UI after delay
  setTimeout(() => {
    hideTimer(user);
  }, 1500);

  // Force UI update immediately to show 0:00
  renderTimerUI();
}

function handleNotifications() {
  // Simple logic: If in backgound, update notification for the user with LEAST time remaining?
  // Or just update the one that is Full Screen (most relevant).
  if (
    document.visibilityState === "hidden" &&
    Notification.permission === "granted"
  ) {
    // Find the most urgent timer
    let urgentUser = null;
    let minTime = Infinity;

    ["salva"].forEach((user) => {
      if (
        timerState[user].active &&
        timerState[user].currentSeconds < minTime
      ) {
        minTime = timerState[user].currentSeconds;
        urgentUser = user;
      }
    });

    if (urgentUser) {
      const state = timerState[urgentUser];
      if (state.currentSeconds !== lastNotificationSeconds) {
        lastNotificationSeconds = state.currentSeconds;
        if (navigator.serviceWorker && navigator.serviceWorker.controller) {
          navigator.serviceWorker.ready.then((reg) => {
            const mins = Math.floor(state.currentSeconds / 60);
            const secs = state.currentSeconds % 60;
            reg.showNotification(
              `Descansando (Salva): ${mins}:${secs.toString().padStart(2, "0")}`,
              {
                body: state.exerciseName,
                icon: "favicon.svg",
                tag: "timer-progress",
                silent: true,
                renotify: false,
                visibility: "public",
              },
            );
          });
        }
      }
    }
  }
}

function renderTimerUI() {
  const modal = document.getElementById("timer-modal");
  const fullContainer = document.getElementById("timer-full");
  const miniContainer = document.getElementById("mini-timers-container");

  // Clear Mini Container
  miniContainer.innerHTML = "";

  // Check if anyone is active
  const anyActive = timerState.salva.active;

  if (!anyActive) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
    return;
  }

  // Show Modal Wrapper
  modal.classList.remove("hidden");
  modal.classList.add("flex");

  // Render Full Modal?
  if (
    activeFullModalUser &&
    timerState[activeFullModalUser].active &&
    !timerState[activeFullModalUser].minimized
  ) {
    // Show Full Modal
    fullContainer.classList.remove("hidden");
    modal.classList.add("bg-black/80", "backdrop-blur-sm");
    modal.classList.remove("bg-transparent", "pointer-events-none");

    // SETUP FULL MODAL CONTENT
    const user = activeFullModalUser;
    const state = timerState[user];

    // Colors based on user (now always emerald for Salva)
    const colorClass = "text-emerald-400";
    const borderClass = "border-emerald-500";

    // Update static elements of modal if needed (titles, colors)
    // We'll update dynamic values in updateTimerDisplay
    document.getElementById("timer-exercise-name").textContent =
      `${state.exerciseName} (Salva)`;

    // Just ensure the container looks right for the user?
    // Optionally trigger a color update or just keep it emerald/neutral.
    // Let's keep existing emerald theme BUT maybe adding a user badge?
  } else {
    // No one in Full Screen (all minimized)
    fullContainer.classList.add("hidden");
    modal.classList.remove("bg-black/80", "backdrop-blur-sm");
    modal.classList.add("bg-transparent", "pointer-events-none");
  }

  // Render Bubbles (for anyone minimized or NOT the active full screen)
  ["salva"].forEach((user) => {
    const state = timerState[user];
    if (state.active && (state.minimized || user !== activeFullModalUser)) {
      // Render Bubble
      const bubble = createMiniTimerBubble(user, state);
      miniContainer.appendChild(bubble);
    }
  });

  lucide.createIcons();
}

function createMiniTimerBubble(user, state) {
  const div = document.createElement("div");
  // Single user mode - always emerald for Salva
  const borderColor = "border-emerald-500";
  const textColor = "text-emerald-400";
  const shadowColor = "shadow-emerald-500/30";

  div.className = `bg-slate-900 border-2 ${borderColor} rounded-2xl p-3 shadow-xl ${shadowColor} cursor-pointer hover:scale-105 transition-all duration-200 pointer-events-auto flex items-center gap-3`;
  div.onclick = () => expandTimer(user);

  // Calculate initial display time
  const displaySeconds = Math.max(0, state.currentSeconds);
  const mins = Math.floor(displaySeconds / 60);
  const secs = displaySeconds % 60;
  const timeStr = `${mins}:${secs.toString().padStart(2, "0")}`;

  div.innerHTML = `
        <div class="relative w-10 h-10">
             <svg class="w-10 h-10 transform -rotate-90">
                <circle cx="20" cy="20" r="16" stroke="#1e293b" stroke-width="3" fill="none" />
                <circle id="mini-ring-${user}" cx="20" cy="20" r="16" stroke="currentColor" stroke-width="3"
                    fill="none" stroke-linecap="round" stroke-dasharray="100.53" stroke-dashoffset="0"
                    class="${textColor} transition-all duration-1000 ease-linear" />
            </svg>
             <div class="absolute inset-0 flex items-center justify-center">
                 <span class="text-[10px] font-bold uppercase text-emerald-400">S</span>
             </div>
        </div>
        <div class="text-left">
            <div id="mini-display-${user}" class="text-xl font-mono font-bold ${textColor} tabular-nums leading-tight">${timeStr}</div>
            <p class="text-[10px] text-slate-500 max-w-[100px] truncate">${state.exerciseName}</p>
        </div>
    `;
  return div;
}

function updateTimerDisplay() {
  if (
    activeFullModalUser &&
    timerState[activeFullModalUser].active &&
    !timerState[activeFullModalUser].minimized
  ) {
    const user = activeFullModalUser;
    const state = timerState[user];

    const display = document.getElementById("timer-display");
    const ring = document.getElementById("timer-ring");
    const secondsLeft = document.getElementById("timer-seconds-left");

    const displaySeconds = Math.max(0, state.currentSeconds);
    const mins = Math.floor(displaySeconds / 60);
    const secs = displaySeconds % 60;
    const timeStr = `${mins}:${secs.toString().padStart(2, "0")}`;

    display.textContent = timeStr;
    secondsLeft.textContent = displaySeconds;

    const circumference = 364.42;
    const progress = Math.max(0, displaySeconds / state.totalSeconds);
    ring.style.strokeDashoffset = circumference * (1 - progress);

    // Low time warning colors
    const timerIcon = document.querySelector("#timer-full .lucide-timer");
    const addBtn = document.getElementById("timer-add-btn");

    if (displaySeconds <= 10) {
      ring.style.stroke = "#ef4444";
      display.className =
        "text-7xl font-mono font-bold text-red-400 mb-6 tabular-nums";

      const modal = document.getElementById("timer-full");
      if (modal) {
        modal.classList.remove("border-slate-700", "shadow-emerald-500/10");
        modal.classList.add("border-red-500", "shadow-red-500/20");
      }

      // Icon Red
      if (timerIcon) {
        timerIcon.classList.remove("text-emerald-400");
        timerIcon.classList.add("text-red-400");
      }

      // Add Button Red
      if (addBtn) {
        addBtn.classList.remove("bg-emerald-600", "hover:bg-emerald-500");
        addBtn.classList.add("bg-red-600", "hover:bg-red-500");
      }
    } else {
      ring.style.stroke = "#10b981";
      display.className =
        "text-7xl font-mono font-bold text-emerald-400 mb-6 tabular-nums";

      const modal = document.getElementById("timer-full");
      if (modal) {
        modal.classList.add("border-slate-700", "shadow-emerald-500/10");
        modal.classList.remove("border-red-500", "shadow-red-500/20");
      }

      // Icon Revert
      if (timerIcon) {
        timerIcon.classList.add("text-emerald-400");
        timerIcon.classList.remove("text-red-400");
      }

      // Add Button Revert
      if (addBtn) {
        addBtn.classList.add("bg-emerald-600", "hover:bg-emerald-500");
        addBtn.classList.remove("bg-red-600", "hover:bg-red-500");
      }
    }
  }

  // Update Minis
  ["salva"].forEach((user) => {
    const displayMini = document.getElementById(`mini-display-${user}`);
    const ringMini = document.getElementById(`mini-ring-${user}`);
    const container = displayMini?.closest("div.bg-slate-900"); // Get the bubble container

    if (displayMini && ringMini && timerState[user].active) {
      const state = timerState[user];
      const displaySeconds = Math.max(0, state.currentSeconds);
      const mins = Math.floor(displaySeconds / 60);
      const secs = displaySeconds % 60;
      displayMini.textContent = `${mins}:${secs.toString().padStart(2, "0")}`;

      const progress = Math.max(0, displaySeconds / state.totalSeconds);
      const circumference = 100.53;
      ringMini.style.strokeDashoffset = circumference * (1 - progress);

      // Color logic for mini
      if (displaySeconds <= 10) {
        ringMini.style.stroke = "#ef4444";
        displayMini.classList.remove("text-blue-400", "text-pink-400");
        displayMini.classList.add("text-red-400");
        if (container) {
          container.classList.add("border-red-500", "shadow-red-500/30");
          container.classList.remove(
            "border-blue-500",
            "shadow-blue-500/30",
            "border-pink-500",
            "shadow-pink-500/30",
          );
        }
      } else {
        // Restore default colors
        const defaultColor = user === "facu" ? "blue" : "pink";
        ringMini.style.stroke = user === "facu" ? "#60a5fa" : "#f472b6"; // tailwind blue-400 / pink-400 hex approx
        // Re-add correct text color
        displayMini.classList.remove("text-red-400");
        displayMini.classList.add(`text-${defaultColor}-400`);

        if (container) {
          container.classList.remove("border-red-500", "shadow-red-500/30");
          container.classList.add(
            `border-${defaultColor}-500`,
            `shadow-${defaultColor}-500/30`,
          );
        }
      }
    }
  });
}

function hideTimer(user) {
  if (user) {
    // Hide specific user
    timerState[user].active = false;

    // Single user mode - just clear the modal
    if (activeFullModalUser === user) {
      activeFullModalUser = null;
    }
  } else {
    // Force Hide ALL (e.g. skip button if we want it to close current)
    if (activeFullModalUser) {
      hideTimer(activeFullModalUser);
      return;
    }
  }

  renderTimerUI();

  // Cleanup if nobody active handled by startGlobalTimerIfNeeded loop,
  // but we should explicit cleanup layout if empty.
  if (!timerState.salva.active) {
    document.body.style.overflow = "";
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.width = "";
    document.body.style.touchAction = "";
    window.scrollTo(0, savedScrollY);
  }
}

// --- TIMER MINIMIZE/EXPAND FUNCTIONS ---
function minimizeTimer() {
  if (activeFullModalUser) {
    timerState[activeFullModalUser].minimized = true;
    renderTimerUI();

    // Restore body scroll since we are minimized
    document.body.style.overflow = "";
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.width = "";
    document.body.style.touchAction = "";
    window.scrollTo(0, savedScrollY);
  }
}

function expandTimer(user) {
  if (timerState[user].active) {
    // Restore scroll lock
    savedScrollY = window.scrollY; // Update position

    activeFullModalUser = user;
    timerState[user].minimized = false;
    renderTimerUI();

    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${savedScrollY}px`;
    document.body.style.width = "100%";
    document.body.style.touchAction = "none";
  }
}

// --- CUSTOM MODAL FUNCTIONS ---
let confirmCallback = null;

function showConfirmModal(title, message, callback) {
  const modal = document.getElementById("confirm-modal");
  document.getElementById("confirm-title").textContent = title;
  document.getElementById("confirm-message").textContent = message;

  confirmCallback = callback;

  modal.classList.remove("hidden");
  // Small timeout for animation
  setTimeout(() => {
    modal.classList.remove("opacity-0", "scale-95");
    modal.classList.add("opacity-100", "scale-100");
  }, 10);
}

function hideConfirmModal() {
  const modal = document.getElementById("confirm-modal");
  modal.classList.add("opacity-0", "scale-95");
  modal.classList.remove("opacity-100", "scale-100");

  setTimeout(() => {
    modal.classList.add("hidden");
    confirmCallback = null;
  }, 300);
}

// --- AUDIO UNLOCKER ---
let audioCtx = null;

function unlockAudio() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === "suspended") {
    audioCtx.resume();
  }
}

// Attach unlock to all interactive elements if possible, or just global click once
document.addEventListener("click", unlockAudio, { once: true });
document.addEventListener("touchstart", unlockAudio, { once: true });

function playTimerEnd() {
  // Vibrate if supported
  if (navigator.vibrate) {
    navigator.vibrate([200, 100, 200, 100, 200]);
  }
  // Play beep sound
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    oscillator.frequency.value = 880;
    oscillator.type = "sine";
    gainNode.gain.value = 0.5; // Slightly louder
    oscillator.start();
    setTimeout(() => oscillator.stop(), 500); // Longer beep
  } catch (e) {
    console.error("Audio play error", e);
  }
}

// Timer event listeners
// Timer event listeners
document
  .getElementById("confirm-cancel-btn")
  .addEventListener("click", hideConfirmModal);
document.getElementById("confirm-ok-btn").addEventListener("click", () => {
  if (confirmCallback) confirmCallback();
  hideConfirmModal();
});
document
  .getElementById("timer-skip-btn")
  .addEventListener("click", () => hideTimer(activeFullModalUser));
document.getElementById("timer-add-btn").addEventListener("click", () => {
  if (activeFullModalUser && timerState[activeFullModalUser].active) {
    const user = activeFullModalUser;
    const state = timerState[user];

    state.endTime += 30000; // Add 30 seconds
    state.totalSeconds += 30;

    // Force immediate update
    const diff = state.endTime - Date.now();
    state.currentSeconds = Math.ceil(diff / 1000);
    updateTimerDisplay();
  }
});

// Timer minimize/expand event listeners
document
  .getElementById("timer-minimize-btn")
  .addEventListener("click", minimizeTimer);

// --- GAMIFICATION V2 (LOGROS) ---
const achievementsConfig = [
  // --- TIER 1: COMÚN (Fácil / Inicio) ---
  {
    id: "first_workout",
    title: "Primer Paso",
    icon: "footprints",
    desc: "Completa tu primer entrenamiento",
    tier: "Común",
    condition: (u) => gamification[u].points > 0,
  },
  {
    id: "hydrated",
    title: "Hidratado",
    icon: "droplets",
    desc: "Alcanza tu meta diaria de agua",
    tier: "Común",
    condition: (u) => waterState[u] >= (waterState[u + "Goal"] || 2000),
  },
  {
    id: "streak_3",
    title: "Constancia",
    icon: "flame",
    desc: "Racha de 3 días",
    tier: "Común",
    condition: (u) => calculateUserStreak(u) >= 3,
  },
  {
    id: "active_5",
    title: "Iniciado",
    icon: "play",
    desc: "Completa 5 entrenamientos",
    tier: "Común",
    condition: (u) => getTotalWorkouts(u) >= 5,
  },
  {
    id: "active_10",
    title: "Aprendiz",
    icon: "activity",
    desc: "Completa 10 entrenamientos",
    tier: "Común",
    condition: (u) => getTotalWorkouts(u) >= 10,
  },
  {
    id: "duo_workout",
    title: "Compañeros",
    icon: "users",
    desc: "Entrena con tu pareja por primera vez",
    tier: "Común",
    condition: (u) => getDuoWorkouts() >= 1,
  },
  {
    id: "hydrated_3_days",
    title: "Agua x3",
    icon: "droplet",
    desc: "Cumple meta de agua 3 días seguidos",
    tier: "Común",
    condition: (u) => getHydrationStreak(u) >= 3,
  },
  {
    id: "first_points_50",
    title: "Primeros Puntos",
    icon: "coins",
    desc: "Acumula 50 puntos",
    tier: "Común",
    condition: (u) => gamification[u].points >= 50,
  },
  // --- NEW COMMON ACHIEVEMENTS ---
  {
    id: "streak_2",
    title: "El Dúo",
    icon: "flame",
    desc: "Racha de 2 días seguidos",
    tier: "Común",
    condition: (u) => calculateUserStreak(u) >= 2,
  },
  {
    id: "points_100",
    title: "Centenario",
    icon: "piggy-bank",
    desc: "Acumula 100 puntos",
    tier: "Común",
    condition: (u) => gamification[u].points >= 100,
  },
  {
    id: "active_2",
    title: "Calentando",
    icon: "play",
    desc: "Completa 2 entrenamientos",
    tier: "Común",
    condition: (u) => getTotalWorkouts(u) >= 2,
  },
  {
    id: "active_8",
    title: "En Marcha",
    icon: "fast-forward",
    desc: "Completa 8 entrenamientos",
    tier: "Común",
    condition: (u) => getTotalWorkouts(u) >= 8,
  },
  {
    id: "duo_3",
    title: "Trio Dinámico",
    icon: "users",
    desc: "Entrena 3 veces con tu pareja",
    tier: "Común",
    condition: (u) => getDuoWorkouts() >= 3,
  },
  {
    id: "duo_5",
    title: "Equipo",
    icon: "users",
    desc: "Entrena 5 veces con tu pareja",
    tier: "Común",
    condition: (u) => getDuoWorkouts() >= 5,
  },
  {
    id: "volume_1k",
    title: "Kilo a Kilo",
    icon: "dumbbell",
    desc: "Levanta 1,000kg en total (histórico)",
    tier: "Común",
    condition: (u) => getTotalLiftedVolume(u) >= 1000,
  },
  {
    id: "volume_3k",
    title: "Tres Mil",
    icon: "dumbbell",
    desc: "Levanta 3,000kg en total (histórico)",
    tier: "Común",
    condition: (u) => getTotalLiftedVolume(u) >= 3000,
  },
  {
    id: "volume_day_1k",
    title: "Tonelada Diaria",
    icon: "weight",
    desc: "Levanta 1,000kg en un solo día",
    tier: "Común",
    condition: (u) => getDailyVolume(u) >= 1000,
  },
  {
    id: "volume_day_2k",
    title: "Fuerza Diaria",
    icon: "weight",
    desc: "Levanta 2,000kg en un solo día",
    tier: "Común",
    condition: (u) => getDailyVolume(u) >= 2000,
  },
  {
    id: "monday_motivation",
    title: "Odio los Lunes",
    icon: "calendar-check",
    desc: "Entrena un Lunes",
    tier: "Común",
    condition: (u) =>
      new Date().getDay() === 1 &&
      trainingHistory[getDateKey(new Date())] &&
      trainingHistory[getDateKey(new Date())][u],
  },
  {
    id: "hump_day",
    title: "Ombligo",
    icon: "calendar",
    desc: "Entrena un Miércoles",
    tier: "Común",
    condition: (u) =>
      new Date().getDay() === 3 &&
      trainingHistory[getDateKey(new Date())] &&
      trainingHistory[getDateKey(new Date())][u],
  },
  {
    id: "weekend_warrior_easy",
    title: "Finde Activo",
    icon: "sun",
    desc: "Entrena un Sábado o Domingo",
    tier: "Común",
    condition: (u) =>
      (new Date().getDay() === 6 || new Date().getDay() === 0) &&
      trainingHistory[getDateKey(new Date())] &&
      trainingHistory[getDateKey(new Date())][u],
  },
  {
    id: "early_bird_easy",
    title: "Mañanero",
    icon: "sunrise",
    desc: "Entrena antes de las 11 AM",
    tier: "Común",
    condition: (u) =>
      new Date().getHours() < 11 &&
      trainingHistory[getDateKey(new Date())] &&
      trainingHistory[getDateKey(new Date())][u],
  },
  {
    id: "night_owl",
    title: "Búho",
    icon: "moon",
    desc: "Entrena después de las 20:00",
    tier: "Común",
    condition: (u) =>
      new Date().getHours() >= 20 &&
      trainingHistory[getDateKey(new Date())] &&
      trainingHistory[getDateKey(new Date())][u],
  },
  {
    id: "water_500",
    title: "Sediento",
    icon: "glass-water",
    desc: "Registra 500ml de agua",
    tier: "Común",
    condition: (u) => (waterState[u] || 0) >= 500,
  },
  {
    id: "water_1000",
    title: "Litro",
    icon: "glass-water",
    desc: "Registra 1 Litro de agua",
    tier: "Común",
    condition: (u) => (waterState[u] || 0) >= 1000,
  },
  {
    id: "water_streak_2",
    title: "Hidratado x2",
    icon: "droplet",
    desc: "Meta de agua 2 días seguidos",
    tier: "Común",
    condition: (u) => getHydrationStreak(u) >= 2,
  },
  {
    id: "first_freeze",
    title: "Protegido",
    icon: "shield",
    desc: "Ten al menos 1 protector de racha",
    tier: "Común",
    condition: (u) => gamification[u].freezes >= 1,
  },
  {
    id: "perfect_week_start",
    title: "Buen Inicio",
    icon: "calendar-check-2",
    desc: "Completa el Lunes y Martes seguidos",
    tier: "Común",
    condition: (u) => {
      const today = new Date();
      const yest = new Date();
      yest.setDate(today.getDate() - 1);
      const k1 = getDateKey(today);
      const k2 = getDateKey(yest);
      return (
        today.getDay() === 2 &&
        trainingHistory[k1] &&
        trainingHistory[k1][u] &&
        trainingHistory[k2] &&
        trainingHistory[k2][u]
      );
    },
  },

  // --- TIER 2: RARO (Intermedio) ---
  {
    id: "streak_7",
    title: "Imparable",
    icon: "zap",
    desc: "Racha de 7 días",
    tier: "Raro",
    condition: (u) => calculateUserStreak(u) >= 7,
  },
  {
    id: "streak_14",
    title: "Quincena",
    icon: "calendar",
    desc: "Racha de 14 días",
    tier: "Raro",
    condition: (u) => calculateUserStreak(u) >= 14,
  },
  {
    id: "volume_10k",
    title: "Levantador",
    icon: "dumbbell",
    desc: "Levanta 10,000kg en total",
    tier: "Raro",
    condition: (u) => getTotalLiftedVolume(u) >= 10000,
  },
  {
    id: "volume_25k",
    title: "Máquina",
    icon: "cog",
    desc: "Levanta 25,000kg en total",
    tier: "Raro",
    condition: (u) => getTotalLiftedVolume(u) >= 25000,
  },
  {
    id: "weekend_warrior",
    title: "Finde Warrior",
    icon: "calendar-check",
    desc: "Entrena un Sábado o Domingo",
    tier: "Raro",
    condition: (u) => {
      const d = new Date().getDay();
      return (
        (d === 0 || d === 6) &&
        trainingHistory[getDateKey(new Date())] &&
        trainingHistory[getDateKey(new Date())][u]
      );
    },
  },
  {
    id: "active_25",
    title: "Regular",
    icon: "repeat",
    desc: "Completa 25 entrenamientos",
    tier: "Raro",
    condition: (u) => getTotalWorkouts(u) >= 25,
  },
  {
    id: "active_50",
    title: "Veterano",
    icon: "medal",
    desc: "Completa 50 entrenamientos",
    tier: "Raro",
    condition: (u) => getTotalWorkouts(u) >= 50,
  },
  {
    id: "early_bird",
    title: "Madrugador",
    icon: "sunrise",
    desc: "Entrena antes de las 9 AM",
    tier: "Raro",
    condition: (u) => {
      const h = new Date().getHours();
      return (
        h < 9 &&
        trainingHistory[getDateKey(new Date())] &&
        trainingHistory[getDateKey(new Date())][u]
      );
    },
  },
  {
    id: "night_owl",
    title: "Noctámbulo",
    icon: "moon",
    desc: "Entrena después de las 9 PM",
    tier: "Raro",
    condition: (u) => {
      const h = new Date().getHours();
      return (
        h >= 21 &&
        trainingHistory[getDateKey(new Date())] &&
        trainingHistory[getDateKey(new Date())][u]
      );
    },
  },
  {
    id: "duo_10",
    title: "Dúo Dinámico",
    icon: "heart-handshake",
    desc: "Entrena 10 veces con tu pareja",
    tier: "Raro",
    condition: (u) => getDuoWorkouts() >= 10,
  },
  {
    id: "hydrated_7_days",
    title: "Fuente Natural",
    icon: "glass-water",
    desc: "Cumple meta de agua 7 días seguidos",
    tier: "Raro",
    condition: (u) => getHydrationStreak(u) >= 7,
  },
  {
    id: "volume_single_day_5k",
    title: "Día Pesado",
    icon: "arrow-up-circle",
    desc: "Levanta 5,000kg en un solo día",
    tier: "Raro",
    condition: (u) => getDailyVolume(u) >= 5000,
  },
  {
    id: "points_200",
    title: "Coleccionista",
    icon: "piggy-bank",
    desc: "Acumula 200 puntos",
    tier: "Raro",
    condition: (u) => gamification[u].points >= 200,
  },

  // --- NEW RARE ACHIEVEMENTS ---
  {
    id: "streak_10",
    title: "Decatleta",
    icon: "medal",
    desc: "Racha de 10 días seguidos",
    tier: "Raro",
    condition: (u) => calculateUserStreak(u) >= 10,
  },
  {
    id: "active_15",
    title: "Iniciado Pro",
    icon: "star",
    desc: "Completa 15 entrenamientos",
    tier: "Raro",
    condition: (u) => getTotalWorkouts(u) >= 15,
  },
  {
    id: "active_30",
    title: "Hábito Mensual",
    icon: "calendar-days",
    desc: "Completa 30 entrenamientos",
    tier: "Raro",
    condition: (u) => getTotalWorkouts(u) >= 30,
  },
  {
    id: "duo_15",
    title: "Pareja Fitness",
    icon: "heart-handshake",
    desc: "Entrena 15 veces con tu pareja",
    tier: "Raro",
    condition: (u) => getDuoWorkouts() >= 15,
  },
  {
    id: "volume_15k",
    title: "Peso Medio",
    icon: "dumbbell",
    desc: "Levanta 15,000kg en total",
    tier: "Raro",
    condition: (u) => getTotalLiftedVolume(u) >= 15000,
  },
  {
    id: "volume_day_3k",
    title: "Día de Furia",
    icon: "biceps-flexed",
    desc: "Levanta 3,000kg en un solo día",
    tier: "Raro",
    condition: (u) => getDailyVolume(u) >= 3000,
  },
  {
    id: "points_300",
    title: "Ahorrador Pro",
    icon: "wallet",
    desc: "Acumula 300 puntos",
    tier: "Raro",
    condition: (u) => gamification[u].points >= 300,
  },
  {
    id: "four_days_week",
    title: "Intenso",
    icon: "zap",
    desc: "Entrena 4 veces en los últimos 7 días",
    tier: "Raro",
    condition: (u) => {
      let count = 0;
      for (let i = 0; i < 7; i++) {
        const d = new Date();
        d.setDate(d.getDate() - i);
        const k = getDateKey(d);
        if (trainingHistory[k] && trainingHistory[k][u]) count++;
      }
      return count >= 4;
    },
  },
  {
    id: "night_owl_hard",
    title: "Turno Noche",
    icon: "moon-star",
    desc: "Entrena después de las 22:00",
    tier: "Raro",
    condition: (u) =>
      new Date().getHours() >= 22 &&
      trainingHistory[getDateKey(new Date())] &&
      trainingHistory[getDateKey(new Date())][u],
  },
  {
    id: "water_streak_5",
    title: "Oasis",
    icon: "droplets",
    desc: "Meta de agua 5 días seguidos",
    tier: "Raro",
    condition: (u) => getHydrationStreak(u) >= 5,
  },

  // --- TIER 3: ÉPICO (Difícil) ---
  {
    id: "streak_21",
    title: "Hábito Forjado",
    icon: "hammer",
    desc: "Racha de 21 días (se forma un hábito)",
    tier: "Épico",
    condition: (u) => calculateUserStreak(u) >= 21,
  },
  {
    id: "streak_30",
    title: "Leyenda",
    icon: "crown",
    desc: "Racha de 30 días",
    tier: "Épico",
    condition: (u) => calculateUserStreak(u) >= 30,
  },
  {
    id: "volume_50k",
    title: "Hércules",
    icon: "biceps-flexed",
    desc: "Levanta 50,000kg en total",
    tier: "Épico",
    condition: (u) => getTotalLiftedVolume(u) >= 50000,
  },
  {
    id: "volume_75k",
    title: "Coloso",
    icon: "mountain",
    desc: "Levanta 75,000kg en total",
    tier: "Épico",
    condition: (u) => getTotalLiftedVolume(u) >= 75000,
  },
  {
    id: "hydrated_master",
    title: "Poseidón",
    icon: "waves",
    desc: "Bebe 4 litros en un día",
    tier: "Épico",
    condition: (u) => waterState[u] >= 4000,
  },
  {
    id: "active_75",
    title: "Atleta",
    icon: "user-check",
    desc: "Completa 75 entrenamientos",
    tier: "Épico",
    condition: (u) => getTotalWorkouts(u) >= 75,
  },
  {
    id: "active_100",
    title: "Centurión",
    icon: "shield-check",
    desc: "Completa 100 entrenamientos",
    tier: "Épico",
    condition: (u) => getTotalWorkouts(u) >= 100,
  },
  {
    id: "duo_25",
    title: "Alma Gemela",
    icon: "heart",
    desc: "Entrena 25 veces con tu pareja",
    tier: "Épico",
    condition: (u) => getDuoWorkouts() >= 25,
  },
  {
    id: "hydrated_14_days",
    title: "Océano",
    icon: "anchor",
    desc: "Cumple meta de agua 14 días seguidos",
    tier: "Épico",
    condition: (u) => getHydrationStreak(u) >= 14,
  },
  {
    id: "volume_single_day_8k",
    title: "Bestia",
    icon: "skull",
    desc: "Levanta 8,000kg en un solo día",
    tier: "Épico",
    condition: (u) => getDailyVolume(u) >= 8000,
  },
  {
    id: "points_500",
    title: "Banquero",
    icon: "landmark",
    desc: "Acumula 500 puntos",
    tier: "Épico",
    condition: (u) => gamification[u].points >= 500,
  },

  // --- TIER 4: LEGENDARIO (Muy Difícil) ---
  {
    id: "streak_60",
    title: "Dios del Gym",
    icon: "award",
    desc: "Racha de 60 días",
    tier: "Legendario",
    condition: (u) => calculateUserStreak(u) >= 60,
  },
  {
    id: "streak_90",
    title: "Imbatible",
    icon: "shield",
    desc: "Racha de 90 días",
    tier: "Legendario",
    condition: (u) => calculateUserStreak(u) >= 90,
  },
  {
    id: "streak_180",
    title: "Semidiós",
    icon: "star",
    desc: "Racha de 180 días (6 meses)",
    tier: "Legendario",
    condition: (u) => calculateUserStreak(u) >= 180,
  },
  {
    id: "volume_100k",
    title: "Titán",
    icon: "weight",
    desc: "Levanta 100,000kg en total",
    tier: "Legendario",
    condition: (u) => getTotalLiftedVolume(u) >= 100000,
  },
  {
    id: "volume_200k",
    title: "Atlas",
    icon: "globe",
    desc: "Levanta 200,000kg en total",
    tier: "Legendario",
    condition: (u) => getTotalLiftedVolume(u) >= 200000,
  },
  {
    id: "active_200",
    title: "Espartano",
    icon: "swords",
    desc: "Completa 200 entrenamientos",
    tier: "Legendario",
    condition: (u) => getTotalWorkouts(u) >= 200,
  },
  {
    id: "year_warrior",
    title: "Inmortal",
    icon: "infinity",
    desc: "Entrena durante un año entero",
    tier: "Legendario",
    condition: (u) => getTotalWorkouts(u) >= 300,
  },
  {
    id: "year_complete",
    title: "Año Dorado",
    icon: "trophy",
    desc: "Completa 365 entrenamientos",
    tier: "Legendario",
    condition: (u) => getTotalWorkouts(u) >= 365,
  },
  {
    id: "duo_50",
    title: "Eternos",
    icon: "gem",
    desc: "Entrena 50 veces con tu pareja",
    tier: "Legendario",
    condition: (u) => getDuoWorkouts() >= 50,
  },
  {
    id: "hydrated_30_days",
    title: "Neptuno",
    icon: "ship",
    desc: "Cumple meta de agua 30 días seguidos",
    tier: "Legendario",
    condition: (u) => getHydrationStreak(u) >= 30,
  },
  {
    id: "points_1000",
    title: "Magnate",
    icon: "crown",
    desc: "Acumula 1000 puntos",
    tier: "Legendario",
    condition: (u) => gamification[u].points >= 1000,
  },
];

// --- ACHIEVEMENT HELPERS ---
function getTotalWorkouts(user) {
  let count = 0;
  Object.values(trainingHistory).forEach((day) => {
    if (day[user]) count++;
  });
  return count;
}

function getTotalLiftedVolume(user) {
  let total = 0;
  Object.values(trainingHistory).forEach((day) => {
    if (day.weights) {
      // weights keys are "dayIndex-exIndex-setIndex"
      // values are like { facu: 50, alma: 30 }
      Object.values(day.weights).forEach((weightObj) => {
        if (weightObj[user]) {
          // We need reps to calculate volume!
          // Currently history only stores WEIGHT used.
          // To acturately calculate TOTAL volume we need Sets x Reps x Weight.
          // But we don't store exact Reps done per historical set, only the default "10" or "8-10" in routine data.
          // APPROXIMATION: Use 10 reps as standard for volume calc, or just sum "Kg Lifted" as a "Max Effort Accumulator".
          // Let's assume 10 reps per set for gamification purposes.
          total += (parseInt(weightObj[user]) || 0) * 10;
        }
      });
    }
  });
  return total;
}

// Count days where BOTH Facu and Alma trained together
function getDuoWorkouts() {
  let count = 0;
  Object.values(trainingHistory).forEach((day) => {
    if (day.facu && day.alma) count++;
  });
  return count;
}

// Count consecutive days meeting water goal
function getHydrationStreak(user) {
  const goal = waterState[user + "Goal"] || 2000;
  let streak = 0;
  const today = new Date();

  for (let i = 0; i < 365; i++) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    const key = getDateKey(date);
    const dayData = trainingHistory[key];

    if (dayData && dayData.water && dayData.water[user] >= goal) {
      streak++;
    } else if (i === 0) {
      // Today might not be saved yet, check waterState
      if (waterState[user] >= goal) {
        streak++;
      } else {
        break;
      }
    } else {
      break;
    }
  }
  return streak;
}

// Get volume lifted on a specific day
function getDailyVolume(user, date = new Date()) {
  const key = getDateKey(date);
  const dayData = trainingHistory[key];
  if (!dayData || !dayData.weights) return 0;

  let total = 0;
  Object.values(dayData.weights).forEach((weightObj) => {
    if (weightObj[user]) {
      total += (parseInt(weightObj[user]) || 0) * 10; // Assume 10 reps
    }
  });
  return total;
}

const appStartTime = Date.now();

function checkAchievements() {
  // Guard: Don't check on initial load (requested by user)
  // Only check when triggered by explicit actions (which happen usually > 2s after load)
  if (Date.now() - appStartTime < 5000) {
    console.log("🚫 Skipping achievement check on startup");
    return;
  }

  // Logic to unlock achievements
  // We store unlocked IDs in gamification[user].achievements = ["id1", "id2"]
  ["salva"].forEach((user) => {
    if (!gamification[user].achievements) gamification[user].achievements = [];

    let newUnlock = false;
    achievementsConfig.forEach((ach) => {
      if (!gamification[user].achievements.includes(ach.id)) {
        // Safety check for condition
        try {
          if (ach.condition(user)) {
            gamification[user].achievements.push(ach.id);
            newUnlock = true;
            // Use the new enhanced modal instead of simple toast
            showAchievementModal(ach, user);
            triggerConfetti();
          }
        } catch (e) {
          console.warn("Achievement check error", e);
        }
      }
    });

    if (newUnlock) {
      localStorage.setItem("gymGamification", JSON.stringify(gamification));
      saveToCloud(); // Sync achievements
    }
  });
}

// --- ACHIEVEMENT MODAL FUNCTIONS ---
function showAchievementModal(achievement, user) {
  const modal = document.getElementById("achievement-modal");
  const content = document.getElementById("achievement-modal-content");
  const card = document.getElementById("achievement-modal-card");
  const glow = document.getElementById("achievement-modal-glow");
  const iconBg = document.getElementById("achievement-modal-icon-bg");
  const icon = document.getElementById("achievement-modal-icon");
  const tier = document.getElementById("achievement-modal-tier");
  const title = document.getElementById("achievement-modal-title");
  const desc = document.getElementById("achievement-modal-desc");
  const userName = document.getElementById("achievement-modal-user");
  const btn = document.getElementById("achievement-modal-btn");

  if (!modal) return;

  // Tier-based styling
  const tierStyles = {
    Común: {
      card: "border-slate-500 bg-slate-900",
      glow: "bg-gradient-to-br from-slate-400/20 to-slate-600/10",
      iconBg: "bg-slate-700",
      tier: "bg-slate-700 text-slate-300",
      btn: "bg-slate-600 hover:bg-slate-500",
    },
    Raro: {
      card: "border-blue-500 bg-slate-900",
      glow: "bg-gradient-to-br from-blue-500/30 to-cyan-500/10",
      iconBg: "bg-blue-600",
      tier: "bg-blue-600 text-white",
      btn: "bg-blue-600 hover:bg-blue-500",
    },
    Épico: {
      card: "border-purple-500 bg-slate-900",
      glow: "bg-gradient-to-br from-purple-500/40 to-pink-500/20",
      iconBg: "bg-purple-600",
      tier: "bg-purple-600 text-white",
      btn: "bg-purple-600 hover:bg-purple-500",
    },
    Legendario: {
      card: "border-amber-400 bg-slate-900",
      glow: "bg-gradient-to-br from-amber-400/50 to-orange-500/30",
      iconBg: "bg-gradient-to-br from-amber-400 to-orange-500",
      tier: "bg-gradient-to-r from-amber-400 to-orange-500 text-black",
      btn: "bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400",
    },
  };

  const style = tierStyles[achievement.tier] || tierStyles["Común"];

  // Apply styles
  card.className = `relative overflow-hidden rounded-3xl border-2 p-6 text-center ${style.card}`;
  glow.className = `absolute inset-0 opacity-30 ${style.glow}`;
  iconBg.className = `mx-auto w-20 h-20 rounded-full flex items-center justify-center text-4xl animate-bounce ${style.iconBg}`;
  tier.className = `px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${style.tier}`;
  btn.className = `relative z-10 w-full py-3 rounded-xl font-bold text-white transition-all active:scale-95 ${style.btn}`;

  // Set content
  icon.setAttribute("data-lucide", achievement.icon);
  tier.textContent = achievement.tier || "Común";
  title.textContent = achievement.title;
  desc.textContent = achievement.desc;
  userName.textContent = "💪 Salva";
  userName.className = "font-bold text-emerald-400";

  // Show modal with animation
  modal.classList.remove("hidden");
  modal.classList.add("flex");

  // Trigger animation
  setTimeout(() => {
    content.classList.remove("scale-0");
    content.classList.add("scale-100");
  }, 50);

  lucide.createIcons();
}

function closeAchievementModal() {
  const modal = document.getElementById("achievement-modal");
  const content = document.getElementById("achievement-modal-content");

  content.classList.remove("scale-100");
  content.classList.add("scale-0");

  setTimeout(() => {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }, 300);
}

// --- ACHIEVEMENTS RENDERER ---
function renderAchievements() {
  const container = document.getElementById("achievements-grid");
  if (!container) return;

  container.innerHTML = "";

  const TIER_COLORS = {
    Común: "border-slate-700 bg-slate-800/50",
    Raro: "border-blue-500/50 bg-blue-900/20 shadow-[0_0_15px_rgba(59,130,246,0.3)]",
    Épico:
      "border-purple-500/50 bg-purple-900/20 shadow-[0_0_20px_rgba(168,85,247,0.4)]",
    Legendario:
      "border-amber-400/50 bg-amber-900/20 shadow-[0_0_25px_rgba(251,191,36,0.5)]",
  };

  const TIER_TEXT_COLORS = {
    Común: "text-slate-400",
    Raro: "text-blue-400",
    Épico: "text-purple-400",
    Legendario: "text-amber-400",
  };

  achievementsConfig.forEach((ach) => {
    // Ensure data integrity
    if (!gamification.salva.achievements) gamification.salva.achievements = [];

    const salvaHas = gamification.salva.achievements.includes(ach.id);
    const isUnlocked = salvaHas;

    const tierAttr = ach.tier || "Común";
    const tierClass = TIER_COLORS[tierAttr];
    const tierTextClass = TIER_TEXT_COLORS[tierAttr];

    const card = document.createElement("div");
    // Opacity logic: if unlocked simple opacity. If locked, dim.
    const opacityClass = isUnlocked ? "opacity-100" : "opacity-40 grayscale";

    card.className = `relative p-4 rounded-xl border flex flex-col items-center text-center transition-all duration-300 group hover:scale-105 ${tierClass} ${opacityClass}`;

    card.innerHTML = `
            <div class="absolute top-2 right-2 text-[10px] uppercase font-bold tracking-wider ${tierTextClass}">${tierAttr}</div>
            
            <div class="p-3 rounded-full bg-slate-950/50 mb-3 ${isUnlocked ? "shadow-inner" : ""}">
                <i data-lucide="${ach.icon}" class="w-8 h-8 ${isUnlocked ? tierTextClass : "text-slate-600"}"></i>
            </div>
            
            <h4 class="text-sm font-bold text-white mb-1 leading-tight">${ach.title}</h4>
            <p class="text-[10px] text-slate-400 leading-snug mb-3 min-h-[2.5em] flex items-center justify-center">${ach.desc}</p>
            
            <div class="mt-auto w-full flex justify-center gap-3 border-t border-slate-700/50 pt-2">
                 <div class="flex items-center gap-1 ${salvaHas ? "opacity-100" : "opacity-30"}" title="Salva">
                    <span class="text-xs">💪</span>
                    ${salvaHas ? '<i data-lucide="check" class="w-3 h-3 text-emerald-400"></i>' : '<i data-lucide="lock" class="w-3 h-3 text-slate-600"></i>'}
                 </div>
            </div>
        `;
    container.appendChild(card);
  });

  if (window.lucide) lucide.createIcons();

  // Update Counts header (Unique badges unlocked)
  const totalCount = document.getElementById("achievements-count");
  if (totalCount) {
    const unlockedUnique = achievementsConfig.filter((a) =>
      gamification.salva.achievements.includes(a.id),
    ).length;
    totalCount.textContent = `${unlockedUnique} / ${achievementsConfig.length}`;
  }
}

// --- MUSCLE MAP GENERATOR ---
const getMuscleMapSVG = (primary = [], secondary = []) => {
  const getColor = (muscleId) => {
    if (primary.includes(muscleId)) return "#ef4444"; // Red-500
    if (secondary.includes(muscleId)) return "#eab308"; // Yellow-500
    return "#e2e8f0"; // Slate-200 (Atlas Base Color)
  };

  const strokeColor = "#94a3b8";
  const strokeWidth = "2";

  // SVG Content - Atlas Style
  return `
    <div class="flex gap-2 h-56 w-full justify-center opacity-90 transition-opacity duration-500 hover:opacity-100 py-2">
        <!-- FRONT VIEW -->
        <svg viewBox="0 0 400 780" class="h-full w-auto drop-shadow-md">
             <!-- Head -->
            <ellipse cx="200" cy="60" rx="35" ry="45" fill="#f1f5f9" stroke="${strokeColor}" stroke-width="${strokeWidth}" />
            <rect x="185" y="100" width="30" height="25" fill="#f1f5f9" stroke="${strokeColor}" stroke-width="${strokeWidth}" />

            <!-- Traps -->
            <path d="M185,105 L150,115 L140,125 L185,120 Z" fill="${getColor("traps")}" stroke="${strokeColor}" stroke-width="${strokeWidth}" />
            <path d="M215,105 L250,115 L260,125 L215,120 Z" fill="${getColor("traps")}" stroke="${strokeColor}" stroke-width="${strokeWidth}" />

            <!-- Shoulders -->
            <path d="M140,125 Q115,130 110,160 Q120,185 140,170 Q150,150 140,125 Z" fill="${getColor("shoulders")}" stroke="${strokeColor}" stroke-width="${strokeWidth}" />
            <path d="M260,125 Q285,130 290,160 Q280,185 260,170 Q250,150 260,125 Z" fill="${getColor("shoulders")}" stroke="${strokeColor}" stroke-width="${strokeWidth}" />

             <!-- Chest -->
            <path d="M200,130 L160,130 Q140,135 140,160 Q160,190 200,190 L200,130 Z" fill="${getColor("chest")}" stroke="${strokeColor}" stroke-width="${strokeWidth}" />
            <path d="M200,130 L240,130 Q260,135 260,160 Q240,190 200,190 L200,130 Z" fill="${getColor("chest")}" stroke="${strokeColor}" stroke-width="${strokeWidth}" />

            <!-- Abs -->
            <path d="M170,195 H230 V280 Q200,290 170,280 Z" fill="${getColor("abs")}" stroke="${strokeColor}" stroke-width="${strokeWidth}" />
            
            <!-- Obliques -->
            <path d="M170,195 L155,200 Q150,240 160,270 L170,280 V195 Z" fill="${getColor("obliques")}" stroke="${strokeColor}" stroke-width="${strokeWidth}" />
            <path d="M230,195 L245,200 Q250,240 240,270 L230,280 V195 Z" fill="${getColor("obliques")}" stroke="${strokeColor}" stroke-width="${strokeWidth}" />

            <!-- Biceps -->
            <path d="M110,160 Q100,190 110,210 Q130,205 140,170 Z" fill="${getColor("biceps")}" stroke="${strokeColor}" stroke-width="${strokeWidth}" />
            <path d="M290,160 Q300,190 290,210 Q270,205 260,170 Z" fill="${getColor("biceps")}" stroke="${strokeColor}" stroke-width="${strokeWidth}" />

            <!-- Forearms -->
            <path d="M110,210 Q95,250 100,290 L120,285 Q125,240 130,210 Z" fill="${getColor("forearms")}" stroke="${strokeColor}" stroke-width="${strokeWidth}" />
            <path d="M290,210 Q305,250 300,290 L280,285 Q275,240 270,210 Z" fill="${getColor("forearms")}" stroke="${strokeColor}" stroke-width="${strokeWidth}" />

            <!-- Quads -->
            <path d="M160,285 Q140,350 150,450 L195,450 Q195,350 195,290 Z" fill="${getColor("quads")}" stroke="${strokeColor}" stroke-width="${strokeWidth}" />
            <path d="M240,285 Q260,350 250,450 L205,450 Q205,350 205,290 Z" fill="${getColor("quads")}" stroke="${strokeColor}" stroke-width="${strokeWidth}" />
            
            <!-- Tibials (Using Calves color for completeness) -->
             <path d="M155,480 Q150,530 160,580 L175,580 Q170,530 170,480 Z" fill="${getColor("calves")}" stroke="${strokeColor}" stroke-width="${strokeWidth}" />
             <path d="M245,480 Q250,530 240,580 L225,580 Q230,530 230,480 Z" fill="${getColor("calves")}" stroke="${strokeColor}" stroke-width="${strokeWidth}" />

             <!-- Knees -->
             <circle cx="172" cy="465" r="12" fill="#e2e8f0" stroke="${strokeColor}" stroke-width="${strokeWidth}" />
             <circle cx="228" cy="465" r="12" fill="#e2e8f0" stroke="${strokeColor}" stroke-width="${strokeWidth}" />
        </svg>

        <!-- BACK VIEW -->
        <svg viewBox="0 0 400 780" class="h-full w-auto drop-shadow-md">
            <!-- Head -->
            <ellipse cx="200" cy="60" rx="35" ry="45" fill="#f1f5f9" stroke="${strokeColor}" stroke-width="${strokeWidth}" />
            <rect x="185" y="100" width="30" height="20" fill="#f1f5f9" stroke="${strokeColor}" stroke-width="${strokeWidth}" />

            <!-- Traps (Back) -->
            <path d="M200,100 L160,120 L180,180 L200,230 L220,180 L240,120 Z" fill="${getColor("traps")}" stroke="${strokeColor}" stroke-width="${strokeWidth}" />

            <!-- Shoulders (Rear) -->
            <path d="M140,125 Q115,135 110,160 L130,170 Q145,150 160,120 Z" fill="${getColor("shoulders")}" stroke="${strokeColor}" stroke-width="${strokeWidth}" />
            <path d="M260,125 Q285,135 290,160 L270,170 Q255,150 240,120 Z" fill="${getColor("shoulders")}" stroke="${strokeColor}" stroke-width="${strokeWidth}" />

            <!-- Lats -->
            <path d="M180,180 L150,200 L160,260 L200,280 L240,260 L250,200 L220,180 L200,230 Z" fill="${getColor("lats")}" stroke="${strokeColor}" stroke-width="${strokeWidth}" />

            <!-- Lower Back -->
            <path d="M185,280 V300 Q185,310 200,310 Q215,310 215,300 V280 Z" fill="${getColor("lower_back")}" stroke="${strokeColor}" stroke-width="${strokeWidth}" />

            <!-- Triceps -->
            <path d="M110,160 Q100,180 110,210 L130,205 Q135,170 130,170 Z" fill="${getColor("triceps")}" stroke="${strokeColor}" stroke-width="${strokeWidth}" />
            <path d="M290,160 Q300,180 290,210 L270,205 Q265,170 270,170 Z" fill="${getColor("triceps")}" stroke="${strokeColor}" stroke-width="${strokeWidth}" />

            <!-- Forearms (Rear) -->
            <path d="M110,210 Q95,250 100,290 L120,285 Q125,240 130,210 Z" fill="${getColor("forearms")}" stroke="${strokeColor}" stroke-width="${strokeWidth}" />
            <path d="M290,210 Q305,250 300,290 L280,285 Q275,240 270,210 Z" fill="${getColor("forearms")}" stroke="${strokeColor}" stroke-width="${strokeWidth}" />

             <!-- Glutes -->
            <path d="M160,280 Q140,300 145,340 Q170,360 200,340 Q230,360 255,340 Q260,300 240,280 Q200,300 160,280 Z" fill="${getColor("glutes")}" stroke="${strokeColor}" stroke-width="${strokeWidth}" />

            <!-- Hamstrings -->
            <path d="M150,350 Q145,400 155,460 L190,460 Q195,400 190,350 Z" fill="${getColor("hamstrings")}" stroke="${strokeColor}" stroke-width="${strokeWidth}" />
            <path d="M250,350 Q255,400 245,460 L210,460 Q205,400 210,350 Z" fill="${getColor("hamstrings")}" stroke="${strokeColor}" stroke-width="${strokeWidth}" />
            
            <!-- Popliteal -->
            <rect x="160" y="460" width="30" height="15" fill="#f1f5f9" stroke="none" />
            <rect x="210" y="460" width="30" height="15" fill="#f1f5f9" stroke="none" />

            <!-- Calves -->
            <path d="M155,475 Q140,500 160,560 L185,550 Q195,500 185,475 Z" fill="${getColor("calves")}" stroke="${strokeColor}" stroke-width="${strokeWidth}" />
            <path d="M245,475 Q260,500 240,560 L215,550 Q205,500 215,475 Z" fill="${getColor("calves")}" stroke="${strokeColor}" stroke-width="${strokeWidth}" />
        </svg>
    </div>
  `;
};

// --- INIT & RENDER FUNCTIONS ---

// --- HISTORY STATE ---
// (trainingHistory is already defined globally at the top)

// DATA MIGRATION: Check for old 'gymTrainingHistory' vs 'gymRoutineHistory' mismatch if needed
// (If trainingHistory is empty, try to see if there's other data? No, just ensure variable exists)
if (Object.keys(trainingHistory).length === 0) {
  const s = localStorage.getItem("gymTrainingHistory");
  if (s) trainingHistory = JSON.parse(s);

  const oldKeys = Object.keys(localStorage).filter((k) =>
    k.startsWith("gym_history_"),
  );
  if (oldKeys.length > 0) {
    console.log("Found separated history keys, consider migrating if needed.");
  }
}

// --- STATE (Weights) ---

// --- STATE (Weights) ---
let setWeights = {};
try {
  setWeights =
    JSON.parse(localStorage.getItem("gymRoutineWeights")) ||
    JSON.parse(localStorage.getItem("gymSalvaWeights")) ||
    {};
} catch (e) {
  console.warn("Resetting corrupted weights", e);
  setWeights = {};
}

// --- SMART AUTOFILL HELPER ---
function getLastWeight(exerciseName, user, dayIndex) {
  // Scans trainingHistory backwards to find the last weight for this exercise
  const dates = Object.keys(trainingHistory).sort(
    (a, b) => new Date(b) - new Date(a),
  ); // Newest first

  // We need to iterate over days to find matching exercise name.
  // This is expensive if history is huge, but it's local string comparisons.
  // We don't have a direct map of "Exercise Name" -> "Last Weight".
  // So we have to infer from the structure.

  // Strategy:
  // 1. We know the current dayIndex (e.g. 0 for Monday).
  // 2. We know the exerciseName.
  // 3. We iterate history.
  //    If history[date] exists...
  //    We need to know which setKey corresponds to exerciseName?
  //    We can't rely on index if user changes routine.
  //    BUT, `setWeights` is saved by setKey "day-ex-set".
  //    Wait, `trainingHistory` stores `weights` object which matches `setWeights` structure.

  //    If we assume the routine structure (order of exercises) hasn't changed dramatically:
  //    We can look for keys starting with `${dayIndex}-`.
  //    But we need to match the specific exercise index.
  //    We don't know the exercise index for `exerciseName` unless we scan `routineData`?
  //    Yes, we can find the index of `exerciseName` in `routineData[dayIndex]`.

  // Find exIndex
  const dayRoutine = routineData[dayIndex];
  if (!dayRoutine) return "";

  const exIndex = dayRoutine.exercises.findIndex(
    (e) => e.name === exerciseName,
  );
  if (exIndex === -1) return "";

  for (const date of dates) {
    const dayData = trainingHistory[date];
    if (dayData && dayData.weights) {
      // Look for any set of this exercise (0, 1, 2, 3...)
      // We want the MAX weight or the LAST set weight? Usually "working set" weight.
      // Let's take the first non-empty value we find (newest set).

      // Check sets 0 to 5
      for (let s = 0; s < 6; s++) {
        const key = `${dayIndex}-${exIndex}-${s}`;
        if (dayData.weights[key] && dayData.weights[key][user]) {
          return dayData.weights[key][user];
        }
      }
    }
  }
  return "";
}

function init() {
  // Set Date (Legacy removed)

  // Initialize Gamification / Streak Display Immediately
  if (typeof updateGamificationUI === "function") {
    updateGamificationUI();
  }

  // Initialize AquaFlow
  if (typeof initAquaFlow === "function") {
    initAquaFlow();
  }

  renderTabs();
  renderContent();
  lucide.createIcons();

  // Check Achievements on startup
  if (typeof checkAchievements === "function") checkAchievements();

  // --- POLLING FOR LIVE SYNC ---
  // Check cloud every 30 seconds
  setInterval(() => {
    if (!document.hidden) {
      loadFromCloud();
    }
  }, 30000);

  // Also check when tab becomes visible
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) {
      loadFromCloud();
    }
  });

  // Global Event Listener for Weight Inputs (Changed to 'change' for better UX + Toast)
  document.body.addEventListener("change", (e) => {
    if (e.target.classList.contains("weight-input")) {
      const key = e.target.getAttribute("data-set-key");
      const user = e.target.getAttribute("data-user");
      const value = e.target.value;

      if (key && user) {
        if (!setWeights[key]) setWeights[key] = {};
        setWeights[key][user] = value;
        try {
          localStorage.setItem("gymRoutineWeights", JSON.stringify(setWeights));
          showToast("save", "text-blue-400", "Peso guardado");
        } catch (err) {
          console.error("Save error:", err);
          showToast("alert-circle", "text-red-400", "Error al guardar");
        }
      }
    }
  });
}

function renderTabs() {
  const container = document.getElementById("tabs-container");
  container.innerHTML = "";

  routineData.forEach((day, index) => {
    const isActive = index === activeTab;
    const btn = document.createElement("button");

    // Determine color theme based on index
    const dayColors = ["emerald", "blue", "violet", "cyan", "rose"]; // Lunes, Martes, Miércoles, Jueves, Viernes
    const activeColor = dayColors[index] || "emerald";

    // Tailwind classes for buttons
    let classes =
      "flex-shrink-0 md:w-full text-left px-4 py-3 rounded-xl transition-all duration-300 flex items-center justify-between group border relative overflow-hidden ";

    if (isActive) {
      // Active State - Add specific class for CSS styling
      classes += `active-tab-${activeColor} translate-x-1 shadow-[0_0_20px_rgba(0,0,0,0.1)]`;
    } else {
      // Inactive State
      classes +=
        "bg-slate-900 border-slate-800 text-slate-400 hover:bg-slate-800 hover:text-slate-200 hover:border-slate-700";
    }
    btn.className = classes;

    btn.onclick = () => {
      activeTab = index;
      renderTabs();
      renderContent();
    };

    // Inner HTML
    // Inner HTML
    const activeGradient = `from-${activeColor}-500/10`;
    const activeTextLight = `text-${activeColor}-300`; // for dark mode text
    const activeTextMain = `text-${activeColor}-500`; // for icon

    btn.innerHTML = `
                    ${
                      isActive
                        ? `<div class="absolute inset-0 bg-gradient-to-r ${activeGradient} to-transparent opacity-50"></div>`
                        : ""
                    }
                    <div class="flex flex-col relative z-10">
                        <span class="text-xs font-bold uppercase tracking-wider mb-1 transition-colors ${
                          isActive ? activeTextLight : "text-slate-500"
                        } ${isActive ? "active-tab-label" : ""}">${
                          day.day
                        }</span>
                        <span class="font-medium text-sm">${day.title}</span>
                    </div>
                    <i data-lucide="chevron-right" class="w-4 h-4 transition-all duration-300 relative z-10 ${
                      isActive
                        ? activeTextMain + " translate-x-0 active-tab-icon"
                        : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                    }"></i>
                `;

    container.appendChild(btn);
  });
  lucide.createIcons();
}

function renderContent() {
  const dayData = routineData[activeTab];

  // Determine active color theme
  const dayColors = ["emerald", "blue", "violet", "cyan", "rose"];
  const activeColor = dayColors[activeTab] || "emerald";

  // Update Headers & Progress
  document.getElementById("day-title").textContent = dayData.title;
  document.getElementById("exercise-count").textContent =
    `${dayData.exercises.length} Ejercicios`;

  // Calculate total sets and completed sets for progress
  // Calculate total sets and completed sets for progress
  let totalSets = 0;
  let completedSetsCount = 0;
  dayData.exercises.forEach((exercise, idx) => {
    // Detect time-based exercises
    const repsStr = String(exercise.reps).toLowerCase();
    const isTimeBased = repsStr.includes("min") || repsStr.includes("seg");
    const numSets = isTimeBased ? 1 : parseInt(exercise.sets) || 3;

    totalSets += numSets; // Single user (Salva)

    for (let s = 0; s < numSets; s++) {
      const setKey = `${activeTab}-${idx}-${s}`;
      const setData = completedSets[setKey] || { salva: false };
      if (setData.salva) completedSetsCount++;
    }
  });

  const progress =
    totalSets === 0 ? 0 : Math.round((completedSetsCount / totalSets) * 100);

  const progressContainer = document.getElementById("progress-container");
  progressContainer.classList.remove("hidden");

  // Progress Bar Animation
  const progressBar = document.getElementById("progress-bar");
  const progressText = document.getElementById("progress-text");
  if (progressText) progressText.textContent = `${progress}%`;

  // Update progress bar color
  progressBar.className = `h-full rounded-full transition-all duration-1000 ease-out bg-${activeColor}-500 shadow-[0_0_10px_rgba(0,0,0,0.3)]`;

  progressBar.style.width = "0%";
  setTimeout(() => {
    progressBar.style.width = `${progress}%`;
  }, 50);

  // Completion Message
  const completionMsg = document.getElementById("completion-message");
  if (progress === 100) {
    completionMsg.classList.remove("hidden");
  } else {
    completionMsg.classList.add("hidden");
  }

  // Render Exercises
  const listContainer = document.getElementById("exercises-list");
  listContainer.innerHTML = "";

  // WARMUP: Removed generic warmup block - Salva's routine includes warmup as regular exercises
  // Each exercise with "Calentamiento" or time-based reps will show a timer button

  dayData.exercises.forEach((exercise, idx) => {
    const numSets = parseInt(exercise.sets) || 3;
    const restTime = parseRestTime(exercise.notes || "");

    // Detect time-based exercises (reps contain "min" or "seg")
    const repsStr = String(exercise.reps).toLowerCase();
    const isTimeBased = repsStr.includes("min") || repsStr.includes("seg");
    const timeMatch = repsStr.match(/(\d+)\s*(min|seg)/i);
    const timeMinutes = timeMatch
      ? timeMatch[2].toLowerCase() === "min"
        ? parseInt(timeMatch[1])
        : parseInt(timeMatch[1]) / 60
      : 0;

    // Count completed sets for this exercise (Total checks / Total required)
    let exerciseCompletedChecks = 0;
    const effectiveSets = isTimeBased ? 1 : numSets; // Time-based = 1 set
    for (let s = 0; s < effectiveSets; s++) {
      const setKey = `${activeTab}-${idx}-${s}`;
      const setData = completedSets[setKey] || { salva: false };
      if (setData.salva) exerciseCompletedChecks++;
    }
    const isExerciseCompleted = exerciseCompletedChecks === effectiveSets;

    const card = document.createElement("div");
    const staggerClass = idx < 6 ? `stagger-${idx + 1}` : "";

    // Add active-theme class for CSS targeting
    let cardClasses = `animate-slide-up ${staggerClass} relative group p-0 rounded-2xl border transition-all duration-300 overflow-hidden flex flex-col md:flex-row active-theme-${activeColor} `;

    if (isExerciseCompleted) {
      cardClasses += `bg-${activeColor}-900/10 border-${activeColor}-900/20 opacity-80 scale-[0.99]`;
    } else {
      // Use standard slate for inactive to avoid rainbow vomit, OR use subtle tint of active color?
      // "cuadrito de cada dia y su contenido tengan el mismo color" -> implies tint.
      cardClasses += `bg-slate-900 border-slate-800 hover:border-${activeColor}-500/50 hover:shadow-xl hover:shadow-${activeColor}-900/10`;
    }
    card.className = cardClasses;

    const muscleMapHTML = getMuscleMapSVG(
      exercise.muscles.primary,
      exercise.muscles.secondary,
    );

    // Generate set buttons HTML (or timer button for time-based exercises)
    let setButtonsHTML = "";

    if (isTimeBased) {
      // TIME-BASED EXERCISE: Show timer button instead of set buttons
      const setKey = `${activeTab}-${idx}-0`;
      if (typeof completedSets[setKey] !== "object") {
        completedSets[setKey] = { salva: false };
      }
      const setData = completedSets[setKey];

      setButtonsHTML = `
        <div class="flex items-center gap-3">
          <button onclick="startWarmupTimer(${Math.ceil(timeMinutes)}, '${exercise.name.replace(/'/g, "\\'")}')" 
            class="flex items-center gap-2 px-4 py-2 bg-amber-600/20 hover:bg-amber-600/40 text-amber-400 border border-amber-600/50 rounded-xl font-bold transition-all">
            <i data-lucide="timer" class="w-5 h-5"></i>
            <span>${exercise.reps}</span>
          </button>
          <button data-set-key="${setKey}" data-user="salva" data-exercise-name="${exercise.name}" data-rest-time="0"
            class="set-btn w-10 h-10 rounded-xl font-bold text-xs transition-all duration-200 flex items-center justify-center border
            ${
              setData.salva
                ? `bg-emerald-600 text-white border-emerald-500 shadow-md shadow-emerald-500/20`
                : `bg-slate-50 dark:bg-slate-800 text-slate-500 border-slate-200 dark:border-slate-700 hover:border-emerald-500/50 hover:text-emerald-500`
            }" title="Marcar completado">
            ${setData.salva ? '<i data-lucide="check" class="w-5 h-5"></i>' : '<i data-lucide="check" class="w-4 h-4"></i>'}
          </button>
        </div>
      `;
    } else {
      // NORMAL EXERCISE: Show set buttons with weights
      for (let s = 0; s < numSets; s++) {
        const setKey = `${activeTab}-${idx}-${s}`;
        // Ensure object structure
        if (typeof completedSets[setKey] !== "object") {
          completedSets[setKey] = { salva: false };
        }
        const setData = completedSets[setKey];

        // Dynamic button colors and Weight Inputs
        // SMART AUTOFILL LOGIC
        let weightSalva =
          setWeights[setKey] && setWeights[setKey].salva
            ? setWeights[setKey].salva
            : "";

        // Only autofill if strictly empty and we have history
        if (!weightSalva) {
          const last = getLastWeight(exercise.name, "salva", activeTab);
          if (last) weightSalva = last;
        }

        setButtonsHTML += `
            <div class="flex flex-col items-center gap-2 bg-white dark:bg-slate-950/30 p-2.5 rounded-2xl border border-slate-200 dark:border-slate-800/50 shadow-sm dark:shadow-none">
                <span class="text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider">Set ${s + 1}</span>
                <div class="flex gap-2">
                    <!-- Salva Column -->
                    <div class="flex flex-col items-center gap-1.5">
                      <button data-set-key="${setKey}" data-user="salva" data-exercise-name="${exercise.name}" data-rest-time="${restTime}"
                            class="set-btn w-10 h-10 rounded-xl font-bold text-xs transition-all duration-200 flex items-center justify-center border
                            ${
                              setData.salva
                                ? `bg-emerald-600 text-white border-emerald-500 shadow-md shadow-emerald-500/20`
                                : `bg-slate-50 dark:bg-slate-800 text-slate-500 border-slate-200 dark:border-slate-700 hover:border-emerald-500/50 hover:text-emerald-500`
                            }" title="Salva">
                            ${setData.salva ? '<i data-lucide="check" class="w-5 h-5"></i>' : "S"}
                        </button>
                        <input type="number" 
                               value="${weightSalva}" 
                               placeholder="kg" 
                               data-set-key="${setKey}" 
                               data-user="salva"
                               class="weight-input w-10 h-7 bg-slate-50 dark:bg-slate-900/50 text-center text-xs font-medium text-slate-600 dark:text-slate-300 rounded-lg border border-slate-200 dark:border-slate-700 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 outline-none p-0 transition-all placeholder:text-slate-300 dark:placeholder:text-slate-700"
                               onclick="event.stopPropagation()">
                    </div>
                </div>
            </div>
        `;
      }
    }

    card.innerHTML = `
                    <!-- Completion Strip -->
                    <div class="absolute left-0 top-0 bottom-0 w-1 z-10 transition-colors duration-300 ${
                      isExerciseCompleted
                        ? `bg-${activeColor}-500`
                        : `bg-transparent group-hover:bg-${activeColor}-500/50`
                    }"></div>

                    <!-- Left Info -->
                    <div class="flex-1 p-5">
                        <div class="flex items-start justify-between gap-4">
                            <div class="flex-1">
                                <div class="flex items-center gap-3 mb-2">
                                    <div class="p-2 rounded-lg transition-colors duration-300 ${
                                      isExerciseCompleted
                                        ? "bg-emerald-500/20 text-emerald-400"
                                        : "bg-slate-800 text-slate-300 group-hover:bg-slate-700"
                                    }">
                                        <i data-lucide="dumbbell" class="w-5 h-5 ${
                                          isExerciseCompleted
                                            ? "animate-pulse"
                                            : ""
                                        }"></i>
                                    </div>
                                    <h3 class="font-bold text-lg transition-all duration-300 flex-1 ${
                                      isExerciseCompleted
                                        ? "text-slate-500 line-through decoration-slate-600 decoration-2"
                                        : "text-slate-100 group-hover:text-emerald-300"
                                    }">
                                        ${exercise.name}
                                    </h3>
                                    <!-- History Button (only for weight-based exercises) -->
                                    ${
                                      !isTimeBased
                                        ? `
                                    <button onclick="event.stopPropagation(); showExerciseHistory('${exercise.name}')"
                                        class="p-2 rounded-full hover:bg-slate-800 text-slate-500 hover:text-blue-400 transition-colors"
                                        title="Ver Historial">
                                        <i data-lucide="trending-up" class="w-4 h-4"></i>
                                    </button>
                                    `
                                        : ""
                                    }
                                </div>
                                
                                <!-- Sets Row -->
                                <div class="mt-4 mb-3">
                                    <div class="flex items-center gap-2 mb-2">
                                        <span class="text-slate-500 text-xs uppercase font-bold tracking-wider">Progreso</span>
                                        <div class="flex-1 h-1 bg-slate-800 rounded-full overflow-hidden ml-2">
                                            <div class="h-full bg-emerald-500 transition-all duration-300" style="width: ${
                                              (exerciseCompletedChecks /
                                                numSets) *
                                              100
                                            }%"></div>
                                        </div>
                                    </div>
                                    <div class="flex gap-2 flex-wrap items-end">
                                        ${setButtonsHTML}
                                    </div>
                                </div>

                                <div class="grid grid-cols-3 gap-x-4 gap-y-2 text-sm transition-opacity duration-300 ${
                                  isExerciseCompleted
                                    ? "opacity-50"
                                    : "opacity-100"
                                }">
                                    <div class="flex flex-col">
                                        <span class="text-slate-500 text-xs uppercase font-bold tracking-wider">Reps</span>
                                        <span class="font-mono text-white font-medium">${
                                          exercise.reps
                                        }</span>
                                    </div>
                                    <div class="flex flex-col">
                                        <span class="text-slate-500 text-xs uppercase font-bold tracking-wider">Intensidad</span>
                                        <span class="text-orange-400 font-medium">${
                                          exercise.rir
                                        }</span>
                                    </div>
                                    <div class="flex flex-col">
                                        <span class="text-slate-500 text-xs uppercase font-bold tracking-wider">Descanso</span>
                                        <span class="text-cyan-400 font-medium">${
                                          restTime >= 60
                                            ? Math.floor(restTime / 60) + " min"
                                            : restTime + "s"
                                        }</span>
                                    </div>
                                </div>

                                ${
                                  exercise.notes
                                    ? `
                                <div class="mt-3 pt-3 border-t border-slate-800/50 transition-opacity duration-300 ${
                                  isExerciseCompleted
                                    ? "opacity-40"
                                    : "opacity-100"
                                }">
                                    <p class="text-slate-400 text-sm italic flex items-start gap-1.5">
                                        <span class="text-emerald-500 not-italic font-bold">Tip:</span> 
                                        ${exercise.notes
                                          .replace(
                                            /Descanso:.*?(min|seg)\.?/gi,
                                            "",
                                          )
                                          .trim()}
                                    </p>
                                </div>`
                                    : ""
                                }
                            </div>

                            <div class="mt-1">
                                ${
                                  isExerciseCompleted
                                    ? `<i data-lucide="check-circle-2" class="w-8 h-8 text-emerald-500 fill-emerald-500/20 animate-pop drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]"></i>`
                                    : `<i data-lucide="circle" class="w-8 h-8 text-slate-700 group-hover:text-emerald-500/50 transition-all duration-300 transform group-hover:scale-110"></i>`
                                }
                            </div>
                        </div>
                    </div>

                    <!-- Muscle Map -->
                    <div onclick='openMuscleMapModal(${JSON.stringify(exercise.muscles.primary)}, ${JSON.stringify(exercise.muscles.secondary)})' 
                        class="w-full md:w-32 bg-slate-950/50 border-t md:border-t-0 md:border-l border-slate-800 p-2 flex flex-col items-center justify-center transition-all duration-300 cursor-pointer hover:bg-slate-900 group/map ${
                          isExerciseCompleted ? "opacity-50 grayscale" : ""
                        }">
                        <span class="text-[10px] uppercase text-slate-500 font-bold mb-1 tracking-wider text-center group-hover/map:text-emerald-400 transition-colors">Impacto Muscular <i data-lucide="zoom-in" class="inline w-3 h-3 ml-1"></i></span>
                        ${muscleMapHTML}
                        <div class="flex gap-2 mt-2 justify-center">
                            <div class="flex items-center gap-1">
                                <div class="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_5px_rgba(239,68,68,0.5)]"></div>
                                <span class="text-[9px] text-slate-400">1º</span>
                            </div>
                            <div class="flex items-center gap-1">
                                <div class="w-2 h-2 rounded-full bg-yellow-500 shadow-[0_0_5px_rgba(234,179,8,0.5)]"></div>
                                <span class="text-[9px] text-slate-400">2º</span>
                            </div>
                        </div>
                    </div>
                `;
    listContainer.appendChild(card);
  });

  // RESET BUTTON
  const resetBtnContainer = document.createElement("div");
  resetBtnContainer.className =
    "mt-8 mb-12 flex justify-center opacity-80 hover:opacity-100 transition-opacity";
  resetBtnContainer.innerHTML = `
                <button id="reset-progress-btn" class="flex items-center gap-2 px-6 py-3 bg-slate-800/50 text-slate-400 border border-slate-700/50 rounded-xl hover:bg-red-900/20 hover:text-red-400 hover:border-red-900/50 transition-all duration-300 shadow-sm hover:shadow-red-500/10 active:scale-95 touch-manipulation">
                    <i data-lucide="rotate-ccw" class="w-5 h-5"></i>
                    <span class="font-medium">Reiniciar Entrenamiento</span>
                </button>
            `;
  listContainer.appendChild(resetBtnContainer);

  // Listener for reset
  setTimeout(() => {
    const btn = document.getElementById("reset-progress-btn");
    if (btn) {
      btn.addEventListener("click", () => {
        showConfirmModal(
          "¿Reiniciar Progreso?",
          "Se borrará todo lo que hiciste hoy. ¿Estás seguro?",
          () => {
            completedSets = {};
            localStorage.removeItem("gymRoutineSets");
            renderContent();
          },
        );
      });
    }
  }, 0);

  // Add event listeners to set buttons (UPDATED)
  document.querySelectorAll(".set-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const setKey = btn.dataset.setKey;
      const user = btn.dataset.user; // 'facu' or 'alma'
      const exerciseName = btn.dataset.exerciseName;
      const restTime = parseInt(btn.dataset.restTime);

      // Initialize if missing
      if (!completedSets[setKey] || typeof completedSets[setKey] !== "object") {
        completedSets[setKey] = { salva: false };
      }

      // Request Notification if needed
      if ("Notification" in window && Notification.permission !== "granted") {
        Notification.requestPermission();
      }

      // Handle Logic
      const currentState = completedSets[setKey][user];

      if (!currentState) {
        // TURN ON
        completedSets[setKey][user] = true;
        // Sólo mostrar timer de descanso si restTime > 0 (calentamiento/finisher no tienen descanso)
        if (restTime > 0) {
          showTimer(user, exerciseName, restTime);
        }
      } else {
        // TURN OFF
        completedSets[setKey][user] = false;
      }

      localStorage.setItem("gymSalvaSets", JSON.stringify(completedSets));
      renderContent();
    });
  });

  // Handle Weight Inputs
  document.querySelectorAll(".weight-input").forEach((input) => {
    input.addEventListener("change", (e) => {
      const setKey = e.target.dataset.setKey;
      const user = e.target.dataset.user;
      const val = e.target.value;

      if (!setWeights[setKey]) {
        setWeights[setKey] = { facu: "", alma: "" };
      }
      setWeights[setKey][user] = val;

      localStorage.setItem("gymRoutineWeights", JSON.stringify(setWeights));
    });

    // Auto-select on focus
    input.addEventListener("focus", (e) => e.target.select());
    // Stop propagation of clicks to prevent triggering exercise completion or other bubbling
    input.addEventListener("click", (e) => e.stopPropagation());
  });

  // Re-init icons for newly added elements
  lucide.createIcons();
}

// --- VISIBILITY HANDLER ---
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") {
    // Resume audio context if suspended
    unlockAudio();

    // Check if any timer expired while in background
    let needsUpdate = false;
    const now = Date.now();

    ["facu", "alma"].forEach((user) => {
      const state = timerState[user];
      if (state.active) {
        const diff = state.endTime - now;
        if (diff <= -1000) {
          // Expired significantly ago
          state.currentSeconds = 0;
          handleTimerComplete(user);
          needsUpdate = true;
        } else {
          state.currentSeconds = Math.ceil(diff / 1000);
          needsUpdate = true;
        }
      }
    });

    if (needsUpdate) {
      updateTimerDisplay();
    }
  } else if (document.visibilityState === "hidden") {
    // Immediate notification update
    handleNotifications();
  }
});

// --- SERVICE WORKER REGISTRATION WITH AUTO-UPDATE ---
if ("serviceWorker" in navigator) {
  window.addEventListener("load", async () => {
    // Limpiar todos los cachés viejos automáticamente
    if ("caches" in window) {
      const cacheNames = await caches.keys();
      const currentCacheVersion = "gym-rutina-v2";
      for (const cacheName of cacheNames) {
        if (cacheName !== currentCacheVersion) {
          console.log("Limpiando caché viejo:", cacheName);
          await caches.delete(cacheName);
        }
      }
    }

    navigator.serviceWorker
      .register("sw.js")
      .then((registration) => {
        console.log("ServiceWorker registered with scope:", registration.scope);

        // Forzar verificación de actualizaciones
        registration.update();

        // Verificar actualizaciones automáticamente
        registration.addEventListener("updatefound", () => {
          const newWorker = registration.installing;
          console.log("Nueva versión del Service Worker encontrada...");

          newWorker.addEventListener("statechange", () => {
            if (
              newWorker.state === "installed" &&
              navigator.serviceWorker.controller
            ) {
              // Hay una nueva versión lista, recargar automáticamente
              console.log("Nueva versión instalada, recargando...");
              window.location.reload();
            }
          });
        });
      })
      .catch((error) => {
        console.log("ServiceWorker registration failed:", error);
      });

    // Si el Service Worker toma control, recargar para aplicar cambios
    let refreshing = false;
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      if (!refreshing) {
        refreshing = true;
        console.log("Service Worker actualizado, recargando página...");
        window.location.reload();
      }
    });
  });
}

// Debug
// Debug Click Handler (Global)
function handleTestClick() {
  logToScreen("--- DIAGNÓSTICO INICIADO ---");
  logToScreen(`🔒 Estado Crudo: '${Notification.permission}'`);
  logToScreen(`🔐 Seguro (HTTPS): ${window.isSecureContext}`);
  logToScreen(`📱 ServiceWorker Reg: ${!!navigator.serviceWorker.controller}`);

  if (Notification.permission === "denied") {
    logToScreen("❌ El navegador reporta 'DENIED'.", "error");
    logToScreen(
      "⚠️ Esto significa que el BLOQUEO es del SITIO WEB, no del celular.",
      "error",
    );
    showPermissionModal();
  } else if (Notification.permission !== "granted") {
    logToScreen("⚠️ Permisos 'default'. Solicitando...", "info");
    Notification.requestPermission().then((res) => {
      logToScreen(`📝 Respuesta solicitud: '${res}'`);
      if (res === "granted") {
        logToScreen("✅ Permiso ACEPTADO.", "success");
        sendTestNotif();
      } else {
        logToScreen("❌ Solicitud Rechazada/Ignorada.", "error");
        showPermissionModal();
      }
    });
  } else {
    logToScreen("✅ Permisos OK. Enviando test...", "success");
    sendTestNotif();
  }
}

// Ensure function is global
window.handleTestClick = handleTestClick;

function sendTestNotif() {
  logToScreen("Iniciando Test de Notificación...", "info");

  if (Notification.permission !== "granted") {
    logToScreen("❌ Permiso NO concedido: " + Notification.permission, "error");
    return;
  }

  if (!navigator.serviceWorker) {
    logToScreen("⚠️ Service Worker no soportado en este navegador.", "error");
    try {
      new Notification("Test Fallback", { body: "Prueba sin SW" });
      logToScreen("✅ Notificación Fallback enviada.", "success");
    } catch (e) {
      logToScreen("❌ Error Fallback: " + e, "error");
    }
    return;
  }

  navigator.serviceWorker
    .getRegistration()
    .then((reg) => {
      if (!reg) {
        logToScreen(
          "❌ Service Worker NO registrado (scope undefined).",
          "error",
        );
        return;
      }

      logToScreen("✅ SW Encontrado. Scope: " + reg.scope, "success");

      reg
        .showNotification("Test Gym SW", {
          body: "Si ves esto, funciona el SW.",
          icon: "favicon.svg",
          vibrate: [100, 50, 100],
          tag: "test-" + Date.now(), // Unique tag to ensure it always fires
        })
        .then(() => {
          logToScreen("🚀 SW: Promesa resuelta (Enviado al OS).", "success");
        })
        .catch((err) => {
          logToScreen("❌ SW Error al enviar: " + err, "error");
        });
    })
    .catch((err) => {
      logToScreen("❌ Error obteniendo registro SW: " + err, "error");
    });
}

// --- PERMISSION MODAL ---
function showPermissionModal() {
  const modal = document.getElementById("permission-modal");
  if (modal) {
    modal.classList.remove("hidden");
    // Animation trigger
    requestAnimationFrame(() => {
      modal.classList.remove("opacity-0", "scale-95");
      modal.classList.add("opacity-100", "scale-100");
    });
    lucide.createIcons();
  }
}

function closePermissionModal() {
  const modal = document.getElementById("permission-modal");
  if (modal) {
    modal.classList.remove("opacity-100", "scale-100");
    modal.classList.add("opacity-0", "scale-95");
    setTimeout(() => modal.classList.add("hidden"), 300);
  }
}

function switchPermTab(tabName) {
  const tabs = ["android-chrome", "android-app", "ios"];

  tabs.forEach((t) => {
    const content = document.getElementById(`perm-content-${t}`);
    const btn = document.getElementById(`perm-tab-${t}`);

    if (t === tabName) {
      if (content) content.classList.remove("hidden");
      if (btn) {
        btn.classList.remove("text-slate-400", "hover:bg-slate-700/50");
        btn.classList.add("bg-indigo-500", "text-white", "shadow-sm");
      }
    } else {
      if (content) content.classList.add("hidden");
      if (btn) {
        btn.classList.add("text-slate-400", "hover:bg-slate-700/50");
        btn.classList.remove("bg-indigo-500", "text-white", "shadow-sm");
      }
    }
  });
}

// Make functions global
window.closePermissionModal = closePermissionModal;
window.switchPermTab = switchPermTab;

// --- DEBUG CONSOLE LGOIC ---
function logToScreen(msg, type = "info") {
  const debugContent = document.getElementById("debug-content");
  if (!debugContent) return;

  const entry = document.createElement("div");
  const time = new Date().toLocaleTimeString();
  entry.textContent = `[${time}] ${msg}`;

  if (type === "error") entry.className = "text-red-400";
  else if (type === "success") entry.className = "text-emerald-400";
  else entry.className = "text-slate-300";

  debugContent.prepend(entry); // Newest top
}

function toggleDebug() {
  const consoleEl = document.getElementById("debug-console");
  if (consoleEl) consoleEl.classList.toggle("hidden");
}

// Override console
const originalLog = console.log;
const originalError = console.error;

console.log = function (...args) {
  originalLog.apply(console, args);
  logToScreen(args.join(" "));
};

console.error = function (...args) {
  originalError.apply(console, args);
  logToScreen(args.join(" "), "error");
};

// Make global
window.toggleDebug = toggleDebug;
window.logToScreen = logToScreen;

// Log startup
setTimeout(
  () => logToScreen("🚀 Sistema v2.1 Cargado. Listo para tests.", "success"),
  500,
);

// --- EXPORT DATA ---
const exportBtn = document.getElementById("export-data-btn");
if (exportBtn) {
  exportBtn.addEventListener("click", () => {
    const dataStr = JSON.stringify(
      {
        gymRoutineSets: JSON.parse(localStorage.getItem("gymRoutineSets")),
        gymRoutineWeights: JSON.parse(
          localStorage.getItem("gymRoutineWeights"),
        ),
        gymRoutineHistory: JSON.parse(
          localStorage.getItem("gymRoutineHistory"),
        ),
      },
      null,
      2,
    );
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `backup_gym_${new Date().toISOString().split("T")[0]}.json`;
    a.click();
  });
}

// --- WARMUP TIMER ---
function startWarmupTimer(minutes, exerciseName) {
  const totalSeconds = minutes * 60;
  let currentSeconds = totalSeconds;

  // Create overlay modal
  const overlay = document.createElement("div");
  overlay.id = "warmup-timer-modal";
  overlay.className =
    "fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4";

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  overlay.innerHTML = `
    <div class="relative bg-slate-900 border border-amber-500/50 rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl shadow-amber-500/10">
      <!-- Minimize Button -->
      <button id="warmup-minimize-btn"
        class="absolute top-4 right-4 p-2 bg-slate-800 hover:bg-slate-700 rounded-full transition-all"
        title="Minimizar">
        <i data-lucide="minimize-2" class="w-5 h-5 text-slate-400"></i>
      </button>
      <div class="mb-4">
        <i data-lucide="timer" class="w-12 h-12 text-amber-400 mx-auto mb-2"></i>
        <h3 class="text-lg font-bold text-amber-300">${exerciseName}</h3>
        <p class="text-sm text-slate-400">Tiempo de calentamiento</p>
      </div>
      <div id="warmup-timer-display" class="text-7xl font-mono font-bold text-amber-400 mb-6 tabular-nums">
        ${formatTime(totalSeconds)}
      </div>
      <div id="warmup-timer-progress-ring" class="relative w-32 h-32 mx-auto mb-6">
        <svg class="w-32 h-32 transform -rotate-90">
          <circle cx="64" cy="64" r="58" stroke="#1e293b" stroke-width="8" fill="none" />
          <circle id="warmup-timer-ring" cx="64" cy="64" r="58" stroke="#f59e0b" stroke-width="8" fill="none"
            stroke-linecap="round" stroke-dasharray="364.42" stroke-dashoffset="0"
            class="transition-all duration-1000 ease-linear" />
        </svg>
        <div class="absolute inset-0 flex items-center justify-center">
          <span id="warmup-timer-seconds-left" class="text-3xl font-bold text-white">${formatTime(totalSeconds)}</span>
        </div>
      </div>
      <div class="flex gap-3 justify-center">
        <button id="warmup-pause-btn"
          class="px-6 py-3 bg-amber-600/20 hover:bg-amber-600/40 text-amber-400 border border-amber-600/50 rounded-xl font-medium transition-all flex items-center gap-2">
          <i data-lucide="pause" class="w-4 h-4"></i>
          Pausar
        </button>
        <button id="warmup-close-btn"
          class="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl font-medium transition-all flex items-center gap-2">
          <i data-lucide="skip-forward" class="w-4 h-4"></i>
          Saltar
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);
  if (window.lucide) lucide.createIcons();

  let isPaused = false;
  let timerInterval;

  const displayEl = overlay.querySelector("#warmup-timer-display");
  const ringEl = overlay.querySelector("#warmup-timer-ring");
  const centerEl = overlay.querySelector("#warmup-timer-seconds-left");
  const pauseBtn = overlay.querySelector("#warmup-pause-btn");
  const closeBtn = overlay.querySelector("#warmup-close-btn");
  const minimizeBtn = overlay.querySelector("#warmup-minimize-btn");

  const circumference = 2 * Math.PI * 58; // 364.42

  const updateDisplay = () => {
    displayEl.textContent = formatTime(currentSeconds);
    centerEl.textContent = formatTime(currentSeconds);
    const progress = (totalSeconds - currentSeconds) / totalSeconds;
    ringEl.style.strokeDashoffset = circumference * (1 - progress);
  };

  const tick = () => {
    if (currentSeconds <= 0) {
      clearInterval(timerInterval);
      // Play sound or vibrate
      if (navigator.vibrate) navigator.vibrate([200, 100, 200, 100, 200]);
      displayEl.textContent = "¡LISTO!";
      centerEl.textContent = "✓";
      displayEl.classList.add("text-emerald-400");
      ringEl.style.stroke = "#10b981";
      return;
    }
    currentSeconds--;
    updateDisplay();
    // Also update mini bubble if exists
    const miniBubbleDisplay = document.querySelector("#warmup-mini-display");
    if (miniBubbleDisplay) {
      miniBubbleDisplay.textContent = formatTime(currentSeconds);
    }
  };

  timerInterval = setInterval(tick, 1000);

  pauseBtn.addEventListener("click", () => {
    isPaused = !isPaused;
    if (isPaused) {
      clearInterval(timerInterval);
      pauseBtn.innerHTML =
        '<i data-lucide="play" class="w-4 h-4"></i> Reanudar';
    } else {
      timerInterval = setInterval(tick, 1000);
      pauseBtn.innerHTML = '<i data-lucide="pause" class="w-4 h-4"></i> Pausar';
    }
    if (window.lucide) lucide.createIcons();
  });

  closeBtn.addEventListener("click", () => {
    clearInterval(timerInterval);
    overlay.remove();
    // Also remove mini bubble if exists
    const miniBubble = document.querySelector("#warmup-mini-bubble");
    if (miniBubble) miniBubble.remove();
  });

  minimizeBtn.addEventListener("click", () => {
    // Hide main overlay but keep timer running
    overlay.style.display = "none";

    // Create mini floating bubble directly on body (not in timer-modal which may be hidden)
    const bubble = document.createElement("div");
    bubble.id = "warmup-mini-bubble";
    bubble.className =
      "fixed bottom-24 right-4 z-[60] bg-slate-900 border-2 border-amber-500 rounded-2xl p-3 shadow-xl shadow-amber-500/30 cursor-pointer hover:scale-105 transition-all duration-200 flex items-center gap-3";

    bubble.innerHTML = `
      <div class="relative w-10 h-10">
        <svg class="w-10 h-10 transform -rotate-90">
          <circle cx="20" cy="20" r="16" stroke="#1e293b" stroke-width="3" fill="none" />
          <circle id="warmup-mini-ring" cx="20" cy="20" r="16" stroke="#f59e0b" stroke-width="3"
              fill="none" stroke-linecap="round" stroke-dasharray="100.53" stroke-dashoffset="0"
              class="text-amber-400 transition-all duration-1000 ease-linear" />
        </svg>
        <div class="absolute inset-0 flex items-center justify-center">
          <i data-lucide="timer" class="w-4 h-4 text-amber-400"></i>
        </div>
      </div>
      <div class="text-left">
        <div id="warmup-mini-display" class="text-xl font-mono font-bold text-amber-400 tabular-nums leading-tight">${formatTime(currentSeconds)}</div>
        <p class="text-[10px] text-slate-500 max-w-[100px] truncate">${exerciseName}</p>
      </div>
    `;

    bubble.onclick = () => {
      // Restore main overlay
      overlay.style.display = "flex";
      bubble.remove();
    };

    document.body.appendChild(bubble);
    if (window.lucide) lucide.createIcons();
  });
}
window.startWarmupTimer = startWarmupTimer;

// --- PLATE CALCULATOR ---
function openCalculatorModal() {
  savedScrollY = window.scrollY; // Capture current scroll position
  const modal = document.getElementById("calculator-modal");
  modal.classList.remove("hidden");
  modal.classList.add("flex");

  // Robust Mobile Scroll Lock
  document.body.style.position = "fixed";
  document.body.style.top = `-${savedScrollY}px`;
  document.body.style.width = "100%";
  document.body.classList.add("overflow-hidden");

  document.getElementById("calc-weight-input").focus();
}

function closeCalculatorModal() {
  const modal = document.getElementById("calculator-modal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");

  // Release Scroll Lock & Restore Position
  document.body.style.position = "";
  document.body.style.top = "";
  document.body.style.width = "";
  document.body.classList.remove("overflow-hidden");
  window.scrollTo(0, savedScrollY);
}

function calculatePlates(val) {
  const weight = parseFloat(val);
  const input = document.getElementById("calc-weight-input");

  // Update input value if called via button
  if (input.value != weight) input.value = weight;

  const display = document.getElementById("plate-display");
  const text = document.getElementById("plate-text");

  // Reset Display
  display.innerHTML =
    '<div class="h-4 w-full bg-slate-600 absolute z-0 rounded-full"></div><span class="text-slate-600 text-xs font-bold absolute -top-4">LADO ÚNICO</span>'; // Keep bar
  text.textContent = "Barra vacía (20kg)";

  if (!weight || weight <= 20) {
    if (weight < 20 && weight > 0) text.textContent = "Menos de la barra...";
    return;
  }

  const weightPerSide = (weight - 20) / 2;
  let remaining = weightPerSide;

  const plates = [
    { w: 25, color: "bg-red-600", h: "h-32" }, // Rojo
    { w: 20, color: "bg-blue-600", h: "h-32" }, // Azul
    { w: 15, color: "bg-yellow-500", h: "h-24" }, // Amarillo
    { w: 10, color: "bg-green-600", h: "h-20" }, // Verde
    { w: 5, color: "bg-white", h: "h-14" }, // Blanco
    { w: 2.5, color: "bg-slate-400", h: "h-10" }, // Gris
    { w: 1.25, color: "bg-slate-600", h: "h-8" }, // Negro chico
  ];

  const needed = [];

  plates.forEach((p) => {
    while (remaining >= p.w) {
      needed.push(p);
      remaining -= p.w;
    }
  });

  // Render Plates
  let html =
    '<div class="h-4 w-full bg-slate-600 absolute z-0 rounded-full"></div><span class="text-slate-600 text-xs font-bold absolute -top-4">LADO ÚNICO</span>'; // Reset again to be safe

  // Center alignment wrapper
  html += '<div class="flex items-center gap-1 z-10">';

  // Bumper/Inside Collar
  html += '<div class="w-2 h-10 bg-slate-400 rounded-sm"></div>';

  needed.forEach((p) => {
    html += `<div class="${p.h} w-4 ${p.color} rounded-sm border-x border-black/20 shadow-sm" title="${p.w}kg"></div>`;
  });

  html += "</div>";

  display.innerHTML = html;

  // Update Text
  const plateText = needed.map((p) => p.w).join(" + ");
  text.innerHTML = `<span class="text-blue-400 font-bold">${weightPerSide}kg</span> por lado: [ ${plateText} ]`;
}

// Global
window.openCalculatorModal = openCalculatorModal;
window.closeCalculatorModal = closeCalculatorModal;
window.calculatePlates = calculatePlates;

// --- 1RM CALCULATOR ---
function calculate1RM() {
  const w = parseFloat(document.getElementById("rm-weight").value) || 0;
  const r = parseFloat(document.getElementById("rm-reps").value) || 0;
  const resultDisplay = document.getElementById("rm-result");

  if (w > 0 && r > 0) {
    // Epley Formula
    const oneRM = Math.round(w * (1 + r / 30));
    resultDisplay.innerHTML = `${oneRM} <span class="text-sm text-emerald-600">kg</span>`;
  } else {
    resultDisplay.innerHTML = `0 <span class="text-sm text-emerald-600">kg</span>`;
  }
}
window.calculate1RM = calculate1RM;

// --- STREAK LOGIC ---
// --- GAMIFICATION SYSTEM ---
function updateGamificationUI() {
  calculateUserStreak("salva", 4);

  // Update Header UI
  // We need to inject or update the streak display container
  const container = document.getElementById("streak-display");
  if (container) {
    container.classList.remove("hidden");
    container.classList.add("flex", "gap-3", "justify-start", "flex-nowrap"); // Force horizontal layout
    // NOTE: We do NOT overwrite className to avoid breaking HTML structure

    container.innerHTML = `
            <div class="flex items-center gap-2 bg-slate-800/80 px-3 py-1.5 rounded-full border border-emerald-500/30 shadow-sm transition-transform active:scale-95 cursor-pointer" onclick="openShopModal('salva')">
                <span class="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">Salva</span>
                <div class="flex items-center gap-1">
                    <i data-lucide="flame" class="w-3 h-3 ${gamification.salva.streak > 0 ? "text-orange-500 fill-orange-500" : "text-slate-600"}"></i>
                    <span class="text-xs font-bold text-slate-200">${gamification.salva.streak}</span>
                </div>
                <div class="w-px h-3 bg-slate-600 mx-1"></div>
                <div class="flex items-center gap-1">
                    <i data-lucide="gem" class="w-3 h-3 text-emerald-400"></i>
                    <span class="text-xs font-bold text-slate-200">${gamification.salva.points}</span>
                </div>
                ${gamification.salva.freezes > 0 ? `<div class="flex items-center"><i data-lucide="shield-check" class="w-3 h-3 text-cyan-400 ml-1"></i><span class="text-[10px] text-cyan-400 font-bold ml-0.5">${gamification.salva.freezes}</span></div>` : ""}
            </div>
        `;
    lucide.createIcons();
  }
}

async function resetSalvaHistory() {
  if (
    confirm(
      "⚠️ ¿RESET TÁCTICO NUCLEAR?\n\n¿Estás seguro de que quieres BORRAR TODO (Historial, Pesos, Rachas)?\nEsta acción dejará la app como nueva para empezar de cero.\n\nNO HAY VUELTA ATRÁS.",
    )
  ) {
    showToast(
      "loader-2",
      "text-blue-400 animate-spin",
      "Limpiando base de datos...",
    );

    // 1. Wipe Memory
    trainingHistory = {};
    setWeights = {};
    gamification.salva = {
      points: 0,
      streak: 0,
      freezes: 0,
      frozenDays: [],
      lastReset: Date.now(),
    };

    // 2. Wipe Local Storage (ALL KEYS)
    localStorage.clear();

    // 2.1 PERSIST CLEAN STATE (Anti-Resurrection)
    localStorage.setItem("gymSalvaGamification", JSON.stringify(gamification));
    localStorage.setItem("gymSalvaHistory", JSON.stringify({}));
    localStorage.setItem("gymRoutineWeights", JSON.stringify({}));

    // EDGE CASE: Set a flag to force cloud wipe on next load
    // This bypasses any timestamp logic and guarantees cloud is overwritten
    localStorage.setItem("FORCE_WIPE_CLOUD", "true");

    // 3. Wipe Cloud (if connected)
    try {
      await saveToCloud();
      showToast("trash-2", "text-red-400", "¡Sistema Formateado!");
    } catch (e) {
      console.error("Cloud wipe error:", e);
    }

    // 4. Reboot
    setTimeout(() => window.location.reload(), 1500);
  }
}

window.resetSalvaHistory = resetSalvaHistory;

function calculateUserStreak(user) {
  // --- NORMALIZE HISTORY KEYS ---
  const userDates = new Set();
  Object.keys(trainingHistory).forEach((key) => {
    // Check if valid and not deleted AND not older than lastReset
    // Normalize lastReset to start of its day for fair comparison
    const lastResetRaw = gamification.salva.lastReset || 0;
    let lastReset = 0;
    if (lastResetRaw > 0) {
      const lastResetDate = new Date(lastResetRaw);
      lastResetDate.setHours(0, 0, 0, 0);
      lastReset = lastResetDate.getTime();
    }

    if (trainingHistory[key][user] && !trainingHistory[key].deleted) {
      // ROBUST DATE PARSING
      let dateObj;
      if (key.match(/^\d{4}-\d{2}-\d{2}$/)) {
        // Standard YYYY-MM-DD
        dateObj = new Date(key + "T00:00:00");
      } else {
        // Fallback for legacy keys (Date String)
        dateObj = new Date(key);
      }

      if (!isNaN(dateObj.getTime())) {
        // TIME-BOMB CHECK: Only count dates AFTER lastReset
        if (dateObj.getTime() >= lastReset) {
          const normalizedKey = getDateKey(dateObj);
          userDates.add(normalizedKey);
        }
      }
    }
  });

  let streak = 0;
  let today = new Date();

  // 1. Check if we trained TODAY
  // If we trained, streak starts at 1. If not, we check yesterday.
  const todayKey = getDateKey(today);

  // If today is tracked, count it.
  if (userDates.has(todayKey)) {
    streak++;
  } else {
    // If NOT trained today, we don't break yet. We check yesterday.
    // However, if today is weekend, we just skip check? No, standard logic:
    // We start loop from Yesterday.
  }

  // Iterate backwards from Yesterday
  // We scan 365 days back looking for consecutive chain
  for (let i = 1; i < 365; i++) {
    const d = new Date();
    d.setDate(today.getDate() - i);
    const key = getDateKey(d);

    // Check if trained
    if (userDates.has(key)) {
      streak++;
    } else {
      // NOT Trained
      const dayOfWeek = d.getDay(); // 0=Sun, 6=Sat
      const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

      if (isWeekend) {
        // Safe! Weekends don't break streak.
        continue;
      }

      // If weekday and missing -> Check for Freeze
      // Ensure frozenDays array exists
      if (!gamification[user].frozenDays) {
        gamification[user].frozenDays = [];
      }

      const alreadyFrozen = gamification[user].frozenDays.includes(key);

      if (alreadyFrozen) {
        // Frozen! Streak preserved.
        continue;
      } else {
        // Can we buy a freeze? (Only for recent missed days, e.g. < 3 days ago)
        if (gamification[user].freezes > 0 && i < 5) {
          gamification[user].freezes--;
          gamification[user].frozenDays.push(key);
          saveToCloud(); // Save state change
          continue; // Bridge established
        }

        // Break the chain
        break;
      }
    }
  }

  gamification[user].streak = streak;
}

function buyFreeze(user) {
  const COST = 500;
  if (gamification[user].points >= COST) {
    gamification[user].points -= COST;
    gamification[user].freezes++;
    saveToCloud();
    updateGamificationUI();
    // Update Shop UI if open
    openShopModal(user);
    showToast("shield-check", "text-cyan-400", "¡Protector de Racha comprado!");
  } else {
    showToast("ban", "text-red-400", "Puntos insuficientes (Req: 500)");
  }
}

window.updateGamificationUI = updateGamificationUI;
window.buyFreeze = buyFreeze;
// Call on init
window.updateStreak = updateGamificationUI;

// --- SHOP MODAL ---
function openShopModal(user) {
  const modal = document.getElementById("shop-modal");
  const title = document.getElementById("shop-user-title");
  const btn = document.getElementById("shop-buy-btn");

  const points = gamification[user].points;
  title.textContent = `${user.toUpperCase()} - ${points} GEMAS`;

  btn.onclick = () => buyFreeze(user);

  modal.classList.remove("hidden");
  modal.classList.add("flex");
  lucide.createIcons();
}

function closeShopModal() {
  const modal = document.getElementById("shop-modal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
}
window.openShopModal = openShopModal;
window.closeShopModal = closeShopModal;
function closeHistoryDetailsModal() {
  const modal = document.getElementById("history-details-modal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
}

function showExerciseHistory(exerciseName) {
  const modal = document.getElementById("history-details-modal");
  const title = document.getElementById("hist-modal-title");
  const content = document.getElementById("hist-modal-content");

  title.textContent = exerciseName;
  content.innerHTML =
    '<div class="flex justify-center p-4"><div class="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-500"></div></div>';

  modal.classList.remove("hidden");
  modal.classList.add("flex");

  // Logic to find history
  setTimeout(() => {
    let historyItems = [];

    // 1. Find the Indices for this exercise to generate keys
    let targetTab = -1;
    let targetExIdx = -1;
    let setsCount = 0;

    routineData.forEach((day, tIdx) => {
      day.exercises.forEach((ex, eIdx) => {
        if (ex.name === exerciseName) {
          targetTab = tIdx;
          targetExIdx = eIdx;
          setsCount = parseInt(ex.sets) || 3;
        }
      });
    });

    if (targetTab === -1) {
      content.innerHTML =
        '<div class="text-center text-slate-500">No se encontró el ejercicio.</div>';
      return;
    }

    // 1.5 CHECK CURRENT SESSION (TODAY/NOW)
    let todayHasData = false;
    let todaySalvaWeights = [];
    for (let s = 0; s < setsCount; s++) {
      const key = `${targetTab}-${targetExIdx}-${s}`;
      const w = setWeights[key];
      if (w) {
        // Check for salva first, fallback to facu for backwards compatibility
        if (w.salva) {
          todaySalvaWeights.push(w.salva);
          todayHasData = true;
        } else if (w.facu) {
          todaySalvaWeights.push(w.facu);
          todayHasData = true;
        }
      }
    }

    if (todayHasData) {
      historyItems.push({
        date: "Hoy (Progreso)",
        salva: todaySalvaWeights.join(" - "),
        isToday: true, // Optional flag for styling
      });
    }

    // 2. Scan History
    // Sort dates descending
    const dates = Object.keys(trainingHistory).sort(
      (a, b) => new Date(b) - new Date(a),
    );

    dates.forEach((date) => {
      const dayRecord = trainingHistory[date];
      if (!dayRecord || !dayRecord.weights) return;

      // Check if we have data for this exercise
      let hasData = false;
      let salvaWeights = [];

      for (let s = 0; s < setsCount; s++) {
        const key = `${targetTab}-${targetExIdx}-${s}`;
        const w = dayRecord.weights[key];
        if (w) {
          // Check for salva first, fallback to facu for backwards compatibility
          if (w.salva) {
            salvaWeights.push(w.salva);
            hasData = true;
          } else if (w.facu) {
            salvaWeights.push(w.facu);
            hasData = true;
          }
        }
      }

      if (hasData) {
        // Format Date
        // Fix: Parse manually to avoid timezone shift
        const [y, m, d] = date.split("-").map(Number);
        const dateObj = new Date(y, m - 1, d);

        const dateStr = dateObj.toLocaleDateString("es-AR", {
          day: "numeric",
          month: "short",
        });

        historyItems.push({
          date: dateStr,
          salva: salvaWeights.join(" - "),
        });
      }
    });

    // 3. Render
    if (historyItems.length === 0) {
      content.innerHTML =
        '<div class="text-center text-slate-500 py-8">No hay registros de peso anteriores para este ejercicio.</div>';
    } else {
      let html = `<div class="space-y-3">`; // Add container with spacing
      historyItems.forEach((item) => {
        // Highlight "Today" item
        const borderClass = item.isToday
          ? "border-emerald-500/50 bg-emerald-900/10"
          : "border-slate-800 bg-slate-950/50";
        const dateColor = item.isToday ? "text-emerald-400" : "text-slate-400";

        html += `
                <div class="${borderClass} p-4 rounded-xl border flex items-center justify-between transition-all">
                    <div class="${dateColor} font-bold text-sm w-20">${item.date}</div>
                    <div class="flex-1 px-2 border-l border-slate-700 ml-2">
                        <div class="flex flex-col">
                            <span class="text-[10px] text-emerald-500 font-bold uppercase">Peso</span>
                            <span class="text-slate-200 font-mono text-sm">${item.salva || item.facu || "-"}</span>
                        </div>
                    </div>
                </div>
            `;
      });
      html += `</div>`;
      content.innerHTML = html;
    }
  }, 100); // Small delay for rendering
}

// Global
window.closeHistoryDetailsModal = closeHistoryDetailsModal;
window.showExerciseHistory = showExerciseHistory;

// --- MUSCLE MAP MODAL ---
function openMuscleMapModal(primary, secondary) {
  const modal = document.getElementById("muscle-map-modal");
  const container = document.getElementById("muscle-map-large-container");

  if (!modal || !container) return;

  // Fix Mobile Scrolling Clipping:
  // Remove vertical centering on mobile so tall content starts at top and flows down.
  // Keep centering on desktop where it fits side-by-side.
  container.classList.remove("items-center");
  container.classList.add("items-start", "md:items-center");

  // Reuse the SVG generation Logic
  const svgHTML = getMuscleMapSVG(primary, secondary);

  // Inject
  container.innerHTML = svgHTML;

  // Tweak styles for full size inside modal
  // We need to target the container div returned by getMuscleMapSVG
  const wrapper = container.firstElementChild;
  if (wrapper) {
    // Remove the restrictive height classes from the small view
    wrapper.classList.remove("h-56", "gap-2", "py-2");

    // Add classes for the large view: Responsive Layout
    // Mobile: Flex-col (stacked), nice and wide
    // Desktop: Flex-row (side-by-side), constrained by height
    wrapper.classList.add(
      "flex-col",
      "md:flex-row",
      "gap-6",
      "items-center",
      "justify-center",
      "p-0",
      "w-full",
      "h-auto",
      "md:h-full",
    );

    // Target the SVGs inside to ensure they scale
    const svgs = wrapper.querySelectorAll("svg");
    svgs.forEach((svg) => {
      svg.classList.remove("drop-shadow-md");

      // Responsive constraints
      svg.classList.remove("h-full", "w-auto"); // clean old style
      svg.classList.add(
        "drop-shadow-2xl",
        "w-[85%]", // Mobile: 85% width
        "md:w-auto", // Desktop: Width auto
        "h-auto", // Mobile: Height auto
        "md:h-[95%]", // Desktop: almost full height
      );

      svg.removeAttribute("viewBox");
      svg.setAttribute("viewBox", "0 0 400 780"); // Match the Atlas coordinate system
    });
  }

  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function closeMuscleMapModal() {
  const modal = document.getElementById("muscle-map-modal");
  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }
}

// Ensure global scope access
window.openMuscleMapModal = openMuscleMapModal;
window.closeMuscleMapModal = closeMuscleMapModal;

// --- MANUAL HISTORICAL DATA ENTRY ---
// Use this function from the browser console to add past training days
// It uses the weights you currently have in the routine inputs!
// Example: addHistoricalTraining("2026-01-14", "both")
// Parameters:
//   date: "YYYY-MM-DD" format
//   who: "facu", "alma", or "both"
function addHistoricalTraining(date, who) {
  if (!date || !who) {
    console.error(
      "Usage: addHistoricalTraining('2026-01-14', 'facu'|'alma'|'both')",
    );
    return;
  }

  // Get current weights from localStorage (the ones you've filled in today)
  const currentWeights =
    JSON.parse(localStorage.getItem("gymRoutineWeights")) || {};

  if (Object.keys(currentWeights).length === 0) {
    console.warn(
      "⚠️ No hay pesos guardados. Primero cargá tus pesos en la rutina de hoy y volvé a ejecutar.",
    );
    return;
  }

  if (!trainingHistory[date]) {
    trainingHistory[date] = { alma: false, facu: false, weights: {} };
  }

  if (who === "facu" || who === "both") {
    trainingHistory[date].facu = true;
  }
  if (who === "alma" || who === "both") {
    trainingHistory[date].alma = true;
  }

  // Copy current weights to this historical date
  Object.keys(currentWeights).forEach((key) => {
    if (!trainingHistory[date].weights[key]) {
      trainingHistory[date].weights[key] = {};
    }

    if ((who === "facu" || who === "both") && currentWeights[key].facu) {
      trainingHistory[date].weights[key].facu = currentWeights[key].facu;
    }
    if ((who === "alma" || who === "both") && currentWeights[key].alma) {
      trainingHistory[date].weights[key].alma = currentWeights[key].alma;
    }
  });

  localStorage.setItem("gymTrainingHistory", JSON.stringify(trainingHistory));

  // Calculate volume for confirmation
  let volFacu = 0,
    volAlma = 0;
  Object.values(trainingHistory[date].weights).forEach((w) => {
    volFacu += (parseInt(w.facu) || 0) * 10;
    volAlma += (parseInt(w.alma) || 0) * 10;
  });

  const volMsg =
    who === "both"
      ? `Facu: ${volFacu}kg, Alma: ${volAlma}kg`
      : who === "facu"
        ? `${volFacu}kg`
        : `${volAlma}kg`;
  console.log(
    `✅ Entrenamiento añadido: ${date} (${who}) - Volumen: ${volMsg}`,
  );

  // Refresh UI if on relevant views
  if (currentView === "history") renderCalendar();
  if (currentView === "stats") renderCharts();
}

// Bulk add helper - adds multiple days at once using current weights
// Example: addBulkHistory(["2026-01-08", "2026-01-09", "2026-01-12"], "both")
function addBulkHistory(dates, who) {
  if (!Array.isArray(dates)) {
    console.error(
      "Usage: addBulkHistory(['2026-01-08', '2026-01-09'], 'both')",
    );
    return;
  }
  dates.forEach((date) => addHistoricalTraining(date, who));
  console.log(`\n✅ ${dates.length} entrenamientos añadidos para ${who}`);
}

window.addHistoricalTraining = addHistoricalTraining;
window.addBulkHistory = addBulkHistory;

// Init App

// --- ACHIEVEMENTS RENDER & LOGIC ---

let currentAchievementFilter = "Todos";

function filterAchievements(tier) {
  currentAchievementFilter = tier;

  // Update Buttons UI
  const buttons = document.querySelectorAll("#achievements-filter-tabs button");
  buttons.forEach((btn) => {
    if (btn.textContent.trim() === tier) {
      btn.className =
        "px-4 py-2 rounded-xl bg-slate-800 text-white border border-slate-700 font-bold text-sm whitespace-nowrap active-filter shadow-md shadow-slate-900/50";
      // Tint based on tier
      if (tier === "Común") btn.classList.add("text-slate-200");
      if (tier === "Raro")
        btn.classList.add("text-blue-400", "border-blue-500/30");
      if (tier === "Épico")
        btn.classList.add("text-purple-400", "border-purple-500/30");
      if (tier === "Legendario")
        btn.classList.add("text-amber-400", "border-amber-500/30");
    } else {
      btn.className =
        "px-4 py-2 rounded-xl bg-slate-900 text-slate-500 border border-slate-800 font-medium text-sm whitespace-nowrap hover:bg-slate-800 transition-colors";
    }
  });

  renderAchievements();
}

function renderAchievements() {
  const container = document.getElementById("achievements-grid");
  if (!container) return;
  container.innerHTML = "";

  const countBadge = document.getElementById("total-achievements-count");

  // Get combined unlocked achievements for counting
  const unlockedSalva = gamification.salva.achievements || [];
  const allUnlockedIDs = new Set([...unlockedSalva]);

  if (countBadge) {
    countBadge.textContent = `${allUnlockedIDs.size} / ${achievementsConfig.length}`;
  }

  // Filter
  let filtered = achievementsConfig;
  if (currentAchievementFilter !== "Todos") {
    filtered = achievementsConfig.filter(
      (a) => a.tier === currentAchievementFilter,
    );
  }

  filtered.forEach((ach) => {
    // Check status
    const salvaHas = unlockedSalva.includes(ach.id);
    const isUnlocked = salvaHas;

    // Define Styles based on Tier
    let borderClass = "border-slate-800";
    let bgClass = "bg-slate-900";
    let iconColor = "text-slate-600";
    let opacity = "opacity-50 grayscale"; // Locked state default

    if (isUnlocked) {
      opacity = "opacity-100";
      switch (ach.tier) {
        case "Común":
          borderClass = "border-slate-600";
          iconColor = "text-slate-400";
          break;
        case "Raro":
          borderClass = "border-blue-500/50";
          bgClass = "bg-blue-900/10";
          iconColor = "text-blue-400";
          break;
        case "Épico":
          borderClass = "border-purple-500/50";
          bgClass = "bg-purple-900/10";
          iconColor = "text-purple-400";
          break;
        case "Legendario":
          borderClass = "border-amber-500/50";
          bgClass = "bg-amber-900/10";
          iconColor = "text-amber-400";
          break;
      }
    }

    // Determine badging who has it
    let whoHasHTML = "";
    if (isUnlocked) {
      whoHasHTML = '<div class="flex items-center gap-1 mt-3 justify-center">';
      if (salvaHas)
        whoHasHTML += '<span title="Salva lo tiene" class="text-xs">💪</span>';
      whoHasHTML += "</div>";
    } else {
      whoHasHTML = '<div class="h-4 mt-3 opacity-0">.</div>'; // Spacer
    }

    const html = `
      <div class="relative p-4 rounded-2xl border ${borderClass} ${bgClass} flex flex-col items-center text-center transition-all duration-300 ${opacity} hover:scale-[1.02]">
          ${isUnlocked ? `<div class="absolute top-2 right-2 text-[10px] uppercase font-bold tracking-wider ${iconColor}">${ach.tier}</div>` : ""}
          
          <div class="w-12 h-12 rounded-full bg-slate-950 flex items-center justify-center mb-3 border border-slate-800">
             <i data-lucide="${ach.icon}" class="w-6 h-6 ${isUnlocked ? iconColor : "text-slate-700"}"></i>
          </div>
          
          <h3 class="font-bold text-white text-sm mb-1 line-clamp-1" title="${ach.title}">${ach.title}</h3>
          <p class="text-xs text-slate-500 line-clamp-2 leading-tight">${ach.desc}</p>
          
          ${whoHasHTML}
      </div>
    `;
    container.innerHTML += html;
  });

  lucide.createIcons();
}

window.filterAchievements = filterAchievements;
window.renderAchievements = renderAchievements;

// Init App (Modified)
document.addEventListener("DOMContentLoaded", () => {
  // Assuming init() is defined elsewhere or we just attach handlers here
  // If init exists, it will run.

  // We add the click handler for "Logros" tab to render achievements on demand
  const achievementsBtn = Array.from(document.querySelectorAll("button")).find(
    (b) => b.textContent.includes("Logros"),
  );
  if (achievementsBtn) {
    achievementsBtn.addEventListener("click", () => {
      setTimeout(renderAchievements, 100); // Small delay to ensure view visible
    });
  }
});

document.addEventListener("DOMContentLoaded", init);

// --- FIX V6: CORRECT STREAK (SAFE MODE) ---
setTimeout(() => {
  try {
    console.log("🛡️ Running Fix V6...");
    const interval = setInterval(() => {
      attemptFix();
    }, 3000); // Check every 3 seconds

    // Stop checking after 15 seconds
    setTimeout(() => clearInterval(interval), 15000);
  } catch (e) {
    console.error("Fix v6 error:", e);
  }
}, 2000);

// --- RECOVERY TOOLS ---

window.manualFixStreak = function () {
  // Replaced with Visual Debugger
  showDebugReport();
};

window.showDebugReport = function () {
  const user = "facu";
  const g = window.gamification[user];
  const history =
    window.trainingHistory ||
    JSON.parse(localStorage.getItem("gymTrainingHistory")) ||
    {};
  const SCHEDULE = [1, 2, 3, 4, 5]; // Mon-Fri

  // Create Overlay
  const overlay = document.createElement("div");
  overlay.className =
    "fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4";

  let html = `
        <div class="bg-slate-900 border border-slate-700 rounded-2xl p-6 max-w-lg w-full max-h-[90vh] overflow-y-auto text-white">
            <h2 class="text-xl font-bold mb-4 text-purple-400">🕵️ Streak Detective</h2>
            
            <div class="mb-4 text-sm text-slate-400 p-3 bg-slate-800 rounded">
                Streak Actual: <strong class="text-white text-lg">${g.streak}</strong><br>
                Freezes: <strong class="text-white">${g.freezes}</strong><br>
                Frozen Days: <code class="text-xs">${JSON.stringify(g.frozenDays)}</code>
            </div>

            <table class="w-full text-xs text-left">
                <thead>
                    <tr class="text-slate-500 border-b border-slate-700">
                        <th class="pb-2">Date</th>
                        <th class="pb-2">Day</th>
                        <th class="pb-2">Req?</th>
                        <th class="pb-2">Status</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-800">
    `;

  // Access helper safely
  const getDK = (d) => {
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  };

  const today = new Date();
  // Check last 14 days
  for (let i = 0; i < 14; i++) {
    const d = new Date();
    d.setDate(today.getDate() - i);
    const key = getDK(d);
    const dayOfWeek = d.getDay();
    const isRequired = SCHEDULE.includes(dayOfWeek);

    // Status Check
    let status = "";
    let rowClass = "";

    const hasTrained = history[key] && history[key][user];
    const isFrozen = g.frozenDays.includes(key);

    if (hasTrained) {
      status = "✅ TRAINED";
      rowClass = "text-emerald-400 font-bold";
    } else if (isFrozen) {
      status = "❄️ FROZEN";
      rowClass = "text-cyan-400 font-bold";
    } else if (!isRequired) {
      status = "😴 REST";
      rowClass = "text-slate-600";
    } else {
      status = "❌ MISSING";
      rowClass = "text-red-500 font-bold";
    }

    // Highlight Jan 22
    if (key.includes("2026-01-22")) rowClass += " bg-red-900/30";

    html += `
            <tr class="${rowClass}">
                <td class="py-2">${key}</td>
                <td class="py-2">${["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][dayOfWeek]}</td>
                <td class="py-2">${isRequired ? "Yes" : "No"}</td>
                <td class="py-2">${status}</td>
            </tr>
        `;
  }

  html += `
                </tbody>
            </table>
            
            <div class="mt-6 flex gap-2">
                <button onclick="this.closest('.fixed').remove()" class="flex-1 py-3 bg-slate-800 rounded-xl font-bold">Cerrar</button>
                <button onclick="window.forceManualClean22()" class="flex-1 py-3 bg-red-600 rounded-xl font-bold text-white">NUKE JAN 22</button>
            </div>
        </div>
    `;

  overlay.innerHTML = html;
  document.body.appendChild(overlay);
};

window.forceManualClean22 = function () {
  const g = window.gamification.salva;
  g.frozenDays = g.frozenDays.filter((d) => !d.includes("2026-01-22"));

  // Also clean history just in case
  const history =
    window.trainingHistory ||
    JSON.parse(localStorage.getItem("gymTrainingHistory")) ||
    {};
  Object.keys(history).forEach((k) => {
    if (k.includes("2026-01-22")) {
      console.log("Deleting fake history for", k);
      if (history[k].salva) history[k].salva = false;
    }
  });

  localStorage.setItem("gymGamification", JSON.stringify(window.gamification));
  localStorage.setItem("gymTrainingHistory", JSON.stringify(history));

  if (typeof saveToCloud === "function") saveToCloud();
  alert("NUCLEAR OPTION EXECUTED. Día 22 purgado. Recargando...");
  location.reload();
};
