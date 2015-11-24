angular.module('DefectsApp.services', []).
  factory('APIservice', function($http) {

    var API = {};

    
    // API.addProjects = function(project){
    //   $http({
    //     method: 'POST',
    //     url: 'https://api.aprse.com/1/classes/Projects',
    //     data:{
    //       Project: project._refObjectName,
    //       Project_id: project.ObjectID
    //     }
    //   }).success(function(){
    //     alert("Success!");
    //     $scope.disable = true;
    //   }).error(function(){
    //     alert("ERROR!");
    //   })
    // }

    API.getProjects = function(){
      return $http({
        method: 'GET',
        url: 'https://rally1.rallydev.com/slm/webservice/v2.0/projects?query=(Name contains "AIM")&pagesize=200&fetch=ObjectID'
      });
    }

    API.getDefects = function(){
      return $http({
        method: 'GET',
       // url: 'https://rally1.rallydev.com/slm/webservice/v2.0/defect?query=(((State = Open) and (Owner.Name = gangzheng.tong@ansys.com)) and (Severity <= %22Minor Problem%22))&order=Priority desc,Severity desc&fetch=true&stylesheet=/slm/doc/webservice/browser'
        url: 'https://rally1.rallydev.com/slm/webservice/v2.0/defects?query=((Owner.Name%20=%20gangzheng.tong@ansys.com)%20and%20(State%20!=%20Completed))&order=Rank&fetch=true'
      });
    }

    API.getDrivers = function() {
      return $http({
        method: 'get', 
        url: 'http://ergast.com/api/f1/2013/driverStandings.json?callback=JSON_CALLBACK'
      });
    }

    API.getDefectsForId = function(id) {
      return $http({
        method: 'JSONP', 
        url: 'http://ergast.com/api/f1/2013/drivers/'+ id +'/driverStandings.json?callback=JSON_CALLBACK'
      });
    }

    API.getDriverRaces = function(id) {
      return $http({
        method: 'JSONP', 
        url: 'http://ergast.com/api/f1/2013/drivers/'+ id +'/results.json?callback=JSON_CALLBACK'
      });
    }

    return API;
  });