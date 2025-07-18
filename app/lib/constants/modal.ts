export const MODAL_ID = {
	createBlog: 'create_blog',
	modifyBlog: 'modify_blog',
	deleteBlog: 'delete_blog',
} as const;

export type ModalIdType = (typeof MODAL_ID)[keyof typeof MODAL_ID];
