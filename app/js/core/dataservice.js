(function() {
  'use strict';

  angular
      .module('app.core')
      .factory('dataService', dataService);

  dataService.$inject = ['$q', '$http', 'config', 'exception', 'logger'];

  function dataService($q, $http, config, exception, logger) {
    
    var url = config.apiUrl;
    var isPrimed = false;
    var primePromise;

    var service = {
      getList: getList,
      ready: ready
    };

    return service;
    ///////////////

    /**
     * Gets a list of objects using GET verb
     * @return {promise} Returns an array of objects
     */
    function getList() {
      return $http.get(url).then(function (result) {
        return result;
      });
    }

    /**
     * @desc For using in controllers instead of the route resolver
     * @example
     * var promises = [getData()];
     * return dataservice.ready(promises).then(function(){
     *   logger.info('Activated View');
     * });
     */
    function ready(nextPromises) {
      var readyPromise = primePromise || prime();

      return readyPromise
          .then(function() {
            return $q.all(nextPromises);
          })
          .catch(exception.catcher('"ready" function failed'));
    }
    
    /*
      Helper method for ready function
     */
    function prime() {
      // This function can only be called once.
      if (primePromise) {
        return primePromise;
      }

      primePromise = $q.when(true).then(success);
      return primePromise;

      function success() {
        isPrimed = true;
        //logger.info('Primed data');
      }
    }
  }
})();
