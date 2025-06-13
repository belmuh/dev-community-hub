export class Developer {
  private _id: number;
  private _name: string;
  private _email: string;
  private _role: string;
  private _imageUrl: string;
  private _videoUrls: string[];  
  private _expertise: string;          
  private _technologies: string[];     
  private _experience: string;         
  private _location: string;          
  private _description: string; 
           


  constructor(id: number, 
              name: string, 
              email: string, 
              role: string, 
              imageUrl:string, 
              videoUrls: string[],  
              expertise: string,
              technologies: string[],           
              experience: string,      
              location: string,
              description: string) {
    this._id = id;
    this._name = name;
    this._email = email;
    this._role = role;
    this._imageUrl = imageUrl;
    this._videoUrls = videoUrls;
    this._expertise = expertise;
    this._technologies = technologies;
    this._experience = experience;
    this._location = location;
    this._description = description;
  }

  get id(): number {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    if (value.length < 2) {
      throw new Error('Name must be at least 2 characters');
    }
    this._name = value;
  }

  getDisplayName(): string {
    return `${this._name} <${this._email}>`;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    if (!value.includes('@')) {
      throw new Error('Invalid email address');
    }
    this._email = value;
  }

  get role(): string {
    return this._role;
  }

  set role(value: string) {
    this._role = value;
  }

  get imageUrl(): string {
    return this._imageUrl;
  }

  set imageUrl(value: string) {
    if (value.endsWith(".jpg")) {
      throw new Error('imageUrl must be at least jpg');
    }
    this._imageUrl = value;
  }

  get videoUrls(): string[] {
    return this._videoUrls;
  }

  set videoUrls(value: string[]) {
    this._videoUrls = value;
  }

  get expertise(): string {
    return this._expertise;
  }

  set expertise(value: string) {
    this._expertise = value;
  }

  get technologies(): string[] {
    return this._technologies;
  }

  set technologies(value: string[]) {
    this._technologies = value;
  }

  get experience(): string {
    return this._experience;
  }

  set experience(value: string) {
    this._experience = value;
  }

  get location(): string {
    return this._location;
  }

  set location(value: string) {
    this._location = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

}
