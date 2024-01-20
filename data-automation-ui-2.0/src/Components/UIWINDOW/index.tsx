/* eslint-disable react-refresh/only-export-components */
import React from 'react';
import Header from '../Frame/Header';
import CollapsedMenuBar from '../Frame/CollapsedMenuBar';
import ContentRenderer from './ContentRenderer';
import { UIWINDOWProps } from '../../Global/gobalTypes';

const UIRenderer = (props: UIWINDOWProps) => {
  console.log('Called UI Renderer');
  const { handleMode, mode, menuItems } = props;

  const RENDER_HEADER_COMPONENT = () => (
    <Header handleMode={handleMode} mode={mode} />
  );

  const RENDER_COLLAPSED_MENUBAR_COMPONENT = () => (
    <CollapsedMenuBar menuItems={menuItems} />
  );
  const DISPLAY_CURRENT_SCREEN_CONTENT = () => <ContentRenderer />;

  return (
    <>
      <RENDER_HEADER_COMPONENT />
      <RENDER_COLLAPSED_MENUBAR_COMPONENT />
      <DISPLAY_CURRENT_SCREEN_CONTENT />
    </>
  );
};

export default React.memo(UIRenderer);
