export default {
    template: `
    <h1>This is the small component speaking</h1><br/>
    <input type="text" ng-model="$ctrl.content">
    {{$ctrl.content}}
    `,
    bindings: {
        content: '=',
    },
}