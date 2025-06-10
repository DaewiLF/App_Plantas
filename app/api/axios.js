import axios from 'axios';

const instancia = axios.create({
  baseURL: 'http://TU_IP_LOCAL:3000', // cámbialo según plataforma
  timeout: 5000,
});

export default instancia;
