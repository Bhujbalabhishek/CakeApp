import React, { Component } from 'react'
import axios from 'axios'

export class FileUpload extends Component {

    state = {
        selectedFile : null ,
        albumId: null,
        id: null,
        title: null,
        url: null,
        thumbnailUrl: null
    }

    onFileChange = event => { 
     
        // Update the state 
        this.setState({ 
          selectedFile: event.target.files[0],
          id : 5001,
          albumId : 101,
          title : event.target.files[0].name,
          url: event.target.value,
          thumbnailUrl: event.target.files[0].type

           }); 
       
      }; 


      onFileUpload = () => { 
     
        // Create an object of formData 
        const formData = new FormData(); 

        // Update the formData object 
        formData.append( 
        this.state.selectedFile, 
        this.state.selectedFile.name,
        
        ); 
              
        // Details of the uploaded file 
        console.log(this.state); 
            
        // Send formData object 
        axios.post("https://jsonplaceholder.typicode.com/photos", formData); 
        
      }; 

      fileData = () => { 
     
        if (this.state.selectedFile) { 
            
          return ( 
            <div> 
                <br></br>
              <h2>File Details:</h2> 
            
              <p>File Name: {this.state.title}</p> 
              <p>File Type: {this.state.thumbnailUrl}</p> 
            </div> 
          ); 
        } else { 
          return ( 
            <div> 
              <br /> 
              <h4>Choose before Pressing the Upload button</h4> 
            </div> 
          ); 
        } 
      }; 
    render() {

       
        return (
            <div>
                <h2>Upload file using react js </h2>
                <div>
                    
                    <input type="file" onChange={this.onFileChange} />
                    <button onClick={this.onFileUpload}> 
                    Upload! 
                    </button> 
                </div>
                {this.fileData()} 
            </div>
        )
    }
}

export default FileUpload
