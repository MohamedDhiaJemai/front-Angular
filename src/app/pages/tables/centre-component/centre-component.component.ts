import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../../@core/data/smart-table';
import { Centre } from '../../../model/Centre.model';
import { Subscription } from 'rxjs';
import { CentreService } from '../../../services/centre/centre.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-centre-component',
  templateUrl: './centre-component.component.html',
  styleUrls: ['./centre-component.component.scss']
})
export class CentreComponentComponent implements OnInit{

  centres : Centre [];
  centreSubscription : Subscription;


  constructor(private centreService : CentreService, private router: Router, 
    private service: SmartTableData) {

    const data = this.service.getData();
    this.source.load(data);

  }

  /***** Affichage des listes de centres lors du refresh *****/

  ngOnInit(){
    this.centreSubscription = this.centreService.getAllCentre().subscribe(
      (data)=>{
        this.centres = data;
        console.log(data);
      }
    )
  }

  /******* Code Du Template *******/

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
        title: 'ID Centre',
        type: 'number',
      },
      reference: {
        title: 'Reférence',
        type: 'string',
      },
      libelle: {
        title: 'Libelle',
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
