/**
 * JOHN GYM — Commercial Athletic Website
 * Client-side Controller & Interactions
 */

// Exercise category datasets
const EXERCISE_DATA = {
  strength: [
    {
      index: "01",
      title: "ПРИСЕДАНИЯ",
      image: "/images/exercise_squat.jpg",
      instruction: "Штанга на плечах, спина прямая. Опускайся до параллели с полом, сохраняя контроль и упор в стопы.",
      sets: 4,
      reps: 10
    },
    {
      index: "02",
      title: "ТЯГА ГАНТЕЛИ",
      image: "/images/exercise_row.jpg",
      instruction: "Упрись одной рукой и коленом в скамью. Держи спину ровно и подтягивай гантель к поясу.",
      sets: 4,
      reps: 10
    },
    {
      index: "03",
      title: "СГИБАНИЯ НА БИЦЕПС",
      image: "/images/exercise_biceps.jpg",
      instruction: "Фиксируй локти у корпуса. Контролируй подъем снаряда и фазу плавного опускания без раскачки.",
      sets: 4,
      reps: 10
    }
  ],
  balance: [
    {
      index: "01",
      title: "РУМЫНСКАЯ ТЯГА НА 1 НОГЕ",
      image: "/images/exercise_squat.jpg",
      instruction: "Удерживай осевой баланс, слегка сгибая опорную ногу. Отводи таз назад и контролируй корпус.",
      sets: 4,
      reps: 10
    },
    {
      index: "02",
      title: "ПЛАНКА НА НЕСТАБИЛЬНОЙ ОПОРЕ",
      image: "/images/exercise_row.jpg",
      instruction: "Напрягай кор и ягодицы. Плечи строго над локтями, нейтральное положение шеи и позвоночника.",
      sets: 4,
      reps: 10
    },
    {
      index: "03",
      title: "БОКОВЫЕ ВЫПАДЫ С ВЕСОМ",
      image: "/images/exercise_biceps.jpg",
      instruction: "Широкий шаг в сторону, таз назад. Колено по вектору носка, сохраняй прямую спину.",
      sets: 4,
      reps: 10
    }
  ],
  endurance: [
    {
      index: "01",
      title: "ИНТЕРВАЛЬНАЯ ТЯГА",
      image: "/images/exercise_row.jpg",
      instruction: "Работа на взрывную силу с минимальным интервалом отдыха. Держи ритмичное дыхание.",
      sets: 4,
      reps: 10
    },
    {
      index: "02",
      title: "БЁРПИ С ПРЫЖКОМ НА ПЛАТФОРМУ",
      image: "/images/exercise_squat.jpg",
      instruction: "Полное касание грудью пола, мощный толчок и мягкое приземление на две стопы.",
      sets: 4,
      reps: 10
    },
    {
      index: "03",
      title: "СИЛОВОЙ ФЕРМЕРСКИЙ ПРОХОД",
      image: "/images/exercise_biceps.jpg",
      instruction: "Тяжелые гантели по бокам, расправленные плечи, ровный темп шага без наклонов корпуса.",
      sets: 4,
      reps: 10
    }
  ]
};

// State
let currentCategory = 'strength';
let activeCardIndex = 1; // 0-indexed: 1 = second card ("ТЯГА ГАНТЕЛИ")
const addedExercises = new Set();

// DOM Elements
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const categoryTabs = document.querySelectorAll('.program-tab');
const cardsContainer = document.getElementById('exercise-cards-container');
const inquiryModal = document.getElementById('inquiry-modal');
const modalCloseBtn = document.getElementById('modal-close-btn');
const inquiryForm = document.getElementById('inquiry-form');
const formPlan = document.getElementById('form-plan');
const formConsent = document.getElementById('form-consent');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const modalSuccessState = document.getElementById('modal-success-state');
const modalWhatsApp = document.getElementById('modal-whatsapp-link');
const toastContainer = document.getElementById('toast-container');

// Legal Compliance Modal Elements
const legalModal = document.getElementById('legal-modal');
const legalModalCloseBtn = document.getElementById('legal-modal-close-btn');
const legalModalCloseAction = document.getElementById('legal-modal-close-action');
const legalTabs = document.querySelectorAll('.legal-tab');
const legalPanels = document.querySelectorAll('.legal-doc-section');

// Mobile Nav Toggle
if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', !isExpanded);
    navMenu.classList.toggle('active');
  });

  // Close nav when clicking a link
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Toast notification helper
function showToast(message) {
  if (!toastContainer) return;
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8E1533" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
    <span>${message}</span>
  `;
  toastContainer.appendChild(toast);
  
  // Animate in
  requestAnimationFrame(() => toast.classList.add('show'));
  
  // Auto remove
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// Render Exercise Cards
function renderExerciseCards() {
  const exercises = EXERCISE_DATA[currentCategory] || EXERCISE_DATA.strength;
  cardsContainer.innerHTML = '';

  exercises.forEach((item, idx) => {
    const isActive = idx === activeCardIndex;
    const isAdded = addedExercises.has(item.title);

    const card = document.createElement('article');
    card.className = `exercise-card ${isActive ? 'active-card' : ''}`;
    card.setAttribute('data-index', idx);
    card.setAttribute('tabindex', '0');
    card.id = `exercise-card-${idx + 1}`;

    card.innerHTML = `
      <div class="exercise-card-media">
        <img src="${item.image}" alt="${item.title}" class="exercise-card-img" loading="lazy">
        <div class="exercise-card-overlay"></div>
      </div>
      <div class="exercise-card-top">
        <h3 class="exercise-title">${item.title}</h3>
      </div>
      <div class="exercise-card-content">
        <p class="exercise-instruction ${isActive ? '' : 'sr-only'}">${item.instruction}</p>
        <div class="exercise-meta-bar">
          <div class="exercise-stats">
            <div class="exercise-stat-item">
              <span class="exercise-stat-label">ПОДХОДЫ:</span>
              <span class="exercise-stat-value">${item.sets}</span>
            </div>
            <div class="exercise-stat-item">
              <span class="exercise-stat-label">ПОВТОРЫ:</span>
              <span class="exercise-stat-value">${item.reps}</span>
            </div>
          </div>
          <div class="exercise-actions">
            <button type="button" class="btn-add-program add-to-routine-btn ${isAdded ? 'added' : ''}" data-exercise="${item.title}">
              ${isAdded ? '[ ✓ В ПРОГРАММЕ ]' : '[ + В МОЮ ПРОГРАММУ ]'}
            </button>
          </div>
        </div>
      </div>
    `;

    // Click on card to activate it
    card.addEventListener('click', (e) => {
      // If clicked on add button, handle addition
      const addBtn = e.target.closest('.add-to-routine-btn');
      if (addBtn) {
        handleAddToRoutine(item.title);
        return;
      }
      activeCardIndex = idx;
      renderExerciseCards();
    });

    // Keyboard navigation
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        activeCardIndex = idx;
        renderExerciseCards();
      }
    });

    cardsContainer.appendChild(card);
  });
}

// Handle Add to Workout Program
function handleAddToRoutine(exerciseName) {
  if (addedExercises.has(exerciseName)) {
    addedExercises.delete(exerciseName);
    showToast(`Упражнение "${exerciseName}" удалено из программы`);
  } else {
    addedExercises.add(exerciseName);
    showToast(`Упражнение "${exerciseName}" добавлено в вашу программу!`);
  }
  renderExerciseCards();
}

// Category Tabs Interaction
categoryTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    categoryTabs.forEach(t => {
      t.classList.remove('active');
      t.setAttribute('aria-selected', 'false');
    });
    tab.classList.add('active');
    tab.setAttribute('aria-selected', 'true');
    currentCategory = tab.getAttribute('data-category');
    activeCardIndex = 1; // Default to central card
    renderExerciseCards();
  });
});

// Modal Logic
function openModal(options = {}) {
  const { title, desc, plan } = options;
  if (title) modalTitle.textContent = title;
  if (desc) modalDesc.textContent = desc;
  if (plan && formPlan) {
    let match = Array.from(formPlan.options).find(opt => opt.value.includes(plan) || plan.includes(opt.value));
    if (match) {
      formPlan.value = match.value;
    }
  }

  // Update WhatsApp link target
  const selectedPlanText = formPlan ? formPlan.value : 'Тренировки в JOHN GYM';
  const waText = encodeURIComponent(`Здравствуйте! Хочу уточнить детали и записаться в JOHN GYM (Шымкент): ${selectedPlanText}`);
  modalWhatsApp.href = `https://wa.me/77053457007?text=${waText}`;

  // Reset form state
  inquiryForm.style.display = 'block';
  modalSuccessState.classList.remove('active');
  inquiryModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  inquiryModal.classList.remove('active');
  document.body.style.overflow = '';
}

// Attach Modal Triggers
document.querySelectorAll('[data-open-modal]').forEach(btn => {
  btn.addEventListener('click', () => {
    const modalType = btn.getAttribute('data-open-modal');
    const planName = btn.getAttribute('data-plan');

    if (modalType === 'test-visit') {
      openModal({
        title: 'ТЕСТОВЫЙ ВИЗИТ',
        desc: 'Запишитесь на первое пробное посещение базы JOHN GYM в Шымкенте.',
        plan: 'ТЕСТОВЫЙ ВИЗИТ В ЗАЛ'
      });
    } else if (modalType === 'coach') {
      openModal({
        title: 'ВЫБОР НАСТАВНИКА',
        desc: 'Подберем тренера под ваши цели: гипертрофия, сила, восстановление или техника.',
        plan: 'ПОДБОР НАСТАВНИКА'
      });
    } else if (planName) {
      openModal({
        title: 'ОФОРМЛЕНИЕ КАРТЫ',
        desc: 'Заполните форму для активации абонемента без очередей.',
        plan: planName
      });
    } else {
      openModal();
    }
  });
});

// Cabinet and Search Buttons
const cabinetBtn = document.getElementById('nav-cabinet-btn');
if (cabinetBtn) {
  cabinetBtn.addEventListener('click', () => {
    openModal({
      title: 'ЛИЧНЫЙ КАБИНЕТ АТЛЕТА',
      desc: 'Для проверки статуса абонемента или заморозки введите ваш номер телефона или напишите администратору.',
      plan: 'UNLIMITED ATHLETE — 15 000 ₸'
    });
  });
}

const searchBtn = document.getElementById('nav-search-btn');
if (searchBtn) {
  searchBtn.addEventListener('click', () => {
    const progSection = document.getElementById('programs');
    if (progSection) {
      progSection.scrollIntoView({ behavior: 'smooth' });
      showToast('Выберите категорию тренировок в конструкторе');
    }
  });
}

// Close Modal Events
if (modalCloseBtn) {
  modalCloseBtn.addEventListener('click', closeModal);
}

inquiryModal.addEventListener('click', (e) => {
  if (e.target === inquiryModal) closeModal();
});

// Legal Compliance Modal Logic (РК)
function switchLegalTab(tabKey) {
  legalTabs.forEach(tab => {
    const isTarget = tab.getAttribute('data-legal-tab') === tabKey;
    tab.classList.toggle('active', isTarget);
    tab.setAttribute('aria-selected', isTarget);
  });

  legalPanels.forEach(panel => {
    const isTarget = panel.id === `legal-panel-${tabKey}`;
    panel.classList.toggle('active', isTarget);
  });
}

function openLegalModal(tabKey = 'privacy') {
  switchLegalTab(tabKey);
  if (legalModal) {
    legalModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeLegalModal() {
  if (legalModal) {
    legalModal.classList.remove('active');
    // If inquiry modal is not currently open, restore body scrolling
    if (!inquiryModal || !inquiryModal.classList.contains('active')) {
      document.body.style.overflow = '';
    }
  }
}

// Attach Legal Modal Triggers (buttons with data-open-legal)
document.querySelectorAll('[data-open-legal]').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const tabKey = btn.getAttribute('data-open-legal') || 'privacy';
    openLegalModal(tabKey);
  });
});

// Legal Tab Switching
legalTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const tabKey = tab.getAttribute('data-legal-tab');
    switchLegalTab(tabKey);
  });
});

// Close Legal Modal Events
if (legalModalCloseBtn) {
  legalModalCloseBtn.addEventListener('click', closeLegalModal);
}

if (legalModalCloseAction) {
  legalModalCloseAction.addEventListener('click', closeLegalModal);
}

if (legalModal) {
  legalModal.addEventListener('click', (e) => {
    if (e.target === legalModal) closeLegalModal();
  });
}

// Unified Escape Key Handling
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (legalModal && legalModal.classList.contains('active')) {
      closeLegalModal();
      return;
    }
    if (inquiryModal && inquiryModal.classList.contains('active')) {
      closeModal();
    }
  }
});

// Update WhatsApp text on select change
if (formPlan) {
  formPlan.addEventListener('change', () => {
    const waText = encodeURIComponent(`Здравствуйте! Хочу уточнить детали и записаться в JOHN GYM (Шымкент): ${formPlan.value}`);
    modalWhatsApp.href = `https://wa.me/77053457007?text=${waText}`;
  });
}

// Form Submission with Personal Data Consent Verification (ст. 8 Закона РК № 94-V)
if (inquiryForm) {
  inquiryForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Verify Personal Data Processing Consent
    if (formConsent && !formConsent.checked) {
      showToast('Пожалуйста, подтвердите согласие на обработку персональных данных');
      formConsent.focus();
      return;
    }

    const name = document.getElementById('form-name').value;
    const phone = document.getElementById('form-phone').value;
    const plan = formPlan.value;

    inquiryForm.style.display = 'none';
    modalSuccessState.classList.add('active');
    showToast(`Заявка принята, ${name}! Администратор свяжется с вами.`);

    setTimeout(() => {
      closeModal();
      inquiryForm.reset();
      if (formConsent) formConsent.checked = false;
    }, 3500);
  });
}

// Initialize on Load
document.addEventListener('DOMContentLoaded', () => {
  renderExerciseCards();
});
