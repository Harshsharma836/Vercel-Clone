import {exec} from 'child_process'
import path from 'path'
import fs from 'fs'

async function init(){
    console.log("Executing Script.js")
    const outDirPath = path.join(__dirname, 'output')

    const p = exex(`cd ${outDirPath} && npm install && npm run build`)
    p.stdout.on('data', (data)=>{
        console.log(data.toString())
    })

    p.stdout.on('error', (data)=>{
        console.log('Error',data.toString())
    })

    p.on('close', async()=>{
        console.log(`Build Complete`)
        // After build is sucessfull build folder is created which has html or css or .. files
        const distFolderPath = path.join(__dirname, 'output', 'dist')
        const distFolderContent = fs.readdirSync(distFolderPath , {recursive: true}) // recursive because it read all folder (data insdide folder) and it gives an array
    })
}