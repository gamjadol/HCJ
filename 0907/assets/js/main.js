/**
 * K-Trip Guide Main Script
 * Standard jQuery & Vanilla JS implementation
 * Strictly compliant with clean publishing standards
 */

$(document).ready(function () {
  // 1. Header scroll effect
  const $header = $('#main-header');
  const $scrollTopBtn = $('#scroll-top-btn');

  $(window).on('scroll', function () {
    const scrollPos = $(this).scrollTop();

    if (scrollPos > 40) {
      $header.addClass('shadow-md');
    } else {
      $header.removeClass('shadow-md');
    }

    if (scrollPos > 300) {
      $scrollTopBtn.removeClass('opacity-0 pointer-events-none').addClass('opacity-100');
    } else {
      $scrollTopBtn.addClass('opacity-0 pointer-events-none').removeClass('opacity-100');
    }
  });

  $scrollTopBtn.on('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // 2. Mobile Menu Toggle
  const $mobileMenu = $('#mobile-menu');
  $('#mobile-menu-btn').on('click', function () {
    $mobileMenu.slideToggle(200);
  });

  $('.mobile-nav-link').on('click', function () {
    $mobileMenu.slideUp(200);
  });

  // 3. Travel Preparation Checklist (localStorage integration)
  const STORAGE_KEY = 'k_trip_checklist_data';
  const $checklistItems = $('.checklist-checkbox');
  const $progressFill = $('#checklist-progress-fill');
  const $progressText = $('#checklist-progress-text');
  const $progressPercent = $('#checklist-progress-percent');

  function loadChecklistState() {
    try {
      const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
      $checklistItems.each(function () {
        const id = $(this).attr('id');
        if (savedData[id]) {
          $(this).prop('checked', true);
          $(this).closest('.checklist-card').addClass('bg-blue-50/50 border-blue-200');
        } else {
          $(this).prop('checked', false);
          $(this).closest('.checklist-card').removeClass('bg-blue-50/50 border-blue-200');
        }
      });
    } catch (e) {
      console.warn('Could not read checklist state from localStorage');
    }
    updateChecklistProgress();
  }

  function saveChecklistState() {
    const state = {};
    $checklistItems.each(function () {
      const id = $(this).attr('id');
      state[id] = $(this).is(':checked');
    });
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.warn('Could not save checklist state to localStorage');
    }
    updateChecklistProgress();
  }

  function updateChecklistProgress() {
    const total = $checklistItems.length;
    const checked = $checklistItems.filter(':checked').length;
    const percent = total > 0 ? Math.round((checked / total) * 100) : 0;

    $progressFill.css('width', percent + '%');
    $progressPercent.text(percent + '%');
    $progressText.text(checked + ' / ' + total + ' 完了');
  }

  $checklistItems.on('change', function () {
    const isChecked = $(this).is(':checked');
    const $card = $(this).closest('.checklist-card');

    if (isChecked) {
      $card.addClass('bg-blue-50/50 border-blue-200');
    } else {
      $card.removeClass('bg-blue-50/50 border-blue-200');
    }
    saveChecklistState();
  });

  $('#btn-reset-checklist').on('click', function () {
    if (confirm('チェックリストをすべて初期化しますか？')) {
      $checklistItems.prop('checked', false);
      $('.checklist-card').removeClass('bg-blue-50/50 border-blue-200');
      saveChecklistState();
    }
  });

  loadChecklistState();

  // 4. Hotspots Filter
  const $spotCards = $('.spot-card');
  const $spotFilterBtns = $('.spot-filter-btn');

  $spotFilterBtns.on('click', function () {
    $spotFilterBtns.removeClass('active bg-slate-900 text-white').addClass('bg-white text-slate-700');
    $(this).addClass('active bg-slate-900 text-white').removeClass('bg-white text-slate-700');

    const targetCategory = $(this).data('filter');

    if (targetCategory === 'all') {
      $spotCards.stop().fadeIn(250);
    } else {
      $spotCards.each(function () {
        const cardCategory = $(this).data('category');
        if (cardCategory === targetCategory) {
          $(this).stop().fadeIn(250);
        } else {
          $(this).stop().hide();
        }
      });
    }
  });

  // 5. Survival Phrase Filter & Copy Function
  const $phraseCards = $('.phrase-card');
  const $phraseFilterBtns = $('.phrase-filter-btn');

  $phraseFilterBtns.on('click', function () {
    $phraseFilterBtns.removeClass('active bg-blue-600 text-white').addClass('bg-white text-slate-700');
    $(this).addClass('active bg-blue-600 text-white').removeClass('bg-white text-slate-700');

    const target = $(this).data('filter');

    if (target === 'all') {
      $phraseCards.stop().fadeIn(200);
    } else {
      $phraseCards.each(function () {
        if ($(this).data('category') === target) {
          $(this).stop().fadeIn(200);
        } else {
          $(this).stop().hide();
        }
      });
    }
  });

  // Clipboard copy for phrases
  const toastElement = document.getElementById('toast');
  let toastTimer = null;

  function showToast(message) {
    if (!toastElement) return;
    toastElement.textContent = message;
    toastElement.classList.add('show');

    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      toastElement.classList.remove('show');
    }, 2400);
  }

  $('.btn-copy-phrase').on('click', function () {
    const textToCopy = $(this).data('copy-text') || $(this).siblings('.korean-text').text().trim();
    if (!textToCopy) return;

    navigator.clipboard.writeText(textToCopy).then(
      function () {
        showToast('韓国語フレーズをコピーしました: 「' + textToCopy + '」');
      },
      function () {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = textToCopy;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast('韓国語フレーズをコピーしました: 「' + textToCopy + '」');
      }
    );
  });

  // 6. Smooth scrolling for internal anchor links
  $('a[href^="#"]').on('click', function (e) {
    const targetHref = $(this).attr('href');
    if (targetHref.length > 1) {
      const $target = $(targetHref);
      if ($target.length) {
        e.preventDefault();
        const headerOffset = 76;
        const elementPosition = $target.offset().top;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  });
});
