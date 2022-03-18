# You must need some tools before cloning the repo

### 1. You must need to install Ganache3
https://trufflesuite.com/ganache/index.html

### 2. Install Metamask on your Chrome browser and create an account.
https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=es

### 4. Set your Metamask to connect to Ganache network.
Watch a video on youtube lol

### 3. Install Truffle
https://trufflesuite.com/docs/truffle/getting-started/installation.html

```
$ npm install -g truffle
```

### 4. Download the repo
```
$ git clone git@github.com:fjalcr/colors-nft.git
$ cd colors-nft
$ npm install // to install openzeppelin contracts
```

### 5. Create an empty client dir and clone the client repo
```
$ mkdir client
$ cd client
$ git clone git@github.com:fjalcr/colors-nft-client.git .
$ npm install
```

### 6. compile the contracts
To compile contracts in the client dir run:
```
$ truffle compile
```
To publish the contract in the blockchain(Ganache):
```
$ truffel migrate
```
