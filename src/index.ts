import * as CryptoJs from 'crypto-js';

class Block {
  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;

  static calculateBlockHash = (index: number, previousHash: string, timestamp: number, data: string): string => {
    return CryptoJs.SHA256(index + previousHash + timestamp + data).toString();
  }

  static validateStructure = (aBlock: Block): boolean => {
    return typeof aBlock.index === 'number' && typeof aBlock.hash === 'string' && typeof aBlock.timestamp === 'number' && typeof aBlock.previousHash === 'string' && typeof aBlock.data === 'string'
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
const getNewTimestamp = (): number => Math.round(new Date().getTime() / 1000);
const getHashForblock = (aBlock: Block): string => Block.calculateBlockHash(aBlock.index, aBlock.previousHash, aBlock.timestamp, aBLock.data);

const createNewBlock = (data: string): Block => {
  const previousBlock: Block = getLatestBlock();
  const newIndex: number = previousBlock.index + 1;
  const nextTimestamp: number = getNewTimestamp();
  const nextHash: string = Block.calculateBlockHash(newIndex, previousBlock.hash, nextTimestamp, data);

  const newBlock: Block = new Block(newIndex, nextHash, previousBlock.hash, data, nextTimestamp);
  return newBlock;
}

const isBlockValid = (candidateBlock: Block, previousBlock: Block): boolean => {
  if (!Block.validateStructure(candidateBlock) || !Block.validateStructure(previousBlock)) {
    return false;
  } else if (previousBlock.index + 1 !== candidateBlock.index) {
    return false;
  } else if (previousBlock.hash !== candidateBlock.previousHash) {
    return false;
  } else if (getHashForblock(candidateBlock) !== candidateBlock.hash) {
    return false;
  }

  return true;
}

const addBlock = (candidateBlock: Block): void => {
  if (isBlockValid(candidateBlock, getLatestBlock())) {
    blockChain.push(candidateBlock);
  }
}

console.log(createNewBlock('hello'), createNewBlock('bye bye'));


export {};