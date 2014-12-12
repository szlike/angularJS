angular.module('NerdCtrl', ['UserInfo','Skills','NerdService']).controller('NerdController', function($scope, userinfo, skills, Nerd) {

	$scope.userinfo = userinfo;
		$scope.updateinfo = function (){
			/*if(!$scope.userinfo || $scope.userinfo === '') { return; }*/
			$scope.userinfo = $scope.userinfo1;
			
			$scope.userinfo1 = '';
		};

		Nerd.get()
	        .success(function (src) {
	            if (src != null){

	            	$scope.data = src;
	            
	            	$scope.skills = $scope.data[0].skillrating;
	            	$scope.dat = $scope.data;
	            }
	        })
	        .error(function (error) {
	            $scope.status = 'Unable to load data: ' + error.message;
	        });
	    
		$scope.addskill = function(){
			if(!$scope.skill || $scope.skill === '') { return; }
				$scope.skills.push({
				skill: $scope.skill,
				rate: 0});
				$scope.skill = '';
		};
		$scope.incrementUpvotes = function(skill) {
	  		skill.rate += 1;
	  		console.log($scope.dat);
	  		Nerd.update("547cb3ccb00705294ecac69c", $scope.dat)
	  		.success(function () {
	  			console.log("success");
              	$scope.status = 'Updated Customer! Refreshing customer list.';
          	})
          	.error(function (error) {
          		console.log("nope");
              $scope.status = 'Unable to update customer: ' + error.message;
          	});
		};

		var radarChartData = {
		labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
		datasets: [
			{
				label: "My Skill Summary",
				fillColor: "rgba(220,220,220,0.2)",
				strokeColor: "rgba(220,220,220,1)",
				pointColor: "rgba(220,220,220,1)",
				pointStrokeColor: "#fff",
				pointHighlightFill: "#fff",
				pointHighlightStroke: "rgba(220,220,220,1)",
				data: [65,59,90,81,56,55,40]
			}
		]
	};


});