import React from 'react'
import Button from '../../Components/button/Button'
import error from '../../images/error.svg'
import './Error.css'

class Error extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      return { hasError: true };
    }

    render() {
      if (this.state.hasError) {
        return(
            <section className="error-section">
                <div className="error-container">
                    <h1>Oops! Page Introuvable</h1>
                    <p>Nous sommes désolés pour le désagrément, il semble que vous essayez d'accéder à une page qui a été supprimée ou qui n'a même jamais existé</p>
                    <Button destination="/" text="Aller à la page d'accueil" color="white" bgColor="#3C96AE" border={false} hover={false} size="1rem" />
                    <img src={error} alt="Error"/>
                </div>
            </section>
        );
      }
      return this.props.children; 
    }
  }

  export default Error

