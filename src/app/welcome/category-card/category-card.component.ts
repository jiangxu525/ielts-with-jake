import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss']
})
export class CategoryCardComponent implements OnInit {
  @Input() title = 'ielts title';
  @Input() description = 'Welcome to Ielts with Jake. We will help you thrive in your next exam!';
  @Input() imgSrc = '../../assets/imgs/pexels-photo-851213.jpeg';

  constructor() { }

  ngOnInit(): void {
  }

}
