import {Component, ElementRef, ViewChild} from '@angular/core';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonChip,
  IonCol,
  IonDatetime,
  IonDatetimeButton,
  IonGrid,
  IonIcon,
  IonImg,
  IonInput,
  IonItem,
  IonLabel,
  IonModal,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonSpinner,
  IonTextarea
} from "@ionic/angular/standalone";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {RouterLink} from "@angular/router";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-tree-plating-form',
  templateUrl: './tree-plating-form.component.html',
  styleUrls: ['./tree-plating-form.component.scss'],
  standalone: true,
  imports: [
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    ReactiveFormsModule,
    IonItem,
    IonLabel,
    IonSelect,
    IonSelectOption,
    IonChip,
    IonDatetimeButton,
    IonModal,
    IonDatetime,
    IonInput,
    IonButton,
    IonIcon,
    IonTextarea,
    IonGrid,
    IonRow,
    IonCol,
    IonImg,
    IonSpinner,
    RouterLink,
    NgIf,
    NgForOf
  ]
})
export class TreePlatingFormComponent {

  plantingForm: FormGroup;
  isLoading = false;

  treeSpecies = [
    {
      id: 1,
      name: 'Neem',
      scientificName: 'Azadirachta indica',
      co2AbsorptionPerYear: 30,
      matureHeight: 20,
      growthRate: 'Fast',
      description: 'Medicinal and air purifying',
      imageUrl: 'assets/images/neem.jpg'
    },
    {
      id: 2,
      name: 'Banyan',
      scientificName: 'Ficus benghalensis',
      co2AbsorptionPerYear: 80,
      matureHeight: 25,
      growthRate: 'Medium',
      description: 'National tree of India',
      imageUrl: 'assets/images/banyan.jpg'
    },
    // Add more species...
  ];
  selectedSpecies: any = null;

  capturedPhotos: any[] = [];

  @ViewChild('fileInput', {static: false}) fileInputRef!: ElementRef<HTMLInputElement>;

  // eslint-disable-next-line @angular-eslint/prefer-inject
  constructor(private fb: FormBuilder) {
    this.plantingForm = this.fb.group({
      treeSpeciesId: [null, Validators.required],
      plantingDate: [null, Validators.required],
      latitude: [null, Validators.required],
      longitude: [null, Validators.required],
      address: [''],
      notes: [''],
    });

  }

  onSpeciesChange(value: any) {

  }

  onSubmit() {

  }

  useCurrentLocation() {

  }

  captureMultiplePhotos() {

  }

  onFileSelected($event: Event) {

  }

  removePhoto(i: any) {

  }

  capturePhoto() {

  }
}
