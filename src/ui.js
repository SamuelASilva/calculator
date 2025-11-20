(function () {
  function init() {
    const display = document.getElementById('display');
    const buttons = Array.from(document.querySelectorAll('.buttons button'));

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

        // números
        if (val !== undefined) {
          if (val === '.' && current.includes('.')) return;
          current = (current === '0') ? val : (current + val);
          refresh();
          return;
        }

        // operadores
        if (operation) {

          if (current === '') return;

          if (left === null) {
            left = Number(current);
            current = '';
          } else {
            left = window.Calculator.evaluate(left, op, Number(current));
            current = '';
          }

          op = operation;
          refresh();
          return;
        }

        // limpar
        if (btn.id === 'clear') {
          current = '';
          left = null;
          op = null;
          refresh();
          return;
        }

        // igual
        if (btn.id === 'equals') {
          if (op && current !== '') {
            try {
              left = window.Calculator.evaluate(left, op, Number(current));
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

  // força init imediatamente (JSDOM não dispara DOMContentLoaded)
  init();
})();
