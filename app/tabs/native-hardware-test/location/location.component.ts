import { Component, OnInit } from "@angular/core";
import { clearWatch, enableLocationRequest, Location, watchLocation } from "nativescript-geolocation";
import { Accuracy } from "tns-core-modules/ui/enums";

@Component({
    selector: "location",
    templateUrl: "tabs/native-hardware-test/location/location.component.html"
})

export class LocationComponent implements OnInit {

    buttonText = "Geodaten anzeigen";
    isMonitoring = false;
    options;
    listener;
    monitorLongitude: string = "0";
    monitorLatitude: string = "0";
    monitorAltitude: string = "0";
    monitorDirection: string = "0";
    monitorSpeed: string = "0";

    constructor() {
    }

    ngOnInit() {
        this.options = {
            desiredAccuracy: Accuracy.high,
            updateDistance: 0.1,
            updateTime: 3000,
            minimumUpdateTime: 100
        };
    }

    monitor(args) {
        enableLocationRequest().then((success) => {
            alert("Standortdaten anzeigen");
        }).catch((error) => {
            alert("Standortdaten können nicht angezeigt werden");
        });
        if (this.isMonitoring) {
            clearWatch(this.listener);
            this.isMonitoring = false;
            this.buttonText = "Start location monitoring";
        } else {
            this.listener = watchLocation((loc: Location) => {
                if (loc) {
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
    }
}
