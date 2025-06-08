
export class Developer {
    private _id: number;
  private _name: string;
  private _email: string;
  private _role: string;
  private _img: string;
  private _skills: string;

  constructor(id: number, name: string, email: string, role: string, img:string, skills: string) {
    this._id = id;
    this._name = name;
    this._email = email;
    this._role = role;
    this._img = img;
    this._skills = skills;
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
    if (value.length < 2) {
      throw new Error('role must be at least 2 characters');
    }
    this._role = value;
  }

  get img(): string {
    return this._img;
  }

  set img(value: string) {
    if (value.endsWith(".jpg")) {
      throw new Error('img must be at least jpg');
    }
    this._role = value;
  }

  get skills(): string {
    return this._skills;
  }

  set skills(value: string) {
    if (value.endsWith(".jpg")) {
      throw new Error('img must be at least jpg');
    }
    this._skills = value;
  }

  getDisplayName(): string {
    return `${this._name} <${this._email}>`;
  }

}
