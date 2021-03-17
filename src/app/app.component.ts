import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   players = [{country:'Argentina',player: 'Lionel Messi',club:'Barcelona'}];

   onPlayerAdded(playerData: {player: string,club: string}){
    this.players.push({
      country: 'Argentina',
      player: playerData.player,
      club: playerData.club
    });
   }
}
