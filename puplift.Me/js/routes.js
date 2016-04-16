angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.cameraTabDefaultPage'
      2) Using $state.go programatically:
        $state.go('tabsController.cameraTabDefaultPage');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page2
      /page1/tab4/page2
  */
  .state('tabsController.cameraTabDefaultPage', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/cameraTabDefaultPage.html',
        controller: 'cameraTabDefaultPageCtrl'
      },
      'tab4': {
        templateUrl: 'templates/cameraTabDefaultPage.html',
        controller: 'cameraTabDefaultPageCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.cartTabDefaultPage'
      2) Using $state.go programatically:
        $state.go('tabsController.cartTabDefaultPage');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab2/page3
      /page1/tab4/page3
  */
  .state('tabsController.cartTabDefaultPage', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/cartTabDefaultPage.html',
        controller: 'cartTabDefaultPageCtrl'
      },
      'tab4': {
        templateUrl: 'templates/cartTabDefaultPage.html',
        controller: 'cartTabDefaultPageCtrl'
      }
    }
  })

  .state('tabsController.cloudTabDefaultPage', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/cloudTabDefaultPage.html',
        controller: 'cloudTabDefaultPageCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.puppyPower', {
    url: '/page5',
    views: {
      'tab4': {
        templateUrl: 'templates/puppyPower.html',
        controller: 'puppyPowerCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/tab1/page2')

  

});