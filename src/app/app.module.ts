import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BorderBox1Module } from 'components/border-box1';
import { BorderBox2Module } from 'components/border-box2';
import { BorderBox3Module } from 'components/border-box3';
import { BorderBox4Module } from 'components/border-box4';
import { BorderBox5Module } from 'components/border-box5';
import { BorderBox6Module } from 'components/border-box6';
import { BorderBox7Module } from 'components/border-box7';
import { BorderBox8Module } from 'components/border-box8';
import { BorderBox12Module } from 'ngx-datav/border-box12';
import { BorderBox13Module } from 'ngx-datav/border-box13';
import { Decoration1Module } from 'ngx-datav/decoration1';
import { DigitalFlopModule } from 'ngx-datav/digital-flop';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BorderBox2Module,
    BorderBox1Module,
    BorderBox3Module,
    BorderBox4Module,
    BorderBox5Module,
    BorderBox6Module,
    BorderBox7Module,
    BorderBox12Module,
    BorderBox13Module,
    BorderBox8Module,
    DigitalFlopModule,
    Decoration1Module,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
