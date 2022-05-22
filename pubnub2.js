
const PubNub = require('pubnub')

const funct = async ()=>{
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbkZvciI6InB1Ym51YiIsImF1dGhvcml0eSI6ImJsb2NrZXJ5LmlvIiwib3JnSWQiOiJqdXlvSEVHd1ZQcHJYZGxNVE5PMSIsImlhdCI6MTY1MzI0MTA1NX0.oJXmedNr4RQ85Cc9a6igk11XBn6NlMTPOBjBfWaAf6c'
const pubnub = new PubNub({
    publishKey: "pub-c-cecc8ec6-78c5-4229-93d1-af6b8cabad1c",
    subscribeKey: "sub-c-e9fd4b71-5643-4f47-8a28-c8265e127901",
    secretKey: "sec-c-MDVjOGUwNzgtZTY3MC00MjkyLWFiNjAtZmE4YTE5ODFmOWE3",
    uuid: "e26ef6b0-c931-11ec-9d64-0242ac120002"
  });
  await pubnub.grant({
    authKeys: [token],
    uuids : ['e26ef6b0-c931-11ec-9d64-0242ac120002'],
    ttl: 0, // 0 for infinite
    read: true, // false to disallow
    write: false, // false to disallow
    manage: false, // false to disallow
    delete: false // false to disallow
  }, (status) => {console.log('status',status)});
  await pubnub.grant({
    authKeys: [token],
    channels: [`juyoHEGwVPprXdlMTNO1_request_results`],
    ttl: 0, // 0 for infinite
    get: true, // false to disallow
    update: false, // false to disallow
    delete: false // false to disallow
  }, (status) => {console.log('status',status)});
}
funct()