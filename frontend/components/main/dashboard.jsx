import React from 'react';
import NumberCard from './cards/number_card';
import HorizontalBar from './cards/horizontal_bar';

const API = 'http://localhost:3000/api/experiments';
const QUERY = '';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.allExperimentsCount = this.allExperimentsCount.bind(this);
    this.pilotCount = this.pilotCount.bind(this);
    this.productionCount = this.productionCount.bind(this);

    this.state = {
      experiments: null,
      lastUpdated: null
    };
  }

  componentDidMount() {
    fetch(API + QUERY)
      .then(response => response.json())
      .then(this.setState({ lastUpdated: new Date() }))
      .then(experiments => this.setState({ experiments }));
  }

  allExperimentsCount() {
    return this.state.experiments.length;
  }

  pilotCount() {
    return this.state.experiments.filter(experiment => {
      return experiment.location === "Pilot";
    }).length;
  }

  productionCount() {
    return this.state.experiments.filter(experiment => {
      return experiment.location === "Production";
    }).length;
  }

  // parseLastUpdatedTime() {
  //   const time = this.state.lastUpdated;
  //   const seconds = time.getSeconds();
  //   const minutes = time.getMinutes();
  //   const hours = time.getHours();
  //
  // }

  render() {

    if (!this.state.experiments) {
      return <p>Loading ...</p>;
    }

    return(

      <div className="dashboard">
        <h1 className="view-header">Dashboard</h1>

        <main>
          <section className="experiment-cards">
            <NumberCard
              title={"Total Experiments"}
              value={this.allExperimentsCount()}
              lastUpdated={"Just Now"}
              />
            <NumberCard
              title={"Experiments in Pilot"}
              value={this.pilotCount()}
              lastUpdated={"Just Now"}
              />
            <NumberCard
              title={"Experiments in Production"}
              value={this.productionCount()}
              lastUpdated={"Just Now"}
              />
          </section>
          <section className="materials-histogram">
            a
          </section>
        </main>
      </div>
    );
  }
}

export default Dashboard;
