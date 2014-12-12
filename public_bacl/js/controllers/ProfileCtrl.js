app.controller('ProfileCtrl', ['$scope','userinfo', 
	function($scope, userinfo){

		$scope.userinfo = userinfo;
		console.log(userinfo.username);

		$scope.updateinfo = function (){
			/*if(!$scope.userinfo || $scope.userinfo === '') { return; }*/
			$scope.userinfo = $scope.userinfo1;
			
			$scope.userinfo1 = '';
		};


}
]
);