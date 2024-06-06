import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CardFolderComponent } from './share/components/card-folder/card-folder.component';
import { CardFileComponent } from './share/components/card-file/card-file.component';
import { ContextMenuComponent } from './share/components/context-menu/context-menu.component';
import { DirectoryComponent } from './feature/directory/directory.component';
import { ContextButtonComponent } from './share/components/context-button/context-button.component';
import { MenuItem } from './share/models/MenuItem';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CardFolderComponent, CardFileComponent, ContextButtonComponent, ContextMenuComponent, DirectoryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'dev-differently';
  public filterMenuItems: MenuItem[] = [];

  constructor() {
    this.filterMenuItems = [
      { label: "Favourites", icon: "favorite"},
      { label: "Shared Files", icon: "group"},
      { label: "Status", icon: "status"}
    ]
  }
  
}
