import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],  //import for using the ngModel
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  // in angular we working with the typscript language so that ts is working on the
  // oop principle so we declare everything in that class

  /////////////////////////// Data Types & Declaration--------------------------

  // -string, -number, -boolean, -date

  courseName: string='Angular 19-LP';
  inputType = 'radio';
  rollNo : number= 123;
  isIndian: boolean = false;
  stateName:string='Punjab';

  myClassName: string= 'bg-primary';

  currentDate: Date= new Date() //like js because it build upon the javascript

// signal
  firstName=signal('atmaca');








  // every class has a default constructor a automatic function that run when func object is calling

  constructor(){
    // in constructor we access all variable that declared in the that class using '' this '' keyword
    // this.courseName
    // this.inputType=123 //  throwing error because data type is change

  }


  // event binding for triggering html data to ts file using functions

  changeCourseName() {
    this.courseName='angular 19-crash'

    // for signal name change working in this one also
    this.firstName.set("kaglur")
  }

  showAlert(message: string) {
    alert(message)

  }



}
