import { MdDialogRef } from '@angular/material';
import { Component } from '@angular/core';

@Component({
    selector: 'confirm-dialog',
    templateUrl: '../view/dialogs.component.html',
    styleUrls: ['../view/dialogs.component.css']
})
export class Dialog {

    public title: string;
    public message: string;
    public type:number;
    public size:number;
    public isQuestion:boolean;
    public icon:number;

    constructor(public dialogRef: MdDialogRef<Dialog>) {

    }

    Ok(){
      debugger
        this.dialogRef.close(true)
    }

    Cancel(){
      debugger
      this.dialogRef.close();
    }

}
