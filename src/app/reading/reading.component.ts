import { Component, OnInit } from '@angular/core';
import { Reading } from "../_models/reading";
import { ReadingService } from "./reading.service";

@Component({
  selector: 'app-reading',
  templateUrl: './reading.component.html',
  styleUrls: ['./reading.component.css']
})
export class ReadingComponent implements OnInit {

  readings: Reading[];

  constructor(private readingService : ReadingService) { }

  ngOnInit() {
    this.readingService.getReadings(5).subscribe(data => {
      this.readings = data;
    })
  }

}
