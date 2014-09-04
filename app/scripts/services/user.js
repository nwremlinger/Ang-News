'use strict';

app.factory('User', function ($firebase, FIREBASE_URL, Auth) {
  var ref = new Firebase(FIREBASE_URL + 'users');
 
  var users = $firebase(ref);
 
  var User = {
    create: function (authUser, username) {
      /* jshint camelcase: false */
      users[username] = {
        md5_hash: authUser.md5_hash,
        username: username,
        $priority: authUser.uid
      };
      users.$save(username).then(function () {
        setCurrentUser(username)
      });
    }
  };
 
  return User;
});

function setCurrentUser (username) {
  $rootScope.currentUser = User.findByUsername(username);
}