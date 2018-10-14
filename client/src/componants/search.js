import React from "react"



class Search extends React.Component {
constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Search:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Search;



// import React from "react"



// class Search extends React.Component {
// constructor(props) {
//     super(props);
//     this.state = {value: ''};

//     // this.handleTermChange = this.handleTermChange.bind(this);
//     // this.handleStartChange = this.handleStartChange.bind(this);
//     // this.handleEndChange = this.handleEndChange.bind(this);
//     // this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleTermChange=(event)=> {
//     this.setState({
//       term: event.target.term,
//     });
//   }
//   handleStartChange=(event)=> {
//     this.setState({
//       startDate: event.target.startDate,
//     });
//   }
//   handleEndChange=(event)=> {
//     this.setState({
//       endDate: event.target.endDate
//     });
//   }


//   handleSubmit(event) {
//     console.log("handleing submit");
//     alert('A Search Term was submitted: ' + this.state.term+ " in the date range: "+this.state.startDate+ "-"+this.state.endDate);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Search Term:
//           <input type="text" value={this.state.term} 
//           onChange={this.handleTermChange} 
//           />
//         </label>
//         <label>
//           Start Date:
//           <input type="text" value={this.state.startDate} 
//           onChange={this.handleStartChange} 
//           />
//         </label>
//         <label>
//           End Date:
//           <input type="text" value={this.state.endDate} 
//           onChange={this.handleEndChange}
//            />
//         </label>
        
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }

// export default Search;