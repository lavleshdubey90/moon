import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  imports: [RouterLink],
  templateUrl: './breadcrumb.html',
  styleUrl: './breadcrumb.css',
})
export class Breadcrumb {
  @Input() items: { label: string; url?: string }[] = [];

  isLastItem(index: number): boolean {
    return index === this.items.length - 1;
  }
}
