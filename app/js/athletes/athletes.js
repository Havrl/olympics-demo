(function () {
    'use strict';

    angular
        .module('app.athletes')
        .controller('Athletes', Athletes);

    Athletes.$inject = ['dataService', 'athleteService'];

    function Athletes(dataService, athleteService) {

        /*jshint validthis: true */
        var vm = this;
        
        vm.fullList = [];
        vm.rangedList = [];
        
        vm.limitNum = 10; // const, used to adjust the limit number
        vm.rangeNum = vm.limitNum; // set the range to limitNum by default
        
        vm.showAll = showAll;
        vm.showLess = showLess;

        //////////////////////
        activate();

        // init
        function activate() {
            return loadData().then(function(){
                return showLess();
            });
        }

        /**
         * Trigger to display all list
         */
        function showAll() {
            vm.rangeNum = vm.fullList.length;
        }

        /**
         * Trigger to display the limited list
         */
        function showLess() {
            vm.rangeNum = vm.limitNum;
        }

        /**
         * Loads athletes data from the sever
         */
        function loadData() {
            
            return dataService.getList().then(function (res) {
                var list = res;

                vm.fullList = athleteService.transformList(list);

            });
            
        }
    }
    
})();
