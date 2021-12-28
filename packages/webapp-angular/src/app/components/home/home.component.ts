import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  readonly routes = ['./search', './favs'];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.onSelectedTabChanged(0);
  }

  onSelectedTabChanged(selectedIndex: number) {
    this.router.navigate([this.routes[selectedIndex]]);
  }
}
