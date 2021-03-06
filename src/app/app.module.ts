import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MachineComponent } from './components/machine/machine.component';
import { ReelComponent } from './components/reel/reel.component';
import { ReelRowComponent } from './components/reel-row/reel-row.component';

@NgModule({
  declarations: [
    AppComponent,
    MachineComponent,
    ReelComponent,
    ReelRowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
