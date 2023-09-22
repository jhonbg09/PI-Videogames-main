import style from "./Form.module.css";
const Form = () => {
  return (
    <div className={style.form}>
      <form>
        <div>
          <label>Nombre</label>
          <input type="text"></input>
        </div>

        <div>
          <label>Imagen</label>
          <input></input>
        </div>

        <div>
          <label>Descripcion</label>
          <input></input>
        </div>

        <div>
          <label>Plataformas</label>
          <input></input>
        </div>
        
        <div>
          <label>Fecha de lanzamiento</label>
          <input></input>
        </div>

        <div>
          <label>Rating</label>
          <input></input>
        </div>

        <div>
          <label>Agregar genero</label>
          <input></input>
        </div>
      </form>
    </div>
  );
};

export default Form;
