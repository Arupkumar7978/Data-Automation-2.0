/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, useEffect, useState } from 'react';
import {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableRowCell
} from './Table';
import './datagrid.css';
import clsx from 'clsx';
import { FaSortDown, FaSortUp } from 'react-icons/fa';
import { IoCheckbox } from 'react-icons/io5';
import { MdCheckBoxOutlineBlank } from 'react-icons/md';
import { MdIndeterminateCheckBox } from 'react-icons/md';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import moment from 'moment';

interface DataGridProps {
  rows: any[];
  headers: any[];
  selectedRows: number[];
  sortDirection?: 'asc' | 'desc' | undefined;
  sortedColumn?: string | undefined;
  handleOnRowClick?: (id: any, obj: any) => void;
  primaryKey: number | string;
}

const DataGrid = (props: DataGridProps) => {
  const { primaryKey } = props;
  const initialState: Omit<DataGridProps, 'primaryKey'> = {
    rows: [],
    headers: [],
    selectedRows: [],
    sortDirection: undefined,
    sortedColumn: undefined
  };

  const [state, setState] =
    useState<Omit<DataGridProps, 'primaryKey'>>(initialState);

  const toggleSelectAll = () => {
    const selected =
      state?.selectedRows?.length === 0
        ? state?.rows.map((row) => row?.id || row?.[primaryKey])
        : [];
    setState((prevState) => ({
      ...prevState,
      selectedRows: selected
    }));
  };

  const checkBoxSelection = (
    e: ChangeEvent<HTMLInputElement>,
    id: number
  ) => {
    e.stopPropagation();
    const selectedIndex = state?.selectedRows?.indexOf(id);
    const newSelected: number[] = [...(state?.selectedRows || [])];

    if (selectedIndex === -1) {
      // If the item is not already selected, add it to the selection
      newSelected.push(id);
    } else {
      // If the item is already selected, remove it from the selection
      newSelected.splice(selectedIndex, 1);
    }

    setState((prevState) => ({
      ...prevState,
      selectedRows: newSelected
    }));
  };

  const sortByColumn = (column: any) => {
    if (state.sortedColumn === column) {
      setState((prevState) => ({
        ...prevState,
        sortDirection:
          prevState.sortDirection === 'asc' ? 'desc' : 'asc'
      }));
    } else {
      setState((prevState) => ({
        ...prevState,
        sortedColumn: column,
        sortDirection: 'asc'
      }));
    }

    const sortedRows = [...state.rows];
    sortedRows.sort((a, b) => {
      const aValue = a[column];
      const bValue = b[column];

      if (aValue === bValue) {
        return 0;
      }

      if (state.sortDirection === 'asc') {
        return aValue < bValue ? -1 : 1;
      } else {
        return aValue > bValue ? -1 : 1;
      }
    });

    setState((prevState) => ({
      ...prevState,
      rows: sortedRows
    }));
  };

  useEffect(() => {
    setState({ ...props });
  }, [props]);

  const getAllSectedIcon = () => {
    if (
      state?.selectedRows?.length > 0 &&
      state?.selectedRows?.length !== state?.rows?.length
    ) {
      return <MdIndeterminateCheckBox />;
    } else if (
      state?.selectedRows?.length > 0 &&
      state?.selectedRows?.length === state?.rows?.length
    ) {
      return <IoCheckbox onClick={() => toggleSelectAll()} />;
    } else
      return (
        <MdCheckBoxOutlineBlank onClick={() => toggleSelectAll()} />
      );
  };
  function stringToColor(string: string) {
    let hash = 0;
    let i;
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
    let color = '#';
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    return color;
  }

  const GetComponent = (type: string, label: string) => {
    let AvatarLabel;
    let ChipLabel;
    let AvatarColor;
    if (type === 'CHIP') {
      AvatarLabel =
        label.charAt(0).toUpperCase() +
        label.split('.')[1].charAt(0).toUpperCase();
      ChipLabel = (() => {
        const splitedLabel = label.split('.');
        const firstName =
          splitedLabel[0].charAt(0).toUpperCase() +
          splitedLabel[0].slice(1, splitedLabel[0].length);
        const lastName =
          splitedLabel[1].charAt(0).toUpperCase() +
          splitedLabel[1].slice(1, splitedLabel[1].length);
        const fullName = `${firstName} ${lastName}`;
        return fullName;
      })();
      AvatarColor = stringToColor(ChipLabel);
    }

    switch (type) {
      case 'CHIP':
        return (
          <Chip
            avatar={
              <Avatar
                sx={{ bgcolor: AvatarColor }}
                className="avatar"
              >
                {AvatarLabel}
              </Avatar>
            }
            label={ChipLabel}
            variant="outlined"
            // color="success"
            size="small"
          />
        );
      case 'DATECHIP':
        return (
          <Chip
            label={moment((label as string)?.split(' ')[0]).format(
              'Do MMM YYYY'
            )}
            variant="filled"
            size="small"
          />
        );

      default:
        return label;
        break;
    }
  };

  const GetGridDataDisplayType = (row: any, key: any) => {
    const displayConfig: any = {
      createdBy: 'CHIP',
      updatedBy: 'CHIP',
      createdOn: 'DATECHIP',
      updatedOn: 'DATECHIP'
    };
    if (Object.keys(displayConfig).includes(key)) {
      const type = displayConfig[key];
      return GetComponent(type, row[key]);
    }
    return row[key];
  };

  return (
    <div className="gridMainContainer">
      <div
        className="tableStyleMain"
        onBlur={() =>
          setState((prev) => ({ ...prev, sortedColumn: '' }))
        }
      >
        {/* Render your table using state.rows and call handleClick and sortByColumn with updated syntax */}
        <Table className={'tableStyle'}>
          <TableHead>
            {state?.headers?.map((header) => (
              <TableRow key={header.id}>
                <TableHeaderCell onClick={() => toggleSelectAll()}>
                  {/* <input
                  type="checkbox"
                  checked={state?.selectedRows?.length > 0}
                  onClick={() => toggleSelectAll()}
                /> */}
                  {getAllSectedIcon()}
                </TableHeaderCell>
                {Object.keys(header).map((key) => (
                  <TableHeaderCell
                    key={key}
                    onClick={() => sortByColumn(key)}
                  >
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        height: '100%'
                      }}
                    >
                      <div className="fusion-th-text">
                        <span style={{ whiteSpace: 'nowrap' }}>
                          {header[key]}
                        </span>
                      </div>
                      <div className="fusion-th-sortIcon">
                        {state.sortedColumn === key && (
                          <SortIndicator
                            direction={state.sortDirection}
                          />
                        )}
                      </div>
                    </div>
                  </TableHeaderCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody>
            {state.rows.map((row) => (
              <TableRow
                key={row.id || row?.[primaryKey]}
                className={clsx({
                  ['selected']: state?.selectedRows?.includes(
                    row?.id || row?.[primaryKey]
                  )
                })}
                onClick={() =>
                  props.handleOnRowClick?.(
                    (row?.id as string) ||
                      (row?.[primaryKey] as string),
                    row
                  )
                }
              >
                <TableRowCell>
                  <input
                    type="checkbox"
                    checked={state?.selectedRows?.includes(
                      row?.id || row?.[primaryKey]
                    )}
                    onChange={(e) =>
                      checkBoxSelection(
                        e,
                        row?.id || row?.[primaryKey]
                      )
                    }
                    className="check"
                  />
                  {state?.selectedRows?.includes(
                    row.id || row?.[primaryKey]
                  ) ? (
                    <IoCheckbox
                      onClick={(e: any) =>
                        checkBoxSelection(
                          e,
                          row?.id || row?.[primaryKey]
                        )
                      }
                    />
                  ) : (
                    <MdCheckBoxOutlineBlank
                      onClick={(e: any) =>
                        checkBoxSelection(
                          e,
                          row?.id || row?.[primaryKey]
                        )
                      }
                    />
                  )}
                </TableRowCell>
                {Object.keys(row).map(
                  (key) =>
                    Object.keys(state.headers[0]).includes(key) && (
                      <TableRowCell key={key}>
                        {GetGridDataDisplayType(row, key)}
                      </TableRowCell>
                    )
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

type SortIndicatorProps = {
  direction: 'asc' | 'desc' | undefined;
};

const SortIndicator = ({ direction }: SortIndicatorProps) => {
  if (direction === 'asc') {
    return <FaSortDown />; // Up arrow
  } else if (direction === 'desc') {
    return <FaSortUp />; // Down arrow
  } else {
    return null; // No arrow
  }
};

export default DataGrid;
