import React,  {useState, useEffect} from 'react'
import Header from '../../componentes/header'
import '../../tabelabusca.css'
import Axios from 'axios'
import Posts from '../../componentes/Posts'
import Paginacao from '../../componentes/paginacao'


const Tabela = () => {
    const [postagens, setPostagens] = useState([]);
    const [carregando, setCarregando] = useState(false);   
    const [paginaAtual, setPaginaAtual] = useState(1);
    const [postagensPerPage, setPostPerPage]= useState(5); 

    useEffect(() => {
        const fetchPostagem = async () => {
            setCarregando(true);
            const res = await Axios.get('https://api.airtable.com/v0/appVIbIe3dgo7JRR8/Buscas?api_key=keynmzEKs3B99kRBy');
            setPostagens(res.data.records);
            setCarregando(false);
        }

        fetchPostagem();
    }, []);
    console.log(postagens)
    const indexDoUltimoPost = paginaAtual * postagensPerPage;
    const indexDoPrimeiroPost = indexDoUltimoPost - postagensPerPage;
    const postagensAtual = postagens.slice(indexDoPrimeiroPost, indexDoUltimoPost);

    const paginar = numPaginas => setPaginaAtual(numPaginas);



    return (
    <div>
        <Header />
            <Posts postagens={postagensAtual} carregando={carregando} />
            <Paginacao postagensPerPage={postagensPerPage} totalPosts={postagens.length} paginar={paginar} />

    </div>
   )
}


/*
// Faz a busca dos dados quando carrega o componente
componentDidMount() {
    this.buscaApi()
}

    buscaApi = async () => {
    const response = await Axios.get(`https://api.airtable.com/v0/appVIbIe3dgo7JRR8/Buscas?api_key=keynmzEKs3B99kRBy&maxRecords=10`)
    await this.setState({ lista: response.data.records})
    await this.separar(response.data.records, 10)
    console.log(response.data.records)
}
   


componentDidMount(){ 
console.log('componente carregado!')
console.log(this.props.location.search)
let params = new URLSearchParams(this.props.location.search)
console.log('Perfil buscado:' + params.get('q'))
fetch('https://api.twitter.com/1.1/search/tweets.json?q=')

fetch('https://api.airtable.com/v0/appVIbIe3dgo7JRR8/Buscas?' + )
https://api.twitter.com/1.1/search/tweets.json?q=

} */



export default Tabela
