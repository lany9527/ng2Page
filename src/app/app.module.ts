import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

//component
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {RouterModule} from "@angular/router";
import {HomeComponent} from './pages/home/home.component';
import {DemoComponent} from './pages/demo/demo.component';
import {DemoComponentComponent} from './components/demo-component/demo-component.component';
import {DemoPipeComponent} from './components/demo-pipe/demo-pipe.component';
import {DemoDirectiveComponent} from './components/demo-directive/demo-directive.component';
import {DemoServiceComponent} from './components/demo-service/demo-service.component';
import {CounterComponent} from './components/counter/counter.component';
import {FormComponent} from './components/form/form.component';
import {ChartsComponent} from './components/charts/charts.component';
import {BasicPipesComponent} from './components/basic-pipes/basic-pipes.component';
import {NewsComponent} from './pages/news/news.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SearchComponent } from './components/search/search.component';
import { StarsComponent } from './components/stars/stars.component';

//pipe
import {DemoPipePipe} from './pipe/demo-pipe.pipe';
import {OrdinalPipe} from './pipe/ordinal.pipe';
import {CustomSuffixPipe} from './pipe/custom-suffix.pipe';
import {FilterPipe} from './pipe/filter.pipe';
import {CapitalizePipe} from './pipe/capitalize.pipe';

//service
import {NewsService} from "./services/news.service";
import { NewsItemComponent } from './components/news-item/news-item.component';
import { NewsDetailComponent } from './components/news-detail/news-detail.component';
import { NewsSectionComponent } from './components/news-section/news-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DemoComponent,
    DemoComponentComponent,
    DemoPipeComponent,
    DemoDirectiveComponent,
    DemoServiceComponent,
    CounterComponent,
    FormComponent,
    ChartsComponent,
    BasicPipesComponent,
    DemoPipePipe,
    OrdinalPipe,
    CustomSuffixPipe,
    FilterPipe,
    CapitalizePipe,
    NewsComponent,
    FooterComponent,
    CarouselComponent,
    SearchComponent,
    StarsComponent,
    NewsItemComponent,
    NewsDetailComponent,
    NewsSectionComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '', component: HomeComponent
      },
      {
        path: 'demo', component: DemoComponent,
        children: [
          {path: 'component', component: DemoComponentComponent},
          {path: 'pipe', component: DemoPipeComponent},
          {path: 'directive', component: DemoDirectiveComponent},
          {path: 'service', component: DemoServiceComponent}
        ]
      },
      {path: 'news', component: NewsComponent},
      {path: 'news/:newsId', component: NewsDetailComponent}
    ])
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
