import store, { NameSpaces } from '@/store';
import QWeb from '@/lib/qwebchannel';

let bridge = null;

export const initBridge = () => {
    alert('注册outer！')
    try {
        new QWeb.QWebChannel(qt.webChannelTransport, channel => {
            alert('注册inner！')
            bridge = channel.objects.bridge;
            bridge.sigResultToWebUI.connect(receiveMessage);
            //bridge.sigSetValue.connect(receiveMessage);
        })
    } catch (error) {
        alert(error)
    }
    alert('注册！')
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
    alert('receive' + msg);
    const msgObj = JSON.parse(msg);

    //SEMI Message
    /*const customer = {
        robotQAs: [{
            "openId": "ea352bb544f1542930fadafcc193c034",
            "sourceId": "ABC",
            "appId": "DEF",
            "question": "琴luham phamwt was that you can",
            "answerList": [{ "question": "广东省 梅州市 大埔县 安乐西山村  联系人  林慧琴17875138390", "answer": "亲 稍等哈", "status": null }, { "question": "李琴", "answer": "支付宝是邮箱，这个就是您支付宝的账户是吗", "status": null }, { "question": "嗯好琴", "answer": "是的亲亲", "status": null }, { "question": "18672698487亚琴", "answer": "好的亲，已登记提交，亲稍后查询账户记录哦", "status": null }, { "question": "詹琴添", "answer": "嗯呢。", "status": null }]
        }]
    };*/
    const customer = {
        robotQAs: [msgObj]
    }
    store.commit(`${NameSpaces.SEMI_AUTO}/setInitData`, { customer });
}