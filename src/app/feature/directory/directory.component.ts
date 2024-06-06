import { Component } from '@angular/core';
import { DirectoryService } from './directory.service';
import { Folder } from '../../core/models/Folder';
import { CardFolderComponent } from '../../share/components/card-folder/card-folder.component';

@Component({
  selector: 'app-directory',
  standalone: true,
  imports: [CardFolderComponent],
  templateUrl: './directory.component.html',
  styleUrl: './directory.component.sass'
})
export class DirectoryComponent {
  public folders: Folder[] = []
  
  constructor(private directoryService: DirectoryService) {
    this.directoryService.getAllFolder().subscribe({
      next: (folders: Folder[]) => {
        this.folders = folders;
      }
    });
  }
}
