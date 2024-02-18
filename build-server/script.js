import {exec} from 'child_process'
import path from 'path'

async function init(){
    console.log("Executing Script.js")
    const outDirPath = path.join(__dirname, 'output')

    const p = exex(`cd ${outDirPath} && npm install && npm run build`)
}