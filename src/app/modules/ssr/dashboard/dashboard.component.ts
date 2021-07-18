import { Component, OnInit } from '@angular/core';
import { RestssrService } from 'src/app/shared/services/restssr.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  stateCoviddata:any;
  selectedRow:any;
  chartLabel:string = 'Covid-19 Stats';
  chartTitle:string = '';
  keys:string[] = ["active", "confirmed", "deaths", "recovered", "deltaconfirmed", "deltadeaths", "deltarecovered"];
  constructor(
    private restApi: RestssrService
  ) {}

  ngOnInit(): void {
    this.getCovidIndiaData();
  }

  getCovidIndiaData() {
    this.restApi.covidIndiaGet('data.json').subscribe(
      (res)=> {
        this.stateCoviddata = res.statewise;
        this.selectedRow = res.statewise[1];
      }
    )
  }

  visualize(row:any) {
    this.selectedRow = row;
    this.chartTitle = row.state;
  }

}
