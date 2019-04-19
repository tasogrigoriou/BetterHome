import { Component, OnInit } from '@angular/core';
import {Example, ExampleService} from '../core/services/example.service';
import {DataSource} from "@angular/cdk/collections";

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  examples: Example[] = [];
  dataSource = new ExampleDataSource(this.exampleService);

  displayedColumns: string[] = ['ID', 'Name'];

  listingId: number;

  constructor(private exampleService: ExampleService) {}

  ngOnInit() {
    this.getExamples();
  }

  getExamples() {
    this.exampleService.getExamples()
      .subscribe(response => {
        console.log(response);
        this.examples = response;
      }, err => {
        console.log(err);
      });
  }
}

export class ExampleDataSource extends DataSource<any> {
  constructor(private exampleService: ExampleService) {
    super();
  }

  connect() {
    return this.exampleService.getExamples();
  }

  disconnect() {

  }
}
