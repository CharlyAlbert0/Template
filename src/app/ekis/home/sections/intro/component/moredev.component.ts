import { Component, OnInit } from '@angular/core';
import { DialogsService } from '../../../../../infraestructure/dialogs/service/dialogs.service';
import { EnumTypeD,EnumSizeD,EnumCategoryD,EnumIconD } from '../../../../../infraestructure/enums/enumdialog';


@Component({
  selector: 'app-/moredev',
  templateUrl: '../view/moredev.component.html',
  styleUrls: ['../view/moredev.component.css']
})
export class MoreDevComponent implements OnInit {


  constructor(private _DialogsService: DialogsService) { }

  ngOnInit() {


  }



}
