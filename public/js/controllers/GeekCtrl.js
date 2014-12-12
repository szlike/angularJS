angular.module('GeekCtrl', ['Skills']).controller('GeekController', function($scope, skills){
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
);