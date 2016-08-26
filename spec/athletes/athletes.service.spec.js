describe('athleteService', function () {
    
    beforeEach(function () {
        module('app', function($provide) {
            specHelper.fakeRouteProvider($provide);
            specHelper.fakeLogger($provide);
        });
        specHelper.injector(function(athleteService) {});
        
    });

    it('should be registered', function() {
        expect(athleteService).not.to.equal(null);
    });

    
});