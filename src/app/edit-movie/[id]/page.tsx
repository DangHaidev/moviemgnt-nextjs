'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Form, Input, InputNumber, Button, Select, message } from 'antd';
import type { Movie } from '@/types/Movie';
import { updateMovie, fetchMovieById } from '@/services/movieApi';

const { TextArea } = Input;
const { Option } = Select;

const EditMoviePage = () => {
    const params = useParams<{ id: string }>();
    const router = useRouter();
    const [movie, setMovie] = useState<Movie | null>(null);
    const [form] = Form.useForm();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchMovieById(params.id);
                setMovie(data);
                form.setFieldsValue(data);
            } catch (err) {
                console.error('Lỗi khi fetch movie:', err);
            }
        };

        if (params.id) fetchData();
    }, [params.id, form]);

    const handleUpdate = async (updatedMovie: Movie) => {
        try {
            const formattedValues = {
                ...updatedMovie,
                genre: updatedMovie.genre.toString(),
            };
            await updateMovie(params.id, formattedValues);
            message.success('Cập nhật phim thành công!');
            router.push('/home');
        } catch (err) {
            console.error('Lỗi cập nhật:', err);
            message.error('Lỗi khi cập nhật phim');
        }
    };

    if (!movie)
        return <div className="text-center text-lg p-6">Loading...</div>;

    return (
        <div className="min-h-screen min-w-screen flex items-center justify-center bg-gray-100">
            <div className="w-[90%] max-w-6xl bg-white shadow-2xl rounded-2xl p-12">
                <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                    ✏️ Cập nhật phim
                </h1>
                <Form
                    layout="vertical"
                    form={form}
                    onFinish={handleUpdate}
                    className="space-y-4"
                >
                    <Form.Item
                        label={<span className="font-medium">Title</span>}
                        name="title"
                        rules={[
                            {
                                required: true,
                                message: 'Please enter the movie title',
                            },
                        ]}
                    >
                        <Input className="rounded-lg border-gray-300" />
                    </Form.Item>

                    <Form.Item
                        label={<span className="font-medium">Genre</span>}
                        name="genre"
                        rules={[
                            {
                                required: true,
                                message: 'Please select at least one genre',
                            },
                        ]}
                    >
                        <Select
                            mode="multiple"
                            placeholder="Select genres"
                            className="w-full"
                        >
                            <Option value="Action">Action</Option>
                            <Option value="Drama">Drama</Option>
                            <Option value="Comedy">Comedy</Option>
                            <Option value="Horror">Horror</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label={
                            <span className="font-medium">Release Year</span>
                        }
                        name="releaseYear"
                        rules={[
                            { required: true, message: 'Enter release year' },
                        ]}
                    >
                        <InputNumber
                            min={1900}
                            max={2100}
                            className="w-full rounded-lg border-gray-300"
                        />
                    </Form.Item>

                    <Form.Item
                        label={<span className="font-medium">Director</span>}
                        name="director"
                        rules={[
                            { required: true, message: 'Enter director name' },
                        ]}
                    >
                        <Input className="rounded-lg border-gray-300" />
                    </Form.Item>

                    <Form.Item
                        label={<span className="font-medium">Description</span>}
                        name="description"
                        rules={[
                            { required: true, message: 'Enter a description' },
                        ]}
                    >
                        <TextArea
                            rows={3}
                            className="rounded-lg border-gray-300"
                        />
                    </Form.Item>

                    <Form.Item
                        label={<span className="font-medium">Poster URL</span>}
                        name="posterUrl"
                        rules={[
                            { required: true, message: 'Enter poster URL' },
                            { type: 'url', message: 'Must be a valid URL' },
                        ]}
                    >
                        <Input className="rounded-lg border-gray-300" />
                    </Form.Item>

                    <Form.Item>
                        <div className="text-center">
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg text-white text-lg"
                            >
                                Update Movie
                            </Button>
                        </div>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default EditMoviePage;
