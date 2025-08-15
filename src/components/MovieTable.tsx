// src/components/MovieTable.tsx
import React from 'react';
import type { Movie } from '@/types/Movie';
import { Table, Tag, Image, Button, message, Popconfirm } from 'antd';
import { useRouter } from 'next/navigation';
import { deleteMovie } from '@/services/movieApi';

interface Props {
    movies: Movie[];
    onDeleteSuccess: () => void;
}

const MovieTable: React.FC<Props> = ({ movies, onDeleteSuccess }) => {
    const navigate = useRouter();

    const handleDelete = (id: number) => {
        deleteMovie(id.toString())
            .then(() => {
                message.success('Movie deleted successfully');
                onDeleteSuccess();
            })
            .catch((error) => {
                console.error('Error deleting movie:', error);
                message.error('Failed to delete movie');
            });
    };

    const columns = [
        {
            title: 'Poster',
            dataIndex: 'posterUrl',
            key: 'posterUrl',
            render: (url: string) => (
                <Image width={80} src={url} alt="poster" />
            ),
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Genres',
            dataIndex: 'genre',
            key: 'genre',
            render: (genre: string) => {
                const genres = genre.split(',').map((g) => g.trim());
                return (
                    <>
                        {genres.map((g) => (
                            <Tag color="blue" key={g}>
                                {g}
                            </Tag>
                        ))}
                    </>
                );
            },
        },
        {
            title: 'Release Year',
            dataIndex: 'releaseYear',
            key: 'releaseYear',
        },
        {
            title: 'Director',
            dataIndex: 'director',
            key: 'director',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
            ellipsis: true,
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (_: unknown, record: Movie) => (
                <span>
                    <Button
                        type="link"
                        onClick={() =>
                            navigate.push(`/edit-movie/${record.id}`)
                        }
                    >
                        Edit
                    </Button>
                    <Popconfirm
                        title="Bạn có chắc muốn xoá phim này không?"
                        onConfirm={() => handleDelete(record.id)}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button
                            type="link"
                            // danger
                            // onClick={() => handleDelete(record.id)}
                        >
                            Delete
                        </Button>
                    </Popconfirm>
                </span>
            ),
        },
    ];

    return (
        <Table
            rowKey="id"
            dataSource={movies}
            columns={columns}
            pagination={{ pageSize: 2 }}
        />
    );
};

export default MovieTable;
