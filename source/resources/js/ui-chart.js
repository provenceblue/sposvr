Highcharts.chart('pie1', {
    chart: {
        type: 'pie',
        margin: [0, 0, 0, 0],
        style: {
            zIndex: 10,
        },
        backgroundColor: 'transparent',
    },
    tooltip: {
        style: {
            zIndex: 20,
        }
    },
    title: {
        text: '로또6/45',
        style: {
            fontSize: '19px',
            fontWeight: '600',
            fontFamily: 'Pretendard GOV'
        }
    },
    responsive: {
        rules: [{
            condition: {
                maxWidth: 180
            },
        }]
    },
    plotOptions: {
        series: {
            dataLabels: [{
                enabled: false,
                distance: 0,
                format: '{point.percentage:.0f}%'
            }, {
                enabled: false,
                distance: -15,
                format: '{point.percentage:.0f}%',
                style: {
                    fontSize: '0.9em'
                }
            }],
            showInLegend: false,
            states: {
                hover: {
                    brightness: 0.03,
                    halo: {
                        opacity: 0.3,
                        size: 10,
                    }
                },
                inactive: {
                    opacity: 0.5,
                },
            }
        }
    },
    series: [{
        innerSize: '65%',
        data: [{
            name: '로또6/45',
            y: 45,
            color: '#FFB114'
        }, {
            name: '기타',
            y: 55,
            color: '#d9d9d9'

        }, ],


    }],

});

Highcharts.chart('pie2', {
    chart: {
        type: 'pie',
        margin: [0, 0, 0, 0],
        style: {
            zIndex: 10,
        },
        backgroundColor: 'transparent',

    },
    title: {
        text: '연금복권720+',
        style: {
            fontSize: '19px',
            fontWeight: '600',
            fontFamily: 'Pretendard GOV'
        }
    },
    responsive: {
        rules: [{
            condition: {
                maxWidth: 180
            },
        }]
    },
    plotOptions: {
        series: {
            dataLabels: [{
                enabled: false,
            }, {
                enabled: false,
            }],
            showInLegend: false,
            states: {
                hover: {
                    brightness: 0.03,
                    halo: {
                        opacity: 0.3,
                        size: 10,
                    }
                },
                inactive: {
                    opacity: 0.5,
                },
            }
        }
    },
    series: [{
        innerSize: '65%',
        //size: 180,
        data: [{
            name: '연금복권720+',
            y: 25,
            color: '#8C63DA'
        }, {
            name: '기타',
            y: 75,
            color: '#d9d9d9'

        }, ]
    }]
});

Highcharts.chart('pie3', {
    chart: {
        type: 'pie',
        margin: [0, 0, 0, 0],
        style: {
            zIndex: 10,
        },
        backgroundColor: 'transparent',

    },
    title: {
        text: '인쇄복권(연금+스피또)',
        style: {
            fontSize: '19px',
            fontWeight: '600',
            fontFamily: 'Pretendard GOV'
        }
    },
    responsive: {
        rules: [{
            condition: {
                maxWidth: 180
            },
        }]
    },
    plotOptions: {
        series: {
            dataLabels: [{
                enabled: false,
            }, {
                enabled: false,

            }],
            showInLegend: false,
            states: {
                hover: {
                    brightness: 0.03,
                    halo: {
                        opacity: 0.3,
                        size: 10,
                    }
                },
                inactive: {
                    opacity: 0.5,
                },
            }
        }
    },
    series: [{
        innerSize: '65%',
        data: [{
            name: '인쇄복권(연금+스피또)',
            y: 15,
            color: '#09A8B3'
        }, {
            name: '기타',
            y: 85,
            color: '#d9d9d9'

        }, ]
    }]
});

Highcharts.chart('pie4', {
    chart: {
        type: 'pie',
        margin: [0, 0, 0, 0],
        style: {
            zIndex: 10,
        },
        backgroundColor: 'transparent',


    },
    title: {
        text: '스피또2000',
        style: {
            fontSize: '19px',
            fontWeight: '600',
            fontFamily: 'Pretendard GOV'
        }
    },
    responsive: {
        rules: [{
            condition: {
                maxWidth: 180
            },
        }]
    },
    plotOptions: {
        series: {
            dataLabels: [{
                enabled: false,
            }, {
                enabled: false,

            }],
            showInLegend: false,
            states: {
                hover: {
                    brightness: 0.03,
                    halo: {
                        opacity: 0.3,
                        size: 10,
                    }
                },
                inactive: {
                    opacity: 0.5,
                },
            }
        }
    },
    series: [{
        innerSize: '65%',
        data: [{
            name: '스피또2000',
            y: 15,
            color: '#136DD4'
        }, {
            name: '기타',
            y: 85,
            color: '#d9d9d9'

        }, ]
    }]
});

Highcharts.chart('pie5', {
    chart: {
        type: 'pie',
        margin: [0, 0, 0, 0],
        style: {
            zIndex: 10,
        },
        backgroundColor: 'transparent',

    },
    title: {
        text: '스피또1000',
        style: {
            fontSize: '19px',
            fontWeight: '600',
            fontFamily: 'Pretendard GOV'
        }
    },
    responsive: {
        rules: [{
            condition: {
                maxWidth: 180
            },
        }]
    },
    plotOptions: {
        series: {
            dataLabels: [{
                enabled: false,
            }, {
                enabled: false,

            }],
            showInLegend: false,
            states: {
                hover: {
                    brightness: 0.03,
                    halo: {
                        opacity: 0.3,
                        size: 10,
                    }
                },
                inactive: {
                    opacity: 0.5,
                },
            }
        }
    },
    series: [{
        innerSize: '65%',
        data: [{
            name: '스피또1000',
            y: 30,
            color: '#136DD4'
        }, {
            name: '기타',
            y: 70,
            color: '#d9d9d9'

        }, ]
    }]
});

Highcharts.chart('pie6', {
    chart: {
        type: 'pie',
        margin: [0, 0, 0, 0],
        style: {
            zIndex: 10,

        },
        backgroundColor: 'transparent',

    },
    title: {
        text: '스피또500',
        style: {
            fontSize: '19px',
            fontWeight: '600',
            fontFamily: 'Pretendard GOV'
        }
    },
    responsive: {
        rules: [{
            condition: {
                maxWidth: 180
            },
        }]
    },
    plotOptions: {
        series: {
            dataLabels: [{
                enabled: false,
            }, {
                enabled: false,

            }],
            showInLegend: false,
            states: {
                hover: {
                    brightness: 0.03,
                    halo: {
                        opacity: 0.3,
                        size: 10,
                    }
                },
                inactive: {
                    opacity: 0.5,
                },
            }
        }
    },
    series: [{
        innerSize: '65%',
        data: [{
            name: '스피또500',
            y: 20,
            color: '#136DD4'
        }, {
            name: '기타',
            y: 80,
            color: '#d9d9d9'

        }, ]
    }]
});

Highcharts.chart('bar1', {
    chart: {

    },
    title: {
        text: '주차별 판매 추이',
        align: 'left',
        style: {
            fontSize: '24px',
            fontWeight: '700',
            fontFamily: 'Pretendard GOV'
        }
    },
    credits: {
        enabled: false,
    },
    xAxis: [{
        categories: [
            '1주차', '2주차', '3주차', '4주차', '5주차', '6주차', '7주차', '8주차', '9주차', '10주차', '11주차', '12주차', '13주차', '14주차', '15주차', '16주차', '17주차', '18주차', '19주차', '20주차', '21주차', '22주차', '23주차', '24주차', '25주차', '26주차', '27주차', '28주차', '29주차', '30주차', '31주차', '32주차', '33주차', '34주차', '35주차', '36주차', '37주차', '38주차', '39주차', '40주차', '41주차', '42주차', '43주차', '44주차', '45주차', '46주차', '47주차', '48주차', '49주차', '50주차', '51주차', '52주차', '53주차'

        ],
        crosshair: true
    }],
    yAxis: [{ // Primary yAxis
            labels: {
                format: '{value}',
                style: {
                    color: Highcharts.getOptions().colors[2]
                }
            },
            title: {
                text: '%',
                style: {
                    color: Highcharts.getOptions().colors[2]
                }
            },
            min: -100,
            max: 100,
            opposite: true,
        },
        { // Secondary yAxis
            title: {
                text: '억단위',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            },
            labels: {
                format: '{value}',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            },

        }
    ],
    tooltip: {
        shared: true
    },
    legend: {
        align: 'left',
        verticalAlign: 'top'
    },
    series: [{
            name: '2024',
            type: 'column',
            yAxis: 1,
            data: [
                45.7, 37.0, 28.9, 17.1, 39.2, 18.9, 90.2, 78.5, 74.6,
                18.7, 17.1, 16.0, 45.7, 37.0, 28.9, 17.1, 39.2, 18.9, 90.2, 78.5, 74.6,
                18.7, 17.1, 16.0, 45.7, 37.0, 28.9, 17.1, 39.2, 18.9, 90.2, 78.5, 74.6,
                18.7, 17.1, 16.0, 45.7, 37.0, 28.9, 17.1, 39.2, 18.9, 90.2, 78.5, 74.6,
                18.7, 17.1, 16.0, 28.9, 17.1, 39.2, 39.2,
            ],
            tooltip: {
                valueSuffix: ' 억'
            }

        },
        {
            name: '2025',
            type: 'column',
            yAxis: 1,
            data: [
                78.5, 10.6,
                18.7, 17.1, 16.0, 37.0, 28.9, 17.1, 39.2, 18.9, 90.2, 78.5, 74.6,
                18.7, 17.1, 16.0, 45.7, 37.0, 28.9, 45.7, 37.0, 28.9, 17.1, 39.2, 18.9, 90.2, 17.1, 39.2, 18.9, 90.2, 78.5, 74.6,
                18.7, 17.1, 16.0, 45.7, 18.0,
            ],
            tooltip: {
                valueSuffix: ' 억'
            }

        },
        {
            name: '전년대비',
            type: 'spline',
            data: [
                -100, -9.5, -14.2, 0.2, 7.0, 12.1, 13.5, 13.6, 8.2,
                -2.8, -12.0, -15.5, -11.4, -9.5, -14.2, 0.2, 7.0, 30.1, 13.5, 13.6, 8.2,
                -2.8, -40.0, -15.5, -11.4, -9.5, -14.2, 0.2, 7.0, 12.1, 13.5, 13.6, 100,
                -2.8, -12.0, -15.5, -11.4,
            ],
            tooltip: {
                valueSuffix: '%'
            }
        }
    ]
});

Highcharts.chart('bar2', {
    chart: {

    },
    title: {
        text: '월별 판매 추이',
        align: 'left',
        style: {
            fontSize: '24px',
            fontWeight: '700',
            fontFamily: 'Pretendard GOV'
        }
    },
    credits: {
        enabled: false,
    },
    xAxis: [{
        categories: [
            '1월', '2월', '3월', '4월', '5월', '6월',
            '7월', '8월', '9월', '10월', '11월', '12월'
        ],
        crosshair: true
    }],
    yAxis: [{ // Primary yAxis
            labels: {
                format: '{value}',
                style: {
                    color: Highcharts.getOptions().colors[2]
                }
            },
            title: {
                text: '%',
                style: {
                    color: Highcharts.getOptions().colors[2]
                }
            },
            min: -100,
            max: 100,
            opposite: true,
        },
        { // Secondary yAxis
            title: {
                text: '억단위',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            },
            labels: {
                format: '{value}',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            },

        }
    ],
    tooltip: {
        shared: true
    },
    legend: {
        align: 'left',
        verticalAlign: 'top'
    },
    series: [{
            name: '2024',
            type: 'column',
            yAxis: 1,
            data: [
                45.7, 37.0, 28.9, 17.1, 39.2, 18.9, 90.2, 78.5, 74.6,
                18.7, 17.1, 16.0
            ],
            tooltip: {
                valueSuffix: ' 억'
            }

        },
        {
            name: '2025',
            type: 'column',
            yAxis: 1,
            data: [
                17.1, 39.2, 18.9, 90.2, 78.5, 74.6,
            ],
            tooltip: {
                valueSuffix: ' 억'
            }

        }, {
            name: '전년대비',
            type: 'spline',
            data: [
                -11.4, -9.5, -14.2, 0.2, 7.0, 12.1,
            ],
            tooltip: {
                valueSuffix: '%'
            }
        }
    ]
});

// Highcharts.chart('bar', {
//     chart: {

//     },
//     title: {
//         text: '분기별 판매 추이',
//         align: 'left',
//         style: {
//             fontSize: '24px',
//             fontWeight: '700',
//             fontFamily: 'Pretendard GOV'
//         }
//     },
//     credits: {
//         enabled: false,
//     },
//     xAxis: [{
//         categories: [
//             '1분기', '2분기', '3분기', '4분기', 
//         ],
//         crosshair: true
//     }],
//     yAxis: [{ // Primary yAxis
//             labels: {
//                 format: '{value}',
//                 style: {
//                     color: Highcharts.getOptions().colors[2]
//                 }
//             },
//             title: {
//                 text: '%',
//                 style: {
//                     color: Highcharts.getOptions().colors[2]
//                 }
//             },
//             min: -100,
//             max: 100,
//         },
//         { // Secondary yAxis
//             title: {
//                 text: '억단위',
//                 style: {
//                     color: Highcharts.getOptions().colors[1]
//                 }
//             },
//             labels: {
//                 format: '{value}',
//                 style: {
//                     color: Highcharts.getOptions().colors[1]
//                 }
//             },

//         }
//     ],
//     tooltip: {
//         shared: true
//     },
//     legend: {
//         align: 'left',
//         verticalAlign: 'top'
//     },
//     series: [{
//             name: '2024',
//             type: 'column',
//             yAxis: 1,
//             data: [
//                 45.7, 37.0, 28.9, 17.1, 
//             ],
//             tooltip: {
//                 valueSuffix: ' 억'
//             }

//         },
//         {
//             name: '2025',
//             type: 'column',
//             yAxis: 1,
//             data: [
//                 17.1, 39.2, 
//             ],
//             tooltip: {
//                 valueSuffix: ' 억'
//             }

//         },
//     ]
// });

Highcharts.chart('bar3', {
    chart: {
        type: 'column',

    },
    title: {
        text: '분기별 판매 추이',
        align: 'left',
        style: {
            fontSize: '24px',
            fontWeight: '700',
            fontFamily: 'Pretendard GOV',
            marginBottom: 20
        }
    },
    credits: {
        enabled: false,
    },
    legend: {
        align: 'left',
        verticalAlign: 'top'
    },
    xAxis: {
        categories: ['1분기', '2분기', '3분기', '4분기'],
        crosshair: true,
    },
    yAxis: {
        min: 0,
        title: {
            text: '억단위',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        },
        labels: {
            format: '{value}',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        },

    },
    tooltip: {
        valueSuffix: ' 억',
        shared: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
            name: '2024',
            data: [17.1, 39.2, 18.9, 90.2, ]
        },
        {
            name: '2025',
            data: [18.9, 90.2, 78.5, 74.6, ]
        }
    ]
});

Highcharts.chart('bar4', {
    chart: {
        type: 'column',

    },
    title: {
        text: '년도별 판매 추이',
        align: 'left',
        style: {
            fontSize: '24px',
            fontWeight: '700',
            fontFamily: 'Pretendard GOV',
            marginBottom: 20
        }
    },
    credits: {
        enabled: false,
    },
    legend: {
        align: 'left',
        verticalAlign: 'top'
    },
    xAxis: {
        categories: ['2021년', '2022년', '2023년', '2024년', '2025년'],
        crosshair: true,
    },
    yAxis: {
        min: 0,
        title: {
            text: '억단위',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        },
        labels: {
            format: '{value}',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        },

    },
    tooltip: {
        valueSuffix: ' 억',
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
            name: '매출',
            data: [17.1, 39.2, 18.9, 90.2, 20]
        },
    ]
});