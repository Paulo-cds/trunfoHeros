import React, {useState} from 'react'
import axios from 'axios'
import LinearProgress from '@material-ui/core/LinearProgress'
import { withStyles } from '@material-ui/core/styles'
import * as S from './styles/HomeStyles'
import ReactLoading from 'react-loading'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel'
import Button from '@material-ui/core/Button'
import winner from './images/WINNER.gif'
import lost from './images/YouLost.gif'

import {     
    makeStyles,    
  } from '@material-ui/core/styles'



  const useStyles = makeStyles((theme) => ({    
    margin: {                      
        width: '50%',        
        borderRadius: 5,
        border: '1px solid black',
        height: '3.5rem',    
        backgroundColor: 'red',        
        boxShadow: '0 0 15px red',
        textAlign: 'center',
        fontSize: '1.5rem',
        zIndex: 5,
        
        
        [theme.breakpoints.up('sm')]: {
            width: '30%',
          },
    },    
    
    headText:{
        width: '20%',
        fontSize: '1rem',
        textShadow: '1px 1px 5px white',
        textalign: 'center',

        [theme.breakpoints.up('sm')]: {
            width: '30%',
            fontSize: '1.3rem',
            textShadow: '3px 1px 5px white',
          },

        transition: theme.transitions.create(['border-color', 'box-shadow'])
    }
  }));

  
  


const Home = () => {
    /* const [heros, setHeros] = useState([]) */
    const [heroi, setHeroi] = useState([])
    const [load, setLoad] = useState('none')
    const classes = useStyles()
    const [enableStart, setEnableStart] = useState('block')
    const [enableResult, setEnableResult] = useState('none')
    const [enableNext, setEnableNext] = useState('none')
    const [displayText, setDisplayText] = useState('none')
    const [enableFinal, setEnableFinal] = useState('none')
    const [itemMaq, setItemMaq] = useState('none')
    const [itemUser, setItemUser] = useState('block')
    const [result, setResult] = useState('')
    const [user, setUser] = useState(0)
    const [pointsUser, setPointsUser] = useState(0)
    const [pointsMaq, setPointsMaq] = useState(0)
    const [rounds, setRounds] = useState(1)
    const [maq,setMaq] = useState(1)
    const [cardUser, setCardUser] = useState()
    const [cardMaq, setCardMaq] = useState()
    const [displayRounds, setDisplayRounds] = useState('none')
    const letras = "ABCDEFGHIJKLMNOPQRSTUVYWXZ"
    const [search, setSearch] = useState('flex')
    const [background, setBackground] = useState('https://sites.psu.edu/mdb5548pb/wp-content/uploads/sites/38707/2016/01/Marvel_Wallpaper_Heroes_1.jpg')
    
    const BorderLinearProgress = withStyles((theme) => ({
        root: {
          height: 15,
          borderRadius: 5,
        },
        colorPrimary: {
          backgroundColor: 'grey',
        },
        bar: {
          borderRadius: 5,
          backgroundColor: 'red',
        },
      }))(LinearProgress);
    

    async function fetchData(search) {
        setLoad('block')
         let response = await axios(`https://www.superheroapi.com/api.php/3992681667526682/search/${search}`)
        await setHeroi(response.data.results)        
        await setLoad('none')
        
    } 
    
                                                                                                                                                                                                                                                                                                                                                                                                                                                                              

    const handleHeroi = (e) => {
        if(enableStart === 'none'){
            setEnableStart('block')
        } else {
            setEnableStart("none")        
        }
        let sort = (Math.random(letras.length) * 10)
        let searc = Math.round(sort)
        let searchHero = letras[searc]
        console.log(searchHero)        
        fetchData(searchHero)       
        setDisplayRounds('block')
    }

    const handleResult = () =>{
        if(cardUser > cardMaq){
            setResult('Ponto Jogador')
            setPointsUser(pointsUser+1)
        } else if(cardMaq > cardUser){
            setResult('Ponto Máquina')
            setPointsMaq(pointsMaq+1)
        } else {
            setResult('Empate')
        }
        setItemMaq('block')
        console.log(`Jogador = ${cardUser} - Maquina = ${cardMaq}`)
        setDisplayText('flex')    
        
        
        setEnableResult("none")        
        
        
        
        if(rounds<5){
            setEnableNext('block')
        } else {
            setEnableFinal('block')
        }
    }

    const handleNext = () =>{        
        setRounds(rounds+1)
        setUser(user+2)  
        setMaq(maq+2)
        setItemMaq('none')
        setDisplayText('none')
        setEnableNext('none')              
    }

    const handleChange = (e) => {
        console.log(`user = ${e.target.value}`)
        if(e.target.value === 'null'){
            setCardUser(0)
        } else if(e.target.value === 100) {
            setCardUser(100)
        } else {
            setCardUser(e.target.value)
        }
        setEnableResult('block')
        //console.log(`Maquina = ${e.target.value}`)
    }    

    const handleMaq = (e) => {
        console.log(`maquina = ${e}`)
        if(e === 'null'){
            setCardMaq(0)
        } else if (e === 100){
            setCardMaq(100)
        } else {
            setCardMaq(e)
        }
    }

    const handleResultado = () => {
        setDisplayRounds('none')
        setItemMaq('none')
        setItemUser('none')
        setDisplayText('none')
        setSearch('none')
        if(pointsUser > pointsMaq){
            
            setBackground(winner)
        } else if(pointsUser < pointsMaq){
            setBackground(lost)
        }
    }

    

    function displayItem(){
        if(heroi != ''){
            return(
                <>
                <S.item style={{display:itemUser}}>
                        
                        <S.imgHero src={heroi[user].image.url} />
                        
                        <S.listUl>
                            
                                <li>
                                    <h3>ID: {heroi[user].id} - Nome: {heroi[user].name}</h3>                    
                                </li>
                                <S.data>
                                    
                                    <ul>

                                    <FormControl component="fieldset" style={{width:'90%'}}>
                                    <FormLabel component="h4">Powerstats</FormLabel>
                                    <RadioGroup aria-label="gender" name="gender1" onChange={handleChange}>
                                        <div style={{display:'flex', width:'100%', margin:10}}>
                                            <FormControlLabel onChange={() => {handleMaq(heroi[maq].powerstats.intelligence)}} value={heroi[user].powerstats.intelligence != 'null' ? heroi[user].powerstats.intelligence : 0} control={<Radio />}  />
                                            <div style={{width: '80%'}}>
                                                <span>Intelligence</span>
                                            <BorderLinearProgress variant='determinate' value={heroi[user].powerstats.intelligence != 'null' ? heroi[user].powerstats.intelligence : 0}/> 
                                            <S.spanBar >{heroi[user].powerstats.intelligence != 'null' ? heroi[user].powerstats.intelligence : 0}%</S.spanBar>
                                            </div>
                                        </div>

                                        <div style={{display:'flex', width:'100%', margin:10}}>
                                            <FormControlLabel onChange={() => {handleMaq(heroi[maq].powerstats.strength)}} value={heroi[user].powerstats.strength != 'null' ? heroi[user].powerstats.strength : 0} control={<Radio />}  />
                                            <div style={{width: '80%'}}>
                                                <span>Strength</span>
                                            <BorderLinearProgress variant='determinate' value={heroi[user].powerstats.strength != 'null' ? heroi[user].powerstats.strength : 0}/> 
                                            <S.spanBar >{heroi[user].powerstats.strength != 'null' ? heroi[user].powerstats.strength : 0}%</S.spanBar>
                                            </div>
                                        </div>

                                        <div style={{display:'flex', width:'100%', margin:10}}>
                                            <FormControlLabel onChange={() => {handleMaq(heroi[maq].powerstats.speed)}} value={heroi[user].powerstats.speed != 'null' ? heroi[user].powerstats.speed : 0} control={<Radio />}  />
                                            <div style={{width: '80%'}}>
                                                <span>Speed</span>
                                            <BorderLinearProgress variant='determinate' value={heroi[user].powerstats.speed != 'null' ? heroi[user].powerstats.speed : 0}/> 
                                            <S.spanBar >{heroi[user].powerstats.speed != 'null' ? heroi[user].powerstats.speed : 0}%</S.spanBar>
                                            </div>
                                        </div>
                                        
                                        <div style={{display:'flex', width:'100%', margin:10}}>
                                            <FormControlLabel onChange={() => {handleMaq(heroi[maq].powerstats.durability)}} value={heroi[user].powerstats.durability != 'null' ? heroi[user].powerstats.durability : 0} control={<Radio />}  />
                                            <div style={{width: '80%'}}>
                                                <span>Durability</span>
                                            <BorderLinearProgress variant='determinate' value={heroi[user].powerstats.durability != 'null' ? heroi[user].powerstats.durability : 0}/> 
                                            <S.spanBar >{heroi[user].powerstats.durability != 'null' ? heroi[user].powerstats.durability : 0}%</S.spanBar>
                                            </div>
                                        </div>

                                        <div style={{display:'flex', width:'100%', margin:10}}>
                                            <FormControlLabel onChange={() => {handleMaq(heroi[maq].powerstats.combat)}} value={heroi[user].powerstats.combat != 'null' ? heroi[user].powerstats.combat : 0} control={<Radio />}  />
                                            <div style={{width: '80%'}}>
                                                <span>Combat</span>
                                            <BorderLinearProgress variant='determinate' value={heroi[user].powerstats.combat != 'null' ? heroi[user].powerstats.combat : 0}/> 
                                            <S.spanBar >{heroi[user].powerstats.combat != 'null' ? heroi[user].powerstats.combat : 0}%</S.spanBar>
                                            </div>
                                        </div>
                                        
                                    </RadioGroup>
                                    </FormControl>

                                        
                                    </ul>
                                </S.data>
                                
                               
                            
                        </S.listUl>
                    </S.item>

                <S.item style={{display: itemMaq}}>
                                        
                <S.imgHero src={heroi[maq].image.url} />

                <S.listUl>
                    
                        <li>
                            <h3>ID: {heroi[maq].id} - Nome: {heroi[maq].name}</h3>                    
                        </li>
                        <S.data>
                            
                            <ul>

                            <FormControl component="fieldset" style={{width:'90%'}}>
                            <FormLabel component="h4">Powerstats</FormLabel>
                            
                                <div style={{display:'flex', width:'100%', margin:10}}>
                                   
                                    <div style={{width: '80%'}}>
                                        <span>Intelligence</span>
                                    <BorderLinearProgress variant='determinate' value={heroi[maq].powerstats.intelligence != 'null' ? heroi[maq].powerstats.intelligence : 0}/> 
                                    <S.spanBar >{heroi[maq].powerstats.intelligence != 'null' ? heroi[maq].powerstats.intelligence : 0}%</S.spanBar>
                                    </div>
                                </div>

                                <div style={{display:'flex', width:'100%', margin:10}}>
                                   
                                    <div style={{width: '80%'}}>
                                        <span>Strength</span>
                                    <BorderLinearProgress variant='determinate' value={heroi[maq].powerstats.strength != 'null' ? heroi[maq].powerstats.strength : 0}/> 
                                    <S.spanBar >{heroi[maq].powerstats.strength != 'null' ? heroi[maq].powerstats.strength : 0}%</S.spanBar>
                                    </div>
                                </div>

                                <div style={{display:'flex', width:'100%', margin:10}}>
                                   
                                    <div style={{width: '80%'}}>
                                        <span>Speed</span>
                                    <BorderLinearProgress variant='determinate' value={heroi[maq].powerstats.speed != 'null' ? heroi[maq].powerstats.speed : 0}/> 
                                    <S.spanBar >{heroi[maq].powerstats.speed != 'null' ? heroi[maq].powerstats.speed : 0}%</S.spanBar>
                                    </div>
                                </div>
                                
                                <div style={{display:'flex', width:'100%', margin:10}}>
                                    
                                    <div style={{width: '80%'}}>
                                        <span>Durability</span>
                                    <BorderLinearProgress variant='determinate' value={heroi[maq].powerstats.durability != 'null' ? heroi[maq].powerstats.durability : 0}/> 
                                    <S.spanBar >{heroi[maq].powerstats.durability != 'null' ? heroi[maq].powerstats.durability : 0}%</S.spanBar>
                                    </div>
                                </div>

                                <div style={{display:'flex', width:'100%', margin:10}}>
                                    
                                    <div style={{width: '80%'}}>
                                        <span>Combat</span>
                                    <BorderLinearProgress variant='determinate' value={heroi[maq].powerstats.combat != 'null' ? heroi[maq].powerstats.combat : 0}/> 
                                    <S.spanBar >{heroi[maq].powerstats.combat != 'null' ? heroi[maq].powerstats.combat : 0}%</S.spanBar>
                                    </div>
                                </div>
                                
                            
                            </FormControl>

                                
                            </ul>
                        </S.data>
                        
                    
                    
                </S.listUl>
                </S.item>
                </>
            )
        }
    }


    

    return(
        <S.container style={{backgroundImage: `url(${background})`}}>
            
            <S.card>
                

                <S.loader style={{display: load}}>
                    <ReactLoading type={'cylon'} color={'red'} height={367} width={175}  />

                </S.loader>

                <S.divSearch style={{display: search}}>
                                                                                                           
                    
                    <Button variant="contained" style={{display: enableStart}} color="secondary" className={classes.margin} onClick={handleHeroi}>
                        Iniciar
                    </Button>

                    <Button variant="contained" style={{display: enableResult}} color="secondary" className={classes.margin} onClick={handleResult}>
                        Resultado
                    </Button>

                    <Button variant="contained" style={{display: enableNext}} color="secondary" className={classes.margin} onClick={handleNext}>
                        Proximo
                    </Button>

                    <Button variant="contained" style={{display: enableFinal}} color="secondary" className={classes.margin} onClick={handleResultado}>
                        Resultado Final
                    </Button>
                                        
                </S.divSearch>

                <S.divRounds style={{display: displayRounds}}>
                    <S.spanRounds>Rodada {rounds} de 10</S.spanRounds><br/>
                    <S.spanRounds>Jogador = {pointsUser} pontos</S.spanRounds><br/>
                    <S.spanRounds>Maquina = {pointsMaq} pontos</S.spanRounds>
                </S.divRounds>

                <S.divText style={{display: displayText}}>
                    <S.spanSearch >{result}</S.spanSearch>
                </S.divText>
                            
                    
                {displayItem()}
                 
                     
            </S.card>                            
        
        </S.container>
    )
}

export default Home