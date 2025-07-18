export const MODAL_ID = {
	createBlog: 'create_blog',
	modifyBlog: 'modify_blog',
	deleteBlog: 'delete_blog',

	createPost: 'create_post',
	modifyPost: 'modify_post',
	deletePost: 'delete_post',
} as const;

export type ModalIdType = (typeof MODAL_ID)[keyof typeof MODAL_ID];
