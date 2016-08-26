(function() {
  'use strict';

  angular
      .module('app.athletes')
      .run(appRun);

  appRun.$inject = ['routehelper'];

  function appRun(routehelper) {
    routehelper.configureRoutes(getRoutes());
  }

  function getRoutes() {
    return [
      {
        url: '/',
        config: {
          templateUrl: 'athletes/athletes.html',
          controller: 'Athletes',
          controllerAs: 'vm',
          title: 'Athletes'
        }
      }
    ];
  }
})();
