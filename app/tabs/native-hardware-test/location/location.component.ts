import {Component, OnInit} from '@angular/core';
import {clearWatch, enableLocationRequest, watchLocation} from "nativescript-geolocation";
import {Accuracy} from "tns-core-modules/ui/enums";

@Component({
    selector: 'location',
    templateUrl: 'tabs/native-hardware-test/location/location.component.html'
})

export class LocationComponent implements OnInit {

    public buttonText = "Start location monitoring";
    public isMonitoring = false;
    public options;
    public listener;
    public monitorLongitude: string = "0";
    public monitorLatitude: string = "0";
    public monitorAltitude: string = "0";
    public monitorDirection: string = "0";
    public monitorSpeed: string = "0";

    constructor() {
    }

    ngOnInit() {
        this.options = {
            desiredAccuracy: Accuracy.high,
            updateDistance: 0.1,
            updateTime: 3000,
            minimumUpdateTime: 100
        };
        enableLocationRequest(true);
    }

    public monitor(args) {
        // >> location-monitoring
        if (this.isMonitoring) {
            clearWatch(this.listener);
            this.isMonitoring = false;
            this.buttonText = "Start location monitoring";
        } else {
            this.listener = watchLocation((loc: Location) => {
                if (loc) {
                    console.log(loc);
                    this.monitorLongitude = (loc.longitude).toFixed(4);
                    this.monitorLatitude = (loc.latitude).toFixed(4);
                    this.monitorAltitude = (loc.altitude).toFixed(2);
                    this.monitorDirection = (loc.direction).toFixed(2);
                    this.monitorSpeed = (loc.speed).toFixed(2);
                }
            }, (e) => {
                console.error("Error: " + e.message);
            }, this.options);

            this.isMonitoring = true;
            this.buttonText = "Stop location monitoring";
        }
        // << location-monitoring
    }
}
