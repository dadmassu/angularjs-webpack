export default {
    template: "<div><ul><li ng-repeat='name in names'>{{name}}</li></ul></div>",
    bindings: {
        names: '=',
    },
}