import { IsNotEmpty, IsString, IsNumber, IsPositive } from "class-validator";

export class testPost  {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNumber()
    @IsPositive()
    age: number;
}
export class testQuery  {
    @IsNumber()
    dni: number
}
export class testParam {
    @IsString()
    adress: string
}