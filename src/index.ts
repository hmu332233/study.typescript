import * as CryptoJs from 'crypto-js';

class Block {
  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;

  static calculateBlockHash = (index: number, previousHash: string, timestamp: number, data: string): string => {
    return CryptoJs.SHA256(index + previousHash + timestamp + data).tostring();
  }

  constructor(index: number, hash: string, previousHash: string, data: string, timestamp: number) {
    this.index = index;
    this.hash = hash;
    this.previousHash = previousHash;
    this.data = data;
    this.timestamp = timestamp;
  }
}

const genesisBlock: Block = new Block(0, '2020202020220220', '', 'hello', 123456);

let blockChain: Block[] = [genesisBlock];

const getBlockchain = (): Block[] => blockChain;
const getLatestBlock = (): Block => blockChain[blockChain.length - 1];
const getNewTimestamp = (): Number => Math.round(new Date().getTime() / 1000);

console.log(blockChain);

export {};