import { MdDialogRef } from '@angular/material';
import { Component } from '@angular/core';
import {InputSimpleModel} from '../model/inputsimplemodel';

@Component({
    selector: 'input-dialog',
    templateUrl: '../view/dialogsinput.component.html',
    styleUrls: ['../view/dialogsinput.component.css']
})
export class DialogInput {

    public user: string;
    public nombre:string;
    public password:string;
    public result:InputSimpleModel = new InputSimpleModel();
    constructor(public dialogRef: MdDialogRef<DialogInput>) {

    }

    Ok(){
      debugger;
        this.result.Result=true;
        // this.result.Nombre = this.nombre;
        // this.result.User = this.user;
        // this.result.Password = this.password;
        this.dialogRef.close(this.result);
    }

    Cancel(){
      this.dialogRef.close();
    }

}
