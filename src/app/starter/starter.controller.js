class controller {
    constructor($scope, $http) {
        this.$scope = $scope;
        this.$scope.name = "dawit";
        this.$http = $http;
        this.selamta = "";
        this.contacts = "example.com";
        this.counter = 0;
    }

    $onInit() {
        this.$http.get('http://127.0.0.1:5000/')
            .then((datas) => {
                this.selamta = datas.data;
                console.log('inside', this.selamta);

            }, (datas) => {
                console.log(datas);
            }).then(() => { console.log('outside', this.selamta) })
    }

    count() {
        this.counter++;
    }

    reset() {
        this.counter = 0;
    }

}

export default controller;