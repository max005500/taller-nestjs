import { Injectable } from '@nestjs/common';

@Injectable()
export class BuildingSiteService {
  private obras = [
    {
      id: 1,
      nombre: 'casja',
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
    let newUpdate = {
      ...this.obras[index],
      ...payload,
    };
    return (this.obras[index] = newUpdate);
  }
  delete(id: number) {
    this.obras = this.obras.filter((x) => x.id != id);

    if (this.obras.some((x) => x.id == id)) {
      return { message: 'info no borrada exitosamente' };
    }
    return { message: 'info borrada con exito ' };
  }
}
