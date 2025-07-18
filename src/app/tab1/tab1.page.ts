import {AfterViewInit, Component} from '@angular/core';
import {
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader, IonIcon, IonItem, IonLabel, IonList,
  IonRow,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {Chart} from 'chart.js/auto';

declare const google: any;


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonButtons, IonIcon, IonList, IonItem, IonLabel],
})
export class Tab1Page implements AfterViewInit {
  plantingData = [
    { lat: 23.8103, lng: 90.4125, date: '2021-01-01' },
    { lat: 23.7503, lng: 90.3925, date: '2023-05-01' },
    { lat: 23.7803, lng: 90.4025, date: '2024-12-15' },
  ];

  constructor() {
  }

  ngAfterViewInit() {
    this.loadMap();

    new Chart('treeChart', {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Trees Planted',
          data: [2, 5, 8, 12, 20, 24],
          backgroundColor: 'rgba(76, 175, 80, 0.2)',
          borderColor: '#2e7d32',
          borderWidth: 2,
          fill: true,
          tension: 0.3
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }



  loadMap() {
    const map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
      center: { lat: 23.8103, lng: 90.4125 },
      zoom: 11,
      styles: [/* Optional: Add dark or nature-based theme here */],
    });

    const today = new Date();

    for (const tree of this.plantingData) {
      const plantedDate = new Date(tree.date);
      const ageInDays = Math.floor((today.getTime() - plantedDate.getTime()) / (1000 * 3600 * 24));

      let color = '';
      if (ageInDays > 730) {
        color = 'darkgreen'; // oldest
      } else if (ageInDays > 365) {
        color = 'green'; // older
      } else {
        color = '#76ff03'; // newest
      }

      new google.maps.Marker({
        position: { lat: tree.lat, lng: tree.lng },
        map,
        title: `Planted: ${tree.date}`,
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          fillColor: color,
          fillOpacity: 1,
          strokeWeight: 1,
          scale: 8,
        }
      });
    }
  }
}

