import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'mt-input-container',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})

//Content Injection (Content Projection)
export class InputComponent implements OnInit, AfterContentInit {


  input: any;
  @Input() label: string;
  @Input() errorMessage: string;


  @ContentChild(NgModel) model:  NgModel;
  constructor() { }

  ngOnInit() {
  }

    
  ngAfterContentInit(): void {
    this.input = this.model;
    if(this.input === undefined)
    throw new Error("Esse componente precisa ser usado como diretiva ngModel");
    
  }

  hasSuccess(): boolean
  {
    return this.input.valid && (this.input.dirty || this.input.touched);
  }
  hasError(): boolean
  {
    return !this.input.valid && (this.input.dirty || this.input.touched);
  }
}
