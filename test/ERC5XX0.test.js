const { expect } = require('chai');
const { BigNumber, Wallet } = require('ethers');
const { ethers, network, getChainId } = require('hardhat');

describe('ERC5XX0', function () {
  before(async function () {
    this.ERC5XX0 = await ethers.getContractFactory('ERC5XX0');
  });

  beforeEach(async function () {
    // targetNFT
    this.erc5XX0 = await this.ERC5XX0.deploy();
  });

  it('Should set script URI', async function () {
    const scriptURI = [
      'uri1', 'uri2', 'uri3'
    ];

    await expect(this.erc5XX0.setScriptURI(scriptURI))
      .emit(this.erc5XX0, 'ScriptUpdate')
      .withArgs(scriptURI);
    
    const currentScriptURI = await this.erc5XX0.scriptURI();

    expect(currentScriptURI.toString()).to.be.equal(scriptURI.toString());
  });
});
