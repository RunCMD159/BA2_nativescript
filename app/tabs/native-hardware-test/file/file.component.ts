import { Component, OnInit } from '@angular/core';
import { File, Folder, knownFolders } from "file-system";

@Component({
    selector: 'file',
    templateUrl: 'tabs/native-hardware-test/file/file.component.html'
})

export class FileComponent implements OnInit {
    documents;
    public folderName: string = 'testdir';
    public fileName: string = 'testFile.txt';
    public fileTextContent: string;

    public successMessage: string;
    public writtenContent: string;
    public isItemVisible: boolean = false;

    public file: File;
    public folder: Folder;
    fileText: string;

    constructor() {
    }

    ngOnInit() {

        this.documents = knownFolders.documents();
        let testdir = this.documents.getFolder(this.folderName);
        let filePath = testdir.getFile(this.fileName);
    }

    onSave() {
        this.folder = this.documents.getFolder(this.folderName);
        this.file = this.folder.getFile(this.fileName);

        this.file.writeText(this.fileText)
            .then(result => {
                this.file.readText()
                    .then(res => {
                        this.successMessage = "Successfully saved in " + this.file.path;
                        this.writtenContent = res;
                        this.isItemVisible = true;
                        this.fileText = res;
                    });
                alert('gespeichert');
            }).catch(err => {
            console.log(err);
        });
    }

    onLoad() {
        this.folder = this.documents.getFolder(this.folderName);
        this.file = this.folder.getFile(this.fileName);
        this.file.readText()
            .then(res => {
                this.successMessage = "Successfully saved in " + this.file.path;
                this.writtenContent = res;
                this.isItemVisible = true;
                this.fileText = res;
            }).catch(_ => {
            alert('Fehler beim lesen der Datei');
        });
    }
}