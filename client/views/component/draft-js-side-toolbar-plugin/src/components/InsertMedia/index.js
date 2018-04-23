import React from 'react';
import { Button } from 'antd';

import Img from './addImg';
import Video from './addVideo';
import Audio from './addAudio';

import MediaTypeSelect from './MediaTypeSelect';

const InsertMedia = ({ getEditorState, setEditorState, theme, modifier }) => (
    <MediaTypeSelect
        getEditorState={getEditorState}
        setEditorState={setEditorState}
        theme={theme}
        structure={[Img, Video, Audio]}
        modifier={modifier}
    />
);

export default InsertMedia;