interface UserProps {
  name?: string;
  age?: number;
}
export class User {
  constructor(private data: UserProps) {}

  get(propName: string): string | number {
    // @ts-ignore:
    return this.data[propName! as keyof UserProps];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }
}
