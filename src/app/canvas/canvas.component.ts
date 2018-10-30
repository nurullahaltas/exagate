import { Component, OnInit, Input } from '@angular/core';
import { CurrencyService } from '../services/currency.service';
import { Chart } from 'chart.js';
import { interval } from 'rxjs';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {

  chart = [];
  rates: number[] = [];
  times: string[] = [];

  @Input()
    firstCurrency: string;

  @Input()
    secondCurrency: string;

  @Input()
    canvasId: string;


  constructor(private currencyService: CurrencyService) { }

  ngOnInit() 
  {

    interval(10000).subscribe
      (
        (value: number) => 
        {
          this.currencyService.getRates(this.firstCurrency,this.secondCurrency).subscribe( res =>
            {
              let data = JSON.stringify(res);
              let rate: string = data.substring(data.indexOf('"rate":')+7,data.indexOf(','));
              this.rates.push(parseFloat(rate));
              let timestamp: string = data.substring(data.indexOf('"timestamp":')+12,data.indexOf('}'));
              this.times.push (new Date(parseInt(timestamp)).toLocaleDateString() + " " + new Date(parseInt(timestamp)).toLocaleTimeString());
              
              this.chart = new Chart(this.canvasId,
              {
                type: 'line',
                data: {
                  labels: this.times,
                  datasets: [
                    {
                      data: this.rates,
                      borderColor: '#3cba9f',
                      fill: false
                    }
                  ]
                },
                options:
                {
                  legend:
                  {
                    display: false
                  },
                  scales: {
                    xAxes: [{
                      display:true
                    }],
                    yAxes: [{
                      display:true
                    }]
                  }
                }
              });
            });
              
          });
  }

}
