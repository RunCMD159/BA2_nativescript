import {Component, OnInit} from "@angular/core";

@Component({
    selector: "Home",
    templateUrl: "tabs/home/home.component.html",
    styleUrls: ["tabs/home/home.component.css"]
})
export class HomeComponent implements OnInit {

    homeText: string = "Diese Applikation wurde mit " +
        "dem NativeScript Framework und dem Angular Framework entwickelt.\n" +
        "  Beim Wechsel in den zweiten Tab werden 10000 Testdaten generiert.\n" +
        '  Zum Starten des Tests muss der "Test starten"-Button gedrückt werden.\n' +
        '  Um den Test erneut durchführen zu können, kann der "Test zurücksetzten"-Button ' +
        "gedrückt werden, welcher erneut 10000 Testdaten erzeugt.\n" +
        "  Im dritten Tab kann die native Hardware des mobilen Endgerätes getestet werden.\n" +
        '  Um die Standortdaten abzufragen muss der "Geodaten anzeigen"-Button gedrückt werden.\n' +
        '  Mit dem "Foto aufnehmen"-Button wird die Kamera geöffnet und ein Foto kann aufgenommen werden.\n' +
        " Nachdem ein Foto aufgenommen wurde, wird es unter dem Schalter angezeigt." +
        ' Im Textfeld am unteren Ende des Tabs kann ein Text eingegeben werden der über den "Speichern"-Button' +
        " in eine Datei auf dem lokalen Dateisystem geschrieben werden." +
        'Über den "Laden"-Button kann diese Datei ausgelesen werden';

    constructor() {
        /* ***********************************************************
        * Use the constructor to inject services.
        *************************************************************/
    }

    ngOnInit(): void {
        /* ***********************************************************
        * Use the "ngOnInit" handler to initialize data for the view.
        *************************************************************/
    }
}
