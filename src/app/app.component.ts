import { Component, numberAttribute } from '@angular/core';
import { datamodel } from './models/task.model';
import { DataserviceService } from './services/dataservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todo';
  inputdata: string = '';
  statuss:boolean=false;

  data: datamodel[] = [];
  constructor(private ds: DataserviceService) {
    this.data = ds.returnfunction();
  }
  buttonclick(){
    if(this.inputdata=='')
      alert("Enter Task");
    else
    this.ds.addtask(this.inputdata);
  }
 
  
deleteclick(d:number){
  this.ds.deleteclick(d);
}
finishtodo(item:number) {
  this.ds.finishtodo(item);
 
}

clearall() {
  this.ds.clearall();
 }



}
