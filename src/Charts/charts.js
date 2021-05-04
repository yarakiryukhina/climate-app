import React, { Component } from 'react';
import Chart from 'react-apexcharts';
import ReactApexChart from 'react-apexcharts';

const res_df = require('./res.json');

const titleStyle = {
        fontSize: '17px',
        fontFamily: 'Baskervville, Libre Baskerville, Georgia, serif',
        //fontWeight: '400',
    };

const chartFont = 'Raleway, Open Sans, Helvetica, Arial, sans-serif';


res_df.heatmap.share_global_co2.reverse();
res_df.heatmap.co2_per_capita.reverse();

/**
 *  Functions
 */

function filterNaN(x) {
    return !isNaN(x) && x !== null;
}

function round(num, digits=0) {
    const exp = 10**digits;

    return Math.round(num * exp) / exp;
}


/**
 *  Heatmap CO2 global share
 */

function Heatmap() {
    const opts = {
        options: {
            chart: {
                fontFamily: chartFont
            },
            dataLabels: {
                enabled: false,
                formatter: function (val, opt) {
                    return round(val, 1) + '%';
                }
            },
            yaxis: {
                title: {
                    text: 'Countries'
                }
            },
            xaxis: {
                tickAmount: 20,
                labels: {
                    rotate: -45,
                    rotateAlways: true
                }
            },
            tooltip: {
                enabled: true,
                y: {
                    formatter: function(val, { series, seriesIndex, dataPointIndex, w }) {
                        return round(val, 2) + '%';
                    }
                }
            },
            title: {
                text: 'Top ' + res_df.heatmap.share_global_co2.length + ' countries emitting CO₂',
                style: titleStyle
            },
            subtitle: {
                text: 'Source: Our World in Data. Percentage shown out of the global CO2 emissions'
            },
            colors: ["#f4aa00"]
        },
        series: res_df.heatmap.share_global_co2
    };

    return (
        <ReactApexChart options={opts.options} series={opts.series} type='heatmap' height={350} />
    );
}


/**
 *  Heatmap CO2 emission per capita
 */

function Heatmap2() {
    const opts = {
        options: {
            chart: {
                fontFamily: chartFont
            },
            dataLabels: {
                enabled: false,
                formatter: function (val, opt) {
                    return round(val, 1) + ' tonnes';
                }
            },
            yaxis: {
                title: {
                    text: 'Countries'
                }
            },
            xaxis: {
                tickAmount: 20,
                labels: {
                    rotate: -45,
                    rotateAlways: true
                }
            },
            tooltip: {
                enabled: true,
                y: {
                    formatter: function(val, { series, seriesIndex, dataPointIndex, w }) {
                        return round(val, 2) + ' Megatonnes';
                    }
                }
            },
            title: {
                text: 'Top ' + res_df.heatmap.co2_per_capita.length + ' countries emitting CO₂ per capita',
                style: titleStyle
            },
            subtitle: {
                text: 'Source: Our World in Data'
            },
            colors: ["#f4aa00"]
        },
        series: res_df.heatmap.co2_per_capita
    };

    return (
        <ReactApexChart options={opts.options} series={opts.series} type='heatmap' height={350} />
    );
}


/**
 *  CO2 emission per exajoule
 */

function Perexajoule() {
    const opts = {
        options: {
            chart: {
                fontFamily: chartFont,
                zoom: {
                    enabled: false
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                width: res_df.co2_per_ej.width,
                curve: 'straight',
                dashArray: res_df.co2_per_ej.dash
            },
            title: {
                text: 'CO₂ emission per one exajoule of consumed energy per year',
                align: 'left',
                style: titleStyle
            },
            subtitle: {
                text: 'Source: BP Statistical Review of Global Energy'
            },
            markers: {
                size: 0,
                hover: {
                    sizeOffset: 6
                }
            },
            xaxis: {
                categories: res_df.co2_per_ej.categories,
                tickAmount: 15,
                //labels: {
                //    rotate: false
                //}
            },
            yaxis: {
                max: 95, min: 50,
                title: {
                    text: 'CO₂ million tonns per one consumed exajoule',
                },
                labels: {
                    formatter: function(val, opt) {
                        return round(val);
                    }
                }
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return val + ' CO₂ Megatonnes/ej';
                    }
                }
            },
            colors: ['#ccc', '#37b067', '#6296bc', '#edb40d', '#7fd7c1', '#9f8cae', '#eb6672', '#376c72', '#d68db8', '#e3791a', '#9f765e'],
            grid: {
                borderColor: '#f1f1f1',
            }

        },
        series: res_df.co2_per_ej.series
    }

    return (
        <ReactApexChart options={opts.options} series={opts.series} type='line' height={500} />
    );
}


/**
 *  CO2 Global share by fuel type
 */

function Emission() {
    const opts = {
        options: {
            chart: {
                fontFamily: chartFont,
                zoom: {
                    enabled: false
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                width: [5, 5, 3, 1],
                curve: 'straight',
                //curve: 'smooth'
            },
            title: {
                text: 'CO₂ global share by fuel type per year',
                align: 'left',
                style: titleStyle
            },
            subtitle: {
                text: 'Source: BP Statistical Review of Global Energy'
            },
            markers: {
                size: 0,
                hover: {
                    sizeOffset: 6
                }
            },
            xaxis: {
                categories: res_df.emission.years,
                type: 'category',
                labels: {
                    //rotate: 0,
                    trim: true
                },
                tickAmount: 10
            },
            yaxis: {
                max: 100,
                title: {
                    text: 'CO₂ industry share, %',
                },
                labels: {
                    formatter: function(val, opt) {
                        return round(val);
                    }
                }
            },
            annotations: {
                xaxis: [
                    {
                        x: 1914,
                        strokeDashArray: 0,
                        borderColor: '#775DD0',
                        label: {
                            borderColor: '#775DD0',
                            style: {
                                color: '#fff',
                                background: '#775DD0',
                            },
                            text: '1914 World War I',
                        }
                    }, {
                        x: 1939,
                        strokeDashArray: 0,
                        borderColor: '#775DD0',
                        label: {
                            borderColor: '#775DD0',
                            style: {
                                color: '#fff',
                                background: '#775DD0',
                            },
                            text: '1939 World War II',
                        }
                    }, {
                        x: 1973,
                        strokeDashArray: 0,
                        borderColor: '#775DD0',
                        label: {
                            borderColor: '#775DD0',
                            style: {
                                color: '#fff',
                                background: '#775DD0',
                            },
                            text: '1973 oil crisis',
                        }
                    }, {
                        x: 1986,
                        strokeDashArray: 0,
                        borderColor: '#775DD0',
                        label: {
                            borderColor: '#775DD0',
                            style: {
                                color: '#fff',
                                background: '#775DD0',
                            },
                            text: '1986 oil price collapse',
                        }
                    }, {
                        x: 2004,
                        strokeDashArray: 0,
                        borderColor: '#775DD0',
                        label: {
                            borderColor: '#775DD0',
                            style: {
                                color: '#fff',
                                background: '#775DD0',
                            },
                            text: '2004 oil price surge',
                        }
                    }
                ]
            },
            tooltip: {
                y: {
                    formatter: function(val, { series, seriesIndex, dataPointIndex, w }) {
                        const e = w.config.series[seriesIndex].emission[dataPointIndex];

                        return `${val}% (${e} Megatonnes/y)`;
                    }
                }
            },
            grid: {
                borderColor: '#f1f1f1'
            }
        },
        series: res_df.emission.series
    }

    return (
        <ReactApexChart options={opts.options} series={opts.series} type='line' height={500} />
    );
}


/**
 *  Global energy consumption by fuel type
 */

function Energy() {
    const opts = {
        options: {
            chart: {
                fontFamily: chartFont,
                stacked: true,
                stackType: '100%'
            },
            plotOptions: {
                bar: {
                    horizontal: true,
                }
            },
            stroke: {
                width: 0,
                colors: ['#fff']
            },
            title: {
                text: 'Energy consumption by type',
                style: titleStyle
            },
            subtitle: {
                text: 'Source: BP Statistical Review of Global Energy'
            },
            dataLabels: {
                enabled: false
            },
            xaxis: {
                categories: res_df.energy.categories,
                labels: {
                    formatter: function(val) {
                        return round(val) + '%';
                    }
                },
                tickAmount: 5
            },
            yaxis: {
                decimalsInFloat: 0,
                tickAmount: 10
            },
            tooltip: {
                y: {
                    formatter: function (val, { series, seriesIndex, dataPointIndex, w }) {
                        return round(val, 2) + "%";
                    }
                }
            },
            fill: {
                opacity: 1
            },
            colors: ['#00e396', '#008ffb', '#565656', '#feb019', '#775dd0', '#ff4560']
        },
        series: res_df.energy.series
    }

    return (
        <ReactApexChart options={opts.options} series={opts.series} type='bar' height={550} />
    );
}


/**
 *  Japanese cherry full-flowering scatter plot with trend line
 */

function Cherry2() {
    const opts = {
        options: {
            chart: {
                fontFamily: chartFont,
                zoom: {
                    enabled: false,
                },
            },
            //fill: {
            //  type: 'solid',
            //},
            title: {
                text: 'Japanese cherry full flowering vs CO₂ by year',
                align: 'left',
                style: titleStyle
            },
            subtitle: {
                text: 'Source: Osaka Prefecture University'
            },
            yaxis: {
                tickAmount: 7,
                max: res_df.cherry2.max + 3,
                min: res_df.cherry2.min - 3,
                labels: {
                    formatter: function (val) {
                      return round(val)
                    }
                },
                title: {
                    text: 'Days from the beginning of the year'
                }
            },
            colors: ['#e1477d', '#999'],
            annotations: {
                yaxis: [{
                    y: 90,
                    borderColor: '#7057c2',
                    opacity: 0.2,
                    label: {
                        borderColor: '#7057c2',
                        style: {
                            fontSize: '10px',
                            color: '#fff',
                            background: '#7057c2',
                        },
                        text: '1st April',
                        position: 'left',
                        offsetX: '45%'
                    },
                }, {
                    y: 120.25,
                    borderColor: '#7057c2',
                    opacity: 0.2,
                    label: {
                        borderColor: '#7057c2',
                        style: {
                            fontSize: '10px',
                            color: '#fff',
                            background: '#7057c2',
                        },
                        text: '1st May',
                        position: 'left',
                        offsetX: '45%'
                    }
                }],
                xaxis: [{
                    x: 2016,
                    x2: 2045,
                    borderColor: '#000',
                    fillColor: '#eee',
                    opacity: 0.2,
                    label: {
                        style: {
                            fontSize: '10px',
                            color: '#111',
                            background: '#eee',
                        },
                        text: 'Forecast',
                    }
                }]
            },
            markers: {
                size: res_df.cherry2.markers
            },
            tooltip: {
                y: {
                    formatter: function(val, opt) {
                        return round(val) + '-th day';
                    }
                }

            },
            stroke: {
                curve: 'smooth'
            },
            legend: {
                show: true
            },
            xaxis: {
                type: 'numeric',
                tickAmount: 12
            }
        },
        series: res_df.cherry2.series
    };

    return (
        <ReactApexChart options={opts.options} series={opts.series} type='line' height={500} />
    );
}


/**
 *  Atmospheric CO2 concentration change by month
 */

function CO2change() {
    const opts = {
        options: {
            chart: {
                fontFamily: chartFont,
                zoom: {
                    enabled: false,
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                width: 2,
                curve: 'smooth',
            },
            title: {
                text: ['Atmospheric CO₂ concentration', 'change by month'],
                style: titleStyle
            },
            subtitle: {
                text: 'Source: Global Warming API',
                align: 'right'
            },
            //colors: ['#008FFB', '#FF4560'],
            grid: {
                borderColor: '#e7e7e7',
                row: {
                    colors: ['#f3f3f3', 'transparent'],
                    opacity: 0.5
                }
            },
            tooltip: {
                y: {
                    formatter: function(val) {
                        return val + ' ppm';
                    }
                }
            },
            xaxis: {
                categories: res_df.conc_diff.category
            },
            yaxis: {
                title: {
                    text: 'Change, ppm'
                },
                labels: {
                    formatter: function (val) {
                        return round(val)
                    }
                }
            }
        },
        series: [{
            name: 'Minimum',
            data: res_df.conc_diff.data_1,
        }, {
            name: 'Maximum',
            data: res_df.conc_diff.data_2,
        }]
    };

    return (
        <ReactApexChart options={opts.options} series={opts.series} type='area' height={350} />
    );
}


/**
 *  Other greenhouse gases atmospheric concentration growth
 */

function Greenhouse() {
    const opts = {
        options: {
            chart: {
                fontFamily: chartFont,
                zoom: {
                    enabled: false,
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                width: 2,
                curve: 'smooth',
            },
            title: {
                text: 'Methane vs N₂O concentration growth',
                style: titleStyle
            },
            subtitle: {
                text: 'Source: Global Warming API',
            },
            colors: ['#008FFB', '#FF4560'],
            xaxis: {
                type: 'category',
                categories: res_df.greenhouse.category,
                tickAmount: 8,
            },
            yaxis: {
                title: {
                    text: 'Concentration growth, %'
                },
                min: 100,
                max: Math.max(...res_df.greenhouse.methane.data.filter(filterNaN),
                              ...res_df.greenhouse.nitrous.data.filter(filterNaN)) + 2,
                labels: {
                    formatter: function (val) {
                        return round(val);
                    }
                }
            },
            annotations: {
                yaxis: [{
                    y: 100,
                    borderColor: '#000',
                    label: {
                        borderColor: '#000',
                        style: {
                            color: '#fff',
                            background: '#000',
                        },
                        text: 'Minimal level',
                    }
                }]
            },
            fill: {
                opacity: 1
            },
            tooltip: {
                y: {
                    formatter: function (val, {dataPointIndex, series, seriesIndex, w}) {
                        const v = w.config.series[seriesIndex].level[dataPointIndex],
                              m = round(v - w.config.series[seriesIndex].min);

                        return !filterNaN(val) ? 'No data' : `${val}% (${m}/${v} ppm)`;
                    }
                }
            }
        },
        series: [{
            name: 'Methane growth',
            data: res_df.greenhouse.methane.data,
            level: res_df.greenhouse.methane.level,
            min: res_df.greenhouse.methane.min,
        }, {
            name: 'N₂O growth',
            data: res_df.greenhouse.nitrous.data,
            level: res_df.greenhouse.nitrous.level,
            min: res_df.greenhouse.nitrous.min,
        }]
    };

    return (
        <ReactApexChart options={opts.options} series={opts.series} type='line' height={400} />
    );
}


/**
 *  Arctic ice pack, global warming and CO2
 */

function Warming() {
    const arcticice_df = res_df.arcticice;

    const arcticice_tick = 20,
          arcticice_max = Math.ceil(
                (Math.max(...arcticice_df.ice.data.filter(filterNaN),
                          ...arcticice_df.co2.data.filter(filterNaN)) + 10) / arcticice_tick) * arcticice_tick;

    const opts = {
        options: {
            chart: {
                fontFamily: chartFont,
                zoom: {
                    enabled: false
                }
            },
            colors: ['#008FFB', '#00E396', '#FEB019'],
            stroke: {
                width: [2, 2, 2]
            },
            title: {
                text: 'Arctic ice pack & CO₂ emission vs temperature change',
                style: titleStyle
            },
            subtitle: {
                text: 'Sources: Our World in Data, Global Warming API'
            },
            labels: arcticice_df.category,
            xaxis: {
                type: 'category',
                tickAmount: 10,
            },
            yaxis: [{
                seriesName: 'Arctic ice decline',
                axisTicks: {
                    show: true,
                },
                axisBorder: {
                    show: true,
                    color: '#008FFB'
                },
                labels: {
                    style: {
                        colors: '#008FFB',
                    },
                    formatter: function (val) {
                        return round(val);
                    }
                },
                opposite: false,
                title: {
                    text: 'Arctic ice pack decline, %',
                    style: {
                      color: '#008FFB',
                    }
                },
                max: arcticice_max,
                tickAmount: arcticice_max / arcticice_tick
            }, {
                seriesName: 'CO₂ emission growth',
                axisBorder: {
                  show: true,
                  color: '#00E396'
                },
                labels: {
                    style: {
                        colors: '#00E396',
                    },
                    formatter: function (val) {
                        return round(val);// + '%';
                    }
                },
                title: {
                    text: 'CO₂ emission growth, %',
                    style: {
                      color: '#00E396',
                    }
                },
                max: arcticice_max,
                tickAmount: arcticice_max / arcticice_tick,
            }, {
                seriesName: 'Temperature change',
                opposite: true,
                axisTicks: {
                    show: true,
                },
                axisBorder: {
                    show: true,
                    color: '#FEB019'
                },
                labels: {
                    style: {
                        colors: '#FEB019',
                    },
                    formatter: function (val) {
                        return round(val, 1);
                    }
                },
                title: {
                    text: 'Temperature change, °C',
                    style: {
                        color: '#FEB019',
                    }
                },
                max: 4.1,
                //min: 0,
            }],
            annotations: {
                yaxis: [{
                    y: 100,
                    borderColor: '#000',
                    label: {
                        borderColor: '#000',
                        style: {
                            color: '#fff',
                            background: '#000',
                        },
                        text: 'CO₂ minimal level & Arctic ice pack maximum',
                    }
                }]
            },
            tooltip: {
                y: {
                    formatter: function(val, {dataPointIndex, series, seriesIndex, w}) {
                        if (isNaN(val)) {
                            return 'No data';
                        }
                        else {
                            if (seriesIndex === 0) {
                                const v = w.config.series[seriesIndex].level[dataPointIndex],
                                      m = round(w.config.series[seriesIndex].max - v);

                                return `${val}% (${m}/${v}m sq km/y)`;
                            }

                            if (seriesIndex === 1) {
                                const v = w.config.series[seriesIndex].level[dataPointIndex],
                                      m = round(v - w.config.series[seriesIndex].min);

                                return `${val}% (${m}/${v} Megatonnes/y)`;
                            }

                            if (seriesIndex === 2) {
                                return val + ' C°';
                            }

                            return val;
                        }
                    }
                }
            }
        },
        series: [{
            name: 'Arctic ice decline',
            type: 'line',
            data: arcticice_df.ice.data,
            level: arcticice_df.ice.level,
            max: arcticice_df.ice.max
        }, {
            name: 'CO₂ emission growth',
            type: 'line',
            data: arcticice_df.co2.data,
            level: arcticice_df.co2.level,
            min: arcticice_df.co2.min
        }, {
            name: 'Temperature change',
            type: 'column',
            data: arcticice_df.temp.data
        }]
    };

    return (
        <ReactApexChart options={opts.options} series={opts.series} type='line' height={400} />
    );
}


/**
 *  Atmospheric CO2 concetration. Up to date chart
 */

class CO2volume extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            isLoaded: false
        }
    }

    componentDidMount() {
        fetch('https://global-warming.org/api/co2-api')
        //fetch('./co2-api.json')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    data: json
                })
            });
    }

    render() {
        const {isLoaded, data} = this.state;

        if (!isLoaded) {
            return (
                <div>Loading...</div>
            );
        }
        else {
            const period = 2*7;

            let co2 = [], min_vol = 10E12, max_vol = 0, i = period;

            for (const d of data.co2.reverse()) {
                if (i == period) {
                    co2.push([new Date(d.year, d.month-1, d.day).valueOf(), d.cycle]);

                    i = 0;
                }
                else {
                    i++;
                }

                if (d.cycle > max_vol) {
                    max_vol = d.cycle;
                }

                if (d.cycle < min_vol) {
                    min_vol = d.cycle;
                }
            }

            const opts = {
                series: [{
                    name: 'CO₂ concentration level',
                    data: co2,
                }],
                options: {
                    chart: {
                        /*
                        zoom: {
                            type: 'x',
                            enabled: true,
                            autoScaleYaxis: true
                        },
                        */
                        toolbar: {
                            autoSelected: 'zoom'
                        },
                        fontFamily: chartFont
                    },
                    dataLabels: {
                        enabled: false
                    },
                    markers: {
                        size: 0,
                    },
                    //colors: ['#77B6EA', '#545454'],
                    stroke: {
                        //curve: 'smooth',
                        width: 2
                    },
                    dataLabels: {
                        enabled: false
                    },
                    title: {
                        text: 'Net CO₂ concentration (up to date)',
                        align: 'left',
                        style: titleStyle
                    },
                    subtitle: {
                        text: 'Source: Global Warming API',
                    },
                    tooltip: {
                        x: {
                            format: 'MMM dd, yyyy'
                        },
                        y: {
                            formatter: function(val) {
                                return val + ' ppm';
                            }
                        }
                    },
                    grid: {
                        borderColor: '#e7e7e7',
                        row: {
                            colors: ['#f3f3f3', 'transparent'],
                            opacity: 0.5
                        }
                    },
                    xaxis: {
                        type: 'datetime',
                    },
                    yaxis: {
                        title: {
                            text: 'Concentration volume, ppm'
                        },
                        min: Math.floor(min_vol) - 2,
                        max: Math.ceil(max_vol) + 2,
                        labels: {
                            formatter: function (val) {
                              return round(val)
                            }
                        }
                    },
                    annotations: {
                        yaxis: [{
                            y: 400.03,
                            borderColor: '#f00',
                            label: {
                                borderColor: '#f00',
                                style: {
                                    color: '#fff',
                                    background: '#f00',
                                },
                                text: 'May 9, 2013. For first time, Earth\'s CO₂ tops 400 ppm',
                            }
                        }]
                    }
                }
            };

            return (
                <ReactApexChart options={opts.options} series={opts.series} type='area' height={350} />
            )
        }
    }
}


export {
    Heatmap,
    Heatmap2,
    Perexajoule,
    Energy,
    Emission,
    Cherry2,
    CO2change,
    CO2volume,
    Greenhouse,
    Warming
}