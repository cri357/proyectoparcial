import { Component, AfterViewInit } from '@angular/core';

declare var M: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements AfterViewInit {

  carousel = [
    { image: '../../../assets/img/agri1.jpg' },
    { image: '../../../assets/img/camp.jpg' },
    { image: '../../../assets/img/campo.jpg'}
  ];

  constructor() { }
  
  ngAfterViewInit(): void {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {
      fullWidth: true,
      indicators: true
    });
  
    // Ajusta el intervalo a tu preferencia (5000 ms = 5 segundos)
    setInterval(() => {
      var instance = M.Carousel.getInstance(elems[0]);
      instance.next();
    }, 5000);
  }
}
