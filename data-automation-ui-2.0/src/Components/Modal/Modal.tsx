/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import ModalTypes from './modalTypes';
import { IoClose } from 'react-icons/io5';
import { GoAlertFill } from 'react-icons/go';
import { VscError } from 'react-icons/vsc';
import { FcInfo } from 'react-icons/fc';
import { BiSolidSpreadsheet } from 'react-icons/bi';
import './modal.css';
import Typography from '../Typography/Typography';

const Modal: React.FC<ModalTypes> = ({
  children = 'children',
  headerConfig = { title: '', description: '', hideCloseIcon: false },
  modalType = 'warning',
  onClose,
  footerContent,
  open,
  customModalTypeIcon,
  setOpen
}: ModalTypes) => {
  console.log('Rendered Modal');

  const { title, description, hideCloseIcon } = headerConfig;
  const FUSION = `fusion-modal`;
  const GET_ICON = () => {
    const iconClass = `${FUSION}-${modalType}-icon`;
    switch (modalType) {
      case 'warning':
        return <GoAlertFill className={iconClass} />;
      case 'info':
        return <FcInfo className={iconClass} />;
      case 'confirm':
        return <BiSolidSpreadsheet className={iconClass} />;
      case 'error':
        return <VscError className={iconClass} />;
      case 'custom':
        return (
          customModalTypeIcon &&
          React.cloneElement(customModalTypeIcon)
        );

      default:
        return null;
    }
  };

  const Header = () => (
    <div className={`${FUSION}-header`}>
      <div className={`${FUSION}-header-title-icon`}>
        <div className={`${FUSION}-header-icon-wrapper`}>
          <GET_ICON />
          <Typography variant="heading" size="large">
            {title}
          </Typography>
        </div>

        {!hideCloseIcon && (
          <IoClose
            onClick={() => setOpen?.()}
            className={`${FUSION}-close-icon`}
          />
        )}
      </div>
      <Typography variant="body" size="small" disabled>
        {description}
      </Typography>
    </div>
  );

  const Content = () => (
    <div className={`${FUSION}-content`}>{children}</div>
  );

  const FooterContent = () =>
    footerContent && (
      <div className={`${FUSION}-footer`}>{footerContent}</div>
    );

  const handleMouseEvents = () => {};
  return (
    <>
      {open && (
        <div
          className={`${FUSION}-root`}
          onMouseDown={handleMouseEvents}
          onMouseUp={handleMouseEvents}
          onTouchStart={handleMouseEvents}
          onTouchEnd={handleMouseEvents}
        >
          <div className={`${FUSION}-backdrop`} onClick={onClose} />
          <div className={`${FUSION}-container`}>
            <div className={`${FUSION}`}>
              <Header />
              <Content />
              <FooterContent />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default React.memo(Modal);
