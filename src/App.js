
const App = () =>{
  return (
    
    <>   
      <Header title=" Encabezado de la pagina"  status= "1" />
      <Title title="Este es el titulo de la pagina" tipo="encabezado1"/>
      <Title title="Este es el titulo de la pagina" tipo="encabezado2"/>
      <Content/>
      <Footer/>
    </>
  );
}
const Title = (props) => { 
  
  return  props.tipo ==="encabezado1" ?<h1>{props.title} </h1> :  <h2>{props.title} </h2>;
  };
const Header= (props) =>  <header> {props.title}</header>;
const Content= (props) =>  <section> Contenido de la pagina</section>;
const Footer = (props) =>  <footer> Pie de la pagina</footer>;

export default App;
