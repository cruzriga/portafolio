import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/productos.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  cargando  = true;
  constructor( private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos() {
    this.http.get('https://angular-html-57386.firebaseio.com/productos_idx.json')
    .subscribe( (resp: Producto[]) => {
        this.cargando = false;
        console.log(resp);
    });
  }
}
