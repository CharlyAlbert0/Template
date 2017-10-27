import { Component, OnInit,Inject } from '@angular/core';
import { LogginModel} from '../model/looginmodel';
import { LogginService } from '../service/loggin.service';
// import {MD_DIALOG_DATA} from '@angular/material';
import { MdDialog,MdDialogRef } from '@angular/material';
import {EnumLogPriority,EnumLogType} from '../../enums/enumlog';
import { ClientErrorModel } from '../model/clienterror';
import { DialogsService } from '../../../infraestructure/dialogs/service/dialogs.service';
import { EnumTypeD,EnumSizeD,EnumCategoryD,EnumIconD } from '../../../infraestructure/enums/enumdialog';
import {errorSubscribeModel} from '../../../infraestructure/loggin/model/errorSubscribe';
import {errorSubscribeBodyModel} from '../../../infraestructure/loggin/model/errorSubscribeBody';


@Component({
  selector: 'loggin-app',
  templateUrl: '../view/loggin.component.html',
})
export class LogginComponent implements OnInit {
  ListLogs: LogginModel[] ;
  // LogPriorityFilter:SelectItem[];
  // LogTypeFilter:SelectItem[];

  constructor(private _LogginService: LogginService, public dialog: MdDialog,private dialogsService: DialogsService) {  }

  getGlobalAttributes(): void {
    this._LogginService.getLogs().subscribe(result => {
      this.ListLogs = result;
    });
  }

  ngOnInit() {
    this.getGlobalAttributes();
    this.GetFilterList();

  }

  GetFilterList(){
    // this.LogPriorityFilter=[];
    // this.LogTypeFilter=[];
    // for (let enumValue in EnumLogPriority) {
    //   if (isNaN(Number(enumValue))) {
    //        this.LogPriorityFilter.push({label:enumValue,value:EnumLogPriority[enumValue]})
    //    }
    // }
    // for (let enumValue in EnumLogType) {
    //   if (isNaN(Number(enumValue))) {
    //        this.LogTypeFilter.push({label:enumValue,value:EnumLogType[enumValue]})
    //    }
    // }


  }

  Update(lga:LogginModel[]){
    this.ListLogs = null;
  }

  Refresh(){
      this.getGlobalAttributes();
  }

  InsertError(error: string,section:string,errorSubscribe:errorSubscribeModel,willShowUser:boolean = false){
    debugger
    try{


      let errorClientErrorModel = new ClientErrorModel(error,section);
      errorClientErrorModel.error=error+"/"+errorSubscribe._body;
      errorClientErrorModel.section=section;

      this._LogginService.clientLogError(errorClientErrorModel);

      if(willShowUser){
        var jsonObj=JSON.parse(errorSubscribe._body);
        if(jsonObj.error_description == null)
           jsonObj.error_description=jsonObj.error;
        if(jsonObj.message != null && jsonObj.error_description == null)
           jsonObj.error_description=jsonObj.message;

        this.dialogsService.showErrors(jsonObj.error,section,errorSubscribe, jsonObj.error_description, EnumTypeD.error,
        EnumCategoryD.notification, EnumSizeD.small, EnumIconD.warningred ).subscribe(data => {
          if(data){

          }
        });
      }
    }
    catch(error){
      this.dialogsService.showErrors("ERROR", "InsertError","","", EnumTypeD.error,
      EnumCategoryD.notification, EnumSizeD.small, EnumIconD.warningred ).subscribe(data => {
        if(data){

        }
      });
    }


  }

}
