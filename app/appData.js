twsApp.factory('products',['$localStorage', function($localStorage){
  var directoryCheck = function() {
    //house keeping for local storage
    if ($localStorage.directory == null) {
      $localStorage.directory = {}
    }
  }
  directoryCheck()

  var o = {
    products: [{
      id: 12,
      title: "product a"
    }, {
      id: 13,
      title: "product b"
    }]
  }

  return o;
}]);
