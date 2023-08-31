import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SwalService {

  constructor() { }

  callSwal(title: string, text: string = "", type: SweetAlertIcon = "success"){
    const Toast = Swal.mixin({
      toast: true,
      position: 'bottom-end',
      timer: 3000,
      timerProgressBar: true,
      showConfirmButton:false
    });
    Toast.fire(title, text, type)
  }
}

export type SweetAlertIcon = "success" | "info" | "question" | "warning" | "error"
