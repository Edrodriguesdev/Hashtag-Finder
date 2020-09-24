import React,  {useState, useEffect} from 'react'
import Header from '../../components/header'
import Posts from '../../components/Posts'
import Paginacao from '../../components/paginacao'
import '../../tabelabusca.css'
import Axios from 'axios'


function RequisicaoPost() {
    const [itemId, setArticleId] = useState();

    useEffect(() => {
        
        const dados_postados = { "records":[{"fields":{"Hashtag":"ultimohashtag","Data":"01/14","Hora":"01:14"}}] };
        Axios.post('https://api.airtable.com/v0/appVIbIe3dgo7JRR8/Buscas?api_key=keynmzEKs3B99kRBy', dados_postados)
            .then(response => setArticleId(response.data.id));
    
    }, []);

    return (
        <div>
            <RequisicaoPost />
        </div>
    );
}

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


} */

export default Tabela
