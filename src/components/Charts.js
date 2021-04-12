import React from 'react';
import {Line, Pie} from 'react-chartjs-2';

const CHART_API = "";

const genre = {
    labels: ['Drama', 'Comdey', 'Documentary', 'Thriller',
             'Adventure', 'Action', 'Horror', 'Romantic Comedy', 
            'Black Comdey', 'Musical', 'Western', 'Concert', 'Multiple Genres', 'Reality', 'Educational'],
    datasets: [
      {
        label: 'Amount of movies',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'orange',
        borderColor: 'ghostwhite',
        borderWidth: 2,
        data: [ 5404, 2383, 2373, 1151, 1078, 1061, 655, 608, 202, 197, 85, 76, 44, 4, 1]
      }
    ]
  }

  const moviestat = {
    labels: ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014',
             '2015', '2016', '2017', '2018', '2019', '2020'],
    datasets: [
      {
        label: 'Number of movies released',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'limegreen',
        borderColor: 'ghostwhite',
        borderWidth: 2,
        data: [371, 356, 480, 506, 551, 547, 608, 632, 607, 520, 538, 601, 669, 689, 708, 706, 737, 740, 873, 792, 329]
      }
    ]
  }

  


function Charts(data) {

    return (
        <div className='charts-container'>
            <a className='button up' name='charts' href='#button'>UP</a>
        <div className='line-chart'>
        <Line
          data={moviestat}
          options={{
            title:{
              display:true,
              text:'Number of movies released in the United States and Canada from 2000 to 2020',
              fontSize:15
            },
            legend:{
              display:false,
              position:'right'
            }
          }}
        />
        </div>
        <div className='pie-chart'>
        <Pie
          data={genre}
          options={{
            title:{
              display:true,
              text:'Number of movies released in North America from 1995 to 2020, by genre',
              fontSize:15
            },
            legend:{
              display:false,
              position:'right'
            }
          }}
        />
        </div>
        </div>
    )
}

export default Charts;
