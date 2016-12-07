var twsApp = angular.module('twsApp', ['ngAnimate','ui.router','ngCookies','ngStorage']);

twsApp.controller('homeCtrl', ['$scope', 'products', '$cookies', '$localStorage', '$sessionStorage', function($scope, products, $cookies, $localStorage, $sessionStorage){

  $scope.products = products.products
  $scope.storage = $localStorage;

}]);

twsApp.controller('productDirectoryCtrl', ['$scope', '$stateParams','products', '$cookies', '$localStorage', '$sessionStorage', '$stateParams', function($scope, $stateParams, products, $cookies, $localStorage, $sessionStorage, $stateParams){

  $scope.storage = $localStorage
  $scope.products = products.products
  $scope.pagetitle = 'products'

  $scope.clearSearch = function() {
    $scope.inputSearch = ''
    $scope.categorySearch = ''
    $scope.collecSearch = ''
  }

  $scope.openFilter = false
  $scope.filterToggle = function() {
    if ($scope.openFilter == false) {
      $scope.openFilter = true
    }else {
      $scope.openFilter = false
    }
  }

  $scope.categories = [
    'blankets',
    'quilts',
    'travel',
    'invitations',
    'wedding',
    'formal',
    'informal'
  ]

  //discount maths **should add 'your savings with discount calulations showing'
  $scope.disPrice = function(index) {
    var savings = $scope.products[index].discount / 100 * $scope.products[index].price

    return $scope.products[index].price - savings
  }

}]);

twsApp.controller('productInfoCtrl', ['$scope', '$stateParams','products', 'bag', '$cookies', '$localStorage', '$sessionStorage', '$stateParams', function($scope, $stateParams, products, bag, $cookies, $localStorage, $sessionStorage, $stateParams){

  $scope.storage = $localStorage
  $scope.product = products.products[$stateParams.proIndex]
  $scope.bag = bag.bag

  $scope.pagetitle = ''//$scope.product.name

  //discount maths **should add 'your savings with discount calulations showing'
  $scope.savings = $scope.product.discount / 100 * $scope.product.price
  $scope.disPrice = $scope.product.price - $scope.savings

  //qty controls
  $scope.minusQTY = function() {
    if ($scope.qtyField <= 1) {
      $scope.qtyField = 1
    }else {
      $scope.qtyField = $scope.qtyField - 1
    }
  }

  //add to bag
  $scope.qtyField = 1
  $scope.addToBag = function() {
    if($scope.qtyField == 0) {
      $scope.qtyField = 1
    }
    var product = {
      proID: $scope.product.id,
      qty: $scope.qtyField,
      name: $scope.product.name,
      img: $scope.product.img,
      price: $scope.disPrice,
      savings: $scope.savings,
      link: '/product-directory/product'+[$stateParams.proIndex]
    }

    $scope.bag.push(product)
    $scope.qtyField = 1
  }

  //image slider
  $scope.slides = $scope.product.slides
  $scope.currentIndex=0
  $scope.prev=function(){
    $scope.currentIndex>0?$scope.currentIndex--:$scope.currentIndex=$scope.slides.length-1;
  }
  $scope.next=function(){
    $scope.currentIndex<$scope.slides.length-1?$scope.currentIndex++:$scope.currentIndex=0;
  }
  $scope.$watch('currentIndex',function(){
    $scope.slides.forEach(function(slide){
      slide.visible=false;
    });
    $scope.slides[$scope.currentIndex].visible=true;
  })

}]);

twsApp.controller('contactCtrl', ['$scope', '$cookies', '$localStorage', '$sessionStorage', function($scope, products, $cookies, $localStorage, $sessionStorage){

  $scope.storage = $localStorage;
  $scope.pagetitle = 'contact us';

}]);

twsApp.controller('policyCtrl', ['$scope', '$cookies', '$localStorage', '$sessionStorage', function($scope, products, $cookies, $localStorage, $sessionStorage){

  $scope.storage = $localStorage;
  $scope.pagetitle = 'policies';

}]);

twsApp.controller('aboutCtrl', ['$scope', '$cookies', '$localStorage', '$sessionStorage', function($scope, products, $cookies, $localStorage, $sessionStorage){

  $scope.storage = $localStorage;
  $scope.pagetitle = 'about us';

}]);

twsApp.controller('navCtrl', ['$scope', '$stateParams', 'bag', '$cookies', '$localStorage', '$sessionStorage', '$stateParams', function($scope, $stateParams, bag, $cookies, $localStorage, $sessionStorage, $stateParams){

  $scope.storage = $localStorage
  $scope.bag = bag.bag

  $scope.bagLength = function() {
    var bagQTYs = []
    for(var i=0; i < $scope.bag.length; i++) {
      bagQTYs.push($scope.bag[i].qty)
    }
    //for reduce
    function add(a, b) {
        return a + b;
    }

    return bagQTYs.reduce(add, 0);
  }

  $scope.visible = false;
  $scope.mainNavToggle = function() {
    if ($scope.visible == false) {
      $scope.visible = true
      $scope.showBag = false
    }else {
      $scope.visible = false
    }
  }

  $scope.showBag = false
  $scope.bagToggle = function() {
    if ($scope.showBag == false) {
      $scope.showBag = true
    }else {
      $scope.showBag = false
    }
  }

  $scope.totalPrice = function() {
    var priceList = []
    for(var i=0; i < $scope.bag.length; i++) {
      priceList.push($scope.bag[i].price * $scope.bag[i].qty)
    }
    //for reduce
    function add(a, b) {
        return a + b;
    }

    return priceList.reduce(add, 0);
  }

  $scope.removeFromBag = function(item) {
    $scope.bag.splice(item, 1)
  }

}]);

twsApp.controller('bagCtrl', ['$scope', '$stateParams','products', 'bag', '$cookies', '$localStorage', '$sessionStorage', '$stateParams', function($scope, $stateParams, products, bag, $cookies, $localStorage, $sessionStorage, $stateParams){

  $scope.storage = $localStorage
  $scope.pagetitle = 'shopping bag';
  $scope.products = products.products
  $scope.bag = bag.bag

  $scope.bagLength = function() {
    var bagQTYs = []
    for(var i=0; i < $scope.bag.length; i++) {
      bagQTYs.push($scope.bag[i].qty)
    }
    //for reduce
    function add(a, b) {
        return a + b;
    }

    return bagQTYs.reduce(add, 0);
  }

  $scope.totalPrice = function() {
    var priceList = []
    for(var i=0; i < $scope.bag.length; i++) {
      priceList.push($scope.bag[i].price * $scope.bag[i].qty)
    }
    //for reduce
    function add(a, b) {
        return a + b;
    }

    return priceList.reduce(add, 0);
  }

  $scope.totalSavings = function() {
    var savingsList = []
    for(var i=0; i < $scope.bag.length; i++) {
      savingsList.push($scope.bag[i].savings * $scope.bag[i].qty)
    }
    //for reduce
    function add(a, b) {
        return a + b;
    }

    return savingsList.reduce(add, 0)
  }

  $scope.removeFromBag = function(i) {
    $scope.bag.splice(i, 1)
  }

  $scope.checkQty = function(i) {
    if($scope.bag[i].qty < 1) {
      $scope.bag.splice(i, 1)
    }
  }

  $scope.minusQTY = function(i) {
    if($scope.bag[i].qty < 2) {
      $scope.bag.splice(i, 1)
      console.log('bag item removed, less than 1 qty')
    }else {
      $scope.bag[i].qty = $scope.bag[i].qty - 1
      console.log('minus 1 from qty')
    }
  }

  //build infusionsoft checkout link
  $scope.checkoutItemsLink = function() {
    if ($scope.bag.length < 1) {
      //$scope.bagEmptyMessage = true
      return ''
    }else {
      var url = []
      for(var i=0; i < $scope.bag.length; i++) {
        url.push('productId='+$scope.bag[i].proID+'&productQuantity='+$scope.bag[i].qty+'&')
      }
      url.unshift('https://an140.infusionsoft.com/app/manageCart/processBundle?')

      return url.join('')
    }
  }

  //https://an140.infusionsoft.com/app/manageCart/processBundle

}]);
