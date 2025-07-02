Highcharts.chart('pie1', {
    chart: {
        type: 'pie',
        custom: {},

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
                distance: 20,
                format: '{point.name}'
            }, {
                enabled: false,
                distance: -15,
                format: '{point.percentage:.0f}%',
                style: {
                    fontSize: '0.9em'
                }
            }],
            showInLegend: false
        }
    },
    series: [{
        innerSize: '70%',
        width: 180,
        height:180,
        data: [{
            name: 'EV',
            y: 25,
            color: '#FFB114'
        }, {
            name: 'Hybrids',
            y: 75,
            color: '#EEF2F7'

        }, ]
    }]
});

Highcharts.chart('pie2', {
    chart: {
        type: 'pie',
        custom: {},

    },
    title: {
        text: '연금복권720+',
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
                distance: 20,
                format: '{point.name}'
            }, {
                enabled: false,
                distance: -15,
                format: '{point.percentage:.0f}%',
                style: {
                    fontSize: '0.9em'
                }
            }],
            showInLegend: false
        }
    },
    series: [{
        innerSize: '70%',
        //size: 180,
        data: [{
            name: 'EV',
            y: 25,
            color: '#8C63DA'
        }, {
            name: 'Hybrids',
            y: 75,
            color: '#EEF2F7'

        }, ]
    }]
});

Highcharts.chart('pie3', {
    chart: {
        type: 'pie',
        custom: {},

    },
    title: {
        text: '인쇄복권(연금+스피또)',
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
                distance: 20,
                format: '{point.name}'
            }, {
                enabled: false,
                distance: -15,
                format: '{point.percentage:.0f}%',
                style: {
                    fontSize: '0.9em'
                }
            }],
            showInLegend: false
        }
    },
    series: [{
        innerSize: '70%',
        
        data: [{
            name: 'EV',
            y: 25,
            color: '#8C63DA'
        }, {
            name: 'Hybrids',
            y: 75,
            color: '#EEF2F7'

        }, ]
    }]
});