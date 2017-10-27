import { Component, OnInit,Inject } from '@angular/core';
import { GlobalAttributesModel} from '../model/globalattributesmodel';
import { GlobalAttributesService } from '../service/globalattributes.service';
import {MD_DIALOG_DATA} from '@angular/material';
import { MdDialog,MdDialogRef } from '@angular/material';

@Component({
  selector: 'globalattributes-app',
  templateUrl: '../view/globalattributes.component.html',
  styleUrls:['../view/globalattributes.component.css']
})
export class GlobalAttributesComponent implements OnInit {

 ListGlobals: GlobalAttributesModel[] ;

  constructor(private _GlobalAttributesService: GlobalAttributesService, @Inject(MD_DIALOG_DATA) public data: any,
  public dialogRef: MdDialogRef<GlobalAttributesComponent>) {  }

  getGlobalAttributes(): void {
    this._GlobalAttributesService.getAllGlobalAttributes().subscribe(result => {
      this.ListGlobals = result;
    });
  }

  ngOnInit() {
    this.getGlobalAttributes();
  }

  Update(ga:GlobalAttributesModel){
    //this.ListGlobals = null;
    this._GlobalAttributesService.update(ga).subscribe(result => {
      this.ListGlobals = result;
    });
  }

  Refresh(){
      this.getGlobalAttributes();
  }

  close(){
    this.dialogRef.close(true);

  }

}
