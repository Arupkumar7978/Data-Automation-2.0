import React, { useState } from 'react';
import SpreadDataGrid from './SpreadGrid';
import Modal from '../../Components/Modal/Modal';
import { CreateModalFields } from './SpreadSheetModals/CreateModal';
import { MODAL_HEADER_CONFIG } from './SpreadConstants';

const SpreadSheets: React.FC = () => {
  console.log('SpreadSheets Rendered');

  const [open, setOpen] = useState({ createDialog: false });

  return (
    <>
      <SpreadDataGrid setOpen={setOpen} />
      <Modal
        children={<CreateModalFields setOpen={setOpen} />}
        headerConfig={MODAL_HEADER_CONFIG.CREATE}
        open={open.createDialog}
        modalType={'confirm'}
      />
    </>
  );
};

export default SpreadSheets;
