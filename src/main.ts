import '@/css/reset.css';

import App from '@/App.vue';
import { createApp } from 'vue';
import { createPinia } from 'pinia';

const app = createApp(App);
const pinia = createPinia();

// directives
app.directive('lazyLoad', (el, binding) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = new Image();
        img.src = binding.value;

        img.addEventListener('load', () => {
          el.setAttribute('src', img.src);
          observer.unobserve(el);
        });
      }
    });
  });

  observer.observe(el);
});

// pinia
app.use(pinia);

// mount vue on div#app
app.mount('#app');
