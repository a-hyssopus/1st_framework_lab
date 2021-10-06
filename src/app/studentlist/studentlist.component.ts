import {Component} from '@angular/core';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styles: [`
    .student {
      margin-bottom: 10px;
    }`
  ]
})

export class StudentlistComponent {
  students: { name: string, mark: number }[] = [{name: 'Daria Balutel', mark: 10}];
  newStudent: string = '';
  message: string = '';

  addStudent(): void {
    let newRecord = {
      name: '',
      mark: 0
    };
    let newMark = +this.newStudent.slice(-2)
      // [0-9, ]
    this.newStudent = this.newStudent.replace(/(, ).*/g, '')
    if ((newMark > 10 || newMark < 1 || isNaN(newMark)) && this.newStudent !== '') {
      this.message = "Please, enter the values in the following format: your name, comma/dot/whitespace and your valid mark (0-10)"
    } else {
      newRecord.name = this.newStudent;
      newRecord.mark = newMark;
      this.students.push(newRecord);
      this.newStudent = ''
    }
  }

  removeStudent(): void {
    this.students = this.students.filter(el => el.mark > 5);
  }
}

