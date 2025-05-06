### Clicksend Auto SMS tool

Simply define constants in .env file and run `npm run send-sms`

```
CLICKSEND_API_USERNAME=<username from clicksend>
CLICKSEND_API_KEY=<api key from clicksend>
CLICKSEND_RECEIVER_NUMBER=<aussie number +614xxxxxxx>
```

#### Caveats
Bluebird required for compilation - forked by Picturelink to remove https://www.npmjs.com/package/@picturelink/clicksend
Needed to add ./ before modules

Should use the environment variable for security

https://developers.clicksend.com/sms-quickstart/?lang=nodejs differs from github docs
https://github.com/ClickSend/clicksend-nodejs/

Unsure which should be correct.

but this is working
