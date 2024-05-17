import { Component } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {
  selectedProduct: any = null;

  products = [
    { id: 1, name: 'Sensor de Humedad', description: 'Un sensor de humedad mide los niveles de humedad del suelo, proporcionando datos cruciales para un riego eficiente y adecuado de los cultivos.', imageUrl: '../../../assets/img/sensor de humedad.jpg' },
    { id: 2, name: 'Sensor de Nutrientes', description: 'Los sensores de nutrientes miden los niveles de nutrientes en el suelo para guiar la fertilización.', imageUrl: '../../../assets/img/nutriente.jpg' },
    { id: 3, name: 'Sensor de Crecimiento', description: 'Un sensor de crecimiento de frutos mide el tamaño, peso y otras características físicas de los frutos a medida que crecen, proporcionando información valiosa para optimizar su cultivo.', imageUrl: '../../../assets/img/SensordeCrecimientodeFrutos.jpg' }
  ];

  selectProduct(product: any) {
    this.selectedProduct = product;
  }

  closeDetails() {
    this.selectedProduct = null;
  }
}



