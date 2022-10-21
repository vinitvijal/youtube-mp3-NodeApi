const fs = require('fs');
const ytdl = require('ytdl-core');
// TypeScript: import ytdl from 'ytdl-core'; with --esModuleInterop
// TypeScript: import * as ytdl from 'ytdl-core'; with --allowSyntheticDefaultImports
// TypeScript: import ytdl = require('ytdl-core'); with neither of the above

const url = 'http://www.youtube.com/watch?v=aqz-KE-bpKQ'

const output = async () => {
    let ans = await ytdl.getBasicInfo(url)
    // console.log(Object.keys(ans.formats['0']))
    // console.log(ans)
    // fs.writeFile('test.txt',ans)
    let info = await ytdl.getInfo('aqz-KE-bpKQ');


    let format = ytdl.filterFormats(info.formats,'audioonly');
    console.log(format)


}
output()