mobiscroll.datepicker('#demo-booking-multiple', {
    controls: ['calendar', 'timegrid'],
    min: '2022-11-28T00:00',
    max: '2023-05-28T00:00',
    minTime: '08:00',
    maxTime: '19:59',
    stepMinute: 60,
    // example for today's labels and invalids
    labels: [{
        start: '2022-11-28',
        textColor: '#e1528f',
        title: '3 SPOTS'
    }],
    invalid: [{
        start: '2022-11-28T08:00',
        end: '2022-11-28T13:00'
    }, {
        start: '2022-11-28T15:00',
        end: '2022-11-28T17:00'
    }, {
        start: '2022-11-28T19:00',
        end: '2022-11-28T20:00'
    }]
});