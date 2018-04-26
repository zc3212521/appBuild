/* eslint-disable react/no-children-prop */
import React, { Component } from 'react';
import { RichUtils } from 'draft-js';
import { Button, Modal, message } from 'antd';
import UploadFile from '../../../../../common/upload'

export default ({ mediaType, children }) => (
    class BlockStyleButton extends Component {
        constructor(props) {
            super(props)
            this.state = {
                up:false,
                img:[],
                fileType: ''
            }
            this.addMedia = this.addMedia.bind(this)
            this.getPictures = this.getPictures.bind(this)
            this.handlePictureSeletorOK = this.handlePictureSeletorOK.bind(this)
            this.handlePictureSeletorCancel = this.handlePictureSeletorCancel.bind(this)
        }

        addMedia = (e) => {
            message.loading("上传中...", 0)
            this.setState({
                up:true,
                fileType: mediaType
            })
        }

        preventBubblingUp = (event) => { event.preventDefault(); }

        getPictures(pictureList) {
            message.destroy();
            let picList = pictureList.map(item => {
                if (typeof(item.url) !== 'undefined') {
                    return item.url
                }
            });

            this.setState({
                img: picList,
                up: false
            })
            picList.map(item => {
                let editorState = this.props.modifier(mediaType, this.props.getEditorState(), item, {name:'haha'})
                this.props.setEditorState(editorState)
            })
        }

        handlePictureSeletorOK() {
            this.setState({
                up:false
            })
        }

        handlePictureSeletorCancel() {
            this.setState({
                up:false
            })
        }

        render() {
            const { theme } = this.props;
            // const className = this.blockTypeIsActive() ? 'primary' : 'gost';
            const className = 'gost';
            return (
                <div style={{display:'inline-block'}}>
                    <div
                        className={theme.buttonWrapper}
                        onMouseDown={this.preventBubblingUp}
                    >
                        <UploadFile
                            id="pictures"
                            cbReceiver={this.getPictures}
                            isMultiple={true}
                            isShowUploadList={false}
                            fileType={this.state.fileType}
                            limit={10}>
                            <Button
                                type={className}
                                onClick={this.addMedia}
                                children={children}
                                style={{width:'36px', height:'36px', padding:0}}
                            />
                        </UploadFile>

                    </div>
                </div>
            );
        }
    }
);
