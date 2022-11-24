import { Component, OnInit } from '@angular/core';
import { SoftwareService } from '../services/software.service';

@Component({
  selector: 'app-software-list',
  templateUrl: './software-list.component.html',
  styleUrls: ['./software-list.component.css'],
})
export class SoftwareListComponent implements OnInit {

  data:any;
  searchDataItems:any;
  count?:number;
  currentPage?: number;
  searchTerm!:String;

  constructor(private softwareService:SoftwareService ) {}

  ngOnInit(): void {
    this.fetchData(0);
  }
  
  fetchData(page:number){

    this.softwareService.getData(page).subscribe(
      (response) => {
        console.log(response);
        this.data = response.Softwares;
        this.count = response.totalItems;
      },
      (error) => {
        console.log(error);
      }
      );
    }

  searchData(page:number,searchTerm:String){

    this.softwareService.getSearchData(page,searchTerm).subscribe(
      (response) => {
        console.log(response);
        this.data = response.Softwares;
        this.count = response.totalItems;
      },
      (error) => {
        console.log(error);
        
        this.data = [];
        this.count = 0;
      }
      );
    }

  onTableDataChange(event: any) {
    this.callApi(event-1)
    this.currentPage = event;
    
  }

  callApi(page:number){
    console.log(this.searchTerm);
    if(this.searchTerm==null){
      this.fetchData(page);
    }
    else{
      this.currentPage = 1;
      this.searchData(page,this.searchTerm);
    }
  }




}
