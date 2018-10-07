import { Component, OnInit } from '@angular/core';

/**Import Hero class from hero.ts*/
import { Featured } from './feature_item';

//Import list of heroes
import { FeatList } from './featured_list';

@Component({
  selector: 'landing-root',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit{
  
   //Must go with OnInit Class Object
   constructor() {
    
   }

   ngOnInit() {
   
   }

}
