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
 isSubmitting=false;
  onSubmit(form: any) {
    if (form.valid) {
      this.isSubmitting=true;
      
      setTimeout(() => {
        this.submitted = true;  
        this.isSubmitting = false;  
        console.log('Form Submitted!', form.value);
        form.reset();  
      }, 2000)
    } else {
     
      console.log('Form is invalid');
      this.submitted = false;
    }
  }
}
