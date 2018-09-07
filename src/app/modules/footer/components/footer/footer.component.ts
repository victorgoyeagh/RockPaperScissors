import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
    public appTitle:string = environment.config.appName;
    public strDate: string = undefined;

  constructor() { 
      this.strDate = new Date().getFullYear().toString();
  }

  ngOnInit() {
  }

}
