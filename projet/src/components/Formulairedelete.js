import React, { Component } from 'react';
import '../style/Widget.css';
import axios from 'axios';


class Formulairedelete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "",
      birth: "",
      followers : "",
      tab : "",
      value: '',
    places: '',
    dispo: '',
    duree:"",
    ecoute :"",
    feat: "",
    likes :"",

    titre :"",
    sortie :"",
    genre :"",
    lien :"",
    auteur: "",
    dispo :"",
    tabtrack: "",

    id:"",
    realid:"",


    fond: (1),prepa :(1),echau: (1),jour: (6),mois: (2), annee: (2019), heure : (20), lien: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIIXMhM7wIHrNd1YXmvjzsoadndwcrLBtYsCv-klJjKY5SfRan"};


    this.ArtistSubmit = this.ArtistSubmit.bind(this);
    this.AlbumSubmit = this.AlbumSubmit.bind(this);
    this.TracksSubmit = this.TracksSubmit.bind(this);

        this.nomChange = this.nomChange.bind(this);
        this.birthChange = this.birthChange.bind(this);
        this.followersChange = this.followersChange.bind(this);
        this.tabChange = this.tabChange.bind(this);

        this.titreaChange =this.titreaChange.bind(this);
          this.sortieChange =this.sortieChange.bind(this);
            this.genreChange =this.genreChange.bind(this);
              this.lienChange =this.lienChange.bind(this);
                this.auteurChange =this.auteurChange.bind(this);
                  this.dispoChange =this.dispoChange.bind(this);
                    this.tabtrackChange =this.tabtrackChange.bind(this);

                        this.titretChange =this.titretChange.bind(this);
                            this.dureeChange =this.dureeChange.bind(this);
                                this.likesChange =this.likesChange.bind(this);
                                    this.ecouteChange =this.ecouteChange.bind(this);
                                        this.featChange =this.featChange.bind(this);

                                        this.idChange =this.idChange.bind(this);


  }
  idChange(event) {

    this.setState({id: event.target.value});
    console.log("ID : "+this.state.id);

    ////PREMIER///
    axios.get('http://localhost:3030/artistes')
      .then(({ data }) => {

        for(var i = 0; i <= data.length; i++)
        {
              console.log("PFF trouve"+ this.state.id);
              if(data[i].nom==this.state.id)
              {
                var fl = data[i]._id;
                this.setState({realid: fl});
                console.log("REUSSI "+ this.state.realid);
              }

        }

      })
      .catch(err => {
        console.error(err);
      })
      ////DEUXIEME///
      axios.get('http://localhost:3030/albums')
        .then(({ data }) => {

          for(var i = 0; i <= data.length; i++)
          {
                console.log("PFF trouve"+ this.state.id);
                if(data[i].titre==this.state.id)
                {
                  var fl = data[i]._id;
                  this.setState({realid: fl});
                  console.log("REUSSI A "+ this.state.realid);
                }

          }

        })
        .catch(err => {
          console.error(err);
        })
        ////Troisieme///
        axios.get('http://localhost:3030/tracks')
          .then(({ data }) => {

            for(var i = 0; i <= data.length; i++)
            {
                  console.log("PFF trouve"+ this.state.id);
                  if(data[i].titre==this.state.id)
                  {
                    var fl = data[i]._id;
                    this.setState({realid: fl});
                    console.log("REUSSI A "+ this.state.realid);
                  }

            }

          })
          .catch(err => {
            console.error(err);
          })

  }
  titretChange(event) {
    this.setState({titre: event.target.value});
  }
  dureeChange(event) {
    this.setState({duree: event.target.value});
  }
  likesChange(event) {
    this.setState({likes: event.target.value});
  }
  ecouteChange(event) {
    this.setState({ecoute: event.target.value});
  }
  featChange(event) {
    this.setState({feat: event.target.value});
  }

  TracksSubmit(event) {

  axios.delete('http://localhost:3030/tracks/'+ this.state.realid,{ foo: 'bar', })


      event.preventDefault();
    }

  titreaChange(event) {
    this.setState({titre: event.target.value});
    ////PREMIER///
    axios.get('http://localhost:3030/albums')
      .then(({ data }) => {

        for(var i = 0; i <= data.length; i++)
        {
              if(data[i].titre==this.state.id)
              {
                var fl = data[i]._id;
                this.setState({realid: fl});
                console.log("REUSSI "+ this.state.realid);
              }

        }

      })
      .catch(err => {
        console.error(err);
      })
  }
  sortieChange(event) {
    this.setState({sortie: event.target.value});
    ////PREMIER///
    axios.get('http://localhost:3030/albums')
      .then(({ data }) => {

        for(var i = 0; i <= data.length; i++)
        {
              if(data[i].titre==this.state.id)
              {
                var fl = data[i]._id;
                this.setState({realid: fl});
                console.log("REUSSI "+ this.state.realid);
              }

        }

      })
      .catch(err => {
        console.error(err);
      })
  }
  genreChange(event) {
    this.setState({genre: event.target.value});
    ////PREMIER///
    axios.get('http://localhost:3030/albums')
      .then(({ data }) => {

        for(var i = 0; i <= data.length; i++)
        {
              if(data[i].titre==this.state.id)
              {
                var fl = data[i]._id;
                    this.setState({realid: fl});
                console.log("REUSSI "+ this.state.realid);
              }

        }

      })
      .catch(err => {
        console.error(err);
      })
  }
  lienChange(event) {
    this.setState({lien: event.target.value});
    ////PREMIER///
    axios.get('http://localhost:3030/albums')
      .then(({ data }) => {

        for(var i = 0; i <= data.length; i++)
        {
              if(data[i].titre==this.state.id)
              {
                var fl = data[i]._id;
                    this.setState({realid: fl});
                console.log("REUSSI "+ this.state.realid);
              }

        }

      })
      .catch(err => {
        console.error(err);
      })
  }
  auteurChange(event) {
    this.setState({auteur: event.target.value});
    ////PREMIER///
    axios.get('http://localhost:3030/albums')
      .then(({ data }) => {

        for(var i = 0; i <= data.length; i++)
        {
              if(data[i].titre==this.state.id)
              {
                var fl = data[i]._id;
                    this.setState({realid: fl});
                console.log("REUSSI "+ this.state.realid);
              }

        }

      })
      .catch(err => {
        console.error(err);
      })
  }
  dispoChange(event) {
    this.setState({dispo: event.target.value});
    ////PREMIER///
    axios.get('http://localhost:3030/albums')
      .then(({ data }) => {

        for(var i = 0; i <= data.length; i++)
        {
              if(data[i].titre==this.state.id)
              {
                var fl = data[i]._id;
                    this.setState({realid: fl});
                console.log("REUSSI "+ this.state.realid);
              }

        }

      })
      .catch(err => {
        console.error(err);
      })
  }
  tabtrackChange(event) {
    this.setState({tabtrack: event.target.value});
    ////PREMIER///
    axios.get('http://localhost:3030/albums')
      .then(({ data }) => {

        for(var i = 0; i <= data.length; i++)
        {
              if(data[i].titre==this.state.id)
              {
                var fl = data[i]._id;
                    this.setState({realid: fl});
                console.log("REUSSI "+ this.state.realid);
              }

        }

      })
      .catch(err => {
        console.error(err);
      })
  }



  AlbumSubmit(event) {

  axios.delete('http://localhost:3030/albums/'+ this.state.realid,{ foo: 'bar', })

      event.preventDefault();
    }

  nomChange(event) {
    this.setState({nom: event.target.value});
    ////PREMIER///
    axios.get('http://localhost:3030/artistes')
      .then(({ data }) => {

        for(var i = 0; i <= data.length; i++)
        {
              if(data[i].nom==this.state.id)
              {
                var fl = data[i]._id;
                    this.setState({realid: fl});
                console.log("REUSSI "+ this.state.realid);
              }

        }

      })
      .catch(err => {
        console.error(err);
      })
  }

  birthChange(event) {
    this.setState({birth: event.target.value});
    ////PREMIER///
    axios.get('http://localhost:3030/artistes')
      .then(({ data }) => {

        for(var i = 0; i <= data.length; i++)
        {
              if(data[i].nom==this.state.id)
              {
                var fl = data[i]._id;
                    this.setState({realid: fl});
                console.log("REUSSI "+ this.state.realid);
              }

        }

      })
      .catch(err => {
        console.error(err);
      })
  }

  followersChange(event) {
    this.setState({followers: event.target.value});
    ////PREMIER///
    axios.get('http://localhost:3030/artistes')
      .then(({ data }) => {

        for(var i = 0; i <= data.length; i++)
        {
              if(data[i].nom==this.state.id)
              {
                var fl = data[i]._id;
                    this.setState({realid: fl});
                console.log("REUSSI "+ this.state.realid);
              }

        }

      })
      .catch(err => {
        console.error(err);
      })
  }

  tabChange(event) {
    this.setState({tab: event.target.value});
    ////PREMIER///
    axios.get('http://localhost:3030/artistes')
      .then(({ data }) => {

        for(var i = 0; i <= data.length; i++)
        {
              if(data[i].nom==this.state.id)
              {
                var fl = data[i]._id;
                    this.setState({realid: fl});
                console.log("REUSSI "+ this.state.realid);
              }

        }

      })
      .catch(err => {
        console.error(err);
      })
  }

ArtistSubmit(event) {



  axios.delete('http://localhost:3030/artistes/'+ this.state.realid,{ foo: 'bar', })


    event.preventDefault();
  }




  render() {
    return (

      <div className="Formulaire">
      <ul>
    <li><a className="active" href="http://localhost:3000/">Dashboard</a></li>
    <li><a href="http://localhost:3000/adminput">Put</a></li>
    <li><a href="http://localhost:3000/adminpost">Post</a></li>
    <li><a href="http://localhost:3000/admindelete">Delete</a></li>
  </ul>
      <h2>Artiste</h2>
      <form onSubmit={this.ArtistSubmit}>
      <label>
        Nom de l'artiste a supprimer :
          <br/>
        <input type="text" value={this.props.places}  onChange={this.idChange}  />
      </label>
      <br/>

        <input type="submit" value="Submit" />
        </form>
          <br/>
          <br/>

                    <form onSubmit={this.AlbumSubmit}>
                    <h2>Album</h2>
                    <label>
                      Titre de l'album a supprimer :
                        <br/>
                      <input type="text" value={this.props.places}  onChange={this.idChange}  />
                    </label>
                    <br/>


                    <input type="submit" value="Submit" />
                    </form>
                      <br/>
                      <br/>
                                  <form onSubmit={this.TracksSubmit}>
                                  <h2>Track</h2>
                                  <label>
                                    Titre de la track a supprimer :
                                      <br/>
                                    <input type="text" value={this.props.places}  onChange={this.idChange}  />
                                  </label>
                                  <br/>

        <input type="submit" value="Submit" />
      </form>
      </div>
    );
  }

}



export default Formulairedelete;
