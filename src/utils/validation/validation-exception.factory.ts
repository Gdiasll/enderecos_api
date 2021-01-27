import { ValidationError } from 'class-validator';
import { BadRequestException } from '@nestjs/common';

function recurse(error: ValidationError): string[] {
    // Revisar pipe
    return [...(error.children.flatMap(recurse)), ...Object.values(error.constraints ?? {})];
}

export default function(errors: ValidationError[]): BadRequestException {
    console.log(errors);
    return new BadRequestException(errors.map(recurse).join(', '));
}
