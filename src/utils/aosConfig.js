import AOS from 'aos';
import 'aos/dist/aos.css';

export const initAOS = () => {
  AOS.init({
    startEvent: 'load',
    once: false,
    duration: 1000,
    offset: 50,
    delay: 0,
    mirror: true,
    anchorPlacement: 'top-bottom',
    disable: false,
    useClassNames: true,
    disableMutationObserver: false,
    debounceDelay: 50,
    throttleDelay: 99,
  });
};

export const refreshAOS = () => {
  AOS.refresh();
}; 