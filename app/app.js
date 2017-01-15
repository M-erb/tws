var twsApp = angular.module('twsApp', ['ngAnimate','ui.router','ngCookies','ngStorage','angularytics']);

twsApp.controller('homeCtrl', ['$scope', 'products', '$cookies', '$localStorage', '$sessionStorage', function($scope, products, $cookies, $localStorage, $sessionStorage){

  $scope.products = products.products
  $scope.storage = $localStorage;

  $scope.randSort = function() {
    return 10;
  };
  console.log(angular.toJson($scope.products))

}]);

twsApp.controller('productDirectoryCtrl', ['$scope', '$stateParams','products', '$cookies', '$localStorage', '$sessionStorage', '$stateParams', function($scope, $stateParams, products, $cookies, $localStorage, $sessionStorage, $stateParams){

  $scope.storage = $localStorage
  $scope.products = products.products
  $scope.pagetitle = 'products'
  $scope.collecSearch = ''

  $scope.showImgsContitions = function(i) {
    if($scope.products[i].status === 'active') {
      return true
    }else if($scope.products[i].status === 'sold') {
      return true
    }else {
      return false
    }
  }

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

twsApp.controller('productInfoCtrl', ['$scope', '$rootScope', '$stateParams','products', 'bag', '$cookies', '$localStorage', '$sessionStorage', '$stateParams', function($scope, $rootScope, $stateParams, products, bag, $cookies, $localStorage, $sessionStorage, $stateParams){

  $scope.storage = $localStorage
  $scope.product = products.products[$stateParams.proIndex]
  $scope.bag = bag.bag

  $rootScope.showBag = false
  $scope.bagToggle = function() {
    if ($rootScope.showBag == false) {
      $rootScope.showBag = true
    }else {
      $rootScope.showBag = false
    }
  }

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
  $scope.exceedQtyAvail = false
  $scope.plusQTY = function() {
    if($scope.qtyField >= $scope.product.qtyAvailable) {
      $scope.qtyField = $scope.product.qtyAvailable
      $scope.exceedQtyAvail = true
    } else {
      $scope.qtyField = $scope.qtyField + 1
    }
  }

  //add to bag
  $scope.qtyField = 1
  $scope.addToBag = function() {
    if($scope.qtyField == 0) {
      $scope.qtyField = 1
    }
    var newProduct = {
      proID: $scope.product.id,
      qty: $scope.qtyField,
      qtyAvailable: $scope.product.qtyAvailable,
      name: $scope.product.name,
      img: $scope.product.img,
      price: $scope.disPrice,
      savings: $scope.savings,
      link: '/product-directory/product'+[$stateParams.proIndex]
    }
    var alreadyInBagCheck = false
    for(var i=0; i < $scope.bag.length; i++) {
      if($scope.bag[i].proID === newProduct.proID) {
        $scope.bag[i].qty = $scope.bag[i].qty + newProduct.qty
        $scope.product.qtyAvailable = $scope.product.qtyAvailable - newProduct.qty
        alreadyInBagCheck = true
        break
      }
    }
    if(alreadyInBagCheck == false) {
      $scope.bag.push(newProduct)
      $scope.product.qtyAvailable = $scope.product.qtyAvailable - newProduct.qty
    }
    $scope.qtyField = 1
    const currentDate = new Date().getTime()
    $localStorage.lastLogDate = currentDate
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

twsApp.controller('navCtrl', ['$scope', '$rootScope', '$stateParams', 'bag', 'products', '$cookies', '$localStorage', '$sessionStorage', '$stateParams', function($scope, $rootScope, $stateParams, bag, products, $cookies, $localStorage, $sessionStorage, $stateParams){

  $scope.storage = $localStorage
  $scope.bag = bag.bag
  $scope.products = products.products

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
      $rootScope.showBag = false
    }else {
      $scope.visible = false
    }
  }

  $rootScope.showBag = false
  $scope.bagToggle = function() {
    if ($rootScope.showBag == false) {
      $rootScope.showBag = true
    }else {
      $rootScope.showBag = false
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
    var addedPrice = priceList.reduce(add, 0)
    //add

    return addedPrice.toFixed(2)
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

  $scope.removeFromBag = function(item) {
    for(var i=0; i < $scope.products.length; i++) {
      if($scope.bag[item].proID == $scope.products[i].id) {
        $scope.products[i].qtyAvailable = $scope.products[i].qtyAvailable + $scope.bag[item].qty
        break
      }
    }
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

  $scope.removeFromBag = function(item) {
    for(var i=0; i < $scope.products.length; i++) {
      if($scope.bag[item].proID == $scope.products[i].id) {
        $scope.products[i].qtyAvailable = $scope.products[i].qtyAvailable + $scope.bag[item].qty
        break
      }
    }
    $scope.bag.splice(item, 1)
  }

  $scope.checkQty = function(i) {
    if($scope.bag[i].qty < 1) {
      $scope.bag.splice(i, 1)
    }
  }

  // QTY controls
  $scope.minusQTY = function(i) {
    if($scope.bag[i].qty < 2) {
      $scope.bag.splice(i, 1)
    }else {
      $scope.bag[i].qty = $scope.bag[i].qty - 1
    }
  }
  $scope.exceedQtyAvail = false
  $scope.plusQTY = function(i) {
    if($scope.bag[i].qty >= $scope.bag[i].qtyAvailable) {
      $scope.bag[i].qty = $scope.bag[i].qtyAvailable
      $scope.exceedQtyAvail = true
      console.log('cannot exceed qtyAvailable statement')
    } else {
      $scope.bag[i].qty = $scope.bag[i].qty + 1
      console.log('plus one to QTY')
    }
  }

  //build infusionsoft checkout link
  $scope.checkoutItemsLink = function() {
    if ($scope.bag.length < 1) {
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
  $scope.deleteBag = function() {
    console.log('deleted')
    $localStorage.unpurchasedBag = []
  }
  //https://an140.infusionsoft.com/app/manageCart/processBundle

}]);
