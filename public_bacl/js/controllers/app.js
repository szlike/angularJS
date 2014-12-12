angular.module('userProfile', [])
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
.factory('skills', [
	function(){
  		var o = {
			skills: [
			{skill: 'Java', rate: 5},
  			{skill: 'C++', rate: 2},
  			{skill: 'MySQL', rate: 15},
  			{skill: 'MongoDB', rate: 9},
  			{skill: 'JavaScript', rate: 4},
			{skill: 'AngularJS', rate: 10},
			{skill: 'OO Design', rate: 8}
			]
		};
		return o;
	}]
)
.controller('ProfileCtrl', [
'$scope',
'skills',
function($scope, skills){
	/*$scope.skills = [
  		{title: 'skill 1', upvotes: 5},
  		{title: 'skill 2', upvotes: 2},
  		{title: 'skill 3', upvotes: 15},
  		{title: 'skill 4', upvotes: 9},
  		{title: 'skill 5', upvotes: 4}
		]; */
	$scope.skills = skills.skills;
	$scope.addskill = function(){
		if(!$scope.skill || $scope.skill === '') { return; }
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

function myContoller(){

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
}

