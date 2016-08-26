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
            
            
            /*var originalData = [
                {
                    "athlete": "BEKELE, Kenenisa", "country": "ETH",
                    "sex": "Men",
                    "event": "10000m",
                    "medal": "Gold"
                },
                {
                    "athlete": "SIHINE, Sileshi", "country": "ETH",
                    "sex": "Men",
                    "event": "10000m",
                    "medal": "Silver"
                },
                {
                    "athlete": "FLANAGAN, Shalane", "country": "USA",
                    "sex": "Women",
                    "event": "10000m",
                    "medal": "Bronze"
                },
                {
                    "athlete": "DIBABA, Tirunesh", "country": "ETH",
                    "sex": "Women",
                    "event": "10000m",
                    "medal": "Gold"
                },
                {
                    "athlete": "ABEYLEGESSE, Elvan", "country": "TUR",
                    "sex": "Women",
                    "event": "10000m",
                    "medal": "Silver"
                },
                {
                    "athlete": "BOLT, Usain", "country": "JAM",
                    "sex": "Men",
                    "event": "100m", "medal": "Gold"
                },
                {
                    "athlete": "THOMPSON, Richard", "country": "TRI",
                    "sex": "Men",
                    "event": "100m",
                    "medal": "Silver"
                },
                {
                    "athlete": "FRASER, Shelly-ann", "country": "JAM",
                    "sex": "Women",
                    "event": "100m",
                    "medal": "Gold"
                },
                {
                    "athlete": "SIMPSON, Sherone", "country": "JAM",
                    "sex": "Women",
                    "event": "100m",
                    "medal": "Silver"
                },
                {
                    "athlete": "STEWART, Kerron", "country": "JAM",
                    "sex": "Women",
                    "event": "100m",
                    "medal": "Silver"
                },
                {
                    "athlete": "LOPES-SCHLIEP, Priscilla", "country": "CAN",
                    "sex": "Women",
                    "event": "100m hurdles",
                    "medal": "Bronze"
                },
                {
                    "athlete": "HARPER, Dawn", "country": "USA",
                    "sex": "Women",
                    "event": "100m hurdles", "medal": "Gold"

                },
                {
                    "athlete": "MCLELLAN, Sally", "country": "AUS",
                    "sex": "Women",
                    "event": "100m hurdles", "medal": "Silver"
                },
                {
                    "athlete": "OLIVER, David", "country": "USA",
                    "sex": "Men",
                    "event": "110m hurdles", "medal": "Bronze"
                }];*/

            
        }
    }
})();
