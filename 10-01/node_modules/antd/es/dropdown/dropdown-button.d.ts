/// <reference types="react" />
import React from 'react';
export interface DropdownButtonProps {
    prefixCls?: string;
    className?: string;
    type?: 'primary' | 'ghost' | 'dashed';
    onClick?: React.MouseEventHandler<any>;
    trigger?: ('click' | 'hover')[];
    align?: any;
    overlay: React.ReactNode;
    visible?: boolean;
    disabled?: boolean;
    onVisibleChange?: (visible: boolean) => void;
    style?: React.CSSProperties;
    children?: any;
    placement?: 'topLeft' | 'topCenter' | 'topRight' | 'bottomLeft' | 'bottomCenter' | 'bottomRight';
}
export default class DropdownButton extends React.Component<DropdownButtonProps, any> {
    static defaultProps: {
        placement: string;
        type: string;
        prefixCls: string;
    };
    render(): JSX.Element;
}
