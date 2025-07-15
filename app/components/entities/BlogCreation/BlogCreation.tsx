import {zodResolver} from '@hookform/resolvers/zod';
import {CircleX} from 'lucide-react';
import {useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {useFetcher} from 'react-router';
import type {z} from 'zod';
import {Loader} from '~/components/shared';
import {blogSchema} from '~/lib';

interface IBlogCreationProps {
	id: string;
}

type IFormInput = z.infer<typeof blogSchema>;

export const BlogCreation = ({ id }: IBlogCreationProps) => {
	const fetcher = useFetcher();
	const isSubmitting = fetcher.state === 'submitting';
	const isSubmitSuccessful = fetcher.state === 'idle' && fetcher.data;

	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
		reset,
	} = useForm<IFormInput>({
		resolver: zodResolver(blogSchema),
		mode: 'all',
	});

	useEffect(() => {
		if (isSubmitSuccessful) reset();
	}, [isSubmitSuccessful, reset]);

	const onSubmit = (data: IFormInput) => {
		fetcher.submit(data, { method: 'post' });
	};

	const onClickHandler: VoidFunction = () => {
		reset();
	};

	return (
		<>
			<input type="checkbox" id={id} className="modal-toggle" />
			<div className="modal" role="dialog">
				<div className="modal-box w-11/12 max-w-2xl">
					<h3 className="font-bold text-lg">Blog details</h3>
					<fetcher.Form onSubmit={handleSubmit(onSubmit)}>
						<fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4 mb-4">
							<legend className="fieldset-legend">Create New Blog</legend>

							<span className="label">Blog Title</span>
							<input
								{...register('name')}
								type="text"
								className="input w-auto"
							/>
							{errors.name && (
								<span className="text-error">{errors.name.message}</span>
							)}

							<span className="label">Website</span>
							<input
								{...register('websiteUrl')}
								placeholder="https://"
								type="url"
								className="input w-auto"
							/>
							{errors.websiteUrl && (
								<span className="text-error">{errors.websiteUrl.message}</span>
							)}

							<span className="label">Blog Description</span>
							<textarea
								{...register('description')}
								className="textarea w-auto"
							/>
							{errors.description && (
								<span className="text-error">{errors.description.message}</span>
							)}
						</fieldset>
						<div className="modal-action">
							<button
								disabled={!isValid || isSubmitting}
								type="submit"
								className="btn btn-primary"
							>
								{isSubmitting ? (
									<>
										<span>Submitting</span>
										<Loader />
									</>
								) : (
									'Submit'
								)}
							</button>
							<label onClick={onClickHandler} htmlFor={id} className="btn">
								Close
							</label>
							<label
								onClick={onClickHandler}
								htmlFor={id}
								className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
							>
								<CircleX />
							</label>
						</div>
					</fetcher.Form>
				</div>
			</div>
		</>
	);
};
