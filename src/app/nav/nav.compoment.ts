import { Component, OnInit } from '@angular/core';

/**Import nav class*/
import { NavItem } from './nav_object';

//Import nav list
import { NavList } from './nav_list';

@Component({
  selector: 'nav-root',
  templateUrl: './nav.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{
   
   //Variable will be displayed in nav template
   nav;

   //Assign object tempalte to variable
   selectedCategory: NavItem;
  
   //assign the nav var to nav template
   onHover(nav: NavItem): void {

    //grab the hero var from html and assign it to selected hero
    this.selectedCategory = nav;
    console.log('It Works!')
  
   }


   //Assign list to var
   nav_list = NavList;

   //Must go with OnInit Class Object
   constructor() {
    
   }

   ngOnInit() {
   
   }

}
