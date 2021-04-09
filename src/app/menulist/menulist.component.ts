import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DburlServiceService } from '../dburl-service.service';


@Component({
  selector: 'app-menulist',
  templateUrl: './menulist.component.html',
  styleUrls: ['./menulist.component.css']
})
export class MenulistComponent implements OnInit {
  menuListSubscriber: any;
  menuList: any;
  filteredMenu: any;
  initialSubscriber: any;
  category: any;
  menuTitle: any;

  constructor(private _url: DburlServiceService,
    private http: HttpClient,
    private activeRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.initialSubscriber = this.activeRoute.params.subscribe(data => {
      this.category = data.category;
      // console.log(data);
    });
    if(this.category=='DE'){
      this.menuTitle="Dessert"
    } else if(this.category=='BE'){
      this.menuTitle="Bevarage"
    }  else if(this.category=='FA'){
      this.menuTitle="Fastfood"
    }  else if(this.category=='DI'){
      this.menuTitle="Dinner"
    }
    this.getMenuList();
  }

  getMenuList(){
    this.menuListSubscriber = this.http
    .get(this._url.url + 'food/menu/')
    .subscribe(
      (res: any) => {
        console.log(res);
        this.menuList = res;
        this.filteredMenu = this.filterByCategory(this.category);
        console.log(this.filteredMenu);

      });
  }

  filterByCategory(category: string){

  return this.menuList.filter(fn => fn['categary'] == category);
      
  }
}
