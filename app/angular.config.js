twsApp.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$localStorageProvider', '$uiViewScrollProvider', function($stateProvider, $urlRouterProvider, $locationProvider, $localStorageProvider, $uiViewScrollProvider){

  $uiViewScrollProvider.useAnchorScroll();
  $locationProvider.html5Mode(true);
  $localStorageProvider.setKeyPrefix('');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'views/pages/home.html',
      controller: 'homeCtrl'
    });
  $stateProvider
    .state('policy', {
      url: '/policy',
      templateUrl: 'views/pages/policy.html',
      controller: 'policyCtrl'
    });
  $stateProvider
    .state('contactUs', {
      url: '/contact-us',
      templateUrl: 'views/pages/contact-us.html',
      controller: 'contactCtrl'
    });
  $stateProvider
    .state('aboutUS', {
      url: '/about-us',
      templateUrl: 'views/pages/about-us.html',
      controller: 'aboutCtrl'
    });

  $stateProvider
    .state('productDirectory', {
      url: '/products',
      templateUrl: 'views/product/product-directory.html',
      controller: 'productDirectoryCtrl'
    });
  $stateProvider
    .state('productInfo', {
      url: '/product-directory/product{proIndex}',
      templateUrl: 'views/product/product-info.html',
      controller: 'productInfoCtrl'
    });
  $stateProvider
    .state('shoppingBag', {
      url: '/shopping-bag',
      templateUrl: 'views/product/shopping-bag.html',
      controller: 'bagCtrl'
    });
  $stateProvider
    .state('notfound', {
      url: '/404',
      templateUrl: 'views/templates/404.html',
      controller: 'homeCtrl'
    });


  $urlRouterProvider.otherwise('/404');
}]);

twsApp.run(['$rootScope', '$location', '$stateParams', '$anchorScroll', function($rootScope, $location, $stateParams, $anchorScroll){

  $rootScope.$on('$stateChangeSuccess', function() {
   document.body.scrollTop = document.documentElement.scrollTop = 0;
  });
}]);
