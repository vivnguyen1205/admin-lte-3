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
  TotalItemCount: number = 1;
  TotalInProgressItemCount: number = 1;
  TotalApprovedItemCount: number = 1;
  TotalRejectedItemCount: number = 1;
  TotalArchiveItemCount: number = 1;
  
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
