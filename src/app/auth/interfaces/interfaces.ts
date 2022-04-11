export interface AuthResponse {
  code: number,
  status: string,
  message: {
    Authorization: string
  }
}

export interface Usuario {
  id: string;
  name: string;
}
