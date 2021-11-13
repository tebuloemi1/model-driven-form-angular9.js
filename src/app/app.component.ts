import { Component } from '@angular/core'; 
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mdf';

  myForm = new FormGroup({
    firstname: new FormControl('emile', [Validators.required,Validators.minLength(10)]),
    lastname: new FormControl('', [Validators.required,Validators.minLength(10)]),
    email: new FormControl(),
    gender: new FormControl(),
    isMarried: new FormControl(),
  })
   
  
  onSubmit() {
    console.log("form submitted");
  }
}



 
