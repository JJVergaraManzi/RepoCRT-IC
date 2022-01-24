import React, {Component} from 'react';
import { Toaster,toast  } from "react-hot-toast";
import emailjs from 'emailjs-com';


export default class Contact extends Component{
    constructor(props){
        super(props);
        this.state ={
            Name:'',
            LastName:'',
            Mail:'',
            Bussiness:'',
            Phone:'',
            Message:'',
            Errors:{
                Name:'',
                LastName:'',
                Mail:'',
                Bussiness:'',
                Phone:'',
                Message:'',
            }
        }
    }
    handleInputChange(e){
        e.preventDefault();
        const target = e.target
        const name = target.name
        const value = target.value

        this.setState({[name]: value})
    }

    sentMessage(e){
      e.preventDefault()

      var template_params = {
        to_mail: this.state.mail,
        motive: this.state.motivo,
        Thename: this.state.name + " " + this.state.lastName,
        Thebusiness: this.state.bussines,
        message: this.state.message,
        phone: this.state.phone
      }

      emailjs.send("default_service", "template_mf5jide", template_params, 'user_bnYmKj9AtGBZHZ5fKLdns')
      .then(function(response){
        toast.success('Mensaje enviado con exito')
        console.log("EXITOOO!", response.status, response.text)
        console.log(template_params)
      }, function(err){
        toast.error(err)
        console.log(err)
        console.log(template_params)
      })
      e.target.reset()
    }

    render(){
        console.log(this.state);
        return(
          <section>
            <main>
            <div><Toaster 
                position="bottom-right" 
                toastOptions={{
                    duration: 15000,
                    style:{
                      background:"#212121",
                      color:"white"
                    }
                }}/>
                </div>
              <div class ="container">
                <div class="row">
                    <div class="col-md-5 order-md-first">
                      <h2>NUESTRA MISIÓN</h2>
                        <p>Acercar el desarrollo tecnológico a proyectos y emprendedores creativos 
                          apoyándolos en diferentes etapas de su integración con nuevas tecnologías y validación en el mercado. </p>
                    </div>
                    <div class="col-md-4 order-last">
                      <h2 > Envíanos un mensaje</h2>
                      <h3 class="green-h3" >Déjanos tus datos y te contactaremos</h3>
                      <div role="form" dir="ltr" lang="en-US">
                        <div>
                          <form  class="form-group" onSubmit={this.handleSubmit} >
                            <div class="row my-2">
                              <div class="col-md-6">
                                <input type="text"
                                  name="name"
                                  class="form-control pr-0"
                                  value={this.state.name}
                                  onChange={this.handleInputChange.bind(this)}
                                  size="40"
                                  aria-required="true"
                                  aria-invalid="false"
                                  placeholder="Nombre"/>
                              </div>
                              <div class="col-md-6">
                                <input type="text"
                                  name="lastName"
                                  class="form-control"
                                  value={this.state.lastName}
                                  onChange={this.handleInputChange.bind(this)}
                                  size="40"
                                  aria-required="true"
                                  aria-invalid="false"
                                  placeholder="Apellidos"/>
                              </div>
                            </div>
                            <div class="row my-2">
                              <div class="col-md-6">
                                <input type="text"
                                  name="mail"
                                  class="form-control"
                                  value={this.state.mail}
                                  onChange={this.handleInputChange.bind(this)}
                                  size="40"
                                  aria-required="true"
                                  aria-invalid="false"
                                  placeholder="Mail"/>
                              </div>
                              <div class="col-md-6">
                                <input type="text"
                                  name="bussines"
                                  class="form-control"
                                  value={this.state.bussines}
                                  onChange={this.handleInputChange.bind(this)}
                                  size="40"
                                  aria-required="true"
                                  aria-invalid="false"
                                  placeholder="Empresa"/>
                              </div>
                            </div>
                            <div class="row my-2">
                              <div class="col-md-6">
                                <input type="text"
                                  name="phone"
                                  class="form-control"
                                  value={this.state.phone}
                                  onChange={this.handleInputChange.bind(this)}
                                  size="40"
                                  aria-required="true"
                                  aria-invalid="false"
                                  placeholder="Teléfono"/>
                              </div>
                            </div>
                            <div class="row my-2">
                              <div class="col-md-12">
                                <select name="motivo"
                                  class="form-control"
                                  value={this.state.motivo}
                                  onChange={this.handleInputChange.bind(this)}
                                  aria-invalid="false">
                                    <option class="option-text" value="Motivo">Seleccione motivo</option>
                                    <option class="option-text" value="Formar parte">Formar parte</option>
                                    <option class="option-text" value="Felicitaciones">Felicitaciones</option>
                                    <option class="option-text" value="Sugerencias u observaciones">Sugerencias u observaciones</option>
                                    <option class="option-text" value="Otros">Otros</option>
                                </select>
                              </div>
                              <div class="col-md-12">
                                <textarea name="message"
                                  cols="40"
                                  rows="5"
                                  class="form-control mt-2"
                                  aria-invalid="false"
                                  onChange={this.handleInputChange.bind(this)}
                                  placeholder="Mensaje"></textarea>
    
                              </div>
                            </div>
                            <div class="row my-2">
                              <div class="col-md-12">
                                <input
                                  type="submit"
                                  value="ENVIAR"
                                  class="btn btn-primary btn-block"
                                  onClick={this.sentMessage.bind(this)}/>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
          </main>
        </section>
        );
      }
}