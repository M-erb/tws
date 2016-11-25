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

twsApp.controller('productInfoCtrl', ['$scope', '$stateParams','products', '$cookies', '$localStorage', '$sessionStorage', '$stateParams', function($scope, $stateParams, products, $cookies, $localStorage, $sessionStorage, $stateParams){

  $scope.storage = $localStorage
  $scope.product = products.products[$stateParams.proIndex]
  $scope.pagetitle = ''//$scope.product.name

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

  /*$scope.tutList = directory.directory[$stateParams.phaseIndex].tutList[$stateParams.tutIndex]
  $scope.storage = $localStorage
  $scope.pageClass = directory.directory[$stateParams.phaseIndex].class

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
  });*/

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

twsApp.controller('navCtrl', ['$scope', '$stateParams','products', '$cookies', '$localStorage', '$sessionStorage', '$stateParams', function($scope, $stateParams, products, $cookies, $localStorage, $sessionStorage, $stateParams){

  $scope.storage = $localStorage
  //$scope.phase = products.products[$stateParams.phaseIndex]
  //$scope.pageClass = $scope.phase.class
  $scope.visible = false;
  $scope.mainNavToggle = function() {
    if ($scope.visible == false) {
      $scope.visible = true
    }else {
      $scope.visible = false
    }
  }

  $scope.searchVisable = false
  $scope.searchToggle = function() {
    if ($scope.searchVisable == false) {
      $scope.searchVisable = true
    }else {
      $scope.searchVisable = false
    }
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
