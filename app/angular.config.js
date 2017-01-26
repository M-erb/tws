twsApp.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$localStorageProvider', '$uiViewScrollProvider', 'AngularyticsProvider', function($stateProvider, $urlRouterProvider, $locationProvider, $localStorageProvider, $uiViewScrollProvider, AngularyticsProvider){

  $uiViewScrollProvider.useAnchorScroll();
  $locationProvider.html5Mode(true);
  $localStorageProvider.setKeyPrefix('');
  AngularyticsProvider.setEventHandlers(['Console', 'GoogleUniversal']);

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
// shopping cart
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
    .state('thankyou-order', {
      url: '/thankyou-order',
      templateUrl: 'views/pages/thankyou-order.html',
      controller: 'homeCtrl'
    });

// misc
  $stateProvider
    .state('notfound', {
      url: '/404',
      templateUrl: 'views/templates/404.html',
      controller: 'homeCtrl'
    });
  $stateProvider
    .state('showcase', {
      url: '/amos-invite-samples',
      templateUrl: 'views/templates/show-case.html',
      controller: 'showcaseCtrl'
    });


  $urlRouterProvider.otherwise('/404');
}]);

twsApp.run(['$rootScope', '$location', '$stateParams', '$anchorScroll', 'Angularytics', function($rootScope, $location, $stateParams, $anchorScroll, Angularytics){

  $rootScope.$on('$stateChangeSuccess', function() {
   document.body.scrollTop = document.documentElement.scrollTop = 0;
  });

  Angularytics.init();
}]);
