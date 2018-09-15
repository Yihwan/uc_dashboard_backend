import React from 'react';
import ReactTable from 'react-table';
import { withRouter } from 'react-router-dom';

const API = 'http://localhost:3000/api/experiments';
const QUERY = '';

class ExperimentIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      experiments: null
    };
  }

  componentDidMount() {
    fetch(API + QUERY)
      .then((response) => response.json())
      .then((experiments) => this.setState({ experiments }));
  }

  render() {
    if (!this.state.experiments) {
      return <p>Loading ...</p>;
    }

    const data = this.state.experiments;

    const columns = [
      {
        Header: "Information",
        columns: [
          {
            Header: 'Name',
            accessor: 'name'
          },
          {
            Header: 'Date',
            accessor: 'date',
          },
          {
            Header: 'Location',
            accessor: 'location',
              Cell: (row) => (
                <span>
                  <span style={{
                    color: row.value === 'Pilot' ?
                    '#FFA500' :
                    '#008000'
                  }}>
                    &#x25cf;
                  </span> {
                    row.value === 'Pilot' ?
                    'In Pilot' :
                    'In Production'
                  }

                </span>
              )
          },
          {
            Header: 'Operator',
            accessor: 'operator',
          },
        ]
      },

      {
        Header: "Inputs",
        columns: [
          {
            Header: 'Mixing Condition',
            accessor: 'mixing_condition',
          },
          {
            Header: 'Oven Temperature',
            accessor: 'oven_temperature'
          }
        ]
      },

      {
        Header: "Outputs",
        columns: [
          {
            Header: 'Viscosity',
            accessor: 'viscosity',
          },
          {
            Header: 'Cure Time',
            accessor: 'cure_time',
          },
          {
            Header: 'Elongation',
            accessor: 'elongation',
          },
          {
            Header: 'Tensile Strength',
            accessor: 'tensile_strength',
          },
          {
            Header: 'Compression Set',
            accessor: 'compression_set'
          },
        ]
      }
    ];

    return(
      <div>
        <h1 className="view-header">All Experiments</h1>
        <div className="table-container">
          <ReactTable
            getTrProps={(state, rowInfo) => ({
              onClick: e => this.props.history.push(`/experiments/${rowInfo.original.id}`)
            })}
            data={data}
            columns={columns}
            />
        </div>
      </div>
    );
  }
}

export default withRouter(ExperimentIndex);
