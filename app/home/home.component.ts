import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  mailText:string = "";

  mailMe(target?:string){
    console.log(target)
    if(target === 'website'){
      this.mailText = "mailto:dismail93@gmail.com+?subject=Website&body=I'm in need of a website!" // add the links to body

    } else {
    this.mailText = "mailto:dismail93@gmail.com+?subject=Let's Talk&body=I'm interested in hiring you!" // add the links to body
     }
      window.location.href = this.mailText;
  }
}
