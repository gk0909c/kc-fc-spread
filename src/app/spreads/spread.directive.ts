import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[handson-spread]'
})
export class SpreadDirective implements OnInit {
  @Input() myStr: String;
  private handson: any;

  constructor(private element: ElementRef) { }

  ngOnInit() {

    let data = [
      [this.myStr, 'Ford', 'Volvo', 'Toyota', 'Honda'],
      ['2016', 10, 11, 12, 13],
      ['2017', 20, 11, 14, 13],
      ['2018', 30, 15, 12, 13]
    ];

    let htOptions: any = {
      data: data,
      height: 100,
    };

    this.handson = new Handsontable(this.element.nativeElement, htOptions);
  }
}
