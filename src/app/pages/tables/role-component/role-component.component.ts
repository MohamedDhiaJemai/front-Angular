import { Component, OnInit} from '@angular/core';
import { SmartTableData } from '../../../@core/data/smart-table';
import { LocalDataSource } from 'ng2-smart-table';
import { Role } from '../../../model/Role.model';
import { Subscription } from 'rxjs';
import { RoleService } from '../../../services/role/role.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-role-component',
  templateUrl: './role-component.component.html',
  styleUrls: ['./role-component.component.scss']
})
export class RoleComponentComponent implements OnInit{

  roles : Role[];
  roleSubscription : Subscription;
  

  constructor(private roleService: RoleService, private router:Router,
    private service: SmartTableData) {

    const data = this.service.getData();
    this.source.load(data);

  }

  /***** Affichage des listes de roles lors du refresh de la Page *****/

  ngOnInit(){
    this.roleSubscription = this.roleService.getAllRole().subscribe(
      (data)=>{
        this.roles = data;
        console.log(data);
      }
    )
  }


  /***** Affichage des listes de centres lors du refresh *****/
    
  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ID Role',
        type: 'number',
      },
      role: {
        title: 'Role',
        type: 'string',
      },
      description: {
        title: 'Description',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();


  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

}
