import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiServiceService } from '../api-service.service'
import { IJourney } from '../Models/Models';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  formulario: FormGroup;
  bmessage: boolean = false;
  bloading: boolean = false;
  contmessage: string = "";

  journeyList : IJourney[] = [];


  constructor(private _apiService: ApiServiceService,private form: FormBuilder) {
    this.formulario = this.form.group({
      origen: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
      destino: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
    })
  }

  enviar() {
    if (this.formulario.valid) {
      if (this.formulario.value.origen == this.formulario.value.destino) {
        this.bmessage = true;
        this.contmessage = "Origen y destino no pueden ser iguales";
      }else{
        this.bmessage = false;
        this.bloading = true;
        this._apiService.getJourney(this.formulario.value.origen,this.formulario.value.destino).subscribe((data: IJourney[]) => {
          console.log(data);
          this.journeyList = data;
        });
      }
    } else {
      this.bmessage = true;
      this.contmessage = "Complete todos los campos"
    }

  }

  hasErrors(controlName: string, errorType: string) {
    return this.formulario.get(controlName)?.hasError(errorType) && this.formulario.get(controlName)?.touched;
  }
}
