import {zodResolver} from '@hookform/resolvers/zod';
import {CircleX} from 'lucide-react';
import {useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {href, useFetcher} from 'react-router';
import type {z} from 'zod';
import {Loader, Modal} from '~/components/shared';
import {MODAL_ID, postSchema} from '~/lib';

type IFormInput = z.infer<typeof postSchema>;

interface ICreateUpdatePostModalProps {
	id: string;
	defaultValues?: IFormInput;
}

export const CreateUpdatePostModal = ({
	id,
	defaultValues,
}: ICreateUpdatePostModalProps) => {
	const fetcher = useFetcher();
	const isSubmitting = fetcher.state === 'submitting';
	const isSubmitSuccessful = fetcher.state === 'idle' && fetcher.data;
	const isEditing = id !== MODAL_ID.createPost;
	const submitBtnLabel = isEditing ? 'Modify' : 'Create';

	const {
		register,
		handleSubmit,
		formState: { errors, isValid, isDirty },
		reset,
	} = useForm<IFormInput>({
		resolver: zodResolver(postSchema),
		mode: 'all',
		...(defaultValues && { defaultValues }),
	});

	useEffect(() => {
		if (isSubmitSuccessful) reset();
	}, [isSubmitSuccessful, reset]);

	const onSubmit = (data: IFormInput) => {
		if (isEditing) {
			fetcher.submit(data, {
				method: 'put',
				action: href('/posts/:id', { id }),
			});
		} else {
			fetcher.submit(data, { method: 'post', action: href('/posts') });
		}
	};

	const onClickHandler: VoidFunction = () => {
		reset();
	};

	const isSubmitBtnDisabled = !isValid || isSubmitting || !isDirty;

	return (
		<Modal id={id} title="Create New Post">
			<fetcher.Form onSubmit={handleSubmit(onSubmit)}>
				<fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4 mb-4">
					<legend className="fieldset-legend">Mandatory Fields</legend>

					<span className="label">Title</span>
					<input {...register('title')} type="text" className="input w-auto" />
					{errors.title && (
						<span className="text-error">{errors.title.message}</span>
					)}

					<span className="label">Short Description</span>
					<input
						{...register('shortDescription')}
						type="text"
						className="input w-auto"
					/>
					{errors.shortDescription && (
						<span className="text-error">
							{errors.shortDescription.message}
						</span>
					)}

					<span className="label">Blog ID</span>
					<input {...register('blogId')} type="text" className="input w-auto" />
					{errors.blogId && (
						<span className="text-error">{errors.blogId.message}</span>
					)}

					<span className="label">Blog Name</span>
					<input
						{...register('blogName')}
						type="text"
						className="input w-auto"
					/>
					{errors.blogName && (
						<span className="text-error">{errors.blogName.message}</span>
					)}

					<span className="label">Post Content</span>
					<textarea {...register('content')} className="textarea w-auto" />
					{errors.content && (
						<span className="text-error">{errors.content.message}</span>
					)}
				</fieldset>
				<div className="modal-action">
					<button
						disabled={isSubmitBtnDisabled}
						type="submit"
						className="btn btn-primary"
					>
						{isSubmitting ? (
							<>
								<span>Submitting</span>
								<Loader />
							</>
						) : (
							submitBtnLabel
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
		</Modal>
	);
};
