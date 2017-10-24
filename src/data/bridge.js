import store, { NameSpaces } from '@/store';
import QWeb from '@/lib/qwebchannel';

let bridge = null;

export const initBridge = () => {
    try {
        new QWeb.QWebChannel(qt.webChannelTransport, channel => {
                bridge = channel.objects.bridge;
                bridge.sigResultToWebUI.connect(receiveMessage);
                bridge.sigSetValue.connect(receiveMessage);
                bridge.sigReflash.connect(receiveMessage);
            })
            //receiveMessage();
    } catch (error) {
        alert('initBridge' + error)
    }
}

export const getBridge = () => {
    return bridge;
}

export const sendMessage = msg => {
    if (bridge) {
        bridge.ReceiveText(JSON.stringify(msg));
    }
}

export const receiveMessage = msg => {
    const data = JSON.parse(msg.replace(/&quot;/g, '\"')).data;

    // SEMI Message
    // const data = {
    //     "openId": "ea352bb544f1542930fadafcc193c034",
    //     "sourceId": "ABC4",
    //     "appId": "DEF",
    //     "question": "琴luham phamwt was that you can",
    //     "answerList": [{
    //         "question": "东省 梅州市 大埔县 安乐西山村  联系人  林慧琴17875138390",
    //         "answer": "http://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=110b0e849dbc8462c196990964cc88b5&highline=%E7%94%B5%E8%AF%9D&token=&lang=zh_CN",
    //         "status": null
    //     }, {
    //         "question": "李琴",
    //         "answer": "支付宝是邮箱，这个就是您支付宝的账户是吗",
    //         "status": null
    //     }, {
    //         "question": "嗯好琴",
    //         "answer": "是的亲亲",
    //         "status": null
    //     }, {
    //         "question": "18672698487亚琴",
    //         "answer": "好的亲，已登记提交，亲稍后查询账户记录哦",
    //         "status": null
    //     }, {
    //         "question": "詹琴添",
    //         "answer": "嗯呢。",
    //         "status": null
    //     }, {
    //         "question": "东省 梅州市 大埔县 安乐西山村  联系人  林慧琴17875138390",
    //         "answer": "http://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=110b0e849dbc8462c196990964cc88b5&highline=%E7%94%B5%E8%AF%9D&token=&lang=zh_CN",
    //         "status": null
    //     }]
    // };
    // const data = {
    //     oper: 'switchClient',
    //     openId: '123456789',
    //     name: 'perry',
    //     avatar: 'data:image/jpeg;base64,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'
    // }
    if (data.sourceId && data.appId) {
        store.commit(`${NameSpaces.SEMI_AUTO}/setData`, {
            customerId: data.openId,
            robotQA: data
        });
    }
    if (data.oper === 'switchClient') {
        store.commit(`${NameSpaces.SEMI_AUTO}/setInitData`, {
            customerId: data.openId,
            name: data.name,
            avatar: data.avatar || 'data:image/jpeg;base64,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'
        });
    }
}