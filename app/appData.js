twsApp.factory('products',['$localStorage', '$http', function($localStorage, $http){

  const o = {
    products: []
  }
  $http.get('data/products.json').success(function(data){
    o.products = data;
  });

  return o;
}]);


twsApp.factory('bag',['$localStorage', function($localStorage){

  const o = {
    bag: []
  }

  const bagContentsCheck = function() {
    //house keeping for local storage
    const miliDay = 86400000
    const days = 1
    const currentDate = new Date().getTime()

    if($localStorage.lastLogDate == null) {
      $localStorage.lastLogDate = currentDate
    }else if(howLong(currentDate, $localStorage.lastLogDate) > days * miliDay) {
      $localStorage.unpurchasedBag = []
      console.log('bag expired')
    }else {
      console.log('bag not expired')
    }
    function howLong(today, past) {
      return today - past
    }

    if ($localStorage.unpurchasedBag == null) {
      $localStorage.unpurchasedBag = []
    }else {
      o.bag = $localStorage.unpurchasedBag
    }
  }
  bagContentsCheck()

  return o
}]);
