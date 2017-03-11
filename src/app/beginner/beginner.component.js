class controller {
    constructor($scope) {
        this.$scope = $scope;
        this.$scope.names = ["first", "second", "third"];
    }
}

export default {
    template: "<div><ul><li ng-repeat='name in names'>{{name}}</li></ul></div>",
    controller,
}