(function() {
  'use strict';

  var core = angular.module('app.core');


  /******** App Config ***********/
  var config = {
    appErrorPrefix: '[Olympics-Demo Error] ', //Configure the exceptionHandler decorator
    appTitle: 'Olympics Demo',
    version: '1.0.0',
    /* jshint ignore:start */
    apiUrl: 'https://gist.githubusercontent.com/michaelfbradley/ced357ae693110f2d9343b85ac99d61d/raw/009a47f72b2d45ffe9e3a7a6cea4e2b0e1e1299a/athletic_medalists.json'
    /* jshint ignore:end */
  };
  core.value('config', config);

  core.config(configure);

  configure.$inject = ['$logProvider', '$routeProvider', '$locationProvider', 'routehelperConfigProvider',
    'exceptionConfigProvider'];

  function configure($logProvider, $routeProvider, $locationProvider, routehelperConfigProvider,
                     exceptionConfigProvider) {

    $locationProvider.html5Mode(true);

    // turn debugging off/on (no info or warn)
    if ($logProvider.debugEnabled) {
      $logProvider.debugEnabled(true);
    }

    // Configure the common route provider
    routehelperConfigProvider.config.$routeProvider = $routeProvider;
    routehelperConfigProvider.config.docTitle = 'Olympics Demo ';
    var resolveAlways = {
      ready: ['dataService', function (dataService) {
          return dataService.ready();
      }]
    };
    routehelperConfigProvider.config.resolveAlways = resolveAlways;

    // Configure the common exception handler
    exceptionConfigProvider.config.appErrorPrefix = config.appErrorPrefix;
  }

})();
