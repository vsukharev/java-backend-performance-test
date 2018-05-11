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
        "total": "3369",
        "ok": "3369",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "106",
        "ok": "106",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "381",
        "ok": "381",
        "ko": "-"
    },
    "percentiles1": {
        "total": "3",
        "ok": "3",
        "ko": "-"
    },
    "percentiles2": {
        "total": "4",
        "ok": "4",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1215",
        "ok": "1215",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1765",
        "ok": "1765",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 56364,
        "percentage": 94
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 604,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 3032,
        "percentage": 5
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "983.607",
        "ok": "983.607",
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
        "total": "3369",
        "ok": "3369",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "104",
        "ok": "104",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "371",
        "ok": "371",
        "ko": "-"
    },
    "percentiles1": {
        "total": "3",
        "ok": "3",
        "ko": "-"
    },
    "percentiles2": {
        "total": "4",
        "ok": "4",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1208",
        "ok": "1208",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1723",
        "ok": "1723",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 39466,
        "percentage": 94
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 426,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 2108,
        "percentage": 5
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "688.525",
        "ok": "688.525",
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
        "total": "3339",
        "ok": "3339",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "112",
        "ok": "112",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "406",
        "ok": "406",
        "ko": "-"
    },
    "percentiles1": {
        "total": "3",
        "ok": "3",
        "ko": "-"
    },
    "percentiles2": {
        "total": "4",
        "ok": "4",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1232",
        "ok": "1232",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1952",
        "ok": "1952",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 16898,
        "percentage": 94
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 178,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 924,
        "percentage": 5
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "295.082",
        "ok": "295.082",
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
