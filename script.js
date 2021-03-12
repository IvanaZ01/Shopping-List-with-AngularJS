var myApp = angular.module('myApp', []);

myApp.controller('myController', function($scope){
$scope.items = []
$scope.input = ''
$scope.inFocusOnLoad = function(){
    var input = document.querySelector('.input-add')
    input.focus()
}
$scope.add = function(){
    if($scope.input.length < 1){
        $scope.inFocusOnLoad()
        return
    }
    $scope.items.unshift($scope.input)
    $scope.input = ''
    $scope.inFocusOnLoad()
}
$scope.enterAdd = function(event){
    if($scope.input.length < 1)return
    if(event.keyCode === 13){
        $scope.items.unshift($scope.input)
        $scope.input = '' 
        $scope.inFocusOnLoad()
    }
}
$scope.delete = function(i){
    $scope.items.splice(i, 1)
    $scope.inFocusOnLoad()
}
})