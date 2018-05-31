import { Component } from '@angular/core';
import { ReelService } from '../../services/reel.service';

@Component({
  selector: 'slots-reel-row',
  templateUrl: './reel-row.component.html',
  styleUrls: ['./reel-row.component.css'],
  providers: [ReelService]
})
export class ReelRowComponent {
  constructor ( private reelService:ReelService ) {
  }
}
