import {Component, OnInit} from '@angular/core';
import {ImageAsset} from "tns-core-modules/image-asset";
import {isAvailable, requestPermissions, takePicture} from "nativescript-camera";

@Component({
    selector: 'camera',
    templateUrl: 'tabs/native-hardware-test/camera/camera.component.html'
})

export class CameraComponent implements OnInit {

    public imageTaken: ImageAsset;
    public saveToGallery: boolean = true;
    public keepAspectRatio: boolean = true;
    public width: number = 300;
    public height: number = 300;

    constructor() {
    }

    ngOnInit() {
        requestPermissions();
    }

    onTakePhoto() {
        let options = {
            width: this.width,
            height: this.height,
            keepAspectRatio: this.keepAspectRatio,
            saveToGallery: this.saveToGallery
        };

        takePicture(options)
            .then(imageAsset => {
                this.imageTaken = imageAsset;
                console.log("Size: " + imageAsset.options.width + "x" + imageAsset.options.height);
            }).catch(err => {
            console.log(err.message);
        });
    }

    onCheckForCamera() {
        let isCameraAvailable = isAvailable();
        console.log("Is camera hardware available: " + isCameraAvailable);
    }
}
