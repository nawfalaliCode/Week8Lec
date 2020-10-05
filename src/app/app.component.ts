import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  cpu = "";
  ram = 0.0;
  ssd = 0.0;
  type = "";

  db = [];

  newDevice() {
    this.db.push({ cpu: this.cpu, ram: this.ram, type: this.type, ssd: this.ssd });
  }

  getPCnumber(type) {
    let counter = 0;
    console.log(type);

    for (let i = 0; i < this.db.length; i++) {
      if (this.db[i].type === type)
        counter++;
    }
    return counter;
  }

  deleteDeviceByType(type) {
    let i = 0;
    while (i < this.db.length) {
      if (this.db[i].type === type) {
        this.db.splice(i, 1);
      } else i++;
    }
  }

  deleteDeviceById(id) {
    this.db.splice(id, 1);

  }



  /*
  studentName = "";
  marks = [];
  mark = 0;

  addMark() {
    this.marks.push(this.mark);
  }

  getAverage() {
    let sum = 0;
    this.marks.forEach(item => {
      sum += item;
    });
    return sum / this.marks.length;
  }

  getMax() {
    let max;
    if (this.marks.length > 0) {
      max = this.marks[0];
      for (let i = 1; i < this.marks.length; i++) {
        if (max < this.marks[i])
          max = this.marks[i];
      }
      return max;
    }
  }
  getMin() {
    let min;
    if (this.marks.length > 0) {
      min = this.marks[0];
      for (let i = 1; i < this.marks.length; i++) {
        if (min > this.marks[i])
          min = this.marks[i];
      }
      return min;
    }
  }
  clearMarks() {
    this.marks = [];
  }

*/

}