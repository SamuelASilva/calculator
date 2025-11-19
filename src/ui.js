(function () {
  function init() {
    const display = document.getElementById('display');
    const buttons = Array.from(document.querySelectorAll('.buttons button'));

    if (!display) {
      console.error("Display não encontrado");
      return;
    }
    if (!buttons.length) {
      console.error("Nenhum botão encontrado");
      return;
    }

    let current = '';
    let left = null;
    let op = null;

    function refresh() {
      display.value = current || (left === null ? '0' : String(left));
    }

    buttons.forEach(btn => {
      const val = btn.dataset.value;
      const operation = btn.dataset.op;

      btn.addEventListener('click', () => {
        if (val !== undefined) {
          if (val === '.' && current.includes('.')) return;
          current = (current === '0') ? val : (current + val);
          refresh();
          return;
        }

        if (operation) {
          if (left === null && current === '') return;
          if (left === null) {
            left = Number(current);
            current = '';
          } else if (current !== '') {
            left = window.Calculator.evaluate(left, op, current);
            current = '';
          }
          op = operation;
          refresh();
          return;
        }

        if (btn.id === 'clear') {
          current = '';
          left = null;
          op = null;
          refresh();
          return;
        }

        if (btn.id === 'equals') {
          if (op && current !== '') {
            try {
              left = window.Calculator.evaluate(left, op, current);
              current = '';
              op = null;
              refresh();
            } catch (e) {
              display.value = 'Erro';
            }
          }
        }
      });
    });

    refresh();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
