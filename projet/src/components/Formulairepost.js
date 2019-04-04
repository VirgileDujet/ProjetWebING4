import React, { Component } from 'react';
import '../style/Widget.css';
import axios from 'axios';


class Formulairepost extends Component {
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
  }
  titretChange(event) {
    this.setState({titre: event.target.value});
    ////PREMIER///
    axios.get('http://localhost:3030/tracks')
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
  dureeChange(event) {
    this.setState({duree: event.target.value});
    ////PREMIER///
    axios.get('http://localhost:3030/tracks')
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
  likesChange(event) {
    this.setState({likes: event.target.value});
    ////PREMIER///
    axios.get('http://localhost:3030/tracks')
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
  ecouteChange(event) {
    this.setState({ecoute: event.target.value});
    ////PREMIER///
    axios.get('http://localhost:3030/tracks')
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
  featChange(event) {
    this.setState({feat: event.target.value});
    ////PREMIER///
    axios.get('http://localhost:3030/tracks')
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

  TracksSubmit(event) {

    ///////////////////
    if(this.state.titre!="")
    {
          console.log("DEDANS T");
          console.log(this.state.titre);
          axios.post('http://localhost:3030/tracks/'+this.state.realid, {

            titre: this.state.titre,

          })
          .then(res => {
             console.log(res)
        })
        .catch(error => {
             console.log(error)
        })
      }
      ///////////////////
      if(this.state.likes!="")
      {
            console.log("DEDANS T");
            console.log(this.state.likes);
            axios.post('http://localhost:3030/tracks/'+this.state.realid, {

              like: this.state.likes,

            })
            .then(res => {
               console.log(res)
          })
          .catch(error => {
               console.log(error)
          })
        }
        ///////////////////
        if(this.state.duree!="")
        {
              console.log("DEDANS T");
              console.log(this.state.duree);
              axios.post('http://localhost:3030/tracks/'+this.state.realid, {

                duree: this.state.duree,

              })
              .then(res => {
                 console.log(res)
            })
            .catch(error => {
                 console.log(error)
            })
          }
          ///////////////////
          if(this.state.ecoute!="")
          {
                console.log("DEDANS T");
                console.log(this.state.ecoute);
                axios.post('http://localhost:3030/tracks/'+this.state.realid, {

                  ecoute: this.state.ecoute,

                })
                .then(res => {
                   console.log(res)
              })
              .catch(error => {
                   console.log(error)
              })
            }
            //////////////////
            if(this.state.feat!="")
            {
                  console.log("DEDANS T");
                  console.log(this.state.feat);
                  axios.post('http://localhost:3030/tracks/'+this.state.realid, {

                    feat: this.state.feat,

                  })
                  .then(res => {
                     console.log(res)
                })
                .catch(error => {
                     console.log(error)
                })
              }


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


///////////////////
if(this.state.titre!="")
{
      console.log("DEDANS P");

      axios.post('http://localhost:3030/albums/'+this.state.realid, {

        titre: this.state.titre,

      })
      .then(res => {
         console.log(res)
    })
    .catch(error => {
         console.log(error)
    })
  }
  ///////////////////
  if(this.state.sortie!="")
  {
        console.log("DEDANS S");
        console.log(this.state.sortie);
        axios.post('http://localhost:3030/albums/'+this.state.realid, {

          sortie: this.state.sortie,

        })
        .then(res => {
           console.log(res)
      })
      .catch(error => {
           console.log(error)
      })
    }
    ///////////////////
    if(this.state.genre!="")
    {
          console.log("DEDANS G");
          console.log(this.state.genre);
          axios.post('http://localhost:3030/albums/'+this.state.realid, {

            genre: this.state.genre,

          })
          .then(res => {
             console.log(res)
        })
        .catch(error => {
             console.log(error)
        })
      }
      ///////////////////
      if(this.state.lien!="")
      {
            console.log("DEDANS L");
            console.log(this.state.lien);
            axios.post('http://localhost:3030/albums/'+this.state.realid, {

              cover: this.state.lien,

            })
            .then(res => {
               console.log(res)
          })
          .catch(error => {
               console.log(error)
          })
        }
        ///////////////////
        if(this.state.auteur!="")
        {


              axios.post('http://localhost:3030/albums/'+this.state.realid, {

                auteur: this.state.auteur,

              })
              .then(res => {
                 console.log(res)
            })
            .catch(error => {
                 console.log(error)
            })
          }
          ///////////////////
          if(this.state.dispo!="")
          {

                axios.post('http://localhost:3030/albums/'+this.state.realid, {

                  dispo: this.state.dispo,

                })
                .then(res => {
                   console.log(res)
              })
              .catch(error => {
                   console.log(error)
              })
            }
            ///////////////////
            if(this.state.tabtrack!="")
            {

                  axios.post('http://localhost:3030/albums/'+this.state.realid, {

                    tracks: this.state.tabtrack,

                  })
                  .then(res => {
                     console.log(res)
                })
                .catch(error => {
                     console.log(error)
                })
              }

  /////////

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



  if(this.state.birth!="")
  {
    console.log("DEDANS b");
    axios.post('http://localhost:3030/artistes/'+this.state.realid, {

      birth: this.state.birth,

    })
    .then(res => {
       console.log(res)
  })
  .catch(error => {
       console.log(error)
  })
  }
/////////
if(this.state.nom!="")
{
  console.log("DEDANS n");
  axios.post('http://localhost:3030/artistes/'+this.state.realid, {

    nom :this.state.nom,

  })
  .then(res => {
     console.log(res)
})
.catch(error => {
     console.log(error)
})
}
/////////
if(this.state.followers!="")
{
  console.log("DEDANS f");
  axios.post('http://localhost:3030/artistes/'+this.state.realid, {

    followers: this.state.followers,

  })
  .then(res => {
     console.log(res)
})
.catch(error => {
     console.log(error)
})
}
/////////
if(this.state.tab!="")
{
  console.log("DEDANS");
  axios.post('http://localhost:3030/artistes/'+this.state.realid, {

    albums: this.state.tab,

  })
  .then(res => {
     console.log(res)
})
.catch(error => {
     console.log(error)
})
}
/////////


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
        Nom de l'artiste a changer :
          <br/>
        <input type="text" value={this.props.places}  onChange={this.idChange}  />
      </label>
      <br/>
        <label>
          Nom de l'artiste :
            <br/>
          <input type="text" value={this.props.places}  onChange={this.nomChange}  />
        </label>
        <br/>
        <label>
          Date de naissance :
            <br/>
          <input type="date" value={this.props.fond} onChange={this.birthChange} />
        </label>
          <br/>
        <label>
          Nombre de followers :
            <br/>
          <input type="text" value={this.props.prepa} onChange={this.followersChange}  />
        </label>
          <br/>
        <label>
          Ref de l'Album :
            <br/>
          <input type="text" value={this.props.echau}  onChange={this.tabChange}/>
        </label>
        <input type="submit" value="Submit" />
        </form>
          <br/>
          <br/>

                    <form onSubmit={this.AlbumSubmit}>
                    <h2>Album</h2>
                    <label>
                      Titre de l'album a changer :
                        <br/>
                      <input type="text" value={this.props.places}  onChange={this.idChange}  />
                    </label>
                    <br/>
                    <label>
                     Titre :
                       <br/>
                    <input type="text" value={this.props.annee} onChange={this.titreaChange}  />
                    </label>
                    <br/>
                    <label>
                      Date de sortie:
                        <br/>
                      <input type="date" value={this.props.annee} onChange={this.sortieChange} />
                    </label>
                      <br/>
                    <label>
                      Genre(Rap , Rock , Pop , Electro , Autre) :
                        <br/>
                      <input type="text" value={this.props.mois} onChange={this.genreChange}  />
                    </label>
                      <br/>
                    <label>
                      Lien Cover :
                        <br/>
                      <input type="text" value={this.props.jour} onChange={this.lienChange} />
                    </label>
                      <br/>
                      <label>
                        Auteur:
                          <br/>
                        <input type="text" value={this.props.heure} onChange={this.auteurChange}  />
                      </label>
                        <br/>
                        <label>
                          Disponible (oui/non):
                            <br/>
                          <input type="text" value={this.props.heure}  onChange={this.dispoChange} />
                        </label>
                          <br/>
                    <label>
                      Reference de tracks:
                        <br/>
                      <input type="text" value={this.props.heure} onChange={this.tabtrackChange} />
                    </label>

                    <input type="submit" value="Submit" />
                    </form>
                      <br/>
                      <br/>
                                  <form onSubmit={this.TracksSubmit}>
                                  <h2>Track</h2>
                                  <label>
                                    Titre de la track a changer :
                                      <br/>
                                    <input type="text" value={this.props.places}  onChange={this.idChange}  />
                                  </label>
                                  <br/>
                                  <label>
                                   Titre :
                                   <br/>
                                  <input type="text" value={this.props.annee} onChange={this.titretChange} />
                                  </label>
                                    <br/>
                                  <label>
                                   Durée (en secondes):
                                     <br/>
                                  <input type="text" value={this.props.annee} onChange={this.dureeChange} />
                                  </label>
                                    <br/>
                                  <label>
                                   Nombre d'écoutes :
                                     <br/>
                                  <input type="text" value={this.props.annee} onChange={this.ecouteChange} />
                                  </label>
                                    <br/>
                                  <label>
                                   Nombre de likes :
                                     <br/>
                                  <input type="text" value={this.props.annee} onChange={this.likesChange} />
                                  </label>
                                    <br/>
                                  <label>
                                  Feat:
                                    <br/>
                                  <input type="text" value={this.props.annee} onChange={this.featChange}/>
                                  </label>
                                    <br/>
        <input type="submit" value="Submit" />
      </form>
      </div>
    );
  }

}



export default Formulairepost;
