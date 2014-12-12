angular.module('testCtrl', []).controller('testCtrl', function($scope) {
    $scope.someData = {
        labels: [
        'Apr', 
        'May', 
        'Jun'
      ],
      datasets: [
        {
          data: [1, 7, 15, 19, 31, 40]
        },
        {
          data: [6, 12, 18, 24, 30, 36]
        }
      ]
    };



    $scope.someOptions = {
        segementStrokeWidth: 20,
        segmentStrokeColor: '#000'
    };
});