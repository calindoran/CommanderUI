import { Component, Input, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-dep',
  templateUrl: './add-edit-dep.component.html',
  styleUrls: ['./add-edit-dep.component.css']
})
export class AddEditDepComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() command:any;
  howTo:string;
  line:string;
  platform:string;

  ngOnInit(): void {
    this.howTo=this.command.howTo;
    this.line=this.command.line;
  }

  addCommand(){
    var val = {
      howTo:this.howTo,
      line:this.line,
      platform:this.platform
    }
    this.service.addCommand(val).subscribe(res=>{
      alert(res.toString());
    });

  }

  updateCommand(){
    var val = {
      howTo:this.howTo,
      line:this.line,
      platform:this.platform
    }
    this.service.addCommand(val).subscribe(res=>{
      alert(res.toString());
    });
  }

}
