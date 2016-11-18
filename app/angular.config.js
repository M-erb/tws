twsApp.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$localStorageProvider', function($stateProvider, $urlRouterProvider, $locationProvider, $localStorageProvider){

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
      url: '/product-directory',
      templateUrl: 'views/product/product-directory.html',
      controller: 'productDirectoryCtrl'
    });
  $stateProvider
    .state('productInfo', {
      url: '/product-directory/product{proIndex}',
      templateUrl: 'views/product/product-info.html',
      controller: 'productInfoCtrl'
    });


  $urlRouterProvider.otherwise('/');
}])
