/* eslint-disable react/no-children-prop */
import React, {Component} from 'react';
import {RichUtils} from 'draft-js';
import {Button, Modal, message, Icon} from 'antd';
import UploadFile from '../../../../../common/upload'
import {PRO_QINIU} from '../../../../../common/upload/util'
import WatermarkImgUpload from '../../../../../common/watermarkImgUplod';
import cloneDeep from 'lodash/cloneDeep';

export default ({mediaType, children}) => (
    class BlockStyleButton extends Component {
        constructor(props) {
            super(props)
            this.state = {
                up: false,
                img: [],
                fileType: '',
                images: [],
                loadingRemoteImageFun: null,
                provisible: false,
                previsible: false,
                pfopImages: []
            }
            this.addMedia = this.addMedia.bind(this)
            this.getPictures = this.getPictures.bind(this)
            this.startUpload = this.startUpload.bind(this)
            this.handlePictureSeletorOK = this.handlePictureSeletorOK.bind(this)
            this.handlePictureSeletorCancel = this.handlePictureSeletorCancel.bind(this)
            this.groupAppend = this.groupAppend.bind(this)
            this.handleCancelUploading = this.handleCancelUploading.bind(this)
            this.realLoading = this.realLoading.bind(this)
            this.reloadUploadingPictrue = this.reloadUploadingPictrue.bind(this)
            this.failureLoading = this.failureLoading.bind(this)
            this.reloadPfopingPictrue = this.reloadPfopingPictrue.bind(this)
            this.successLoading = this.successLoading.bind(this)
        }

        addMedia = (e) => {
            this.setState({
                up: true,
                fileType: mediaType
            })
        }

        preventBubblingUp = (event) => {
            event.preventDefault();
        }

        getPictures(pictureList) {
            console.log('getPictures', pictureList)
            message.destroy();
            let picList = pictureList.map(item => {
                if (typeof(item.url) !== 'undefined') {
                    return item.url
                }
            });

            console.log('foreditor', picList)
            console.log('mediaType11111', mediaType);
            this.setState({
                img: picList,
                up: false
            })
            if(mediaType === 'watermarkImage') {
                console.log('mediaType', mediaType);
                mediaType = 'image';
            }
            picList.map(item => {
                item = item.split('?')[0];
                let editorState = this.props.modifier(mediaType, this.props.getEditorState(), item, {name: 'haha'})
                console.log(4545, editorState.getSelection().toJS());
                this.props.setEditorState(editorState)
            })
        }

        startUpload(file) {
            message.loading("上传中...", 0)
        }

        handlePictureSeletorOK() {
            this.setState({
                up: false
            })
        }

        handlePictureSeletorCancel() {
            this.setState({
                up: false
            })
        }

        groupAppend(pictureList) {
            // console.log("pictureList", pictureList);
            if (!pictureList.length) {
                // console.log("return false", pictureList.lenght);
                return false;
            }
            let images = pictureList.map(item => {
                return {"url": item};
            })
            this.setState({previsible: true, "images": images});
            this.prepareToSendImageToEditor()
        }

        prepareToSendImageToEditor() {
            if (!!this.state.images.length) {
                this.state.loadingRemoteImageFun = message.loading('图片正在处理并生成预览，请稍等片刻...', 0);
            }
        }

        handleCancelUploading(e) {
            this.setState({provisible: false, previsible: false, pfopImages: []});
        }

        realLoading(type) {
            let images = cloneDeep(this.state.pfopImages);
            console.log("images", images);
            // console.log("realLoading provisible false");
            this.setState({provisible: false, images: [], pfopImages: [], previsible: false});
            this.getPictures(images);
        }

        reloadUploadingPictrue(picture, index) {
            // console.log("reloadUploadingPictrue picture, index", picture, index);
            let thePicture = picture.substr(0, ~picture.lastIndexOf("?t=")
                ? picture.lastIndexOf("?t=")
                : picture.length);
            let n = picture.substr((~picture.lastIndexOf("?t=")
                ? picture.lastIndexOf("?t=")
                : picture.length) + 3)
            picture = thePicture + "?t=" + (parseInt(!!n
                ? n
                : "0") + 1);
            if (!!this.state.pfopImages[index]) {
                this.state.pfopImages[index].url = picture;
            }
            this.forceUpdate();
        }

        failureLoading(event, index) {
            let picture = this.state.images[index].url;
            if (!!picture && picture != "reset") {
                setTimeout(() => {
                    //无效时每100毫秒刷新一次
                    this.reloadPfopingPictrue(picture, index);
                }, 300)
            }
        }

        reloadPfopingPictrue(picture, index) {
            let thePicture = picture.substr(0, ~picture.lastIndexOf("?t=")
                ? picture.lastIndexOf("?t=")
                : picture.length);
            let n = picture.substr((~picture.lastIndexOf("?t=")
                ? picture.lastIndexOf("?t=")
                : picture.length) + 3)
            if (n >= 200) {
                message.error("图片处理超时，请重试！")
                this.setState({
                    previsible: false
                })
                setTimeout(this.state.loadingRemoteImageFun, 500);
                return false
            }
            picture = thePicture + "?t=" + (parseInt(!!n
                ? n
                : "0") + 1);
            this.state.images[index].url = picture;
            this.forceUpdate();
        }

        successLoading(type) {
            console.log('success', type)
            if (type == "fromImg") {
                if (this.successedCount + 1 < this.state.images.length) {
                    this.successedCount += 1;
                    return false;
                }
                this.successedCount = 0;
                setTimeout(this.state.loadingRemoteImageFun, 500);
            }
            let pfopImages = this.state.images.map((item) => {
                item.url = item.url.substr(0, ~item.url.lastIndexOf("?t=")
                    ? item.url.lastIndexOf("?t=")
                    : item.url.length) + "?t=foreditor"
                return item;
            });
            this.setState({provisible: false, pfopImages: pfopImages, previsible: true, images: []});
        }


        render() {
            const {theme} = this.props;
            const uploadConfig = PRO_QINIU.getUploadConfig("wangsu");
            const className = 'gost';
            if (mediaType === 'watermarkImage') {
                let className = 'RichEditor-styleButton';
                let that = this;
                return (
                    <div style={{display: 'inline-block'}}>
                        <div
                            className={theme.buttonWrapper}
                            onMouseDown={this.preventBubblingUp}
                        >
                            <WatermarkImgUpload
                                limitCount={50}
                                imageList={this.state.images.map((item) => {
                                    item.url
                                })}
                                atuoSize={[650, 0]}
                                receiveSelectedPictures={this.groupAppend}
                                uploadConfig={uploadConfig}
                            >
                                <Button
                                    type={className}
                                    children={children}
                                    style={{width: '36px', height: '36px', padding: 0}}
                                />
                            </WatermarkImgUpload>
                        </div>

                        <div
                            style={{
                                width: 0,
                                height: 0,
                                display: "inline",
                                overflow: "hidden",
                                position: "absolute"
                            }}
                        >
                            {this.state.images.map((item, index) => <img
                                style={{width: "100px"}} src={item.url + "?t=10"}
                                onError={(event) => this.failureLoading(event, index)}
                                onLoad={() => this.successLoading("fromImg")}/>)}

                        </div>

                        <Modal
                            title="图片预览"
                            visible={that.state.previsible}
                            width={800}
                            closable={false}
                            footer={[< Button key="back" size="large" onClick={
                                that.handleCancelUploading
                            }> 取消 </Button>,
                                <Button key="submit" type="primary" size="large" disabled={that.state.pfopImages.length == 0} onClick={() => that.realLoading("fromOld")}> 确认无误 </Button>]}>
                            <div className="uploadingImagies">{that.state.pfopImages.map((item, index) => {
                                // console.log("item,index", item, index);
                                let url = item.url;
                                return <div>
                                    <a onClick={() => that.reloadUploadingPictrue(url, index)} title="手动刷新"><Icon
                                        type="reload"/></a><img style={{width: "100%"}} src={url}/></div>
                            })
                            }</div>
                        </Modal>
                    </div>
                )
            }
            return (
                <div style={{display: 'inline-block'}}>
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
                            startUpload={this.startUpload}
                            limit={20}>
                            <Button
                                type={className}
                                onClick={this.addMedia}
                                children={children}
                                style={{width: '36px', height: '36px', padding: 0}}
                            />
                        </UploadFile>

                    </div>
                </div>
            );
        }
    }
);
