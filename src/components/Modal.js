import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';
import Backdrop from './Backdrop';
import { CSSTransition } from 'react-transition-group';

const ModalOverlay = (props) => {
	const content = (
		<div
			className={`modal max-w-md mx-auto h-screen overflow-y-auto  ${props.className}`}
			style={props.style}
		>
			<header className={`modal__header ${props.headerClass}`}>
				<h2>{props.header}</h2>
			</header>
			<form
				onSubmit={
					props.onSubmit ? props.onSubmit : (event) => event.preventDefault()
				}
			>
				<div className={`modal__content ${props.contentClass}`}>
					{props.children}
				</div>
				<footer className={`modal__footer ${props.footerClass}`}>
					{props.footer}
				</footer>
			</form>
		</div>
	);
	return ReactDOM.createPortal(content, document.getElementById('modal-hook'));
};

const Modal = (props) => {
	return (
		<Fragment>
			{props.show && <Backdrop onclick={props.onCancel} />}

			<CSSTransition
				in={props.show}
				mountOnEnter
				unmountOnExit
				timeout={200}
				classNames="modal"
			>
				<ModalOverlay {...props} />
			</CSSTransition>
		</Fragment>
	);
};

export default Modal;
