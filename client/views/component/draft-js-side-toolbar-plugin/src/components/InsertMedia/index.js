import React from 'react';
import { Button } from 'antd';

import {
    HeadlineOneButton,
    HeadlineTwoButton,
    BlockquoteButton,
    CodeBlockButton,
    UnorderedListButton,
    OrderedListButton,
} from 'draft-js-buttons';

import BlockTypeSelect from '../BlockTypeSelect';

const InsertMedia = ({ getEditorState, setEditorState, theme }) => (
    <Button type='gost' icon='upload'/>
);

export default InsertMedia;
