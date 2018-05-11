var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "60000",
        "ok": "60000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "7083",
        "ok": "7083",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "826",
        "ok": "826",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1381",
        "ok": "1381",
        "ko": "-"
    },
    "percentiles1": {
        "total": "7",
        "ok": "7",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1397",
        "ok": "1399",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3688",
        "ok": "3688",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4531",
        "ok": "4532",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 42985,
        "percentage": 72
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1451,
        "percentage": 2
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 15564,
        "percentage": 26
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1935.484",
        "ok": "1935.484",
        "ko": "-"
    }
},
contents: {
"req_getcustomerlist-876dd": {
        type: "REQUEST",
        name: "GetCustomerList",
path: "GetCustomerList",
pathFormatted: "req_getcustomerlist-876dd",
stats: {
    "name": "GetCustomerList",
    "numberOfRequests": {
        "total": "42000",
        "ok": "42000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "7083",
        "ok": "7083",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "822",
        "ok": "822",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1371",
        "ok": "1371",
        "ko": "-"
    },
    "percentiles1": {
        "total": "7",
        "ok": "7",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1413",
        "ok": "1416",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3672",
        "ok": "3673",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4520",
        "ok": "4520",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 30087,
        "percentage": 72
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 984,
        "percentage": 2
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 10929,
        "percentage": 26
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1354.839",
        "ok": "1354.839",
        "ko": "-"
    }
}
    },"req_createnewcustom-47c8c": {
        type: "REQUEST",
        name: "CreateNewCustomer",
path: "CreateNewCustomer",
pathFormatted: "req_createnewcustom-47c8c",
stats: {
    "name": "CreateNewCustomer",
    "numberOfRequests": {
        "total": "18000",
        "ok": "18000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "7064",
        "ok": "7064",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "837",
        "ok": "837",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1402",
        "ok": "1402",
        "ko": "-"
    },
    "percentiles1": {
        "total": "7",
        "ok": "7",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1352",
        "ok": "1352",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3726",
        "ok": "3726",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4565",
        "ok": "4565",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 12898,
        "percentage": 72
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 467,
        "percentage": 3
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 4635,
        "percentage": 26
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "580.645",
        "ok": "580.645",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
