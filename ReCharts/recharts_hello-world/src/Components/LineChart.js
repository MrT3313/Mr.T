// REACT
    import React, { 
        PureComponent, Component // project fiddle came with PureComponent
    } from 'react';

// reCHARTS
    import {
        LineChart, 
        Line, 
        
        CartesianGrid, 
        
        XAxis, YAxis, 
        Legend,

        Tooltip, 
    } from 'recharts'

// -- *** NOTES *** -- //
// -- *** NOTES *** -- //

/* 
    -React.PureComponent VS React.Component: 
        --React.Component does NOT implement shouldComponentUpdate()
        --React-PureComponent DOES w/ a SHALLOW prop & State comparison
            --If <Component /> renders the same result given the same props & state
            you can use React.PureComponent for a performance boost
            --"Only extend PureComponent when you expect to have simple props & state,
            or use forceUpdate() when you know deep data structures have changed. 
            Or, consider using immutable objects to facilitate fast comparisons of 
            nested data."

*/

// -- *** STAR CODE *** -- //
// -- *** STAR CODE *** -- //

export default class Example_LineChart extends PureComponent {
    

    render() {
        {console.log(this.props.data)}
        return (
            <LineChart 
            width={730} height={250} data={this.props.data}
            // margin={{ top: 50, right: 30, left: 20, bottom: 5 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="price" stroke="#8884d8" />
                {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
            </LineChart>
        )       
    }
}