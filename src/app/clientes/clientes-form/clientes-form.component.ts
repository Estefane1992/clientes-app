import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-clientes-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './clientes-form.component.html',
  styleUrl: './clientes-form.component.css'
})
export class ClientesFormComponent implements OnInit{

  cliente!: Cliente;
  
  constructor() {
    this.cliente = new Cliente();
    
    
  }
  ngOnInit(): void { }

  onSubmit() {
    console.log(this.cliente);
  }

}
