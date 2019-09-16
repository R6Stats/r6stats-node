"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.playerStats = function (_a) {
    var username = _a.username, platform = _a.platform;
    return ({
        method: 'get',
        url: "/stats/" + username + "/" + platform + "/generic"
    });
};
exports.operatorStats = function (_a) {
    var username = _a.username, platform = _a.platform;
    return ({
        method: 'get',
        url: "/stats/" + username + "/" + platform + "/operators"
    });
};
exports.seasonalStats = function (_a) {
    var username = _a.username, platform = _a.platform;
    return ({
        method: 'get',
        url: "/stats/" + username + "/" + platform + "/seasonal"
    });
};
exports.weaponStats = function (_a) {
    var username = _a.username, platform = _a.platform;
    return ({
        method: 'get',
        url: "/stats/" + username + "/" + platform + "/weapons"
    });
};
exports.weaponCategoryStats = function (_a) {
    var username = _a.username, platform = _a.platform;
    return ({
        method: 'get',
        url: "/stats/" + username + "/" + platform + "/weapon-categories"
    });
};
