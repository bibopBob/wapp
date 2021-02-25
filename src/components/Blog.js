// import { Route, IndexRoute } from 'react-router';
import {Component} from 'react';
import SPagination from "simple-react-pagination-js";
import "simple-react-pagination-js/build/style.css"; // import css

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Media from 'react-bootstrap/Media'

import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'

// import data from '../database/data.json';
// import data from '../database/posts';



// import '../App.css';

class Blog extends Component {

  constructor(props){
      super(props);
      this.state = {
          page: 1,
          size: 10,
          length: 0,
          posts: []
      }
  }

  componentDidMount(){
    this.get_remote();
  }

  get_remote = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    let data_json = await response.json();
    this.setState({posts:data_json})
    this.setState({length:data_json.length})
  }

  handleOnPageChange = (page) => {
      this.setState({page})
  }

  handleOnSizeChange = (size) => {
      this.setState({size, page: 1})
  }

  render(){

    let actual_size = this.state.size;
    let actual_page = this.state.page;
    let limit_top = (actual_page * actual_size) - 1;
    let bottom_notion = limit_top - (actual_size - 1);
    let limit_bottom = Math.round(Math.max(0, bottom_notion));

    return (
      <div className="Blog">
        <Jumbotron>
          <h1>Hello, Blog!</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for calling
            extra attention to featured content or information.
          </p>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </Jumbotron>

        <Container>

          <h2 className="my-5">Blog! <small>Amazing Stuff</small></h2>

          {
            this.state.posts.map( (item,i) => {
              return(
                i >= limit_bottom && i <= limit_top ?
                <Media key={i}>
                  <img
                    width={64}
                    height={64}
                    className="mr-3"
                    src={item.img_desc}
                    alt="Generic placeholder"
                  />
                  <Media.Body>
                    <h5>{item.id}</h5>
                    <h4>{item.title}</h4>
                    <p>{item.body}</p>
                  </Media.Body>
                </Media>
              : null
            )
            })
          }

          <Container>

            <Row className="justify-content-center">

              <SPagination page={this.state.page}
                  sizePerPage={this.state.size}
                  totalSize={this.state.length}
                  pagesNextToActivePage={1}
                  onPageChange={this.handleOnPageChange}
                  onSizeChange={this.handleOnSizeChange}/>

            </Row>

          </Container>

        </Container>

      </div>
    )
  }

}


// function Blog() {
//   const posts = data.data.posts;
//   return (
//     <div className="Blog">
//       <Jumbotron>
//         <h1>Hello, Blog!</h1>
//         <p>
//           This is a simple hero unit, a simple jumbotron-style component for calling
//           extra attention to featured content or information.
//         </p>
//         <p>
//           <Button variant="primary">Learn more</Button>
//         </p>
//       </Jumbotron>
//
//       <Container>
//
//         {
//           posts.map( (item,i) => {
//             return(
//               <Media key={i}>
//                 <img
//                   width={64}
//                   height={64}
//                   className="mr-3"
//                   src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2264%22%20height%3D%2264%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_177d5fe870d%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3A-apple-system%2CBlinkMacSystemFont%2C%26quot%3BSegoe%20UI%26quot%3B%2CRoboto%2C%26quot%3BHelvetica%20Neue%26quot%3B%2CArial%2C%26quot%3BNoto%20Sans%26quot%3B%2C%26quot%3BLiberation%20Sans%26quot%3B%2Csans-serif%2C%26quot%3BApple%20Color%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%26quot%3BNoto%20Color%20Emoji%26quot%3B%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_177d5fe870d%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2214.4140625%22%20y%3D%2237.409375%22%3E64x64%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
//                   alt="Generic placeholder"
//                 />
//                 <Media.Body>
//                   <h5>Media Heading</h5>
//                   <p>
//                     Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
//                     ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
//                     tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
//                     Donec lacinia congue felis in faucibus.
//                   </p>
//                 </Media.Body>
//               </Media>
//             )
//           })
//         }
//
//       </Container>
//
//     </div>
//   );
// }

export default Blog;
