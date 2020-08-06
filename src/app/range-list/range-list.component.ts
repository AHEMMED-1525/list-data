import { Component, OnInit } from '@angular/core';
import arrayWords from '../utils/words';
import arrayCountries from '../utils/countries';

@Component({
  selector: 'range-list',
  templateUrl: './range-list.component.html',
  styleUrls: ['./range-list.component.css']
})
export class RangeListComponent implements OnInit {


  words = '';
  limit = 1;
  countrys = '';
  handleSlide(newLimit){
    this.limit= newLimit;
}

generate(){
this.words= arrayWords.slice(0,this.limit).join(' ')
}
makeid() {



  this.countrys = arrayCountries[Math.floor((Math.random()*this.limit))];


}

  constructor() { }

  ngOnInit(): void {
  }

}
