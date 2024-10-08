import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  inputText: string = '';
  base64Result: string = '';

  // Function to convert the string to Base64
  convertToBase64(): void {
    this.base64Result = btoa(unescape(encodeURIComponent(this.inputText)));
  }

  // Function to copy the result to the clipboard
  copyToClipboard(): void {
    navigator.clipboard.writeText(this.base64Result).then(() => {
      //alert('Base64 string copied to clipboard!');
    });
  }
}
