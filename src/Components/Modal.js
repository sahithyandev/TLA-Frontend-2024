import React, { useRef, useEffect } from 'react';

function closeDialogEventListener(event) {
	const _dialog = event.target;
	if (!(_dialog instanceof HTMLDialogElement)) return;

	const rect = _dialog.getBoundingClientRect();
	if (rect.left > event.clientX ||
		rect.right < event.clientX ||
		rect.top > event.clientY ||
		rect.bottom < event.clientY
	) {
		_dialog.close();
	}
}

const Modal = ({ isOpen, onClose, children } = {
	isOpen: true,
	onClose: undefined,
	children: null
}) => {
	const dialogRef = useRef(null);

	useEffect(() => {
		const _dialog = dialogRef.current;
		if (!(_dialog instanceof HTMLDialogElement)) return;

		_dialog
			.addEventListener(
				'click',
				closeDialogEventListener,
				false
			);

		return function cleanup() {
			_dialog.removeEventListener("click", closeDialogEventListener, false);
		};
	}, []);

	useEffect(() => {
		const _dialog = dialogRef.current;
		if (!(_dialog instanceof HTMLDialogElement)) return;
		if (isOpen) {
			_dialog.showModal();
		} else {
			_dialog.close();
		}
	}, [isOpen]);

	const handleClose = () => {
		if (onClose) {
			onClose();
		}
	};

	return (
		<dialog ref={dialogRef}>
			{children}
		</dialog>
	);
};

export default Modal;