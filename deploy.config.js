module.exports = {
  projectName: "vue3-todo",
  privateKey: "C:\\Users\\GX-PC/.ssh/id_rsa",
  passphrase: "",
  cluster: [],
  dev: {
    name: "开发环境",
    script: "npm run build",
    host: "192.168.175.128",
    port: 22,
    username: "root",
    password: "root",
    distPath: "dist",
    webDir: "/www/server/app/vue3demo",
    isRemoveRemoteFile: true
  }
};
