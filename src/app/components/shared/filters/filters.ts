import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-filters',
  imports: [],
  templateUrl: './filters.html',
  styleUrl: './filters.css',
})
export class Filters {
  @Input() itemCount: number = 0;
  selectedCategories: Set<string> = new Set();
  selectedPriceRanges: Set<string> = new Set();

  @Output() filtersChanged = new EventEmitter<any>();
  protected readonly categories = [
    'Dinnerware',
    'Ceramic',
    'Furniture',
    'Decor Art',
    'Gifts sets',
  ];

  protected readonly priceRanges = [
    '$0 - $10',
    '$10 - $50',
    '$50 - $100',
    '$100 - $200',
    '> $200',
  ];

  protected readonly colors = [
    '#FFFFFF',
    '#C69B7B',
    '#CCD8CE',
    '#B4555D',
    '#9B92A1',
  ];

  onCategoryChange(category: string, event: any) {
    if (event.target.checked) {
      this.selectedCategories.add(category);
    } else {
      this.selectedCategories.delete(category);
    }
    this.emitFilters();
  }

  onPriceRangeChange(priceRange: string, event: any) {
    if (event.target.checked) {
      this.selectedPriceRanges.add(priceRange);
    } else {
      this.selectedPriceRanges.delete(priceRange);
    }
    this.emitFilters();
  }

  private emitFilters() {
    this.filtersChanged.emit({
      categories: this.selectedCategories,
      priceRanges: this.selectedPriceRanges
    });
  }
}


