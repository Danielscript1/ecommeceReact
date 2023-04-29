import Header from 'components/Header';
import Button from 'components/Button'
import styles from './Home.module.scss';
import relogio from 'assets/inicial.png';
import { useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import instance from 'common/config/api';
import { useEffect,useCallback } from 'react';
import { adicionarCategorias, buscarCategorias } from 'store/reducers/categorias';
import { adicionarItens, buscarItens } from 'store/reducers/itens';

export default function Home() {
  
  const navigate = useNavigate();
  const categorias = useSelector(state => state.categorias.data);
  const categorias1 = useSelector(state => state.categorias);
  const dispatch = useDispatch();
  console.log("recebendo categoria",categorias)
  console.log("recebendo categoria1",categorias1)

useEffect(() => {
  dispatch(buscarCategorias());
  dispatch(buscarItens());
}, [dispatch]);

  return (
    <div>
      <Header
        titulo='Classificados Tech'
        descricao='Compre diversos tipos de produtos no melhor site do Brasil!'
        imagem={relogio}
        className={styles.header}>
          <Button onClick={()=>navigate('/anuncie')}>
            Quero anunciar
          </Button>
      </Header>
      <div className={styles.categorias}>
        <div className={styles['categorias-title']}>
          <h1>
            Categorias
          </h1>
        </div>
        <div className={styles['categorias-container']}>
          {categorias.map((categoria, index) => (
            <div key={index} onClick={() => navigate(`/categoria/${categoria.id}`)}>
              <img src={categoria.thumbnail} alt={categoria.nome} />
              <h1>{categoria.nome}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};