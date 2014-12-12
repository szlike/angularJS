
/*.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
      url: '/home',
      templateUrl: '/home.html',
      controller: 'MainCtrl'
    });

    $urlRouterProvider.otherwise('home');
}
]) */

app.controller('SkillCtrl', [
'$scope',
'skill',
function($scope, skills){
	$scope.skills = skills.skills;
  
	$scope.addskill = function(){
		if(!$scope.skill || $scope.skill === '') { return; }
    console.log($scope.skill);
		$scope.skills.push({
			skill: $scope.skill,
			link: $scope.link,
			rate: 0});
		$scope.skill = '';
		$scope.link = '';
	};
	$scope.incrementUpvotes = function(skill) {
  		skill.rate += 1;
	};
  	$scope.test = 'Hello world!';
}
]
);

/*function myContoller(){

  var data = {
    labels : ["January","February","March","April","May","June","July"],
    datasets : [
      {
        fillColor : "rgba(220,220,220,0.5)",
        strokeColor : "rgba(220,220,220,1)",
        pointColor : "rgba(220,220,220,1)",
        pointStrokeColor : "#fff",
        data : [65,59,90,81,56,55,40]
      },
      {
        fillColor : "rgba(151,187,205,0.5)",
        strokeColor : "rgba(151,187,205,1)",
        pointColor : "rgba(151,187,205,1)",
        pointStrokeColor : "#fff",
        data : [28,48,40,19,96,27,100]
      }
    ]
  }

  $scope.myChart.data = data;
} */

