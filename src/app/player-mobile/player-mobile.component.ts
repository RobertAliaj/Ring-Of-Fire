import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-player-mobile',
  templateUrl: './player-mobile.component.html',
  styleUrls: ['./player-mobile.component.scss']
})
export class PlayerMobileComponent {

  @Input() name!: string;
  @Input() image = 'profile-2.jpg';   
  @Input() playerActive: boolean = false;


}
