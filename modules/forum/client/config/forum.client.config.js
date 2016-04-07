(function() {
  'use strict';

  // Forum module config
  angular
    .module('forum')
    .run(menuConfig);

  menuConfig.$inject = ['Menus'];

  function menuConfig(Menus) {
    // Config logic
    // ...
  }
})();
