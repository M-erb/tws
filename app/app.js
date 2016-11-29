var twsApp = angular.module('twsApp', ['ngAnimate','ui.router','ngCookies','ngStorage']);

twsApp.controller('homeCtrl', ['$scope', 'products', '$cookies', '$localStorage', '$sessionStorage', function($scope, products, $cookies, $localStorage, $sessionStorage){

  $scope.products = products.products
  $scope.storage = $localStorage;
  //$scope.pageClass = 'home';

}]);

twsApp.controller('productDirectoryCtrl', ['$scope', '$stateParams','products', '$cookies', '$localStorage', '$sessionStorage', '$stateParams', function($scope, $stateParams, products, $cookies, $localStorage, $sessionStorage, $stateParams){

  $scope.storage = $localStorage
  $scope.products = products.products
  $scope.pagetitle = 'products'

  $scope.searchVisable = false
  $scope.searchToggle = function() {
    if ($scope.searchVisable == false) {
      $scope.searchVisable = true
    }else {
      $scope.searchVisable = false
    }
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
      link: '/product-directory/product'+[$stateParams.proIndex]
    }
    product.price = product.price * product.qty

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

twsApp.controller('navCtrl', ['$scope', '$stateParams','products', 'bag', '$cookies', '$localStorage', '$sessionStorage', '$stateParams', function($scope, $stateParams, products, bag, $cookies, $localStorage, $sessionStorage, $stateParams){

  $scope.storage = $localStorage
  $scope.products = products.products[$stateParams.phaseIndex]
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
      priceList.push($scope.bag[i].price)
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

  //build infusionsoft checkout link
  $scope.checkoutItemsLink = function() {
    var url = []
    for(var i=0; i < $scope.bag.length; i++) {
      url.push('productId='+$scope.bag[i].proID+'&productQuantity='+$scope.bag[i].qty+'&')
    }
    return url.join('')
  }

}]);

/*twsApp.controller('tutorialCtrl', ['$scope', '$stateParams','products', '$cookies', '$localStorage', '$sessionStorage', '$stateParams', function($scope, $stateParams, products, $cookies, $localStorage, $sessionStorage, $stateParams){

  $scope.tutList = products.products[$stateParams.phaseIndex].tutList[$stateParams.tutIndex]
  $scope.storage = $localStorage
  $scope.pageClass = products.products[$stateParams.phaseIndex].class

  $scope.pages = $scope.tutList.tutorialPages
  $scope.currentIndex=0;

  $scope.prev=function(){
    $scope.currentIndex>0?$scope.currentIndex--:$scope.currentIndex=$scope.pages.length-1;
  };

  $scope.next=function(){
    $scope.currentIndex<$scope.pages.length-1?$scope.currentIndex++:$scope.currentIndex=$scope.pages.length-1;
  };

  $scope.$watch('currentIndex',function(){
    $scope.pages.forEach(function(page){
      page.visible=false;
    });
    $scope.pages[$scope.currentIndex].visible=true;
  });

}]);*/
