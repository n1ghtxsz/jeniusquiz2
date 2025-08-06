document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});

document.addEventListener('keydown', function (e) {
  // F12
  if (e.key === 'F12') {
    e.preventDefault();
  }

  // Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, Ctrl+C
  if ((e.ctrlKey && e.shiftKey && ['I', 'J'].includes(e.key)) || 
      (e.ctrlKey && ['U', 'C', 'S'].includes(e.key))) {
    e.preventDefault();
  }
});