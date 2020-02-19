import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablesComponent } from './tables.component';
import { SmartTableComponent } from './smart-table/smart-table.component';
import { TreeGridComponent } from './tree-grid/tree-grid.component';

import {CentreComponentComponent} from './centre-component/centre-component.component'
import {UserComponentComponent} from './user-component/user-component.component'
import {RoleComponentComponent} from './role-component/role-component.component'

const routes: Routes = [{
  path: '',
  component: TablesComponent,
  children: [
    {
      path: 'smart-table',
      component: SmartTableComponent,
    },
    {
      path: 'tree-grid',
      component: TreeGridComponent,
    },
    {
      path: 'centre',
      component: CentreComponentComponent,
    },
    {
      path: 'role',
      component: RoleComponentComponent,
    },
    {
      path: 'utilisateur',
      component: UserComponentComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablesRoutingModule { }

export const routedComponents = [
  TablesComponent,
  SmartTableComponent,
  TreeGridComponent,
];
