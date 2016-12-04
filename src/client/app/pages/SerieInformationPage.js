import React from 'react';
import {observer} from 'mobx-react';
import {
  SeriesStore,
  FavoritesStore
} from '../stores'
import {
  action,
  observable
} from 'mobx';
import flex from '../flex.scss';
import styles from '../app.scss';
import {SerieInformation, Episodes} from '../components/SerieInformationPage';
import {MySpinner} from '../components';

@observer
class SerieInformationPage extends React.Component {

  @observable serie      = null;
  @observable isFavorite = false;
  @observable isLoggedIn = true;

  constructor(props) {
    super(props);

    this.addToFavorites = this.addToFavorites.bind(this);
  }

  @action
  async componentWillMount() {
    try {
      this.isFavorite = await FavoritesStore.isFavorite(this.props.params.id);
    }
    catch (err) {
      this.isLoggedIn = false;
    }
    this.serie = await SeriesStore.getSerie(this.props.params.id);
  }

  @action
  async addToFavorites() {
    try {
      let reply       = await FavoritesStore.addToFavorites(this.serie.id);
      this.isFavorite = true;
    }
    catch (error) {
      console.log('err')
    }
  }

  render() {
    let serie = this.serie;
    if (!serie) {
      return <MySpinner spin={true}/>;
    }
    return (
      <div >

        <SerieInformation serie={serie}/>
        {this.isFavorite && this.isLoggedIn ? <div className="alert alert-info">This show is already in favorites</div> :
          <button
            className="btn btn-success"
            style={{marginBottom : '5px'}}
            onClick={this.addToFavorites}
            disabled={!this.isLoggedIn}
          >
            Add to favorites
          </button>}
        <Episodes episodes={serie.episodes}/>
      </div>
    )
  }
}

export default SerieInformationPage;