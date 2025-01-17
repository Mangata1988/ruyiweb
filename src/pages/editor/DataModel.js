import { createUUID,deepClone } from '@/common/js/utils';
import { cloneDeep,merge } from 'lodash';
import $config from '@/config/index';

let elementConfig = {
    elName: '', //组件名
    animations: [], //动画
    commonStyle: {
        //通用样式
        position: 'absolute',
        width: $config.canvasH5Width,
        height: 30,
        top: 200,
        left: 0,
        rotate: 0,
        paddingTop: 0,
        paddingLeft: 0,
        paddingRight: 0,
        paddingBottom: 0,
        marginTop: 0,
        marginLeft: 0,
        marginRight: 0,
        marginBottom: 0,
        borderWidth: 0,
        borderColor: '',
        borderStyle: 'solid',
        borderRadius: 0,
        boxShadow: '',
        fontSize: 16,
        fontWidth: 500,
        lineHeight: 1.5,
        letterSpacing: 0,
        textAlign: 'center',
        color: '#000000',
        backgroundColor: '',
        backgroundImage: '',
        backgroundSize: 'cover',
        opacity: 1,
        zIndex: 1,
    },
    events: [],   //事件
    propsValue: {}, //属性值
    value: '',  //绑定值
    valueType: 'String' //值类型
};

//页面配置信息字段
let pageConfig = {
    name: '',
    elements: [],
    commonStyle: {
        backgroundColor: '',
        backgroundImage: '',
        backgroundSize: 'cover',
    },
    config: {},
};

//项目配置信息字段
let projectConfig = {
    name: '',
    title: '未命名场景',
    description: '无代码平台，构建页面从未如此简单',
    coverImage: '',
    auther: '',
    script: '',
    width: $config.canvasH5Width,
    height: $config.canvasH5Height,
    pages: [],
};

let getPageConfig = () => {
    return {
        uuid: createUUID(),
        ...cloneDeep(pageConfig),
    };
};

let getProjectConfig = () => {
    let project = cloneDeep(projectConfig);
    let onePage = getPageConfig();
    project.pages.push({ ...onePage });
    return project;
};

let getElementConfig = (element,extendStyle={}) => {
    const elementData = cloneDeep(element);
    const type = elementData.valueType || 'String';
    const dict = {
        'String': '',
        'Array': [],
        'Object': {},
        'Boolean': false,
        'Number': 0,

    };
    const elementConfigData = cloneDeep(elementConfig);
    const config = {
        uuid: createUUID(),
        ...elementConfigData,
        elName: elementData,
        propsValue: deepClone(elementData.needProps || {}),
    };

    // 样式
    config.commonStyle = merge(config.commonStyle, elementData.defaultStyle);
    config.commonStyle = merge(config.commonStyle, extendStyle);
    config.value = element.defaultValue || dict[type];
    config.valueType = type;
    return config;
};
export default {
    elementConfig,
    pageConfig,
    projectConfig,
    getPageConfig,
    getProjectConfig,
    getElementConfig,
};