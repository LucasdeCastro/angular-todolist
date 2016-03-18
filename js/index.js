var app = angular.module('todo',[]);

app.controller('todoCTRL', ['$scope', function($scope){
    var rows   = [];
    $scope.vm = {};
    $scope.vm.row = {id: null, status:'O', value:""};
    $scope.vm.filter = rows;

    $scope.add = function(event){
        if(event.which == 13 && $scope.vm.row.value !== ""){
            if($scope.vm.row.id == null){
                $scope.vm.row.id = rows.length;
                rows.push($scope.vm.row);
            }else{
                rows[$scope.vm.row.id].value = $scope.vm.row.value;
            }
            $scope.vm.row = {id: null, status:'O', value:""};
        }
    };

    $scope.remove = function(id){
        rows.splice((id + 1), 1);
        $scope.vm.filter = rows;
    };

    $scope.check = function(id){
        if(rows[id].status == 'O')
            rows[id].status = 'C';
        else
            rows[id].status = 'O';
        $scope.vm.filter = rows;
    };

    $scope.edit = function(id){
        $scope.vm.row.id = id;
        $scope.vm.row.value = rows[id].value;
    };

    $scope.filter = function(status){
        status = status || false;
        console.log('filter', status, rows);
        $scope.vm.filter = rows;
        if(status)
            $scope.vm.filter = $scope.vm.filter.filter(x => x.status == status);
    };
}]);
