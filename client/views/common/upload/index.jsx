import React, {Component} from 'react'
import {Upload, Button, Icon, message} from 'antd';
import {PRO_URL, PRO_QINIU, PRO_COMMON} from './util';
import isEqual from "lodash/isEqual";
import cloneDeep from "lodash/cloneDeep";
import uniqBy from "lodash/uniqBy";

/*
 * 调用示例：
 * <UploadImage cbReceiver={this.getFile} isMultiple={true}/>
 * cbReceiver 必要属性，此属性指定一个处理接收数据的自定义方法，上传成功的地址通过此方法传给调用组件
 * type　必须属性，此属性指定上传文件的类型，img（图片）,video(mp4,mp3类型)
 * isMultiple 非必要属性，默认false，是否支持多文件同时上传，默认只允许单文件上传
 * */
class UploadFile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoad: false,
            qiniu: {
                token: ""
            },
            file_key: '',
            files: [],
            upReceiverFun: null
        }
    }

    componentDidMount() {
        let list = [];
        if (!!this.props.fileList) {
            this.props.fileList.copyWithin(list);
        }
        if (!!list) {
            this.setState({files: list});
        }
    }

    beforeUpload(file) {
        // key需要唯一，此处不可使用直接获取的方式，否则会出现相同KEY if (!!this.props.limit && file.length > this.props.limit) {    // message.error("由于限制，您最多只能选择" + this.props.limit + "张图片，请重新选择。", 5);    return false; }    // console.log("key需要唯一，此处不可使用直接获取的方式，否则会出现相同KEY");
        this.setState({
            files:[]
        },()=>{
            let isFormat = PRO_COMMON.Array.inArray(PRO_QINIU.supportMime[this.props.fileType], file.type);
            if (!isFormat) {
                message.error('只能上传指定文件，请重新选择！参考 File Mimetype: ' + PRO_QINIU.supportMime[this.props.fileType].join("、"), 10);
                return false;
            }
            if (!this.state.qiniu.token) {
                let token = "";
                if (this.props.Upurl === 'wangsu' || this.props.fileType === 'image') {
                    token = PRO_QINIU.checkQiniu.returnToken();
                }
                if (this.props.fileType === "video" || this.props.fileType === "audio") {
                    token = PRO_QINIU.checkQiniu.returnToken("video");
                }
                console.log("拿到请求" + this.props.fileType + '的token', token);
                this.state.qiniu.token = token;
            }
            file.keys = PRO_COMMON.String.RndNum(20) + "." + PRO_COMMON.String.GetFileExtensionName(file.name)[0];

            return isFormat;
        })
        // this.props.onStart(file)
    }

    onChange(info) {
        let fileList = cloneDeep(info.fileList);
        let upload_status = "begin";
        fileList = uniqBy(fileList, "name"); //去除重复的文件
        console.log('onchange', info)

        //图片上传错误
        if (fileList.some((item, index) => item.status === "error")) {
            message.error("上传未成功，请重试", 5)
            this.setState({files: []})
        }

        //图片上传中
        if (fileList.some((item, index) => item.status === "uploading")) {
            console.log("文件正在上传，上传文件:", info.fileList)
            this.setState({files: fileList})
            if(upload_status === 'begin'){

                upload_status = "";
            }
        }

        //图片全部上传完成
        if (fileList.every((item, index) => item.status === "done")) {
            let _this = this;
            //是否超出上传数量
            if(!!_this.props.limit && fileList.length > _this.props.limit){
                message.info(`只能保留最后上传的 ${_this.props.limit} 个文件，其他超出的已经被顶掉。`, 5);
                fileList = fileList.slice(fileList.length - _this.props.limit);
            }
            let url = "";
            if (this.props.fileType === "image" || this.props.Upurl === "wangsu") {
                url = PRO_URL.WANGSU_IMG_DOMAIN_URL;
            } else if (this.props.fileType === "video" || this.props.fileType === "audio") {
                url = PRO_URL.WANGSU_DOMAIN_VIDEO_URL;
            }
            console.log("请求文件前缀", url)
            //读取远程路径并显示链接
            fileList.forEach((file) => {
                file.url = url + "/" + file.originFileObj.keys;
            });
            console.log('加入url参数',fileList)
            _this.setState({files: fileList})
            _this.forceUpdate();
            console.log("准备上传给父组件", _this.state.files)
            _this.props.cbReceiver(_this.state.files);
        }
    }

    componentWillReceiveProps(nextProps, prevProps) {
        // console.log("打印参数props", nextProps, this.state.files);
        if (isEqual(nextProps.fileList, this.state.files)) {
            return false;
        }
        // console.log("我是变化", nextProps);
        if(nextProps.isOpenModel === false){
            this.setState({
                files:[]
            })
        }
    }

    render() {
        let upUrl = PRO_URL.WANGSU.UP;
        let token_key = 'image';
        if (this.props.Upurl === 'wangsu') {
            upUrl = PRO_URL.WANGSU.UP;
        }

        if (this.props.fileType === "video" || this.props.fileType === "audio") {
            upUrl = PRO_URL.WANGSU.UP;
            token_key = "video"
        }

        let properties = this.props, that = this, uploadProps = {
            action: upUrl,
            onChange: this.onChange.bind(this),
            listType: 'picture',
            fileList: this.state.files,
            data: (file) => {//支持自定义保存文件名、扩展名支持
                let token = that.state.qiniu.token, key = "";
                if (!token) {
                    token = PRO_QINIU.checkQiniu.returnToken(token_key);
                }
                key = file.keys;
                return {token, key}
            },
            multiple: properties.isMultiple || false,
            beforeUpload: this.beforeUpload.bind(this),
            showUploadList: (properties.isShowUploadList === false) ? false : true,
        };
        return (
            <Upload {...uploadProps}>
                {this.props.children}
            </Upload>
        )
    }
}


module.exports = UploadFile;
