/* jshint -W117, -W030 */
describe('app.athletes', function () {
    var controller, athleteService, dataService;

    beforeEach(function () {
        module('app');
    });

    beforeEach(inject(function (_$controller_, $q, $rootScope, _dataService_, _athleteService_) {

        dataService = _dataService_;
        athleteService = _athleteService_;

        // mock the dataService.getList method to return mock data
        sinon.stub(dataService, 'getList', function() {
         var deferred = $q.defer();
         deferred.resolve(mockData.getMockData());
         return deferred.promise;
         });

        // init the controller
        controller = _$controller_('Athletes', {
            dataService: dataService,
            athleteService: athleteService
        });

        $rootScope.$digest();

    }));


    describe('Athletes Controller', function () {

        it('should be created successfully', function () {

            expect(controller).toBeDefined();

        });

        describe('after activate', function () {

            it('should have 41 countries', function () {

                expect(controller.fullList.length).toBe(41);

            });

            it('should be able to show less', function () {

                controller.showLess();
                expect(controller.rangeNum).toBe(10);

            });

            it('should be able to show all list', function () {

                controller.fullList = mockData.getMockData();
                controller.showAll();
                expect(controller.rangeNum).toBeGreaterThan(41);

            });
        });

    });

    describe('Athletes Service', function () {

        it('should be registered', function () {

            expect(athleteService).not.toBeNull();

        });

        it('should transform the list', function () {

            var mockList = mockData.getMockData();

            var transformedList = athleteService.transformList(mockList);
            var topCountry = transformedList[0];

            expect(transformedList.length).toBe(41);
            expect(topCountry.country).toBe('USA');
            expect(topCountry.total).toBe(29);
            expect(topCountry.medals.Gold).toBeDefined();
            expect(topCountry.medals.Silver).toBeDefined();
            expect(topCountry.medals.Bronze).toBeDefined();

        });
    });

});
