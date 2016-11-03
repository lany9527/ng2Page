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
import { FormComponent } from './components/form/form.component';
import { ChartsComponent } from './components/charts/charts.component';
import { BasicPipesComponent } from './components/basic-pipes/basic-pipes.component';


//pipe
import { DemoPipePipe } from './pipe/demo-pipe.pipe';

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
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
