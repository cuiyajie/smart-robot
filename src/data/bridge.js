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
            // receiveMessage();
            // receiveMessage();
    } catch (error) {
        alert(error)
    }
}

export const getBridge = () => {
    return bridge;
}

export const sendMessage = msg => {
    if (bridge) {
        bridge.ReceiveText(msg);
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
    //     "answerList": [{ "question": "东省 梅州市 大埔县 安乐西山村  联系人  林慧琴17875138390", "answer": "http://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=110b0e849dbc8462c196990964cc88b5&highline=%E7%94%B5%E8%AF%9D&token=&lang=zh_CN", "status": null }, { "question": "李琴", "answer": "支付宝是邮箱，这个就是您支付宝的账户是吗", "status": null }, { "question": "嗯好琴", "answer": "是的亲亲", "status": null }, { "question": "18672698487亚琴", "answer": "好的亲，已登记提交，亲稍后查询账户记录哦", "status": null }, { "question": "詹琴添", "answer": "嗯呢。", "status": null }]
    // };
    if (data.sourceId && data.appId) {
        store.commit(`${NameSpaces.SEMI_AUTO}/setData`, {
            customerId: data.openId,
            robotQA: data
        })
    }
}