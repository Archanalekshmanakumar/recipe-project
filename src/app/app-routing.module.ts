import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent }from './shopping-list/shopping-list.component';
import { RecipesEditComponent } from './recipes/recipes-edit/recipes-edit.component';
const routes: Routes = [
  { path: '',redirectTo:'/recipes',pathMatch:'full' },
  { path: 'recipes',component:RecipesComponent,children: [
    { path:'',component: RecipeStartComponent },
    { path: 'new',component:RecipesEditComponent},
    { path: ':id',component:RecipesDetailComponent},
    { path: ':id/edit',component:RecipesEditComponent},
  ] },
  { path: 'shopping-list',component: ShoppingListComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
