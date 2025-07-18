import type {ModalIdType} from '~/lib';

interface IModalProps {
	id: ModalIdType | string;
	title?: string;
	children?: React.ReactNode;
	modalActionsChildren?: React.ReactNode;
}

export const Modal = ({
	id,
	title,
	children,
	modalActionsChildren,
}: IModalProps) => {
	return (
		<>
			<input type="checkbox" id={id} className="modal-toggle" />
			<div className="modal" role="dialog">
				<div className="modal-box w-11/12 max-w-2xl">
					{title && <h3 className="text-lg font-bold">{title}</h3>}
					{children}
					{modalActionsChildren && (
						<div className="modal-action">{modalActionsChildren}</div>
					)}
				</div>
			</div>
		</>
	);
};
