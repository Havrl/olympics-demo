/* jshint -W117, -W030 */
describe('Athletes', function() {
    var controller;

    beforeEach(function() {
        module('app', function($provide) {
            specHelper.fakeRouteProvider($provide);
            specHelper.fakeLogger($provide);
        });
        specHelper.injector(function($controller, $rootScope, dataService, athleteService) {});
    });

    beforeEach(function () {

        controller = $controller('Athletes');
        $rootScope.$apply();
    });

    describe('Avengers controller', function() {
        it('should be created successfully', function () {
            expect(controller).to.be.defined;
        });
    });

    specHelper.verifyNoOutstandingHttpRequests();
});
