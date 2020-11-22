import { Component, OnInit } from '@angular/core';
import { SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-command',
  templateUrl: './show-command.component.html',
  styleUrls: ['./show-command.component.css']
})
export class ShowCommandComponent implements OnInit {

  constructor(private service:SharedService) { }

  CommandsList:any=[];

  ModalTitle:string;

  ActivateAddEditComp:boolean=false;

  command:any;

  ngOnInit(): void {
    this.refreshCommandsList();
  }

  addClick(){
    this.command={
      id:0,
      howTo:"",
      line:"",
      platform:""
    }
    this.ModalTitle="Add Command";
    this.ActivateAddEditComp=true;
  }

  editClick(item){
    this.command=item;
    this.ModalTitle="Edit Command";
    this.ActivateAddEditComp=true;
  }

  closeClick(){
    this.ActivateAddEditComp=false;
    this.refreshCommandsList();
  }

  refreshCommandsList(){
    this.service.getCommandsList().subscribe(data=>{
      this.CommandsList=data;
    })
  }

}
