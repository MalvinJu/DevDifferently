import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { ContextButtonComponent } from '../context-button/context-button.component';
import { ContextMenuComponent } from '../context-menu/context-menu.component';
import { MenuItem } from '../../models/MenuItem';

@Component({
  selector: 'app-card-file',
  standalone: true,
  imports: [NgStyle, ContextMenuComponent, ContextButtonComponent],
  templateUrl: './card-file.component.html',
  styleUrl: './card-file.component.sass'
})
export class CardFileComponent {
  public menuItems: MenuItem[] = [];

  constructor() {
    this.menuItems = [
      { label: "Share", icon: "upload"},
      { label: "Rename", icon: "rename"},
      { label: "Delete", icon: "delete"}
    ]
  }
}
