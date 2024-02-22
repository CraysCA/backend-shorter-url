export interface Server {
  port: number;
}

export interface Database {
  name: string;
  host: string;
  port: number;
  user: string;
  password: string;
  dialect: string;
  logging: boolean;
}

export interface Schema {
  body?: any;
  params?: any;
  query?: any;
}
