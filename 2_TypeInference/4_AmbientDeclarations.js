/// <reference path="typings/knockout.d.ts" />
/// <reference path="typings/angular.d.ts" />
var AmbientDeclarations;
(function (AmbientDeclarations) {
    var name = ko.observable('Roshan');
    var id = ko.observable(1);
    var guy = {
        id: id,
        name: name
    };
    var value = guy.name();
})(AmbientDeclarations || (AmbientDeclarations = {}));
