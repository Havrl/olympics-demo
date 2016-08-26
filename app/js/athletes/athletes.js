(function () {
    'use strict';

    angular
        .module('app.athletes')
        .controller('Athletes', Athletes);

    Athletes.$inject = ['$scope', 'dataService', 'athleteService'];

    function Athletes($scope, dataService, athleteService) {

        /*jshint validthis: true */
        var vm = this;
        
        vm.fullList = [];
        vm.rangedList = [];
        vm.showAll = showAll;
        vm.showLess = showLess;

        //////////////////////
        activate();

        // init
        function activate() {
            loadData();
        }

        /**
         * Trigger to display all list
         */
        function showAll() {
            vm.rangedList = vm.fullList;
        }

        /**
         * Trigger to display the list of 10 items
         */
        function showLess() {
            vm.rangedList = vm.fullList.splice(0,10);
        }

        /**
         * Loads athletes data from the sever
         */
        function loadData() {
            
            return dataService.getList().then(function (res) {
                var list = res.data;

                vm.fullList = athleteService.transformList(list);

                showLess();

            });
            
        }
    }
})();
