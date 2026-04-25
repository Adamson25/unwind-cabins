
(function () {
  'use strict';

  function isValidEmail(s) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(s).trim());
  }

  function initNewsletter() {
    var box = document.querySelector('.letter');
    if (!box) return;
    var input = box.querySelector('input[type="text"]');
    var btn = box.querySelector('button');
    if (!input || !btn) return;
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      var v = input.value.trim();
      if (!v) {
        window.alert('Please enter your email address.');
        return;
      }
      if (!isValidEmail(v)) {
        window.alert('Please enter a valid email address.');
        return;
      }
      // Replace with fetch() to your API or form POST to a mailing-list provider
      if (window.console && console.log) {
        console.log('Newsletter signup (placeholder):', v);
      }
      window.alert('Thanks! You are on the list (demo only — connect an API next).');
    });
  }

  function initBookingBar() {
    var cta = document.querySelector('.subpar a');
    if (!cta) return;
    cta.addEventListener('click', function (e) {
      var fields = document.querySelectorAll('.subpar input');
      if (!fields.length) return;
      var values = [];
      for (var i = 0; i < fields.length; i++) {
        values.push((fields[i].value || '').trim());
      }
      var all = values.every(Boolean);
      if (all) return; // let navigation or default happen (href is empty — you may set a search URL)
      e.preventDefault();
      window.alert('Please fill in destination, check in, check out, and number of travelers.');
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initNewsletter();
    initBookingBar();
  });
})();
