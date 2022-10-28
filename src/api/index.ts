import request from '@/libs/request';

export const Login = (data) => request<any>({ method: 'post', url: '/api/login', data });

export const Logout = () => request<any>({ method: 'get', url: '/api/logout' });
