(function() {
  'use strict';

  angular
    .module('forum')
    .controller('ForumController', ForumController);

  ForumController.$inject = ['$scope'];

  function ForumController($scope) {
    var vm = this;

    // Forum controller logic
    // ...

    init();

    function init() {
    }
  }
})();
