/* eslint-disable import/prefer-default-export */
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL!;

const instance = axios.create({
    baseURL: API_URL,
});

instance.interceptors.response.use((res) => res.data);

export const uploadSourceCode = async (source: FormData) => instance.post('/Analyzer/cpp', source, {
    headers: {
        accept: '*/*',
        'Content-Type': 'multipart/form-data',
    },
});
