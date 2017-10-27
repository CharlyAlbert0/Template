import { MdDialogRef } from '@angular/material';
import { Component } from '@angular/core';


@Component({
    selector: 'loading-dialog',
    templateUrl: '../view/loadingdialog.component.html',
    styleUrls: ['../view/loadingdialog.component.css']
})
export class LoadingDialog {

    public title: string;
    public message: string;
    public type:number;
    public size:number;
    public extrainfo:string;

    constructor(public dialogRef: MdDialogRef<LoadingDialog>) {

    }

    // Ok(){
    //     this.dialogRef.close(true)
    // }
    //
    // Cancel(){
    //
    //   this.dialogRef.close();
    // }

}
