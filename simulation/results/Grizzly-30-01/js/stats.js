var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "60000",
        "ok": "59871",
        "ko": "129"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "9414",
        "ok": "9414",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "613",
        "ok": "614",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "1359",
        "ok": "1360",
        "ko": "0"
    },
    "percentiles1": {
        "total": "5",
        "ok": "5",
        "ko": "0"
    },
    "percentiles2": {
        "total": "265",
        "ok": "295",
        "ko": "0"
    },
    "percentiles3": {
        "total": "3610",
        "ok": "3614",
        "ko": "0"
    },
    "percentiles4": {
        "total": "7094",
        "ok": "7094",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 46511,
        "percentage": 78
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 2386,
        "percentage": 4
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 10974,
        "percentage": 18
    },
    "group4": {
        "name": "failed",
        "count": 129,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1935.484",
        "ok": "1931.323",
        "ko": "4.161"
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
        "ok": "41910",
        "ko": "90"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "9414",
        "ok": "9414",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "613",
        "ok": "615",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "1361",
        "ok": "1362",
        "ko": "0"
    },
    "percentiles1": {
        "total": "5",
        "ok": "5",
        "ko": "0"
    },
    "percentiles2": {
        "total": "394",
        "ok": "404",
        "ko": "0"
    },
    "percentiles3": {
        "total": "3609",
        "ok": "3612",
        "ko": "0"
    },
    "percentiles4": {
        "total": "7101",
        "ok": "7102",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 32588,
        "percentage": 78
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1664,
        "percentage": 4
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 7658,
        "percentage": 18
    },
    "group4": {
        "name": "failed",
        "count": 90,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1354.839",
        "ok": "1351.935",
        "ko": "2.903"
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
        "ok": "17961",
        "ko": "39"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "9413",
        "ok": "9413",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "612",
        "ok": "613",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "1355",
        "ok": "1356",
        "ko": "0"
    },
    "percentiles1": {
        "total": "5",
        "ok": "5",
        "ko": "0"
    },
    "percentiles2": {
        "total": "171",
        "ok": "175",
        "ko": "0"
    },
    "percentiles3": {
        "total": "3616",
        "ok": "3620",
        "ko": "0"
    },
    "percentiles4": {
        "total": "7069",
        "ok": "7070",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 13923,
        "percentage": 77
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 722,
        "percentage": 4
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 3316,
        "percentage": 18
    },
    "group4": {
        "name": "failed",
        "count": 39,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "580.645",
        "ok": "579.387",
        "ko": "1.258"
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
