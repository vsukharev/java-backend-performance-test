var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "60000",
        "ok": "59950",
        "ko": "50"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "8793",
        "ok": "8793",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "932",
        "ok": "933",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "1636",
        "ok": "1637",
        "ko": "0"
    },
    "percentiles1": {
        "total": "9",
        "ok": "9",
        "ko": "0"
    },
    "percentiles2": {
        "total": "1530",
        "ok": "1535",
        "ko": "0"
    },
    "percentiles3": {
        "total": "4357",
        "ok": "4358",
        "ko": "0"
    },
    "percentiles4": {
        "total": "7556",
        "ok": "7556",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 41841,
        "percentage": 70
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1844,
        "percentage": 3
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 16265,
        "percentage": 27
    },
    "group4": {
        "name": "failed",
        "count": 50,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1935.484",
        "ok": "1933.871",
        "ko": "1.613"
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
        "ok": "41969",
        "ko": "31"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "8793",
        "ok": "8793",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "941",
        "ok": "941",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "1647",
        "ok": "1647",
        "ko": "0"
    },
    "percentiles1": {
        "total": "9",
        "ok": "9",
        "ko": "0"
    },
    "percentiles2": {
        "total": "1543",
        "ok": "1545",
        "ko": "0"
    },
    "percentiles3": {
        "total": "4410",
        "ok": "4411",
        "ko": "0"
    },
    "percentiles4": {
        "total": "7574",
        "ok": "7580",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 29214,
        "percentage": 70
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1330,
        "percentage": 3
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 11425,
        "percentage": 27
    },
    "group4": {
        "name": "failed",
        "count": 31,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1354.839",
        "ok": "1353.839",
        "ko": "1"
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
        "ok": "17981",
        "ko": "19"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "1",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "8655",
        "ok": "8655",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "914",
        "ok": "915",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "1612",
        "ok": "1612",
        "ko": "0"
    },
    "percentiles1": {
        "total": "10",
        "ok": "10",
        "ko": "0"
    },
    "percentiles2": {
        "total": "1500",
        "ok": "1501",
        "ko": "0"
    },
    "percentiles3": {
        "total": "4177",
        "ok": "4181",
        "ko": "0"
    },
    "percentiles4": {
        "total": "7523",
        "ok": "7524",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 12627,
        "percentage": 70
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 514,
        "percentage": 3
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 4840,
        "percentage": 27
    },
    "group4": {
        "name": "failed",
        "count": 19,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "580.645",
        "ok": "580.032",
        "ko": "0.613"
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
