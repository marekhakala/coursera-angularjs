(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://mysterious-stream-53087.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
