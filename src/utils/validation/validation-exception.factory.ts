import { ValidationError } from 'class-validator';
import { BadRequestException } from '@nestjs/common';

export default function(errors: ValidationError[]): BadRequestException {
    return new BadRequestException(errors.map(err => Object.values(err.constraints)).join(', '));
}
