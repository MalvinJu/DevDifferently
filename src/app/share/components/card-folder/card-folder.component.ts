import { Component, ElementRef, HostListener, Input } from '@angular/core';
import { ContextMenuComponent } from '../context-menu/context-menu.component';
import { ContextButtonComponent } from '../context-button/context-button.component';
import { MenuItem } from '../../models/MenuItem';
import { Folder } from '../../../core/models/Folder';

@Component({
  selector: 'app-card-folder',
  standalone: true,
  imports: [ContextMenuComponent, ContextButtonComponent],
  templateUrl: './card-folder.component.html',
  styleUrl: './card-folder.component.sass'
})
export class CardFolderComponent {
  @Input()
  folder: Folder = {
    folderName: '',
    isFavorite: false,
    size: '',
    type: ''
  };
  
  public menuItems: MenuItem[] = [];

  constructor() {
    this.menuItems = [
      { label: "Share", icon: "upload"},
      { label: "Rename", icon: "rename"},
      { label: "Delete", icon: "delete"}
    ]
  }
}
