export const initScrollReveal = () => {
  const callback = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  };

  const observer = new IntersectionObserver(callback, {
    threshold: 0.1
  });

  document.querySelectorAll('.scroll-reveal').forEach(element => {
    observer.observe(element);
  });
};
