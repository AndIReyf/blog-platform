import {CircleX} from 'lucide-react';
import type {ModalIdType} from '~/lib';
import {Modal} from '../Modal/Modal';

interface IDeleteEntitiesModalProps {
	title?: string;
	text?: string;
	onClickHandler?: VoidFunction;
	id: ModalIdType | string;
}

export const DeleteEntitiesModal = ({
	title,
	text,
	id,
	onClickHandler,
}: IDeleteEntitiesModalProps) => {
	return (
		<Modal
			id={id}
			title={title}
			modalActionsChildren={
				<>
					<button
						onClick={onClickHandler}
						type="button"
						className="btn btn-error"
					>
						Delete
					</button>
					<label htmlFor={id} className="btn btn-soft">
						Close
					</label>
					<label
						htmlFor={id}
						className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
					>
						<CircleX />
					</label>
				</>
			}
		>
			{text && <p>{text}</p>}
		</Modal>
	);
};
