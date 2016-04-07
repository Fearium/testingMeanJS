(function () {
  'use strict';

  //Setting up route
  angular
    .module('forum')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    // Forum state routing
    $stateProvider
      .state('forum-list', {
        url: '/forum',
        templateUrl: 'modules/forum/client/views/forum-list.client.view.html',
        controller: 'ForumController',
        controllerAs: 'vm'
      });
  }
})();
