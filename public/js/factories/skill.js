angular.module('Skills', []).factory('skills', [
	function(){
  		var o = { id : ""
			, skills: [
			   	{skill: 'Java', rate: 0},
         		{skill: 'C++', rate: 0},
  			 	{skill: 'MySQL', rate: 0},
  			 	{skill: 'MongoDB', rate: 0},
  			 	{skill: 'JavaScript', rate: 0},
			   	{skill: 'AngularJS', rate: 0},
			   	{skill: 'OO Design', rate: 0}
			]
		};
		return o;
	}]
);
