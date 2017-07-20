import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { TriviaService } from './trivia.service';
import { UserService } from './user.service';
import { CommunicationService } from './communication.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NewQuestionComponent } from './main/new-question/new-question.component';
import { ScoresComponent } from './main/scores/scores.component';
import { PlayComponent } from './play/play.component';
import { FilterPipe } from './main/scores/filter.pipe';
import { DisplayComponent } from './main/src/app/main/display/display.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NewQuestionComponent,
    ScoresComponent,
    PlayComponent,
    FilterPipe,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [TriviaService,
              UserService,
              CommunicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
