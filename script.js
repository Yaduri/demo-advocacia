/**
 * ALMEIDA & VASCONCELOS ADVOCACIA — SCRIPT PRINCIPAL & PRELOADER CURTAIN REVEAL
 */

document.addEventListener('DOMContentLoaded', () => {
  initPreloader();
  initHeaderScroll();
  initMobileMenu();
  initAccordion();
  initModals();
  initArticleReader();
  initContactForm();
  initScrollAnimations();
});

/* --------------------------------------------------------------------------
   0. PRELOADER & CURTAIN REVEAL ANIMATION
   -------------------------------------------------------------------------- */
function initPreloader() {
  const preloader = document.getElementById('site-preloader');
  const fill = document.getElementById('preloader-fill');
  const counter = document.getElementById('preloader-counter');

  if (!preloader) {
    triggerHeroAnimations();
    return;
  }

  // Trava scroll durante a abertura
  document.body.style.overflow = 'hidden';

  let progress = 0;
  const duration = 1500; // 1.5s de experiência de abertura de alto impacto no PC e Mobile
  const startTime = performance.now();

  function updateCounter(currentTime) {
    const elapsedTime = currentTime - startTime;
    progress = Math.min(Math.floor((elapsedTime / duration) * 100), 100);

    if (fill) fill.style.width = `${progress}%`;
    if (counter) counter.textContent = `${progress}%`;

    if (progress < 100) {
      requestAnimationFrame(updateCounter);
    } else {
      setTimeout(() => {
        finishPreloader();
      }, 200);
    }
  }

  function finishPreloader() {
    if (preloader.classList.contains('loaded')) return;
    preloader.classList.add('loaded');
    document.body.style.overflow = '';
    
    // Dispara animações de revelação da Hero
    triggerHeroAnimations();
  }

  requestAnimationFrame(updateCounter);

  // Fallback de segurança absoluto (garante que no PC a Hero NUNCA fique invisível ou travada)
  setTimeout(() => {
    finishPreloader();
  }, 2200);
}

function triggerHeroAnimations() {
  const heroElements = document.querySelectorAll('#inicio .fade-in');
  heroElements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add('visible');
    }, index * 90);
  });
}

/* --------------------------------------------------------------------------
   1. HEADER SCROLL EFFECT
   -------------------------------------------------------------------------- */
function initHeaderScroll() {
  const header = document.getElementById('site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}

/* --------------------------------------------------------------------------
   2. MOBILE MENU TOGGLE
   -------------------------------------------------------------------------- */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link, .mobile-nav-cta .btn');

  if (!toggleBtn || !mobileNav) return;

  toggleBtn.addEventListener('click', () => {
    const isOpen = mobileNav.classList.contains('open');
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  function openMenu() {
    mobileNav.classList.add('open');
    toggleBtn.classList.add('active');
    toggleBtn.setAttribute('aria-expanded', 'true');
    mobileNav.setAttribute('aria-hidden', 'false');
  }

  function closeMenu() {
    mobileNav.classList.remove('open');
    toggleBtn.classList.remove('active');
    toggleBtn.setAttribute('aria-expanded', 'false');
    mobileNav.setAttribute('aria-hidden', 'true');
  }
}

/* --------------------------------------------------------------------------
   3. FAQ ACCORDION
   -------------------------------------------------------------------------- */
function initAccordion() {
  const headers = document.querySelectorAll('.accordion-header');

  headers.forEach(header => {
    header.addEventListener('click', () => {
      const isExpanded = header.getAttribute('aria-expanded') === 'true';
      const contentId = header.getAttribute('aria-controls');
      const content = document.getElementById(contentId);

      // Fecha todos os outros itens
      headers.forEach(otherHeader => {
        if (otherHeader !== header) {
          otherHeader.setAttribute('aria-expanded', 'false');
          const otherContentId = otherHeader.getAttribute('aria-controls');
          const otherContent = document.getElementById(otherContentId);
          if (otherContent) {
            otherContent.style.maxHeight = null;
            otherContent.style.paddingBottom = null;
            otherContent.hidden = true;
          }
        }
      });

      // Alterna o item atual
      if (isExpanded) {
        header.setAttribute('aria-expanded', 'false');
        if (content) {
          content.style.maxHeight = null;
          content.style.paddingBottom = null;
          content.hidden = true;
        }
      } else {
        header.setAttribute('aria-expanded', 'true');
        if (content) {
          content.hidden = false;
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      }
    });
  });
}

/* --------------------------------------------------------------------------
   4. MODALS (AGENDAMENTO & LEITURA)
   -------------------------------------------------------------------------- */
function initModals() {
  const openButtons = document.querySelectorAll('.open-modal-btn');
  const closeButtons = document.querySelectorAll('.modal-close-btn, .modal-trigger-close');
  const overlays = document.querySelectorAll('.modal-overlay');

  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const modalId = btn.getAttribute('data-modal') || 'modal-agendamento';
      const targetModal = document.getElementById(modalId);
      if (targetModal) {
        openModal(targetModal);
      }
    });
  });

  closeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const activeModal = btn.closest('.modal-overlay');
      if (activeModal) {
        closeModal(activeModal);
      }
    });
  });

  overlays.forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        closeModal(overlay);
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      overlays.forEach(overlay => {
        if (overlay.classList.contains('active')) {
          closeModal(overlay);
        }
      });
    }
  });

  function openModal(modal) {
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(modal) {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    // Só restaura scroll se o preloader já tiver finalizado
    const preloader = document.getElementById('site-preloader');
    if (!preloader || preloader.classList.contains('loaded')) {
      document.body.style.overflow = '';
    }
  }
}

/* --------------------------------------------------------------------------
   5. LEITURA DE ARTIGOS (CONTEÚDO DINÂMICO)
   -------------------------------------------------------------------------- */
const articlesData = {
  'article-1': {
    tag: 'Direito Civil',
    title: 'Contrato: por que revisar as cláusulas antes de assinar?',
    content: `
      <p>A assinatura de um contrato formaliza direitos, deveres e obrigações entre as partes envolvidas. Na rotina civil e empresarial, a análise prévia das cláusulas é uma etapa essencial para evitar ambiguidades, surpresas contratuais e eventuais litígios futuros.</p>
      <p>Entre os pontos de maior atenção em uma revisão contratual estão a clareza sobre o objeto, os prazos de cumprimento, as hipóteses de rescisão, a fixação de multas e a distribuição de responsabilidades.</p>
      <p>Ao submeter o documento a uma análise cuidadosa antes da formalização, garante-se que a vontade das partes esteja fielmente representada e em conformidade com as disposições legais vigentes.</p>
    `
  },
  'article-2': {
    tag: 'Família e Sucessões',
    title: 'Planejamento sucessório: quando considerar?',
    content: `
      <p>O planejamento sucessório consiste no conjunto de instrumentos jurídicos utilizados para organizar a transferência do patrimônio de uma pessoa para seus herdeiros de forma transparente, previdente e harmoniosa.</p>
      <p>Diferente do que muitos imaginam, essa medida não se restringe a grandes fortunas. Famílias com imóveis, participações em empresas familiares ou diferentes estruturas de herdeiros podem se beneficiar da organização preventiva.</p>
      <p>Entre os instrumentos utilizados estão testamentos, doações com reserva de usufruto, previdência privada e estruturas societárias, sempre respeitando a legítima dos herdeiros necessários prevista no Código Civil.</p>
    `
  },
  'article-3': {
    tag: 'Direito do Trabalho',
    title: 'Direitos e deveres nas relações de trabalho',
    content: `
      <p>As relações de trabalho são regidas pela Consolidação das Leis do Trabalho (CLT) e por acordos ou convenções coletivas da categoria. Compreender as regras aplicáveis às jornadas, remunerações, descansos e benefícios é fundamental tanto para trabalhadores quanto para empregadores.</p>
      <p>A transparência no cumprimento das obrigações contratuais e na manutenção de um ambiente de trabalho seguro previne conflitos institucionais e garante o respeito à legislação laboral.</p>
      <p>Em caso de alterações contratuais, reestruturações ou desligamentos, a orientação técnica adequada garante que o processo transcorra com equidade e segurança jurídica para ambas as partes.</p>
    `
  }
};

function initArticleReader() {
  const articleBtns = document.querySelectorAll('.read-article-btn');
  const articleModal = document.getElementById('modal-artigo');
  const modalTag = document.getElementById('modal-artigo-tag');
  const modalTitle = document.getElementById('modal-artigo-title');
  const modalContent = document.getElementById('modal-artigo-content');

  if (!articleModal || !modalTag || !modalTitle || !modalContent) return;

  articleBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const articleKey = btn.getAttribute('data-article');
      const data = articlesData[articleKey];

      if (data) {
        modalTag.textContent = data.tag;
        modalTitle.textContent = data.title;
        modalContent.innerHTML = data.content;

        articleModal.classList.add('active');
        articleModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
      }
    });
  });
}

/* --------------------------------------------------------------------------
   6. FORMULÁRIO DE CONTATO INSTITUCIONAL
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('institutional-contact-form');
  const toast = document.getElementById('toast-message');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;
    const nameInput = document.getElementById('form-name');
    const emailInput = document.getElementById('form-email');
    const phoneInput = document.getElementById('form-phone');
    const messageInput = document.getElementById('form-message');

    // Validação Nome
    if (!nameInput.value.trim()) {
      showFieldError('error-name', 'Por favor, informe seu nome completo.');
      isValid = false;
    } else {
      clearFieldError('error-name');
    }

    // Validação E-mail
    if (!emailInput.value.trim() || !validateEmail(emailInput.value)) {
      showFieldError('error-email', 'Por favor, informe um e-mail válido.');
      isValid = false;
    } else {
      clearFieldError('error-email');
    }

    // Validação Telefone
    if (!phoneInput.value.trim() || phoneInput.value.trim().length < 8) {
      showFieldError('error-phone', 'Por favor, informe um telefone de contato.');
      isValid = false;
    } else {
      clearFieldError('error-phone');
    }

    // Validação Mensagem
    if (!messageInput.value.trim()) {
      showFieldError('error-message', 'Por favor, descreva brevemente sua necessidade.');
      isValid = false;
    } else {
      clearFieldError('error-message');
    }

    if (isValid) {
      // Simulação de envio com sucesso
      form.reset();
      showToast(toast);
    }
  });

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  function showFieldError(errorId, message) {
    const errorEl = document.getElementById(errorId);
    if (errorEl) errorEl.textContent = message;
  }

  function clearFieldError(errorId) {
    const errorEl = document.getElementById(errorId);
    if (errorEl) errorEl.textContent = '';
  }

  function showToast(toastEl) {
    if (!toastEl) return;
    toastEl.classList.add('show');
    setTimeout(() => {
      toastEl.classList.remove('show');
    }, 4500);
  }
}

/* --------------------------------------------------------------------------
   7. ANIMAÇÕES FADE-IN COM INTERSECTION OBSERVER
   -------------------------------------------------------------------------- */
function initScrollAnimations() {
  const fadeElements = document.querySelectorAll('.fade-in');

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -40px 0px',
    threshold: 0.08
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  fadeElements.forEach(el => {
    observer.observe(el);
  });
}
