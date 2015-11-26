(function() {
    'use strict';
    angular.module('prisonMaster.employees').controller('ManageEmployeesController', manageEmployees);
    
    function manageEmployees() {
        var ctrl = this;
        
        ctrl.employees = [
            {
                first_name: "John",
                last_name: "Doe",
                position: "Cook",
                security_clearance: 2
            },
            {
                first_name: "John",
                last_name: "Foo",
                position: "Guard",
                security_clearance: 4
            },
            {
                first_name: "John",
                last_name: "Wong",
                position: "Janitor",
                security_clearance: 2
            },
            {
                first_name: "John",
                last_name: "Kim",
                position: "Garbage Collector",
                security_clearance: 2
            },
            {
                first_name: "Java",
                last_name: "the Hutt",
                position: "Guard",
                security_clearance: 5
            }
        ];
    }
})();