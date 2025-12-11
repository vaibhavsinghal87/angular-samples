import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-import',
  imports: [],
  templateUrl: './dynamic-import.html',
  styleUrl: './dynamic-import.scss',
})
export class DynamicImport {
  importScript() {
    this.loadScript();
  }

  async loadScript() {
    try {
      const jsZip = await import('jszip');
      console.log('JSZip loaded:', jsZip);
    } catch (error) {
      console.error('Error loading JSZip:', error);
    }
  }
}
