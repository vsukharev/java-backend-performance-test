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
        "total": "1306",
        "ok": "1306",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "90",
        "ok": "90",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "224",
        "ok": "224",
        "ko": "-"
    },
    "percentiles1": {
        "total": "6",
        "ok": "6",
        "ko": "-"
    },
    "percentiles2": {
        "total": "10",
        "ok": "10",
        "ko": "-"
    },
    "percentiles3": {
        "total": "572",
        "ok": "572",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1006",
        "ok": "1006",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 58065,
        "percentage": 97
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1907,
        "percentage": 3
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 28,
        "percentage": 0
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
        "total": "1306",
        "ok": "1306",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "92",
        "ok": "92",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "227",
        "ok": "227",
        "ko": "-"
    },
    "percentiles1": {
        "total": "6",
        "ok": "6",
        "ko": "-"
    },
    "percentiles2": {
        "total": "10",
        "ok": "10",
        "ko": "-"
    },
    "percentiles3": {
        "total": "583",
        "ok": "583",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1006",
        "ok": "1006",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 40570,
        "percentage": 97
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1409,
        "percentage": 3
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 21,
        "percentage": 0
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
        "total": "1303",
        "ok": "1303",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "86",
        "ok": "86",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "216",
        "ok": "216",
        "ko": "-"
    },
    "percentiles1": {
        "total": "6",
        "ok": "6",
        "ko": "-"
    },
    "percentiles2": {
        "total": "9",
        "ok": "9",
        "ko": "-"
    },
    "percentiles3": {
        "total": "556",
        "ok": "556",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1005",
        "ok": "1005",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 17495,
        "percentage": 97
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 498,
        "percentage": 3
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 7,
        "percentage": 0
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
