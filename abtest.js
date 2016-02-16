var sites = [
    "https://docs.google.com/forms/d/1LZwA-cxpb8pUh2sswYr-FIHblwkpiIu2t4axkY-c4xY/viewform",
    "https://docs.google.com/forms/d/1ul_mPUEA0lsZVtXKhxeMsVRuyHLKf7mJrLrO__RAfOc/viewform"
];

var index = Math.floor((Math.random() * sites.length));

window.location = sites[index];
