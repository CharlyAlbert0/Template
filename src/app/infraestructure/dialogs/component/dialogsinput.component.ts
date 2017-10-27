import { MdDialogRef } from '@angular/material';
import { Component } from '@angular/core';
import {InputSimpleModel} from '../model/inputsimplemodel';

@Component({
    selector: 'input-dialog',
    templateUrl: '../view/dialogsinput.component.html',
    styleUrls: ['../view/dialogsinput.component.css']
})
export class DialogInput {

    public title: string;
    public message: string;
    public type:number;
    public size:number;
    public isQuestion:boolean;
    public icon:number;
    public TextInput:string;
    public result:InputSimpleModel = new InputSimpleModel();
    constructor(public dialogRef: MdDialogRef<DialogInput>) {

    }

    Ok(){
      debugger;
        this.result.Result=true;
        this.result.TextInput = this.TextInput;
        this.dialogRef.close(this.result);
    }

    Cancel(){
      this.dialogRef.close();
    }

}
