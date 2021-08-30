import styled from 'styled-components'



export const container = styled.div`
    width: 100%;    
    //background-color: black;
    height: 100vh;
    background-image: url('https://sites.psu.edu/mdb5548pb/wp-content/uploads/sites/38707/2016/01/Marvel_Wallpaper_Heroes_1.jpg');
    background-repeat: no-repeat;
    background-color: grey;
    background-position: center;
    
`

export const loader = styled.div`
    position: absolute;
    top: 40%;
    left: 43%;
    z-index: 9;
`

export const divSearch = styled.div`
    display: flex;
    width: 100%;
    height: 5.5.rem;
    justify-content: center;
    align-items: center;
    position: absolute;    
    top: 0;
    z-index: 5;
    padding: 1rem;
    background: black;
    color: white;    
    //left: 0;
`
export const divRounds = styled.div`
    position: absolute;
    background-color: rgba(255,255,255,.7);    
    padding: 3px;
    text-align: center;
    color: black;
    top: 90px;
`

export const spanRounds = styled.span`
    color: black;
    text-align: center;
`

export const divText = styled.div`        
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;    
    padding: 5px;
    background-color: rgba(255,255,255,.5);
    //opacity: .4;    
    color: black;
    width: 50%;
    height: 50%;
    text-align: center;
    position: absolute;
    z-index: 9;
`

export const spanSearch = styled.span`
    font-size: 2rem;
    text-align: center;
    text-shadow: 2px 2px 5px black;
    color: black;
    width: 50%;
    position: relative;
    vertical-align: middle;
    padding: .7rem;
    background: red;
    border: 1px solid black;
`


export const searchLabel = styled.label`
    font-size: 1.5rem;
    margin-top: -3rem;
    z-index: 10;

`

export const card = styled.div`
    display: flex;
    width: 100%;    
    //position: relative;
    //top: 50px;
    justify-content: center;
    flex-wrap: wrap;
    //margin-top: 70px;
    //background-color: black; 
    z-index: 5;
    padding-top: 10rem;
    padding-bottom: 30px;
    height: 100%;
    overflow: auto;
    overflow-x: hidden;  
    
    ::-webkit-scrollbar {
        display: none;
    }
`

export const item = styled.div`
    //display: flex;
    width: 30%;
    max-height: 90%;
    overflow: auto;
    overflow-x: hidden; 
    justify-content: space-between;
    margin: 2rem 1rem;
    border: 1px solid black;
    text-align: center;    
    background: white;
    box-shadow: 2px 2px 5px rgb(227, 230, 229);
    

    ::-webkit-scrollbar {
        display: none;
    }

    @media(max-width: 768px){
        width: 80%;
    }

    @media(max-width: 500px){
        height: 25rem;
    }
`

export const imgHero = styled.img`
    width: 100%;
    height: 50%;
`

export const listUl = styled.ul`
    //padding: .3rem;
    margin: .2rem auto;
`

export const data = styled.li`
    margin: .7rem auto 0;
    text-align: center;
    align-items: center;
    width: 100%;
`

export const liItem = styled.li`
    position: relative;
    margin: .7rem auto;   
    display: flex; 
`

export const spanBar = styled.span`
    position: absolute;
    margin: -15px auto 0 auto;
    color: yellow;    
`