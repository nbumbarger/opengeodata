const exec = require('child_process').exec
const cmd = `mongoimport --db opengeodata --host ${process.env.HOST} -u ${process.env.USER} -p ${process.env.PASSWORD} --port ${process.env.PORT} --collection portals --drop --file ./.build_scripts/portals.json --jsonArray`

exec(cmd, (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`)
    return
  }
  console.log(`stdout: ${stdout}`)
  console.log(`stderr: ${stderr}`)
})
