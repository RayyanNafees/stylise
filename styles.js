const styles = {
  bold_italic: "𝓐𝓑𝓒𝓓𝓔𝓕𝓖𝓗𝓘𝓙𝓚𝓛𝓜𝓝𝓞𝓟𝓠𝓡𝓢𝓣𝓤𝓥𝓦𝓧𝓨𝓩𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃",
  light_italic: "𝒜𝐵𝒞𝒟𝐸𝐹𝒢𝐻𝐼𝒥𝒦𝐿𝑀𝒩𝒪𝒫𝒬𝑅𝒮𝒯𝒰𝒱𝒲𝒳𝒴𝒵𝒶𝒷𝒸𝒹𝑒𝒻𝑔𝒽𝒾𝒿𝓀𝓁𝓂𝓃𝑜𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏",
  doubled: "𝔸𝔹ℂ𝔻𝔼𝔽𝔾ℍ𝕀𝕁𝕂𝕃𝕄ℕ𝕆ℙℚℝ𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤ𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫",
  spaced:
    "ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ",

  assassins_spaced:
    "ΛＢＣＤΣＦＧＨＩＪＫＬＭＮ♢ＰＱＲＳＴＵＶＷＸＹＺａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ",

  curly: "ꪖ᥇ᥴᦔꫀᠻᧁꫝ꠸꠹ᛕꪶꪑꪀꪮρꪇ᥅ᦓꪻꪊꪜ᭙᥊ꪗƺꪖ᥇ᥴᦔꫀᠻᧁꫝ꠸꠹ᛕꪶꪑꪀꪮρꪇ᥅ᦓꪻꪊꪜ᭙᥊ꪗƺ",
  smallcaps: "ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘQʀꜱᴛᴜᴠᴡxʏᴢᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘQʀꜱᴛᴜᴠᴡxʏᴢ",
  semisquared:
    "[̲̅A][̲̅B][̲̅C][̲̅D][̲̅E][̲̅F][̲̅G][̲̅H][̲̅I][̲̅J][̲̅K][̲̅L][̲̅M][̲̅N][̲̅O][̲̅P][̲̅Q][̲̅R][̲̅S][̲̅T][̲̅U][̲̅V][̲̅W][̲̅X][̲̅Y][̲̅Z][̲̅a][̲̅b][̲̅c][̲̅d][̲̅e][̲̅f][̲̅g][̲̅h][̲̅i][̲̅j][̲̅k][̲̅l][̲̅m][̲̅n][̲̅o][̲̅p][̲̅q][̲̅r][̲̅s][̲̅t][̲̅u][̲̅v][̲̅w][̲̅x][̲̅y][̲̅z]",
  boxed: "🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉",
  rounded: "ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ",
  wrapped: "🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉",
  thrice_unrounded:
    "【A】【B】【C】【D】【E】【F】【G】【H】【I】【J】【K】【L】【M】【N】【O】【P】【Q】【R】【S】【T】【U】【V】【W】【X】【Y】【Z】【a】【b】【c】【d】【e】【f】【g】【h】【i】【j】【k】【l】【m】【n】【o】【p】【q】【r】【s】【t】【u】【v】【w】【x】【y】【z】",
  thrice_blocked:
    "『A』『B』『C』『D』『E』『F』『G』『H』『I』『J』『K』『L』『M』『N』『O』『P』『Q』『R』『S』『T』『U』『V』『W』『X』『Y』『Z』『a』『b』『c』『d』『e』『f』『g』『h』『i』『j』『k』『l』『m』『n』『o』『p』『q』『r』『s』『t』『u』『v』『w』『x』『y』『z』",
  thrice_waved:
    "≋A≋B≋C≋D≋E≋F≋G≋H≋I≋J≋K≋L≋M≋N≋O≋P≋Q≋R≋S≋T≋U≋V≋W≋X≋Y≋Z≋a≋b≋c≋d≋e≋f≋g≋h≋i≋j≋k≋l≋m≋n≋o≋p≋q≋r≋s≋t≋u≋v≋w≋x≋y≋z≋",
  thrice_dotted:
    "░A░B░C░D░E░F░G░H░I░J░K░L░M░N░O░P░Q░R░S░T░U░V░W░X░Y░Z░a░b░c░d░e░f░g░h░i░j░k░l░m░n░o░p░q░r░s░t░u░v░w░x░y░z░",

  multicased: "ₐBCDₑFGₕᵢⱼₖₗₘₙₒₚQᵣₛₜᵤᵥWₓYZₐbcdₑfgₕᵢⱼₖₗₘₙₒₚqᵣₛₜᵤᵥwₓyz",
  superscripted: "ᴬᴮᶜᴰᴱᶠᴳᴴᴵᴶᴷᴸᴹᴺᴼᴾQᴿˢᵀᵁⱽᵂˣʸᶻᵃᵇᶜᵈᵉᶠᵍʰⁱʲᵏˡᵐⁿᵒᵖqʳˢᵗᵘᵛʷˣʸᶻ",
  noodle: "ค๒ς๔єŦﻮђเןкɭ๓ภ๏קợгรՇยשฬאץչค๒ς๔єŦﻮђเןкɭ๓ภ๏קợгรՇยשฬאץչ",
  noodle2: "ค๖¢໓ēfງhiวkl๓ຖ໐p๑rŞtนงຟxฯຊค๖¢໓ēfງhiวkl๓ຖ໐p๑rŞtนงຟxฯຊ",
  crazy: "ǟɮƈɖɛʄɢɦɨʝӄʟʍռօքզʀֆȶʊʋաӼʏʐǟɮƈɖɛʄɢɦɨʝӄʟʍռօքզʀֆȶʊʋաӼʏʐ",
  curly_inverted: "ᏗᏰፈᎴᏋᎦᎶᏂᎥᏠᏦᏝᎷᏁᎧᎮᎤᏒᏕᏖᏬᏉᏇጀᎩፚᏗᏰፈᎴᏋᎦᎶᏂᎥᏠᏦᏝᎷᏁᎧᎮᎤᏒᏕᏖᏬᏉᏇጀᎩፚ",
  wierd: "ąცƈɖɛʄɠɧıʝƙƖɱŋơ℘զཞʂɬų۷ῳҳყʑąცƈɖɛʄɠɧıʝƙƖɱŋơ℘զཞʂɬų۷ῳҳყʑ",

  roman_bold: "𝐀𝐁𝐂𝐃𝐄𝐅𝐆𝐇𝐈𝐉𝐊𝐋𝐌𝐍𝐎𝐏𝐐𝐑𝐒𝐓𝐔𝐕𝐖𝐗𝐘𝐙𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐲𝐳",
  roman_light: "𝙰𝙱𝙲𝙳𝙴𝙵𝙶𝙷𝙸𝙹𝙺𝙻𝙼𝙽𝙾𝙿𝚀𝚁𝚂𝚃𝚄𝚅𝚆𝚇𝚈𝚉𝚊𝚋𝚌𝚍𝚎𝚏𝚐𝚑𝚒𝚓𝚔𝚕𝚖𝚗𝚘𝚙𝚚𝚛𝚜𝚝𝚞𝚟𝚠𝚡𝚢𝚣",
  arial_bold: "𝗔𝗕𝗖𝗗𝗘𝗙𝗚𝗛𝗜𝗝𝗞𝗟𝗠𝗡𝗢𝗣𝗤𝗥𝗦𝗧𝗨𝗩𝗪𝗫𝗬𝗭𝗮𝗯𝗰𝗱𝗲𝗳𝗴𝗵𝗶𝗷𝗸𝗹𝗺𝗻𝗼𝗽𝗾𝗿𝘀𝘁𝘂𝘃𝘄𝘅𝘆𝘇",
  arial_italic: "𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘡𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻",
  arial_italic_bold: "𝘼𝘽𝘾𝘿𝙀𝙁𝙂𝙃𝙄𝙅𝙆𝙇𝙈𝙉𝙊𝙋𝙌𝙍𝙎𝙏𝙐𝙑𝙒𝙓𝙔𝙕𝙖𝙗𝙘𝙙𝙚𝙛𝙜𝙝𝙞𝙟𝙠𝙡𝙢𝙣𝙤𝙥𝙦𝙧𝙨𝙩𝙪𝙫𝙬𝙭𝙮𝙯",
  assassins: "ΛBᄃDΣFGΉIJKᄂMПӨPQЯƧƬЦVЩXYZΛBᄃDΣFGΉIJKᄂMПӨPQЯƧƬЦVЩXYZ",
  greek: "αв¢∂єƒgнιנкℓмησρqяѕтυνωχуzαв¢∂єƒgнιנкℓмησρqяѕтυνωχуz",
  latina: "ÄßÇÐÈ£GHÌJKLMñÖþQR§†ÚVW×¥Zåß¢Ðê£ghïjklmñðþqr§†µvwx¥z",
  striked: "₳฿₵ĐɆ₣₲ⱧłJ₭Ⱡ₥₦Ø₱QⱤ₴₮ɄV₩ӾɎⱫ₳฿₵ĐɆ₣₲ⱧłJ₭Ⱡ₥₦Ø₱QⱤ₴₮ɄV₩ӾɎⱫ",
  stroke: "A̶B̶C̶D̶E̶F̶G̶H̶I̶J̶K̶L̶M̶N̶O̶P̶Q̶R̶S̶T̶U̶V̶W̶X̶Y̶Z̶a̶b̶c̶d̶e̶f̶g̶h̶i̶j̶k̶l̶m̶n̶o̶p̶q̶r̶s̶t̶u̶v̶w̶x̶y̶z̶",
    tilde:'A̴B̴C̴D̴E̴F̴G̴H̴I̴J̴K̴L̴M̴N̴O̴P̴Q̴R̴S̴T̴U̴V̴W̴X̴Y̴Z̴a̴b̴c̴d̴e̴f̴g̴h̴i̴j̴k̴l̴m̴n̴o̴p̴q̴r̴s̴t̴u̴v̴w̴x̴y̴z̴',
   slashed:'A̷B̷C̷D̷E̷F̷G̷H̷I̷J̷K̷L̷M̷N̷O̷P̷Q̷R̷S̷T̷U̷V̷W̷X̷Y̷Z̷a̷b̷c̷d̷e̷f̷g̷h̷i̷j̷k̷l̷m̷n̷o̷p̷q̷r̷s̷t̷u̷v̷w̷x̷y̷z̷',
    underlined:'A̲B̲C̲D̲E̲F̲G̲H̲I̲J̲K̲L̲M̲N̲O̲P̲Q̲R̲S̲T̲U̲V̲W̲X̲Y̲Z̲a̲b̲c̲d̲e̲f̲g̲h̲i̲j̲k̲l̲m̲n̲o̲p̲q̲r̲s̲t̲u̲v̲w̲x̲y̲z̲',
doublelined:'A̳B̳C̳D̳E̳F̳G̳H̳I̳J̳K̳L̳M̳N̳O̳P̳Q̳R̳S̳T̳U̳V̳W̳X̳Y̳Z̳a̳b̳c̳d̳e̳f̳g̳h̳i̳j̳k̳l̳m̳n̳o̳p̳q̳r̳s̳t̳u̳v̳w̳x̳y̳z̳',
smoky:'A̾B̾C̾D̾E̾F̾G̾H̾I̾J̾K̾L̾M̾N̾O̾P̾Q̾R̾S̾T̾U̾V̾W̾X̾Y̾Z̾a̾b̾c̾d̾e̾f̾g̾h̾i̾j̾k̾l̾m̾n̾o̾p̾q̾r̾s̾t̾u̾v̾w̾x̾y̾z̾',
underuparrow:'A͎B͎C͎D͎E͎F͎G͎H͎I͎J͎K͎L͎M͎N͎O͎P͎Q͎R͎S͎T͎U͎V͎W͎X͎Y͎Z͎a͎b͎c͎d͎e͎f͎g͎h͎i͎j͎k͎l͎m͎n͎o͎p͎q͎r͎s͎t͎u͎v͎w͎x͎y͎z͎',

xurrounded:'A͓̽B͓̽C͓̽D͓̽E͓̽F͓̽G͓̽H͓̽I͓̽J͓̽K͓̽L͓̽M͓̽N͓̽O͓̽P͓̽Q͓̽R͓̽S͓̽T͓̽U͓̽V͓̽W͓̽X͓̽Y͓̽Z͓̽a͓̽b͓̽c͓̽d͓̽e͓̽f͓̽g͓̽h͓̽i͓̽j͓̽k͓̽l͓̽m͓̽n͓̽o͓̽p͓̽q͓̽r͓̽s͓̽t͓̽u͓̽v͓̽w͓̽x͓̽y͓̽z͓̽',

  fat: "ᗩᗷᑢᕲᘿᖴᘜᕼᓰᒚᖽᐸᒪᘻᘉᓍᕵᕴᖇSᖶᑘᐺᘺ᙭ᖻᗱᗩᗷᑢᕲᘿᖴᘜᕼᓰᒚᖽᐸᒪᘻᘉᓍᕵᕴᖇSᖶᑘᐺᘺ᙭ᖻᗱ",
  fat2:'ᗩᗷᑕᗪEᖴGᕼIᒍKᒪᗰᑎOᑭᑫᖇᔕTᑌᐯᗯ᙭YᘔᗩᗷᑕᗪEᖴGᕼIᒍKᒪᗰᑎOᑭᑫᖇᔕTᑌᐯᗯ᙭Yᘔ',
  mixed:'Ⱥβ↻ᎠƐƑƓǶįلҠꝈⱮហටφҨའϚͲԱỼచჯӋɀąҍçժҽƒցհìʝҟӀʍղօքզɾʂէմѵա×վՀ',
  
  japanese:
    "卂乃匚ᗪ乇千Ꮆ卄丨ﾌҜㄥ爪几ㄖ卩Ɋ尺丂ㄒㄩᐯ山乂ㄚ乙卂乃匚ᗪ乇千Ꮆ卄丨ﾌҜㄥ爪几ㄖ卩Ɋ尺丂ㄒㄩᐯ山乂ㄚ乙",
  chinese:
    "ﾑ乃ᄃり乇ｷムんﾉﾌズﾚﾶ刀のｱゐ尺丂ｲひ√Wﾒﾘ乙ﾑ乃ᄃり乇ｷムんﾉﾌズﾚﾶ刀のｱゐ尺丂ｲひ√Wﾒﾘ乙",

  encrypted: "Ã̷͓̻͇̉̔͝B̸̡̺̫̲͖̝̫̝̅̂̾̈́͋͋͋̆̽͜͝Ċ̸̘̬̙̫͔͇D̵͔̠̏͂̃̅̅E̷̩͉̭̹̅͂̽͌̊͊̏̔̚͠F̸̛̰͔͔̼̖̙̉́͒̅̏̊͜G̵̦͙̻̐͑̑͋̀Ḣ̷̡̛͙͈̯̤̖̈̄̐̀͠I̷͚̅̂́͒̔͆̊̀J̸̡͕̦̺̍͌͐̽͒́ͅĶ̵̙̱̀͛́L̴̨̤̩̩̖͖̈̀͠M̶̡̨̡̧̛̗̼̦̙͍̊͆͋̓̑͠ͅN̴̡̮̪̪̏̀̈́Ö̶̙̟̮̟͆̓̓́̓̉̀͋̄P̵̜̩̖̫̉̈̚̕͠͠Q̷̧̹͙̲̲͓̮̜̊̓̽͜͝͠R̷̨̛̗̥̬̘̣̟͚̄͐̓̂͐͋͒̋͗͜ͅS̶̛̥͔̼̤̞͕͔̊̉̎̿̊̊̚Ţ̸̧̧̲͚̘͇͍͕̪̀̍̓U̴͉̟̰̞͙͚̿̐ͅV̵̛͓̮̖̣̍̅̈́̆̾̽͝W̸̨̫̭̓̿X̸̼̳͊̔͠Ỳ̵̢̡̩̱̣̘̱̻̗̯͑͂͐̊̅͊Ẓ̵̥͚̓̍͆́͜a̸̧̡̟̫͎̼̦͉̦̓̌͛͠b̶̛͈̓̽ç̷͉̘̑̓͑̓̓͂̉ḍ̵̢̗̳͙͕̫̾͒̐̒̃̿̈́́̎͘e̶̛͎̥̤̓̅̋̃͘f̸̤̻̘̊̀̊̈́̾ͅg̶̡͓̻̜͂̃̆͑̾̀h̵͙͍̯͆̚ḯ̷̛̖̪͍̅͒̚͜͠͠j̵̡̳̜̣͇̼͇̞̗̓͂̏k̸̨̥̻̭͚̻̹̅̍͋͑̓͑l̴͚̪̀̒̐̔͛̉m̸̱̈́͆̇ņ̵̻͎͉̠̩̳͕̺̫͒̓̄̀̾̈͘͘ǫ̴̛̤̪̮͔̩̳͛̽̽̔̕̕ṕ̷̡̻͔̠̯̎́q̷̟̝̘̝͎͙̲̮̝̣̐̈̀̐̀̂̂̎͂r̵̢̙̙̲̘̗̳͖͙͛͂͂̀̎͐̃̕s̴̳͈̀͂̈́̓̉̇͘̚ț̵͙̰̯̺̳̥͕̅̍̄̕͜ͅu̶͇̞̤̠͋̿͊̅̊̊͛͌̚͘ͅv̶̢̯̲̤͔̳̟̆͊̂̈́̕͜w̷̻̺͇͈͙̜̘͐̉̓̃́ͅx̵̫̣̭̱̊ÿ̵̡̨̲̜̖̘̯͎̞̉z̴̛̤͕̳͚̲̯͋̾̇̃̄̌͠ͅ",

  chakra:
    "A҉B҉C҉D҉E҉F҉G҉H҉I҉J҉K҉L҉M҉N҉O҉P҉Q҉R҉S҉T҉U҉V҉W҉X҉Y҉Z҉a҉b҉c҉d҉e҉f҉g҉h҉i҉j҉k҉l҉m҉n҉o҉p҉q҉r҉s҉t҉u҉v҉w҉x҉y҉z҉",
  inverted: [..."zʎxʍʌnʇsɹbdouɯlʞɾıɥɓɟǝpɔqɐZ⅄XMΛ∩⊥SᴚΌԀONW˥⋊ſIH⅁ℲƎᗡƆᙠ∀"]
    .reverse()
    .join(""),
  reversed: [..."ƹʏxwvuƚꙅɿpqoᴎm|ʞꞁiʜǫᎸɘbɔdɒƸYXWVUTꙄЯỌꟼOͶM⅃⋊ႱIHᎮꟻƎᗡƆᙠA"]
    .reverse()
    .join(""),
  squared:
    "A⃣   B⃣   C⃣   D⃣   E⃣   F⃣   G⃣   H⃣   I⃣   J⃣   K⃣   L⃣   M⃣   N⃣   O⃣   P⃣   Q⃣   R⃣   S⃣   T⃣   U⃣   V⃣   W⃣   X⃣   Y⃣   Z⃣   a⃣   b⃣   c⃣   d⃣   e⃣   f⃣   g⃣   h⃣   i⃣   j⃣   k⃣   l⃣   m⃣   n⃣   o⃣   p⃣   q⃣   r⃣   s⃣   t⃣   u⃣   v⃣   w⃣   x⃣   y⃣   z⃣",
};

const extras = {
  unrounds: ["【", "】"],
  smile: ["(っ◔◡◔)っ ♥", "♥"],
  wingdings:'✌︎👌︎👍︎👎︎☜︎☞︎☝︎☟︎✋︎☺︎😐︎☹︎💣︎☠︎⚐︎🏱︎✈︎☼︎💧︎❄︎🕆︎✞︎🕈︎✠︎✡︎☪︎♋︎♌︎♍︎♎︎♏︎♐︎♑︎♒︎♓︎🙰🙵●︎❍︎■︎□︎◻︎❑︎❒︎⬧︎⧫︎◆︎❖︎⬥︎⌧︎⍓︎⌘︎',
  
};
