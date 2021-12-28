import React,{Component} from 'react';
import ReactModal from 'react-modal';
// import './Modal.css';


class Modal extends Component {
    constructor () {
      super();
      this.state = {
        showModal: false
      };
      
      this.handleOpenModal = this.handleOpenModal.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
    }
    
    handleOpenModal () {
      this.setState({ showModal: true });
    }
    
    handleCloseModal () {
      this.setState({ showModal: false });
    }
    
    render () {
      return (
        <div>
          <button onClick={this.handleOpenModal}>Trigger Modal</button>
          <ReactModal 
             isOpen={this.state.showModal}
             contentLabel="onRequestClose Example"
             onRequestClose={this.handleCloseModal}
          >
  <nav className="nav" >
    <p className="btn btn-outline-primary" onClick={this.handleCloseModal}>Back to all Madicins</p>
  </nav>
  <div className="row">
  <div class="photo col-lg-6">
    <img style={{width:"60%", height:"60%", padding: "25px" , marginBottom:"20px", marginLeft:"50px"}} src="https://s-media-cache-ak0.pinimg.com/236x/3b/36/ca/3b36ca3afe0fa0fd4984b9eee2e154bb.jpg"/>
    <button className="btn btn-warning" style={{marginRight:"100px" ,marginLeft:"50px",fontWeight:"bold",display: "inline"}}>Add to Cart</button>
    <button className="btn btn-warning"  style={{marginLeft:"5px",fontWeight:"bold",display: "inline"}}>Buy Now</button>
  </div>
  <div class="description col-lg-6">
   <h3 style={{display: "inline"}}>1001 Paracetamol Tablet</h3><span >(100mg)</span>
    <div>
    <h3 style={{display: "inline"}} >$18</h3><span >(inc. tax)</span></div>
    <p>Paracetamol is used for pain relief and fever. It is used to relieve pain in conditions like headache, muscle pain, or dental pain.</p>
    
  </div>
  </div>
          </ReactModal>
          {/* private int id;
	
	private String drugName;
	private String drugMg;
	private int cost;
	private int QuantityperPack;
	private String Manufacturer;
	private String MaufacturerDate;
	private String ExpiryDate; */}
        </div>
      );
    }
  }
  
 export default Modal;