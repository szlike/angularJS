app.controller('MainCtrl', [
'$scope',
'sessioninfo',
function($scope){
	

	$scope.homePage = function (){
		location.href = '#/';
	};

	$scope.myProfilePage = function(){
		location.href = '#/myProfile.html'
	}

	$scope.mySkillPage = function(){
		location.href = '#/myskill.html'
	}

	$scope.myFriendPage = function(){
		location.href = '#/myFriend.html'
	}
}
]
);