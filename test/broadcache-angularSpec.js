describe('Broadcache-angular', function() {
    var $scope
    beforeEach(inject(function($injector) {
        $scope = $injector.get('$rootScope').$new();
        $scope.$on('broadCastTest', function() {
            console.log('yep');
        });
        spyOn($scope, '$broadcast');
    }));

    describe('Initialize', function() {
        it('should exists method to broadcast called Broadcache', function() {
            expect(broadcache).toEqual(jasmine.any(Object));
        });

        it('should has a method to broadcast angular', function() {
            expect(broadcache.cast).toBeDefined();

            broadcache.cast($scope, 'broadCastTest');
            expect($scope.$broadcast).toHaveBeenCalled();
        })
    });

    describe('cast method', function() {
    	it('should not call two times the broadcast', function() {
    		broadcache.cast($scope, 'broadCastTest');
            broadcache.cast($scope, 'broadCastTest');
            broadcache.cast($scope, 'broadCastTest');

            expect($scope.$broadcast.calls.count()).toBe(1);
    	})
    });
});
