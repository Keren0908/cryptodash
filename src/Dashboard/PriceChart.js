import HighChartsConfig from './HighChartsConfig';
import React from 'react';
import {Tile} from '../Shared/Tile';
import {AppContext} from '../App/AppProvider';
import ReactHighcharts from 'react-highcharts';
import HighChartsTheme from './HighChartsTheme';

ReactHighcharts.Highcharts.setOptions(HighChartsTheme);
export default function(){
    return(
        <AppContext.Consumer>
            {({historical}) => 
                <Tile>
                    {historical ? <ReactHighcharts config={HighChartsConfig(historical)} /> : <div> Loading Historical Data </div>}
                </Tile>
            }
        </AppContext.Consumer>
    )
}