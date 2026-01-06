import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-query-details',
  imports: [],
  templateUrl: './query-details.component.html',
  styleUrl: './query-details.component.css'
})
export class QueryDetailsComponent implements OnInit {
  queryId!: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.queryId = Number(this.route.snapshot.paramMap.get('id'));
  }
}
