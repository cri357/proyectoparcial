import { Component, OnInit } from '@angular/core';

interface Plan {
  nombre: string;
  costo: number;
  caracteristicas: string[];
  calcularCostoAnual(): number;
}

class PlanAnual implements Plan {
  nombre = 'Plan Anual';
  costo = 95000;
  caracteristicas = ['Acceso Ilimitado', 'Mejora Continua de Cultivos', 'Soporte y Actualizaciones'];

  calcularCostoAnual(): number {
    return this.costo;
  }
}

class PlanMensual implements Plan {
  nombre = 'Plan Mensual';
  costo = 9000;
  caracteristicas = ['Adaptabilidad', 'Acceso a Tecnología Avanzada', 'Flexibilidad'];

  calcularCostoAnual(): number {
    return this.costo * 12;
  }
}


@Component({
  selector: 'app-paquetes',
  templateUrl: './paquetes.component.html',
  styleUrl: './paquetes.component.css'
})


export class PaquetesComponent implements OnInit {
  planes: Plan[] = [];
  caracteristicasUnicas: string[] = [];

  constructor() {}

  ngOnInit(): void {
    this.planes.push(new PlanAnual(), new PlanMensual());
    this.identificarCaracteristicasUnicas();
  }

  identificarCaracteristicasUnicas(): void {
    const todasCaracteristicas = this.planes
      .map(plan => plan.caracteristicas)
      .reduce((acc, val) => acc.concat(val), []);

    this.caracteristicasUnicas = [...new Set(todasCaracteristicas)];
  }
}
