import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-create-element',
  templateUrl: './create-element.component.html',
  styleUrls: ['./create-element.component.css']
})
export class CreateElementComponent implements OnInit {
  @Output() playerCreated = new EventEmitter<{player: string, club: string}>();
  
  newPlayer = '';
  newClub = '';

  onAddPlayer(){
    this.playerCreated.emit({
      player: this.newPlayer,
      club: this.newClub
    });
  }

  constructor() { }

  ngOnInit(): void {
  }

}
