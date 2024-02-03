/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */
import React from 'react';
import Header from '../Frame/Header';
import CollapsedMenuBar from '../Frame/CollapsedMenuBar';
import ContentRenderer from './ContentRenderer';
import { UIWINDOWProps } from '../../Global/gobalTypes';

const RENDER_HEADER_COMPONENT = (props: any) => (
  <Header handleMode={props.handleMode} mode={props.mode} />
);

const RENDER_COLLAPSED_MENUBAR_COMPONENT = (props: any) => (
  <CollapsedMenuBar menuItems={props.menuItems} />
);
const DISPLAY_CURRENT_SCREEN_CONTENT = () => <ContentRenderer />;

const UIRenderer = (props: UIWINDOWProps) => {
  console.log('Called UI Renderer');
  const { handleMode, mode, menuItems } = props;

  return (
    <>
      <RENDER_HEADER_COMPONENT handleMode={handleMode} mode={mode} />
      <RENDER_COLLAPSED_MENUBAR_COMPONENT menuItems={menuItems} />
      <DISPLAY_CURRENT_SCREEN_CONTENT />
    </>
  );
};

export default React.memo(UIRenderer);
