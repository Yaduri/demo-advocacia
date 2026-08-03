/**
 * ALMEIDA & VASCONCELOS ADVOCACIA
 * Script de Interatividade & Acessibilidade (Vanilla JS)
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     1. SITE HEADER & MOBILE MENU
     ========================================================================== */
  const siteHeader = document.getElementById('site-header');
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  // Header shadow on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }
    updateActiveNavLink();
  });

  // Toggle Mobile Menu
  if (mobileToggle && mobileNav) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileNav.classList.contains('open');
      if (isOpen) {
        closeMobileNav();
      } else {
        openMobileNav();
      }
    });

    // Close mobile nav when clicking a link
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        closeMobileNav();
      });
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!siteHeader.contains(e.target) && mobileNav.classList.contains('open')) {
        closeMobileNav();
      }
    });
  }

  function openMobileNav() {
    mobileNav.classList.add('open');
    mobileNav.setAttribute('aria-hidden', 'false');
    mobileToggle.classList.add('active');
    mobileToggle.setAttribute('aria-expanded', 'true');
  }

  function closeMobileNav() {
    mobileNav.classList.remove('open');
    mobileNav.setAttribute('aria-hidden', 'true');
    mobileToggle.classList.remove('active');
    mobileToggle.setAttribute('aria-expanded', 'false');
  }

  /* ==========================================================================
     2. SMOOTH SCROLL & ACTIVE NAV LINK HIGHLIGHT
     ========================================================================== */
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id], header[id]');

  function updateActiveNavLink() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  /* ==========================================================================
     3. FAQ ACCORDION
     ========================================================================== */
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const accordionItem = header.parentElement;
      const content = header.nextElementSibling;
      const isExpanded = header.getAttribute('aria-expanded') === 'true';

      // Fechar todos os outros itens (modo acordeão exclusivo)
      accordionHeaders.forEach(otherHeader => {
        if (otherHeader !== header) {
          otherHeader.setAttribute('aria-expanded', 'false');
          const otherContent = otherHeader.nextElementSibling;
          otherContent.style.maxHeight = null;
          otherContent.setAttribute('hidden', '');
        }
      });

      // Alternar estado do item clicado
      if (isExpanded) {
        header.setAttribute('aria-expanded', 'false');
        content.style.maxHeight = null;
        content.setAttribute('hidden', '');
      } else {
        header.setAttribute('aria-expanded', 'true');
        content.removeAttribute('hidden');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });

  /* ==========================================================================
     4. SISTEMA DE MODAIS (AGENDAMENTO E LEITURA DE ARTIGOS)
     ========================================================================== */
  const openModalBtns = document.querySelectorAll('.open-modal-btn');
  const closeModalBtns = document.querySelectorAll('.modal-close-btn');
  const modalOverlays = document.querySelectorAll('.modal-overlay');
  const modalTriggerCloseBtns = document.querySelectorAll('.modal-trigger-close');

  // Abrir Modal por ID
  openModalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const modalId = btn.getAttribute('data-modal');
      const targetModal = document.getElementById(modalId);
      if (targetModal) {
        openModal(targetModal);
      }
    });
  });

  // Fechar Modais pelos botões de fechar
  closeModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal-overlay');
      if (modal) closeModal(modal);
    });
  });

  // Fechar ao clicar no overlay escuro
  modalOverlays.forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        closeModal(overlay);
      }
    });
  });

  modalTriggerCloseBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal-overlay');
      if (modal) closeModal(modal);
    });
  });

  // Fechar ao pressionar ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      modalOverlays.forEach(modal => {
        if (modal.classList.contains('active')) {
          closeModal(modal);
        }
      });
    }
  });

  function openModal(modalElement) {
    modalElement.classList.add('active');
    modalElement.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(modalElement) {
    modalElement.classList.remove('active');
    modalElement.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  /* Conteúdos completos dos Artigos Jurídicos para o Modal */
  const articlesData = {
    'article-1': {
      tag: 'Direito Civil',
      title: 'Contrato: por que revisar as cláusulas antes de assinar?',
      content: `
        <p>A assinatura de um contrato formaliza direitos, deveres e compromissos que vinculam juridicamente as partes envolvidas. Antes da formalização, a análise cuidadosa das cláusulas é uma etapa essencial para garantir clareza e previsibilidade sobre as obrigações pactuadas.</p>
        <p>Pontos fundamentais a serem analisados antes da assinatura:</p>
        <ul>
          <li><strong>Prazos e Condições de Rescisão:</strong> Compreender as regras para encerramento do contrato, prazos de aviso prévio e eventuais multas aplicáveis.</li>
          <li><strong>Cláusulas de Penalidade:</strong> Verificar se os percentuais de multa em caso de inadimplemento estão de acordo com a legislação e os parâmetros razoáveis.</li>
          <li><strong>Foro e Solução de Conflitos:</strong> Identificar onde e como serão resolvidas eventuais divergências decorrentes da interpretação contratual.</li>
        </ul>
        <p>Uma análise técnica preliminar contribui para evitar ambiguidades e assegura que os termos reflitam fielmente a intenção das partes envolvidas.</p>
      `
    },
    'article-2': {
      tag: 'Família e Sucessões',
      title: 'Planejamento sucessório: quando considerar?',
      content: `
        <p>O planejamento sucessório consiste no conjunto de medidas jurídicas e organizacionais voltadas para estruturar a transmissão patrimonial de forma consciente, preservando a harmonia familiar e a continuidade dos bens.</p>
        <p>Situações comuns em que o planejamento sucessório costuma ser avaliado:</p>
        <ul>
          <li><strong>Organização Familiar:</strong> Desejo de estabelecer previamente a destinação de ativos patrimoniais, respeitando os limites legais.</li>
          <li><strong>Estruturas Empresariais Familiares:</strong> Necessidade de assegurar a transição organizada na gestão e propriedade de sociedades empresárias.</li>
          <li><strong>Mitigação de Conflitos Futuros:</strong> Definição clara e transparente das disposições patrimoniais para prevenir divergências entre herdeiros.</li>
        </ul>
        <p>Cada caso exige uma avaliação individualizada para identificar os instrumentos jurídicos adequados às particularidades da família e do patrimônio.</p>
      `
    },
    'article-3': {
      tag: 'Direito do Trabalho',
      title: 'Direitos e deveres nas relações de trabalho',
      content: `
        <p>As relações de trabalho são regidas por normas e princípios institucionais que buscam equilibrar a atuação das empresas com a proteção dos profissionais envolvidos.</p>
        <p>Aspectos fundamentais na gestão das relações de trabalho:</p>
        <ul>
          <li><strong>Formalização Contratual:</strong> Registro adequado de jornadas, funções e especificidades do contrato de trabalho.</li>
          <li><strong>Cumprimento das NORMAS de Saúde e Segurança:</strong> Observância das diretrizes de ambiente de trabalho seguro e saudável.</li>
          <li><strong>Comunicação Transparente:</strong> Estabelecimento de canais internos claros para esclarecimento de obrigações e deveres operacionais.</li>
        </ul>
        <p>O alinhamento contínuo às diretrizes da legislação trabalhista apoia a construção de um ambiente profissional ético e juridicamente organizado.</p>
      `
    }
  };

  const readArticleBtns = document.querySelectorAll('.read-article-btn');
  const modalArtigo = document.getElementById('modal-artigo');
  const modalArtigoTag = document.getElementById('modal-artigo-tag');
  const modalArtigoTitle = document.getElementById('modal-artigo-title');
  const modalArtigoContent = document.getElementById('modal-artigo-content');

  readArticleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const articleKey = btn.getAttribute('data-article');
      const article = articlesData[articleKey];

      if (article && modalArtigo) {
        modalArtigoTag.textContent = article.tag;
        modalArtigoTitle.textContent = article.title;
        modalArtigoContent.innerHTML = article.content;
        openModal(modalArtigo);
      }
    });
  });

  /* ==========================================================================
     5. VALIDAÇÃO DO FORMULÁRIO DE CONTATO INSTITUCIONAL
     ========================================================================== */
  const contactForm = document.getElementById('institutional-contact-form');
  const toastMessage = document.getElementById('toast-message');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('form-name');
      const emailInput = document.getElementById('form-email');
      const phoneInput = document.getElementById('form-phone');
      const messageInput = document.getElementById('form-message');

      let isValid = true;

      // Reset errors
      document.querySelectorAll('.field-error').forEach(el => el.textContent = '');

      // Name validation
      if (!nameInput.value.trim()) {
        document.getElementById('error-name').textContent = 'Por favor, informe seu nome completo.';
        isValid = false;
      }

      // Email validation
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailInput.value.trim() || !emailPattern.test(emailInput.value.trim())) {
        document.getElementById('error-email').textContent = 'Informe um e-mail válido para contato.';
        isValid = false;
      }

      // Phone validation
      if (!phoneInput.value.trim() || phoneInput.value.trim().length < 8) {
        document.getElementById('error-phone').textContent = 'Informe um telefone ou WhatsApp com DDD.';
        isValid = false;
      }

      // Message validation
      if (!messageInput.value.trim()) {
        document.getElementById('error-message').textContent = 'Por favor, escreva um breve resumo do assunto.';
        isValid = false;
      }

      if (isValid) {
        // Simulação de envio com sucesso
        showToast('Solicitação enviada com sucesso! Entraremos em contato em breve.');
        contactForm.reset();
      }
    });
  }

  function showToast(msg) {
    if (!toastMessage) return;
    const toastText = toastMessage.querySelector('.toast-text');
    if (toastText) toastText.textContent = msg;

    toastMessage.classList.add('show');
    setTimeout(() => {
      toastMessage.classList.remove('show');
    }, 4500);
  }

  /* ==========================================================================
     6. ANIMAÇÕES FADE-IN COM INTERSECTION OBSERVER
     ========================================================================== */
  const fadeElements = document.querySelectorAll('.fade-in');

  if ('IntersectionObserver' in window) {
    const fadeObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px'
    });

    fadeElements.forEach(el => fadeObserver.observe(el));
  } else {
    // Fallback caso navegador não suporte IntersectionObserver
    fadeElements.forEach(el => el.classList.add('visible'));
  }

});
