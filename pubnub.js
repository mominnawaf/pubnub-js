const PubNub = require('pubnub')

const pubnub = new PubNub({
    subscribeKey: 'sub-c-e9fd4b71-5643-4f47-8a28-c8265e127901',
    uuid: 'e26ef6b0-c931-11ec-9d64-0242ac120002',
    authKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbkZvciI6InB1Ym51YiIsImF1dGhvcml0eSI6ImJsb2NrZXJ5LmlvIiwib3JnSWQiOiJqdXlvSEVHd1ZQcHJYZGxNVE5PMSIsImlhdCI6MTY1MzI0MTA1NX0.oJXmedNr4RQ85Cc9a6igk11XBn6NlMTPOBjBfWaAf6c'
})
pubnub.addListener({
    status: async function (statusEvent) {
        if (statusEvent.category === "PNConnectedCategory") {
            console.log("Connected to PubNub!")
        }
        else{
            console.log(statusEvent)
        }
    },
    message: function(message) {
        console.log(message)
    },
    presence: function (presenceEvent) {
       console.log(presenceEvent)
      },
})
pubnub.subscribe({
    channels: ['juyoHEGwVPprXdlMTNO1_request_results'],
    //authKeys:['eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbkZvciI6InB1Ym51YiIsImF1dGhvcml0eSI6ImJsb2NrZXJ5LmlvIiwib3JnSWQiOiJqdXlvSEVHd1ZQcHJYZGxNVE5PMSIsImlhdCI6MTY1MzI0MTA1NX0.oJXmedNr4RQ85Cc9a6igk11XBn6NlMTPOBjBfWaAf6c']
})