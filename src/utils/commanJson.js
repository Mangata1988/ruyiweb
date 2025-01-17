import configObj from '@/config/index';
export const sideBarMenus = [
    {
        label: '组件列表',
        value: 'componentLibs',
        elementUiIcon: 'el-icon-s-operation'
    },
    {
        label: '页面管理',
        value: 'pageManage',
        elementUiIcon: 'el-icon-document'
    },
    {
        label: '模板库',
        value: 'templateLibs',
        elementUiIcon: 'el-icon-s-promotion'
    },
];

export const operationDataList = [
    {
        title: "发布",
        eventType: "publish",
        extraClassName: "",
        iconClass: "el-icon-upload",
    },
    {
        title: "发布模板市场",
        eventType: "publishTemplate",
        extraClassName: "",
        iconClass: "el-icon-s-shop",
    },
    {
        title: "复制链接",
        eventType: "copyUrl",
        extraClassName: "",
        iconClass: "el-icon-connection",
    },
    {
        title: "设为我的模板",
        eventType: "setTemplate",
        extraClassName: "",
        iconClass: "el-icon-document-copy",
    },
    {
        title: "页面数据",
        eventType: "viewPageData",
        extraClassName: "",
        iconClass: "el-icon-document",
    },
    {
        title: "协作设置",
        eventType: "cooperation",
        extraClassName: "",
        iconClass: "el-icon-s-operation",
    },
    {
        title: "删除",
        eventType: "delete",
        extraClassName: "error",
        iconClass: "el-icon-delete",
    },
    {
        title: "退出协作",
        eventType: "unCooperation",
        extraClassName: "error",
        iconClass: "el-icon-right",
    },
];

export const elementConfig = [
    {
        title: '基础组件',
        // 每个组件设置props来展示哪些编辑项
        components: [
            {
                elName: 'ruyi-text',
                title: '文字',
                icon: 'iconfont iconwenben',
                valueType: '',   // 标识数据类型，用于表单组件
                defaultStyle: {
                    height: 40,
                }
            },
            {
                elName: 'ruyi-image',
                title: '图片',
                icon: 'iconfont icontupian',
                valueType: '',
                defaultStyle: {
                    height: 200,
                }
            },
            {
                elName: 'ruyi-button',
                title: '按钮',
                icon: 'iconfont iconanniuzu',
                valueType: '',
                defaultStyle: {
                    width: 140,
                    height: 40,
                    paddingTop: 10,
                    paddingBottom: 10,
                    borderColor: '#1890FF',
                    borderStyle: 'solid',
                    borderWidth: 1,
                    borderRadius: 4,
                },
            },
            {
                elName: 'ruyi-rectangle-border',
                title: '矩形边框',
                icon: 'iconfont iconjuxing',
                valueType: '',
                defaultStyle: {
                    width: 120,
                    height: 100,
                    borderColor: '#1890FF',
                    borderStyle: 'solid',
                    borderWidth: 2,
                }
            },
            {
                elName: 'ruyi-rectangle-border',
                title: '分割线',
                icon: 'iconfont icon758bianjiqi_fengexian',
                valueType: '',
                defaultStyle: {
                    height: 1,
                    borderColor: '#1890FF',
                    width: 300,
                }
            },
            {
                elName: 'ruyi-image-carousel',
                title: '图片轮播',
                icon: 'iconfont iconshouyelunbotu',
                valueType: '',
                defaultStyle: {
                    height: 210,
                },
            },
            {
                elName: 'ruyi-iframe',
                title: '内嵌iframe',
                icon: 'iconfont iconiframetianjia',
                valueType: '',
                defaultStyle: {
                    width: configObj.canvasH5Width,
                    height: 300,
                    paddingTop: 10,
                    paddingBottom: 10,
                }
            },
            {
                elName: 'map',
                title: '地图',
                icon: 'iconfont iconditu',
                valueType: '',
                defaultStyle: {
                    width: 300,
                    height: 200,
                    paddingTop: 10,
                    paddingBottom: 10,
                }
            },
            {
                elName: 'video',
                title: '视频',
                icon: 'iconfont iconshipin',
                valueType: '',
                defaultStyle: {
                    width: configObj.canvasH5Width,
                    height: 300,
                    paddingTop: 10,
                    paddingBottom: 10,
                }
            },
        ]
    },
    {
        title: '表单组件',
        components: [
            {
                elName: 'input',
                title: '单行文本',
                icon: 'iconfont iconwenbenkuang',
            },
            {
                elName: 'radio',
                title: '单选框',
                icon: 'iconfont iconplus-radio',
            },
            {
                elName: 'checkbox',
                title: '复选框',
                icon: 'iconfont iconduoxuan',
            },
            {
                elName: 'date',
                title: '日期选择器',
                icon: 'iconfont iconriqi',
            },
            {
                elName: 'time',
                title: '时间选择器',
                icon: 'iconfont iconshijian',
            },
            {
                elName: 'datetime',
                title: '日期时间选择器',
                icon: 'iconfont iconriqishijian',
            }
        ]
    },
    {
        title: '功能组件',
        components: [
            {
                elName: 'ruyi-bg-music',
                title: '音乐',
                icon: 'iconfont iconyinlemusic217',
                valueType: '',
                defaultStyle: {
                    height: 52,
                    width: 52,
                }
            }
        ]
    },
    {
        title: '业务组件',
        components: [],
    }
];