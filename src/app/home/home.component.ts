import { Component , OnInit } from '@angular/core';
import { ChartModule } from '@syncfusion/ej2-angular-charts';
import { CategoryService, ColumnSeriesService } from '@syncfusion/ej2-angular-charts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html', 
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit {
  public primaryXAxis?: Object;
  public chartData?: Object[];
  public title?: string;
  public primaryYAxis?: Object;
  public palette?: string[];
  ngOnInit(): void {
      this.chartData = [
              { country: "Station Name Dummy 1", gold: 200 },
              { country: "Station Name Dummy 2", gold: 130 },
              { country: "Station Name Dummy 3", gold: 200 },
              { country: "Station Name Dummy 4", gold: 240 },
              { country: "Station Name Dummy 5", gold: 140 },
      ];
      this.primaryXAxis = {
         valueType: 'Category',
      };
      this.primaryYAxis = {
         minimum: 50, maximum: 350,
         interval: 50, 
      };
      this.palette = ["#FF7F5C", "#FF7F5C", "#FF7F5C", "#FF7F5C"];
  }



    data = { 
        labels: ['GeeksforGeeks', 'Tutorial Point', 'W3 Schools',  
                 'Javatpoint', 'Indiabix', 'Codechef', 'Hackerrank'], 
        datasets: [ 
            { 
                label: 'Single Dataset', 
                data: [75, 49, 95, 71, 66, 65, 45], 
                backgroundColor: 'lightgreen', 
                borderColor: 'lightgreen', 
                pointHoverBackgroundColor: '#fff', 
                pointHoverBorderColor: 'lightgreen', 
            } 
        ] 
    }; 

}
