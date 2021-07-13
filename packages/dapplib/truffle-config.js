require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half clock bright smooth fine birth predict unusual harvest drink equal gate'; 
let testAccounts = [
"0x5fbb534c9a801fede5b3bde83beba656cba1208acae3615da8431ba133a5f0ab",
"0x08d70805b50a749b095801cf0de67e315e0dd14cb7aabb4d9fe7b13e30768117",
"0x856faa3bb0ada0d9f5457d6e8506fc8816220b3bee5e61901ede752ae697a1a1",
"0x8947df7ee55a5bcd389194b7e253737b80bf0de8a5105eeb55602a655e10f7aa",
"0x4a554a5aba8432a5b433924363b0ae7525674b9e4e483a9c2eb3f6794860d8d7",
"0xd44b05f04767ceacde90707b0ffe7db1019dc114cd38987434a093904dd27ccf",
"0x62a9cf065f270d5d62caa16938e9ddc89a76a61c9505e23703450def17ffd302",
"0x789d387840197f4ab393c51d128549599c6be9e162da03ac0704bea06a0d0141",
"0x9473af591617142daa55bcb4bf100ea343de2cfbe7ae3204ab3c1c22b44e1006",
"0xfe529b6f9c622ae857ec41c11073308bcffe06e2c528ca2ef4174d12a192b2ec"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

