import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[handson-spread]'
})
export class SpreadDirective implements OnInit {
  @Input() myStr: String;

  constructor(private element: ElementRef) { }

  ngOnInit() {
    // this.element.nativeElement.style.backgroundColor = 'yellow';
    let div = document.createElement('div');
    // div.textContent = 'recieved: ' + this.myStr;
    div.className = 'handsontable-container';
    this.element.nativeElement.appendChild(div);

    let data = [
      ['', 'Ford', 'Volvo', 'Toyota', 'Honda'],
      ['2016', 10, 11, 12, 13],
      ['2017', 20, 11, 14, 13],
      ['2018', 30, 15, 12, 13]
    ];


    let handson = new Handsontable(div, {
      data: data,
      dropdownMenu: true
    });
    handson.render();
  }
}
