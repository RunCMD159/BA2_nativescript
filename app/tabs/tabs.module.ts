import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { TabsRoutingModule } from "./tabs-routing.module";
import { TabsComponent } from "./tabs.component";
import { HomeComponent } from "./home/home.component";
import { NativeHardwareTestComponent } from "./native-hardware-test/native-hardware-test.component";
import { PerformanceComponent } from "./performance/performance.component";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule, NativeScriptRouterModule } from "nativescript-angular";
import { CameraComponent } from "./native-hardware-test/camera/camera.component";
import { LocationComponent } from './native-hardware-test/location/location.component';
import { HttpClientModule } from '@angular/common/http';
import { PerformanceService } from './performance/performance.service';
import { FileComponent } from './native-hardware-test/file/file.component';

@NgModule({
    imports: [
        NativeScriptFormsModule,
        NativeScriptCommonModule,
        NativeScriptRouterModule,
        TabsRoutingModule,
        HttpClientModule,
    ],
    declarations: [
        TabsComponent,
        HomeComponent,
        NativeHardwareTestComponent,
        PerformanceComponent,
        CameraComponent,
        LocationComponent,
        FileComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    providers: [PerformanceService]
})
export class TabsModule {
}
