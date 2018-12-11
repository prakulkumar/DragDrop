import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialImportsModule } from './material-imports/material-imports.module';
import 'hammerjs';
import { DynamicComponent } from './dynamic/dynamic.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import { FormsModule } from '@angular/forms';
import { AccordianComponent } from './accordian/accordian.component';
import { HttpClientModule } from '@angular/common/http';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { TreeComponent } from './tree/tree.component';
import { TreeLayoutComponent } from './tree-layout/tree-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicComponent,
    LoginFormComponent,
    FeedbackFormComponent,
    AccordianComponent,
    NewsFeedComponent,
    TreeComponent,
    TreeLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    BrowserAnimationsModule,
    MaterialImportsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [LoginFormComponent, FeedbackFormComponent, AccordianComponent, NewsFeedComponent, TreeLayoutComponent]
})
export class AppModule { }
