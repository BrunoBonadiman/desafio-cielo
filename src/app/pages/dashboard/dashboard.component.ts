import { Component, OnInit } from '@angular/core';
import { LancamentoContaLegado } from 'src/app/apis/json';
import { LancamentoContaLegadoResponse } from 'src/app/apis/models/responses/lancamento-conta-legado.response';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit { 
  response: LancamentoContaLegadoResponse[] = Object.values(LancamentoContaLegado);
  constructor() {}

  ngOnInit(): void {
  }
}
