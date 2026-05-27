const userPerifyConfig = { serverId: 9364, active: true };

const userPerifyHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_9364() {
    return userPerifyConfig.active ? "OK" : "ERR";
}

console.log("Module userPerify loaded successfully.");