var FS = require('fs');
var modList = [{}];
function addModIntoList(item) {
    modList.push(item);
}
try {
    var data = FS.readFileSync('./items.json', 'utf8');
    var parsedData = JSON.parse(data);
    for (var _i = 0, parsedData_1 = parsedData; _i < parsedData_1.length; _i++) {
        var obj = parsedData_1[_i];
        var modTemp = {
            id: '',
            name: '',
            compatibleItemIds: []
        };
        for (var item in obj) {
            if (item == 'id') {
                modTemp[item] = obj[item];
            }
            else if (item == 'modSlots') {
                var objMod = obj[item];
                modTemp['name'] = objMod['name'];
                modTemp['compatibleItemIds'] = objMod['compatibleItemIds'];
            }
        }
        console.log(modTemp);
        addModIntoList(modTemp);
    }
}
catch (err) {
    console.error('Error reading file:', err);
}
var JsonData = JSON.stringify(modList);
FS.writeFile('modSlotData.json', JsonData, function (err) {
    if (err) {
        console.error('Error writing JSON file:', err);
    }
    else {
        console.log('JSON file saved successfully.');
    }
});
