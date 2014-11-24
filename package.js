Package.describe({
    summary: "Fisheye D3 Plugin for Meteor"
});

Package.on_use(function(api, where) {
    api.use(['d3'], 'client');
    api.add_files(['fisheye.js']);

    if (api.export) {
        api.export('fisheye');
    }
});
