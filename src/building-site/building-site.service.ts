import { Injectable } from '@nestjs/common';

@Injectable()
export class BuildingSiteService {
  private obras = [
    {
      id: 1,
      nombre: 'casa',
      ubicacion: 'avenida siempre viva',
      descripcion: 'obras sociales',
    },
    {
      id: 2,
      nombre: 'condominio Huasco-Miranda',
      ubicacion: 'los fresnos',
      descripcion: 'condominio privilegiado VIP',
    },
    {
      id: 3,
      nombre: 'hostal',
      ubicacion: 'camino internacional',
      descripcion: 'no somos canibales',
    },
  ];
  findAll() {
    return this.obras;
  }
  findOne(id: number) {
    return this.obras.find((x) => x.id == id);
  }
  create(payload: any) {
    return payload;
  }
  update(id: number, payload: any) {
    const index = this.obras.findIndex((x) => x.id == id);
    return (this.obras[index] = payload);
  }
  delete(id: number) {
    const index = this.obras.findIndex((x) => x.id == id);
    return this.obras.slice(index, 1);
  }
}
