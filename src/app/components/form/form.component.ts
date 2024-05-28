import { Component } from '@angular/core';
import { ApiService } from '@services/api.service';
import { element } from 'protractor';
import {OnInit} from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit{
  allValue: number = 1;
  inProgressValue: number = 1;
  approvedValue: number = 1;
  rejectedValue: number = 1;
  archivedValue: number = 1;
  
  constructor(
    private apiService: ApiService
    
  ) {
    
  }

  ngOnInit(): void {
    
    this.apiService.getMethod().subscribe((data: any) => {
      debugger;
      console.log(data);
    });
  }
}
