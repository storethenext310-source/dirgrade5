/* DIRTRADE PWA bootstrap */
(function () {
  'use strict';

  if (!('serviceWorker' in navigator)) return;

  window.addEventListener('load', function () {
    navigator.serviceWorker.register('/sw.js', {
      scope: '/'
    })
    .then(function (registration) {
      console.log(
        'DIRTRADE Service Worker aktif:',
        registration.scope
      );
    })
    .catch(function (error) {
      console.error(
        'DIRTRADE Service Worker gagal:',
        error
      );
    });
  });
})();
