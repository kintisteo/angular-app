import {Component, Injectable, OnInit} from '@angular/core';
import { Model } from '../../models/model';
import { allCards } from '../all-cards';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css']
})
export class DeckComponent implements OnInit {



  deck=allCards;

  ngOnInit() {
  }

  selectedCard: Model;
    constructor(private httpClient:HttpClient){}
  onSelect(model: Model){
    this.selectedCard = model;



      this.httpClient.get(`http://52.57.88.137/api/card_data/${this.selectedCard.name}`)
          .subscribe(
              (data:any[]) => {
                  // @ts-ignore
                  this.text = data.data.text;
                  // @ts-ignore
                  this.card_type = data.data.card_type;
                  // @ts-ignore
                  this.family = data.data.family;
                  // @ts-ignore
                  this.atk = data.data.atk;
                  // @ts-ignore
                  this.def = data.data.def;
                  // @ts-ignore
                  this.level = data.data.level;
              }
          )
  }


}