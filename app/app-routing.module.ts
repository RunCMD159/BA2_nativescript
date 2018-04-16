import {NgModule} from "@angular/core";
import {Routes} from "@angular/router";
import {NativeScriptRouterModule} from "nativescript-angular/router";
import {TabsComponent} from "./tabs/tabs.component";
import {TabsModule} from "./tabs/tabs.module";

const routes: Routes = [
    {path: "", redirectTo: "/tabs", pathMatch: "full"},
    {path: "tabs", component: TabsComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes),
        TabsModule],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {
}
