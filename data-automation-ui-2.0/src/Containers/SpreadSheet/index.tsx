import { useParams } from 'react-router-dom';
import { SpreadSheets } from '@grapecity/spread-sheets-react';

const config = {
  spreadBackColor: 'aliceblue',
  sheetName: 'Person Address',
  hostStyle: {
    top: '80px',
    bottom: '20px',
    right: '10px',
    left: '10px'
  },
  autoGenerateColumns: false
};
const SpreadSheet = () => {
  const {
    spreadBackColor,
    sheetName,
    hostStyle,
    autoGenerateColumns
  } = config;
  const { workbookUUID } = useParams();

  const initSpread = (spread) => {};

  return (
    <SpreadSheets
      backColor={spreadBackColor}
      workbookInitialized={(spread) => initSpread(spread)}
    ></SpreadSheets>
  );
};

export default SpreadSheet;
