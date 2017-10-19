import store, { NameSpaces } from '@/store';
import { QWebChannel } from '@/lib/qwebchannel';

let bridge = null;

export const initBridge = () => {
  // new QWebChannel(qt.webChannelTransport, channel => {
  //   bridge = channel.objects.bridge;
  //   bridge.sigYourName.connect(receiveMessage);
  // })
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
  // const msgObj = JSON.parse(msg);

  //SEMI Message
  const customer = {
    robotQAs: [{
      "openId": "a58606a4a59ae21fcbc0599fdea968af",
      "sourceId": "ABC",
      "appId": "DEF",
      "question": "超薄纸尿裤怎么样Perry\r",
      "answerList": [{
        "question": "超薄纸尿裤怎么样",
        "answer": "Perry亲，超薄：超薄款芯体结构，2mm更薄、750毫升吸收量，更干爽、更透气，防断层防起坨的哟~",
        "status": null
        }, {
        "question": "超薄纸尿裤",
        "answer": "亲，您现在咨询的是哪款产品呢，麻烦您发个链接或者截个图给我看下哦~~",
        "status": null
      }]      
    }]
  };
  store.commit(`${NameSpaces.SEMI_AUTO}/setInitData`, { customer });
}