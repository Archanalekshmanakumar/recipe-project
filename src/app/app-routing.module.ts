import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent }from './shopping-list/shopping-list.component';
import { RecipesEditComponent } from './recipes/recipes-edit/recipes-edit.component';
import { RecipeResolverService } from './recipes/recipes-resolver.service';
import { Authcomponent } from './auth/auth.component';
const routes: Routes = [
  { path: '',redirectTo:'/recipes',pathMatch:'full' },
  { path: 'recipes',component:RecipesComponent,children: [
    { path:'',component: RecipeStartComponent },
    { path: 'new',component:RecipesEditComponent},
    {
       path: ':id',
       component:RecipesDetailComponent,
       resolve:[RecipeResolverService]
      },
    { path: ':id/edit',component:RecipesEditComponent,
      resolve:[RecipeResolverService]
  },
  ] },
  { path: 'shopping-list',component: ShoppingListComponent },
  { path: 'auth',component:Authcomponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
