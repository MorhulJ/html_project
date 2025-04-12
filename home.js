window.addEventListener('load', () => {
    const scrollPos = localStorage.getItem('scrollPos');
    if (scrollPos !== null) {
      document.documentElement.style.scrollBehavior = 'auto';
      window.scrollTo(0, parseInt(scrollPos, 10));
      localStorage.removeItem('scrollPos');
      setTimeout(() => {
        document.documentElement.style.scrollBehavior = '';
      }, 100);
    }
  });
  