var log4js = require('log4js');

log4js.configure({
    "appenders": [
        {"type": "console", "category": "console"},
        {
            "type": "dateFile",
            "filename": __dirname +"../../logs/log-",
            "pattern": "yyyyMMdd.log",
            "absolute": true,
            "alwaysIncludePattern": true,
            "category": "logInfo"
        } ],
    "replaceConsole": true,
    "levels":{ "logInfo": "DEBUG"}
});

exports.getLogger = function(name){
    if(name){
        return log4js.getLogger(name);
    }else{
        return log4js.getLogger("logInfo");
    }
}