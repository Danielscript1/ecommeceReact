import styles from './Botao.module.scss';

export default function Button({ children, type, onClick }){

return(
    <button
    className={styles.finalizar}
    onClick={onClick}
    type={type}
    >
     {children}
  </button>
    )
}