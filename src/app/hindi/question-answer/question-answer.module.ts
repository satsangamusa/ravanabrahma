import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuestionAnswerPageRoutingModule } from './question-answer-routing.module';

import { QuestionAnswerPage } from './question-answer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuestionAnswerPageRoutingModule
  ],
  declarations: [QuestionAnswerPage]
})
export class QuestionAnswerPageModule {}
