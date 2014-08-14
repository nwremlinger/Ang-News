'use strict';

angular.module('angNewsApp').factory('Post', function ($resource) {
  return $resource('https://brilliant-inferno-2875.firebaseio.com/posts:id.json');
});