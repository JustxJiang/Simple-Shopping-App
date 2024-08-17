import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'description',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './description.component.html',
  styleUrl: './description.component.css'
})
export class DescriptionComponent {
  quantity:number = 1
  totalprice:number = 0
  price:number = 6.99
  available_quantity:number = 16
  errorMsg:string = ''

  invalid(){
    return this.quantity > this.available_quantity
  }
  submit(){
    this.available_quantity -= this.quantity
    this.totalprice = this.price * this.quantity
    
  }
}
