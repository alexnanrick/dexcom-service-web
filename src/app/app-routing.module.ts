import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReadingComponent } from "./reading/reading.component";

const routes: Routes = [
  { path: 'readings', component: ReadingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
