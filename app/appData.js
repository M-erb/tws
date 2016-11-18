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
      name: "product a",
      price: 5.00,
      discount: -1,
      status: 'active',
      category: 'blankets',
      mainColor: 'blue',
      dimentions: 'dimentions',
      shortDescription: 'this is a short description',
      longDescription: 'this is a long description'
    }, {
      id: 42,
      name: "product b",
      price: 15.00,
      discount: -3,
      status: 'active',
      category: 'blankets',
      mainColor: 'red',
      dimentions: 'dimentions',
      shortDescription: 'this is a short description',
      longDescription: 'this is a long description'
    }, {
      id: 100,
      name: "This is the name",
      price: 35.00,
      discount: -3,
      status: 'active',
      category: 'blankets',
      mainColor: 'red',
      dimentions: 'dimentions',
      shortDescription: 'this is a short description',
      longDescription: 'this is a long description'
    }]
  }

  return o;
}]);
