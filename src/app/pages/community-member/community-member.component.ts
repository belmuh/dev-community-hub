import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { debounceTime } from 'rxjs/operators';
import { switchMap } from 'rxjs/operators';
import { DeveloperService } from 'src/app/services/developer.service';
import { Developer } from 'src/app//models/developer.model';

@Component({
    selector: 'community-member',
    templateUrl: './community-member.component.html',
    styleUrls: ['./community-member.component.css'],
    standalone: false
})
export class CommunityMemberComponent implements OnInit {
  memberForm: FormGroup;

  allTechnologies: string[] = [
    'Java', 'Python', '.NET Core', 'AWS', 'Azure', 'Docker', 'Kubernetes', 'Angular', 'React', 'Vue', 'C#', 'Oracle'
  ];
  filteredTechnologies: string[] = [];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private developerService: DeveloperService
  ) {
    this.memberForm = this.fb.group({
      id: [null],
      name: ['', Validators.required],
      role: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      imageUrl: [''],
      expertise: [''],
      skills: [''],
      experience: ['Mid-Level (3-5 Yıl)'],
      location: [''],
      description: [''],
      videoUrls: this.fb.array([]),
      technologies: this.fb.array([]),
      technologyInput: [''],  // Autocomplete input
    });
  }

  ngOnInit(): void {
    // URL'den id al, servisle geliştiriciyi getir ve formu doldur
    this.route.paramMap.pipe(
      switchMap(params => {
        const id = Number(params.get('id'));
        return this.developerService.getDeveloperById(id);
      })
    ).subscribe(dev => {
      if (dev) {
        this.fillForm(dev);
      } else {
        console.error('Developer bulunamadı!');
      }
    });

    // technologyInput değişimini dinle ve filtre uygula
    this.technologyInput.valueChanges.pipe(
      debounceTime(200)
    ).subscribe(value => {
      this.filterTechnologies(value);
    });
  }

  get videoUrls(): FormArray {
    return this.memberForm.get('videoUrls') as FormArray;
  }

  get technologies(): FormArray {
    return this.memberForm.get('technologies') as FormArray;
  }

  get technologyInput(): FormControl {
    return this.memberForm.get('technologyInput') as FormControl;
  }

  fillForm(dev: Developer) {
    this.memberForm.patchValue({
      id: dev.id,
      name: dev.name,
      role: dev.role,
      email: dev.email,
      imageUrl: dev.imageUrl,
      expertise: dev.expertise,
     // skills: dev.skills,
      experience: dev.experience,
      location: dev.location,
      description: dev.description,
    });

    this.videoUrls.clear();
    if (dev.videoUrls && dev.videoUrls.length) {
      dev.videoUrls.forEach(url => this.addVideoUrl(url));
    }

    this.technologies.clear();
    if (dev.technologies && dev.technologies.length) {
      dev.technologies.forEach(tech => this.addTechnology(tech));
    }
  }

  addVideoUrl(url: string = '') {
    this.videoUrls.push(new FormControl(url));
  }

  removeVideoUrl(index: number) {
    this.videoUrls.removeAt(index);
  }

  addTechnology(value: string) {
    this.technologies.push(new FormControl(value));
  }

  addTechnologyByInput(event: any) {
    event.preventDefault();
    const val = this.technologyInput.value?.trim();
    if (val && !this.technologies.value.includes(val)) {
      this.addTechnology(val);
      this.technologyInput.setValue('');
      this.filteredTechnologies = [];
    }
  }

  removeTechnology(index: number) {
    this.technologies.removeAt(index);
  }

  filterTechnologies(value: string) {
    if (!value) {
      this.filteredTechnologies = [];
      return;
    }
    const filterValue = value.toLowerCase();
    this.filteredTechnologies = this.allTechnologies
      .filter(t => t.toLowerCase().includes(filterValue))
      .filter(t => !this.technologies.value.includes(t));
  }

  selectTechnology(tech: string) {
    if (!this.technologies.value.includes(tech)) {
      this.addTechnology(tech);
    }
    this.technologyInput.setValue('');
    this.filteredTechnologies = [];
  }

  submitForm() {
    if (this.memberForm.valid) {
      console.log('Form Değeri:', this.memberForm.value);
      // Burada API'ye gönderme kodu olabilir
    } else {
      console.log('Form geçerli değil');
      this.memberForm.markAllAsTouched();
    }
  }
}
