require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture gloom bubble tooth notice crime remind attitude grace industry food skate'; 
let testAccounts = [
"0x15dbd971b1e5f6ba4a5638660f59517ba8a5119c0060f780e7d32d774aa86eac",
"0xc9dcd99f53d1150828d7b0ddebc756f90a778ba8834b769de7a2ac3f8880ca26",
"0x337282f4d6ae7bcc4b59be9d19b0a72ce85abc4b4ae5b2dee590c23f08bda59a",
"0x61c175a485f458bcdc6e1442d7f392228cce9b5fd9bc9bf301d666db4edb4c63",
"0x3b4bd0e446ef70ee3cd4cd053fb547f941fc273ee14ab05eff53352c511390f6",
"0xd4a872b8d5c6927cdc02ca778092c1fd65d93b240ad98b906869d1e12c51fcb8",
"0x8cfd7aa43f2b775bb73dd392955d7a22773350a4c23426211ffee97af31e5790",
"0xec396faeb41b7a36399e48a78799420a885a3062a8224170bdefc03235ba85ad",
"0xb173cd4dfe3277b35501bf91c0cd6e7a9c508ede63ddf48ad2541bae352c0c15",
"0x7f16888b46bcd4693b974d8129f91830aacc3c0dd4525176c0338d4ba9ac06f0"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


