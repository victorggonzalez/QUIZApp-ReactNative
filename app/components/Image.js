import React from 'react'

export default class Image extends React.Component {
    render(){
      let image = (this.props.question.attachment !== null ) ?
        <img src={this.props.question.attachment.url} style={{width: '100%'}} alt="Imagen de la pregunta"/> :
        <h1 style={{color: 'red', textAlign: 'center'}}>IMAGE NOT AVAILABLE</h1>
        return(


              <div>
              <div key="Image" className="Image">
                <span class="image fit" width="150">
                {image}
                </span>
              </div>
              </div>

        )
    }
}
