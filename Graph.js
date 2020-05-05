import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { AreaChart, Grid, LineChart, XAxis, YAxis,Circle,Path } from 'react-native-svg-charts'
import * as scale from 'd3-scale';
import * as shape from 'd3-shape';
import dateFns from 'date-fns';

class Graph extends Component {
    render() {

        const data = [{
            value: Math.floor(Math.random() * 101)-200,
            date: 1,
        },
        {
            value: Math.floor(Math.random() * 101),
            date: 2,
        },
        {
            value: Math.floor(Math.random() * 101),
            date: 3,
        },
        {
            value: Math.floor(Math.random() * 101),
            date: 4,
        },
        {
            value: Math.floor(Math.random() * 101),
            date: 5,
        },
        {
            value: Math.floor(Math.random() * 101),
            date: 6,
        },
        {
            value: Math.floor(Math.random() * 101),
            date: 7,
        },
        {
            value: Math.floor(Math.random() * 101),
            date: 8,
        },
        {
            value: Math.floor(Math.random() * 101),
            date: 9,
        },
        {
            value: Math.floor(Math.random() * 101),
            date: 10,
        },
        {
            value: Math.floor(Math.random() * 101),
            date: 11,
        },
        {
            value: Math.floor(Math.random() * 101),
            date: 12,
        },
        {
            value: Math.floor(Math.random() * 101),
            date: 13,
        },
        {
            value: Math.floor(Math.random() * 101),
            date: 14,
        },
        {
            value: Math.floor(Math.random() * 101),
            date: 15,
        },
        {
            value: Math.floor(Math.random() * 101),
            date: 16,
        },
        {
            value: Math.floor(Math.random() * 101),
            date: 17,
        },
        {
            value: Math.floor(Math.random() * 101),
            date: 18,
        },
        {
            value: Math.floor(Math.random() * 101),
            date: 19,
        },
        {
            value: Math.floor(Math.random() * 101),
            date: 20,
        },
        {
            value: Math.floor(Math.random() * 101),
            date: 21,
        },
        {
            value: Math.floor(Math.random() * 101),
            date: 22,
        },
        {
            value: Math.floor(Math.random() * 101),
            date: 23,
        },
        {
            value: Math.floor(Math.random() * 101),
            date: 24,
        },
    ]

        const Decorator = ({ x, y, data }) => {
                return data.map((value, index) => (
                    <Circle
                        key={ index }
                        cx={ x(index) }
                        cy={ y(value) }
                        r={ 4 }
                        stroke={ 'rgb(134, 65, 244)' }
                        fill={ 'white' }
                    />
                ))
        }

        const axesSvg = { fontSize: 10, fill: 'grey' };
        const verticalContentInset = { top: 5, bottom: 5 }
        const xAxisHeight = 30

        
        const Line = ({ x,y,data,line }) => (
            <Path
            d={ line }
            stroke={ 'purple' }
            fill={ 'none' }
            />
            )
            
        // Layout of an x-axis together with a y-axis is a problem that stems from flexbox.
        // All react-native-svg-charts components support full flexbox and therefore all
        // layout problems should be approached with the mindset "how would I layout regular Views with flex in this way".
        // In order for us to align the axes correctly we must know the height of the x-axis or the width of the x-axis
        // and then displace the other axis with just as many pixels. Simple but manual.

        return (
            <View style={{ height: 180,padding: 20, flexDirection: 'row' }}>
                <YAxis
                    data={data}
                    style={{ marginBottom: xAxisHeight }}
                    contentInset={verticalContentInset}
                    svg={axesSvg}
                    yAccessor={({item}) => item.value}
                />
                <View style={{ flex: 1, marginLeft: 10 }}>
                    <LineChart
                        style={{ flex: 1 }}
                        data={data}
                        yAccessor={({item}) => item.value}
                        xAccessor={ ({ item }) => item.date }
                        xScale={ scale.scaleTime }
                        contentInset={verticalContentInset}
                        svg={{ stroke: 'green' }}
                        animate={true}
                    >
                        <Grid svg={{stroke:'#303030'}}/>
                        <Line/>
                        
                    </LineChart>
                    <XAxis
                        style={{ marginHorizontal: -10, height: xAxisHeight }}
                        data={data}
                        formatLabel={(value, index) => value}
                        contentInset={{ left: 10, right: 10 }}
                        svg={axesSvg}
                        xAccessor={ ({ item }) => item.date }
                        formatLabel={(value,index) =>{if(index%2) return value; else return ""}}
                    />
                </View>
            </View>
        )
    }
}

export default Graph
