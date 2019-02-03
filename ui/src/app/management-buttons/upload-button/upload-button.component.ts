import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {Plugin} from 'src/app/model/plugin';
import {ConfirmDialogComponent} from 'src/app/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-upload-button',
  templateUrl: './upload-button.component.html',
  styleUrls: ['./upload-button.component.scss']
})
export class UploadButtonComponent {

  @Output()
  upload = new EventEmitter<Plugin>();

  @ViewChild('fileUpload')
  fileUpload: ElementRef<HTMLInputElement>;

  @ViewChild('invalidJsonDialog')
  invalidJsonDialog: ConfirmDialogComponent;

  onFilesSelected() {
    const filesList = this.fileUpload.nativeElement.files;
    if (filesList.length < 1) {
      return;
    }

    const file = filesList[0];

    const reader = new FileReader();
    reader.addEventListener('loadend', () => {
      try {
        const jsonString = reader.result as string;
        if (!jsonString) {
          return this.handleFileError();
        }

        const json = JSON.parse(jsonString);
        if (!json) {
          return this.handleFileError();
        }

        const plugin = new Plugin(json);
        this.upload.emit(plugin);
        this.reset();

      } catch (e) {
        return this.handleFileError();
      }
    });
    reader.readAsText(file);
  }

  private handleFileError() {
    this.invalidJsonDialog.show();
    this.reset();
  }

  private reset() {
    this.fileUpload.nativeElement.value = '';
  }
}
