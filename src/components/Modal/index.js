import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import ReactDom from 'react-dom';
import styles from './Modal.module.scss';

const Modal = ({ title, children, onClose }) => {
  return ReactDom.createPortal(<div className={ styles.modal } onClick={ onClose }>
    <div className={ styles.content } onClick={ e => e.stopPropagation() }>
      
      <div className={ styles.header }>
        <h3 className={ styles.title }>
          { title }
        </h3>

        <button className={ styles.button } onClick={ onClose } title='Close'>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>

      <div className={ styles.body}>
        { children }
      </div>
    </div>
  </div>, document.getElementById('modal-root'));
};

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  onClose: PropTypes.func.isRequired
};

export default Modal;