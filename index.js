var api = require('./node_modules/clicksend/api.js');

const username = process.env.CLICKSEND_API_USERNAME;
const apiKey = process.env.CLICKSEND_API_KEY;
const receiverNumber = process.env.CLICKSEND_RECEIVER_NUMBER;



var smsMessage = new api.SmsMessage();

smsMessage.from = "myNumber";
smsMessage.to = receiverNumber;
smsMessage.body = "test message";

var smsApi = new api.SMSApi(username, apiKey);

var smsCollection = new api.SmsMessageCollection();

smsCollection.messages = [smsMessage];

smsApi.smsSendPost(smsCollection).then(function(response) {
	console.log(response.body);
}).catch(function(err){
	console.error(err.body);
});
