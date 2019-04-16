import { Component, OnInit } from '@angular/core';

export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  constructor() { }

  activeClass: boolean = false;
  replyStatus: boolean = false;
  selected: any;

  //updateTimer
  currentDate = new Date();
  n = this.currentDate.getTime();
  startTime = this.n;

  updateTimer() {
    
  }

  contactList: any[] = [
    {
      profileImg: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      profileName: 'Name1',
      timeStamp: new Date().toLocaleDateString(),
      msgHeader: 'My new message',     
      msgContent: 'Welcome to my chat'
    },
    {
      profileImg: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      profileName: 'Name1',
      timeStamp: new Date().toLocaleDateString(),
      msgHeader: 'My new message',     
      msgContent: 'Welcome to my chat'
    },
    {
      profileImg: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      profileName: 'Name1',
      timeStamp: new Date().getMinutes(),
      msgHeader: 'My new message',     
      msgContent: 'Welcome to my chat'
    }
  ]

  changeClass(a) {
    console.log("a ", a);
    if(a) {
      this.activeClass = !this.activeClass;
    }    
  }

  select(item) {
    this.selected = item; 
  }

  isActive(item) {
      return this.selected === item;
  }

  folders: Section[] = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    }
  ];
  notes: Section[] = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    }
  ];

  ngOnInit() {
  }

}
