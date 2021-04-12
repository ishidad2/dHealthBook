const ACTIVE_IMPORTANCE_RATE = 0.1999;
const NO_3001_NODES = [
"d3rmzi6ltfh1jy.cloudfront.net",
"a.symbol.lcnem.net",
];
const NODES = [
//"https://xym.harvester.earth:3001",
//"https://umbriel.uranus-satellite.net:3001",
//"https://symbol.kazgb.net:3001",
//"https://symbol-node-01.kokichi.tokyo:3001",
//"https://xym.jp1.node.leywapool.com:3001",
//"https://xym.jp5.node.leywapool.com:3001",
//"https://xym.jp2.node.leywapool.com:3001",
//"https://ik1-438-51340.vs.sakura.ne.jp:3001",
//"https://symbol.nuaka.net:3001",
//"https://sushi.sakurairo.tokyo:3001"
//"https://cryptocat-xym-node.com:3001",

"https://d3rmzi6ltfh1jy.cloudfront.net",
"https://a.symbol.lcnem.net",

"https://ik1-432-48199.vs.sakura.ne.jp:3001",
"https://0-0symbol-node1.trivill.com:3001",
"https://raharu-symbol-node-01.com:3001",
"https://sn2.msus-symbol.com:3001",
"https://sn1.msus-symbol.com:3001",
"https://00.symsym.info:3001",
"https://01.symsym.info:3001",
"https://02.symsym.info:3001",
"https://03.symsym.info:3001",
"https://04.symsym.info:3001",
"https://0.symsym.info:3001",
"https://0.xym.stakeme.tokyo:3001",
"https://00.alpaca.symbolist.jp:3001",
"https://00.bison.symbolist.jp:3001",
"https://00.cow.symbolist.jp:3001",
"https://00.dragon.symbolist.jp:3001",
"https://00.elephant.symbolist.jp:3001",
"https://00.fushicho.symbolist.jp:3001",
"https://00.gorilla.symbolist.jp:3001",
"https://00.high-performance.symbol-nodes.com:3001",
"https://00.hippopotamus.symbolist.jp:3001",
"https://000-node.kazgb.net:3001",
"https://symbol-node-yokohama-jpn-01.ml:3001",
"https://super-harvester.com:3001",
"https://symbol02.spdysgr.net:3001",
"https://sym-main.opening-line.jp:3001",
"https://node1.xym-harvesting.com:3001",
"https://node2.xym-harvesting.com:3001",
"https://ls1.rellc.jp:3001",
"https://888.symsym.info:3001",
"https://symbol.nagoya:3001",
"https://xym.idol-library.jp:3001",
"https://age01.kitsutsuki.tokyo:3001",
"https://age02.kitsutsuki.tokyo:3001",
"https://age03.kitsutsuki.tokyo:3001",
"https://ahra-symbol.com:3001",
"https://cryptocat-xym-node2.com:3001",
"https://ik1-332-26240.vs.sakura.ne.jp:3001",
"https://02.symbol-node.net:3001",
"https://00.symbol-node.net:3001",
"https://23167.xym.stir-hosyu.com:3001",
"https://symbol03.node.oe-jpy.com:3001",
"https://07.symbol-node.net:3001",
"https://006symbol.open-nodes.com:3001",
"https://sym-main.daoka.tk:3001",
"https://002symbol.open-nodes.com:3001",
"https://harvesting-sweet-potatoes.com:3001",
"https://0-0-0-0-0.five-star-node.symbol.bond:3001",
"https://0-0-0-0-2.five-star-node.symbol.bond:3001",
"https://0-0-0-0-3.five-star-node.symbol.bond:3001",
"https://01.symbol-gentoo.tokyo:3001",
"https://007symbol.open-nodes.com:3001",
"https://000symbol.open-nodes.com:3001",
"https://08.symbol-node.net:3001",
"https://0-0-0-0.high-performance.symbol-gym.com:3001",
"https://0-0-0-5.high-performance.symbol-gym.com:3001",
"https://0-0-0-6.high-performance.symbol-gym.com:3001",
"https://0-0-0-2.high-performance.symbol-gym.com:3001",
"https://0-0-0-1.high-performance.symbol-gym.com:3001",
"https://0-0-0-4.high-performance.symbol-gym.com:3001",
"https://0-0-0-3.high-performance.symbol-gym.com:3001",
"https://symbol01.node.oe-jpy.com:3001",
"https://busan.symbol-node.org:3001",
"https://harvest-festa.com:3001",
"https://00.harvester.earth:3001",
"https://009symbol.open-nodes.com:3001",
"https://001symbol.open-nodes.com:3001",
"https://0-0-0-high-grade.harvest-node.org:3001",
"https://0-0-1-high-grade.harvest-node.org:3001",
"https://0-0-2-high-grade.harvest-node.org:3001",
"https://0-0-4-high-grade.harvest-node.org:3001",
"https://0.high-performance.symbol-node.jp:3001",
"https://00.high-performance.symbol-node.jp:3001",
"https://000.high-performance.symbol-node.jp:3001",
"https://001.high-performance.symbol-node.jp:3001",
"https://01.high-performance.symbol-node.jp:3001",
"https://02.high-performance.symbol-node.jp:3001",
"https://0-3.high-performance.symbol-node.jp:3001",
"https://0-4.high-performance.symbol-node.jp:3001",
"https://05.high-performance.symbol-node.jp:3001",
"https://0-0-0.high-performance.symbol-node.jp:3001",
"https://07.high-performance.symbol-node.jp:3001",
"https://08.high-performance.symbol-node.jp:3001",
"https://09.high-performance.symbol-node.jp:3001",
"https://node3.xym-harvesting.com:3001",
"https://09.symbol-node.net:3001",
"https://symbol-harvesting.com:3001",
"https://003symbol.open-nodes.com:3001",
"https://0-0-0.symbol-gym.love:3001",
"https://0-0-1.symbol-gym.love:3001",
"https://0-0-2.symbol-gym.love:3001",
"https://0-0-3.symbol-gym.love:3001",
"https://0-0-4.symbol-gym.love:3001",
"https://0-0-5.symbol-gym.love:3001",
"https://0-0-6.symbol-gym.love:3001",
"https://0-0-7.symbol-gym.love:3001",
"https://0-0-8.symbol-gym.love:3001",
"https://0-0-9.symbol-gym.love:3001",
"https://xymtokyo.harvest-node.net:3001",
"https://0-a.muraka.me:3001",
"https://05.symbol-node.net:3001",
"https://0-0-1.symbol-nodes.net:3001",
"https://0-0-2.symbol-nodes.net:3001",
"https://30153.xym.stir-hosyu.com:3001",
"https://symderella-castle.net:3001",
"https://03.symbol-node.net:3001",
"https://symbol02.node.oe-jpy.com:3001",
"https://paotan01.momotapo.com:3001",
"https://paotan02.momotapo.com:3001",
"https://paotan03.momotapo.com:3001",
"https://puipui.iizukak.com:3001",
"https://06.symbol-node.net:3001",
"https://04.symbol-node.net:3001",
"https://symbol-node.net:3001",
"https://node-01.rruby.org:3001",
"https://ik1-449-56512.vs.sakura.ne.jp:3001",
"https://sushi.sakurairo.tokyo:3001",
"https://0m0-neko-neko-nyaa-symbolcat.com:3001",
"https://shikinami.starlight.tokyo:3001",
"https://node.sixis.xyz:3001",
"https://little.sixis.xyz:3001",
"https://19902.xym.stir-hosyu.com:3001",
"https://62828.xym.stir-hosyu.com:3001",
"https://64519.xym.stir-hosyu.com:3001",
"https://33603.xym.stir-hosyu.com:3001",
"https://12936.xym.stir-hosyu.com:3001",
"https://26760.xym.stir-hosyu.com:3001",
"https://00ffd768.xym.stir-hosyu.com:3001",
"https://01.symbol-node.net:3001",
"https://14601.xym.stir-hosyu.com:3001",
"https://0-0-0.japan.symbol.style:3001",
"https://0-0-0.usa.symbol.style:3001",
"https://0-3.symbol.style:3001",
"https://tokyo.symbol-node.jp:3001",
"https://005symbol.open-nodes.com:3001",
"https://ik1-426-45178.vs.sakura.ne.jp:3001",
"https://ik1-421-42893.vs.sakura.ne.jp:3001",
"https://008symbol.open-nodes.com:3001",
"https://004symbol.open-nodes.com:3001",
"https://xym.harvester.earth:3001",
"https://00A06705.xym.stir-hosyu.com:3001",
"https://ik1-432-48497.vs.sakura.ne.jp:3001",
"https://symbol01.harvestasya.com:3001",
"https://aiteruyo.jp:3001",
"https://amaterasu-01.kamigami.jp:3001",
"https://amaterasu-02.kamigami.jp:3001",
"https://symbol-node.bakobox.net:3001",
"https://0-0-xym.cubkab-crypto.tokyo:3001",
"https://0-0-axym.cubkab-crypto.tokyo:3001",
"https://01.symbol.enoki-do.com:3001",
"https://harvest-01.symbol.farm:3001",
"https://harvest-02.symbol.farm:3001",
"https://harvest-03.symbol.farm:3001",
"https://symbol.harvest-monitor.com:3001",
"https://0-all-3.harvest-node.org:3001",
"https://nemauthn.harvestfield.tokyo:3001",
"https://hideyoshi-node.net:3001",
"https://criptian-xym-node.net:3001",
"https://symbol.kazgb.net:3001",
"https://35665.xym.stir-hosyu.com:3001",
"https://yuna.keshet.finance:3001",
"https://keshet01-symbol-paradise.com:3001",
"https://keshet02-symbol-paradise.com:3001",
"https://keshet03-symbol-paradise.com:3001",
"https://keshet04-symbol-paradise.com:3001",
"https://symbol.from.nagoya:3001",
"https://cryptocat-xym-node.com:3001",
"https://sn.newecosym.com:3001",
"https://misaki-xym.com:3001",
"https://41506.xym.stir-hosyu.com:3001",
"https://symbol-sakura-16.next-web-technology.com:3001",
"https://symbol.nuaka.net:3001",
"https://28387.xym.stir-hosyu.com:3001",
"https://ik1-305-12844.vs.sakura.ne.jp:3001",
"https://16948.xym.stir-hosyu.com:3001",
"https://17107.xym.stir-hosyu.com:3001",
"https://23639.xym.stir-hosyu.com:3001",
"https://sym-main-01.opening-line.jp:3001",
"https://sym-main-02.opening-line.jp:3001",
"https://sym-main-03.opening-line.jp:3001",
"https://sym-main-04.opening-line.jp:3001",
"https://sym-main-05.opening-line.jp:3001",
"https://sym-main-06.opening-line.jp:3001",
"https://sym-main-07.opening-line.jp:3001",
"https://sym-main-08.opening-line.jp:3001",
"https://sym-main-09.opening-line.jp:3001",
"https://sym-main-10.opening-line.jp:3001",
"https://sym-main-11.opening-line.jp:3001",
"https://symbol-harvest-node.com:3001",
"https://symbol-node-01.kokichi.tokyo:3001",
"https://50038.xym.stir-hosyu.com:3001",
"https://27423.xym.stir-hosyu.com:3001",
"https://angel.vistiel-arch.jp:3001",
"https://xym.stakeme.tokyo:3001",
"https://00-symbol-node.yagiyoshi.com:3001",


];