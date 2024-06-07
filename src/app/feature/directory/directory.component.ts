import { Component } from '@angular/core';
import { DirectoryService } from './directory.service';
import { Folder } from '../../core/models/Folder';
import { File } from '../../core/models/File';
import { CardFolderComponent } from '../../share/components/card-folder/card-folder.component';
import { CardFileComponent } from '../../share/components/card-file/card-file.component';

@Component({
  selector: 'app-directory',
  standalone: true,
  imports: [CardFolderComponent, CardFileComponent],
  templateUrl: './directory.component.html',
  styleUrl: './directory.component.sass'
})
export class DirectoryComponent {
  public folders: Folder[] = []
  public files: File[] = []

  constructor(private directoryService: DirectoryService) {
    this.directoryService.getAllFolder().subscribe({
      next: (folders: Folder[]) => {
        this.folders = folders;
      }
    });

    this.directoryService.getRecentFiles().subscribe({
      next: (files: File[]) => {
        this.files = files;
      }
    });
  }
}
