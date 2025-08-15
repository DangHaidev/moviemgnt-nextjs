import axios from 'axios';
import type { Movie } from '../types/Movie';

const API_BASE_URL = 'http://localhost:5001/api/movie';
const TIMEOUT = 5000;

export const fetchMovies = async (): Promise<Movie[]> => {
    try {
        const response = await axios.get<Movie[]>(API_BASE_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching movies:', error);
        throw error;
    }
};

export const fetchMovieById = async (id: string): Promise<Movie> => {
    try {
        const response = await axios.get<Movie>(`${API_BASE_URL}/${id}`, {
            timeout: TIMEOUT,
        });
        return response.data;
    } catch (error) {
        console.error(`Error fetching movie with ID ${id}:`, error);
        throw error;
    }
};

export const createMovie = async (movie: Movie): Promise<Movie> => {
    try {
        const response = await axios.post<Movie>(API_BASE_URL, movie);
        return response.data;
    } catch (error) {
        console.error('Error creating movie:', error);
        throw error;
    }
};

export const updateMovie = async (id: string, movie: Movie): Promise<Movie> => {
    try {
        const response = await axios.put<Movie>(`${API_BASE_URL}/${id}`, movie);
        return response.data;
    } catch (error) {
        console.error(`Error updating movie with ID ${id}:`, error);
        throw error;
    }
};

export const deleteMovie = async (id: string): Promise<void> => {
    try {
        await axios.delete(`${API_BASE_URL}/${id}`, {
            timeout: TIMEOUT,
        });
    } catch (error) {
        console.error(`Error deleting movie with ID ${id}:`, error);
        throw error;
    }
};
