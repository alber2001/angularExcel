import { Component } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angularExcel';

  altaPensiones = [
    {
      nombre: 'TERESINA ZUNIGA',
      numero_pago: 110013,
      causa: 'Vejez',
      area: 'Choloma',
    },
    {
      nombre: 'ANGELA BETULIA ANTUNEZ HERNANDEZ',
      numero_pago: 110275,
      causa: 'Viudez',
      area: 'Choloma',
    },
    {
      nombre: 'GLADYS EUFEMIA VASQUEZ VARELA',
      numero_pago: 110166,
      causa: 'Viudez',
      area: 'Choloma',
    },
    {
      nombre: 'MIRIAN AUXILIADORA MAYORGA MONDRAGON',
      numero_pago: 110164,
      causa: 'Viudez',
      area: 'Choluteca',
    },
    {
      nombre: 'MARIA ELENA JIMENEZ FLORES',
      numero_pago: 110277,
      causa: 'Orfandad',
      area: 'Comayagua',
    },
    {
      nombre: 'ELY VIACORTA GUEVARA',
      numero_pago: 110135,
      causa: 'Vejez',
      area: 'Comayagua',
    },
  ];

  fileName = "ExcelSheet.xlsx";
  exportarExcel(){  
    let data = this.altaPensiones;
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.altaPensiones);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Hoja1');
    XLSX.writeFile(wb, this.fileName);
  }

}
