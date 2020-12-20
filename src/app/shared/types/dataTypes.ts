export class UserDto {
  id: number;
  firstName: string;
  lastName: string;
  employeeDate: string;
  birthDate?: string;
  educationLevel?: string;
  gender: string;
  picture: string;
  status: boolean;
  telNumber?: string;
  mobileNumber?: string;
  email?: string;
  address?: string;
}

export class ProductDto {
  id: number;
  name: string;
  price: number;
  pictureUrl: string;
  percent: number;

}



