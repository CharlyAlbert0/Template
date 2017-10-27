import { MdDialogRef } from '@angular/material';
import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'confirm-dialog',
    templateUrl: '../view/dialogsDevelop.component.html',
    styleUrls: ['../view/dialogsDevelop.component.css']
})
export class DialogDevelopComponent {

    public title: string;
    public message: string;
    public type:number;
    public size:number;
    public isQuestion:boolean;
    public icon:number;

    isLinear = false;
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;





    constructor(public dialogRef: MdDialogRef<DialogDevelopComponent>,private _FormBuilder:FormBuilder) {

      this.firstFormGroup = this._FormBuilder.group({
       firstCtrl: ['', Validators.required]
     });
     this.secondFormGroup = this._FormBuilder.group({
       secondCtrl: ['', Validators.required]
     });
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
