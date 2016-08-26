// Athlete service contains the helper methods
// to transform the raw list into the grouped with medal count array
(function() {
    'use strict';

    angular
        .module('app.athletes')
        .factory('athleteService', athleteService);

    function athleteService() {
        
        return {
            transformList: transformList
        };
        ///////////

        /**
         * Sum up all medals
         * @param {object} medals
         * @returns {number} total number of medals
         */
        function totalMedals(medals) {
            return medals.Gold + medals.Silver + medals.Bronze;
        }

        /**
         * Adds the missing medal properties in the provided object
         * @param {object} medals
         */
        function addMissingMedals(medals) {

            if(!medals.hasOwnProperty('Gold')) {
                medals.Gold = 0;
            }

            if(!medals.hasOwnProperty('Silver')) {
                medals.Silver = 0;
            }

            if(!medals.hasOwnProperty('Bronze')) {
                medals.Bronze = 0;
            }
        }

        /**
         * Transforms the list by applying the following:
         * 1. grouping the list by country
         * 2. counting the medals and group them
         * 3. creating new array with country, total, and medals properties
         * 4. sorting the array in descending order
         * @param list of olimpics
         */
        function transformList(list) {

            var countedMedals = []; // holds the transformed array

            // First we group the list by country
            var groupedByCountry = _.groupBy(list, 'country');

            // Then we count the medals and group them
            _.each(groupedByCountry, function(group, countryName) {

                var medals = _.countBy(group, function(item) {
                    return item.medal;
                });

                addMissingMedals(medals);

                // add the itme into the new array
                countedMedals.push({ country: countryName, total: totalMedals(medals), medals: medals });

            });

            // sort by TotalMedals in descending order
            return _.sortBy(countedMedals, 'total').reverse();
        }
    }

})();