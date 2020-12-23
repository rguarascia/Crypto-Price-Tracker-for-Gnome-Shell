const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();

const request = Me.imports.api.request;

var getBTC = function () {
    return request.get(
        'https://www.binance.com/api/v3/avgPrice?symbol=BTCUSDT'
    );
};
var getETH = function () {
    return request.get(
        'https://www.binance.com/api/v3/avgPrice?symbol=ETHUSDT'
    );
};

var getCoin = function (symbol) {
    if (symbol === "CELUSD") {
        return request.get(
            'https://api.coinpaprika.com/v1/tickers/cel-celsius'
        )
    } else {
        return request.get(
            `https://www.binance.com/api/v3/avgPrice?symbol=${symbol}`
        );
    }

}