import { SetMetadata } from '@nestjs/common';

export const API_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(API_PUBLIC_KEY, true);
