export interface AuthResponse {
  code: number,
  status: string,
  message: {
    Authorization: string
  }
}

export interface Persona {
  id_persona: number;
  nombre: string;
  email: string;
  apaterno: string;
  amaterno: string;
  genero: number;
  fecha_nac: string;
  rol: number;
}
