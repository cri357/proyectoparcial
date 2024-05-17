import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
 selector: 'app-formulario',
 templateUrl: './formulario.component.html',
 styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
 titulo = "Contactanos";
 telefono: string;
 

 constructor() {
    // Generar preguntas automáticamente
    this.telefono = '';
 }

 // Método para redirigir a WhatsApp
 redirigirWhatsApp() {
  // Remove any non-numeric characters and ensure the number is in international format
  const formattedNumber = this.telefono.replace(/\D/g, '');
  const mensaje = encodeURIComponent('¿Cómo podemos ayudarte hoy? ¿Tienes alguna pregunta? ¿Necesitas asistencia?');
  const url = `https://wa.me/${formattedNumber}?text=${mensaje}`;
  window.open(url, '_blank');
}

 // Método para actualizar el número de teléfono y enviar preguntas automáticamente
 actualizarTelefonoYEnviarPreguntas() {
  console.log('Número de teléfono actualizado:', this.telefono);
  this.redirigirWhatsApp();
 }
}


