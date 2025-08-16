'use client';

import { Form, Input, InputNumber, Button, Select, message } from 'antd';
import type { Movie } from '@/types/Movie';
import { createMovie } from '@/services/movieApi';
import { useRouter } from 'next/navigation';

const { TextArea } = Input;
const { Option } = Select;

const CreateMoviePage = () => {
    const [form] = Form.useForm();
    const router = useRouter();

    const handleFinish = async (values: Movie) => {
        try {
            const formattedValues = {
                ...values,
                genre: values.genre.toString(),
            };
            console.log('Creating movie with data:', formattedValues);
            await createMovie(formattedValues);
            message.success('Movie created successfully!');
            form.resetFields();
            router.push('/home');
        } catch (error) {
            message.error('Failed to create movie');
            console.error('Error creating movie:', error);
        }
    };

    return (
        <div className="min-h-screen min-w-screen flex items-center justify-center bg-gray-100">
            <div className="w-[90%] max-w-6xl bg-white shadow-2xl rounded-2xl p-12">
                <h2 className="text-4xl font-bold mb-10 text-center text-gray-800">
                    🎬 Create Movie
                </h2>

                <Form
                    layout="vertical"
                    form={form}
                    onFinish={handleFinish}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    {/* Title */}
                    <Form.Item
                        label={
                            <span className="font-semibold text-lg">Title</span>
                        }
                        name="title"
                        rules={[
                            {
                                required: true,
                                message: 'Please enter the movie title',
                            },
                        ]}
                    >
                        <Input
                            size="large"
                            className="rounded-lg border-gray-300"
                        />
                    </Form.Item>

                    {/* Genre */}
                    <Form.Item
                        label={
                            <span className="font-semibold text-lg">Genre</span>
                        }
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
                            size="large"
                            className="rounded-lg"
                        >
                            <Option value="Action">Action</Option>
                            <Option value="Drama">Drama</Option>
                            <Option value="Comedy">Comedy</Option>
                            <Option value="Horror">Horror</Option>
                        </Select>
                    </Form.Item>

                    {/* Release Year */}
                    <Form.Item
                        label={
                            <span className="font-semibold text-lg">
                                Release Year
                            </span>
                        }
                        name="releaseYear"
                        rules={[
                            { required: true, message: 'Enter release year' },
                        ]}
                    >
                        <InputNumber
                            min={1900}
                            max={2100}
                            size="large"
                            className="w-full rounded-lg border-gray-300"
                        />
                    </Form.Item>

                    {/* Director */}
                    <Form.Item
                        label={
                            <span className="font-semibold text-lg">
                                Director
                            </span>
                        }
                        name="director"
                        rules={[
                            { required: true, message: 'Enter director name' },
                        ]}
                    >
                        <Input
                            size="large"
                            className="rounded-lg border-gray-300"
                        />
                    </Form.Item>

                    {/* Description */}
                    <Form.Item
                        label={
                            <span className="font-semibold text-lg">
                                Description
                            </span>
                        }
                        name="description"
                        rules={[
                            { required: true, message: 'Enter a description' },
                        ]}
                        className="md:col-span-2"
                    >
                        <TextArea
                            rows={4}
                            className="rounded-lg border-gray-300"
                            size="large"
                        />
                    </Form.Item>

                    {/* Poster URL */}
                    <Form.Item
                        label={
                            <span className="font-semibold text-lg">
                                Poster URL
                            </span>
                        }
                        name="posterUrl"
                        rules={[
                            { required: true, message: 'Enter poster URL' },
                            { type: 'url', message: 'Must be a valid URL' },
                        ]}
                        className="md:col-span-2"
                    >
                        <Input
                            size="large"
                            className="rounded-lg border-gray-300"
                        />
                    </Form.Item>

                    {/* Submit */}
                    <Form.Item className="md:col-span-2 flex justify-center">
                        <Button
                            type="primary"
                            htmlType="submit"
                            size="large"
                            className="bg-blue-600 hover:bg-blue-700 px-10 py-3 rounded-lg text-lg"
                        >
                            Create Movie
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default CreateMoviePage;
