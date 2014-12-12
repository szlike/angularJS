app.factory('skill', [
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
);
