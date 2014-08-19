/**
 *  AngularJS object to reduce the $broadcast Method
 */
;
(function(window, document) {
	var _broadcache = {
		cast: function(scope, broadcast) {
			var i,
				length,
				listeners,
				current = scope;

			if(scope.broadcaches && scope.broadcaches.length) {
				
			} else {
				current.broadcaches = [];

				while (current && current.$$listenerCount[broadcast]) {					
					listeners = current.$$listeners[broadcast];
					for(i = 0, length = listeners.length; i < length; i++) {
						scope.broadcaches.unshift(listeners[i]);
					}
					current = current.$$childHead;
				}

				scope.$broadcast(broadcast);
			}
		}
	}

	window.broadcache = _broadcache;
})(window, document);