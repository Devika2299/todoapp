import { Injectable } from '@angular/core';
import { datamodel } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class DataserviceService {
  data: datamodel[] = [];

  constructor() {}
  addtask(taskk: string) {
    let dataa: datamodel = {
      id: Date.now(),
      status: false,
      taskname: taskk,
    };
    this.data.push(dataa);
  }
  returnfunction() {
    return this.data;
  }


  deleteclick(n: number) {
    this.data.splice(n, 1);
  }

  finishtodo(finish: number) {
    let finishh = this.data.findIndex(c=>c.id==finish);
    this.data[finishh].status = !this.data[finishh].status;
   }
  
  
   clearall() {
    this.data.splice(0, this.data.length);
  
   }
}
