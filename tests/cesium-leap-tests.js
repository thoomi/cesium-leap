/*global require, define, test, expect, strictEqual, ok, location */

if (typeof require === 'function' && require.config) {
    require.config({
        baseUrl: '.',
        "paths" :{
            "CesiumLeap" : "../CesiumLeap",            
            "Leap" : "../node_modules/leapjs/leap"
        },
        shim :  {
            Leap : {exports : 'Leap'}
        }
    });
    
    //Override if in "dist" mode
    if (location.href.indexOf('-dist') !== -1) {
        //Set location of principium to the dist location
        require.config({
            paths: {
                "Leap" : "../node_modules/leapjs/leap",
                'CesiumLeap': '../dist/cesiumLeap'
            }
        });
    }
}

(function (root, factory) {
    'use strict';

    if (typeof define === 'function' && define.amd) {
        // AMD.
        define(['CesiumLeap', 'Leap'], factory);
    } else {
        // Browser globals
        factory(root.CesiumLeap, root.Leap);
    }
}(this, function (CesiumLeap, Leap) {
    'use strict';

    test('version test', function () {
        expect(1);
        var cesiumLeap = new CesiumLeap({});
        strictEqual(cesiumLeap.version,
            '0.0.1',"CesiumLeap Version is: " + cesiumLeap.version);
    });

    test('leap version test', function () {
        expect(1);
        ok(Leap.Controller);
    });
}));
