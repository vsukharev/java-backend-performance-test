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
        "total": "1655",
        "ok": "1655",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "55",
        "ok": "55",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "164",
        "ok": "164",
        "ko": "-"
    },
    "percentiles1": {
        "total": "5",
        "ok": "5",
        "ko": "-"
    },
    "percentiles2": {
        "total": "8",
        "ok": "8",
        "ko": "-"
    },
    "percentiles3": {
        "total": "471",
        "ok": "471",
        "ko": "-"
    },
    "percentiles4": {
        "total": "769",
        "ok": "769",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 59430,
        "percentage": 99
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 443,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 127,
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
        "total": "1655",
        "ok": "1655",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "54",
        "ok": "54",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "161",
        "ok": "161",
        "ko": "-"
    },
    "percentiles1": {
        "total": "5",
        "ok": "5",
        "ko": "-"
    },
    "percentiles2": {
        "total": "8",
        "ok": "8",
        "ko": "-"
    },
    "percentiles3": {
        "total": "464",
        "ok": "464",
        "ko": "-"
    },
    "percentiles4": {
        "total": "742",
        "ok": "742",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 41619,
        "percentage": 99
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 310,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 71,
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
        "total": "1618",
        "ok": "1618",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "58",
        "ok": "58",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "172",
        "ok": "172",
        "ko": "-"
    },
    "percentiles1": {
        "total": "5",
        "ok": "5",
        "ko": "-"
    },
    "percentiles2": {
        "total": "8",
        "ok": "8",
        "ko": "-"
    },
    "percentiles3": {
        "total": "493",
        "ok": "493",
        "ko": "-"
    },
    "percentiles4": {
        "total": "832",
        "ok": "832",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 17811,
        "percentage": 99
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 133,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 56,
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
