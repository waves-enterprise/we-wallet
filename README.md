# Waves Enterprise Wallet 1.0.0

WE Wallet is an extension that allows users to securely interact with WE-enabled web services from the Chrome browser.

Seed phrases and private keys are encrypted and stored within the extension and cannot be accessed by online dApps and services, making sure that users' funds are always protected from hackers and malicious websites. Completion of a transaction doesn't require entering any sensitive information.

WE Wallet is designed for convenience, so users can sign transactions with just a couple of clicks. Users can create multiple wallets and switch between them easily. And if a user ever forgets the password to the account, it can be recovered from the seed phrase.

**WE Wallet API**

On browser pages that operate under the http/https (not worked local pages with file:// protocol) with WE Wallet extension installed, `window.WEWallet` global object becomes available, featuring the following methods:

- `auth`
- `publicState`
- `signTransaction`
- `signAtomicTransaction`
- `broadcast`
- `broadcastAtomic`
- ``

All methods, operate asynchronously and return Promises.

**Description of methods**

**publicState**

WE Wallet public data

Example:

```js
    const getPublicState = async () => {
        try {
            const state = await WEWallet.publicState();
            console.log(state); // displaying the result in the console
        } catch(error) {
            console.error(error); // displaying the result in the console
        }
      }

      const result = await getPublicState();
```

Reply

```js
{
    "initialized": true,
    "locked": true,
    "account": {
        "name": "foo",
        "publicKey": "bar",
        "address": "WE address",
        "networkCode": "network byte",
        "balance": {
            "available": "balance in WEST"
        }
    },
    "network": {
        "code": "V",
        "server": "https://client.wavesenterprise.com/node-0/",
        "authServiceAddress": "https://client.wavesenterprise.com/authServiceAddress/"
    }
}
```
