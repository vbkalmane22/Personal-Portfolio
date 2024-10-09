import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-getintouch',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './getintouch.component.html',
  styleUrl: './getintouch.component.css'
})
export class GetintouchComponent {
  submitted = false; 
 
  onSubmit(form: any) {
    if (form.valid) {
      
      console.log('Form Submitted!', form.value);
      this.submitted = true;
      form.reset(); 
    } else {
     
      console.log('Form is invalid');
      this.submitted = false;
    }
  }
}
