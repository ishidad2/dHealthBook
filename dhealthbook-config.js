
// const EXPLORER = "http://explorer.symbolblockchain.io";
// const TEST_EXPLORER = "http://explorer.testnet.symboldev.network";
const EXPLORER = "http://explorer.dhealth.cloud";
// const TEST_EXPLORER = "http://explorer.testnet.symboldev.network";

const ACTIVE_IMPORTANCE_RATE = 0.318266623;

const TEST_NODES = [];


const NG_NODES = [
"https://dhealth.tokyo:3001",
"https://dai-dhealth.sfn.tools:3001"
];
const NODES = [
"https://dai-dhealth.sfn.tools:3001",
"https://dhealth.vistiel-arch.jp:3001",
"https://dhealth.tokyo:3001",
"https://dhealth.harvesting-sweet-potatoes.club:3001",
"https://dhealth-lt.nuaka.net:3001",
"https://kawaii-dhp-harvest.tokyo:3001",
"https://dual-01.dhealth.jp:3001",
"https://marichi-featuring-essan.ml:3001"

].filter(word => !NG_NODES.includes(word));

const JP_NODES = [
"https://dhealth.tokyo:3001",
"https://dhealth.vistiel-arch.jp:3001",
"https://kawaii-dhp-harvest.tokyo:3001",

].filter(word => !NG_NODES.includes(word));

