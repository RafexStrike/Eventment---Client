import AOS from 'aos';
import 'aos/dist/aos.css';

export const initAOS = () => {
  AOS.init({
    duration: 800,
    once: false, // Allow animations to trigger multiple times
    offset: 100, // Trigger animations 100px before element enters viewport
    delay: 0,
    easing: 'ease-in-out',
    mirror: false,
    anchorPlacement: 'top-bottom'
  });
};

export const refreshAOS = () => {
  // Add a small delay to ensure DOM is updated
  setTimeout(() => {
    AOS.refresh();
  }, 100);
};