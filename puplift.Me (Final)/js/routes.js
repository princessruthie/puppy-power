angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.cuteWars', {
    url: '/',
    views: {
      'tab1': {
        templateUrl: 'templates/cuteWars.html',
        controller: 'cuteWarsCtrl'
      }
    }
  })

  .state('tabsController.dogRun', {
    url: '/page3',
    views: {
      'tab7': {
        templateUrl: 'templates/dogRun.html',
        controller: 'dogRunCtrl'
      }
    }
  })

  .state('tabsController.puppyPlayDate', {
    url: '/page4',
    views: {
      'tab6': {
        templateUrl: 'templates/puppyPlayDate.html',
        controller: 'puppyPlayDateCtrl'
      }
    }
  })

  .state('tabsController.amIReadyForAPup', {
    url: '/page6',
    views: {
      'tab5': {
        templateUrl: 'templates/amIReadyForAPup.html',
        controller: 'amIReadyForAPupCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('puppyPower', {
    url: '/page5',
    templateUrl: 'templates/puppyPower.html',
    controller: 'puppyPowerCtrl'
  })

$urlRouterProvider.otherwise('/page5')

  

});