import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Home = (props) => {
  const data = useSelector(state => state.CountRedux.data)
  return (
    <div>

    <h1 className="text-center text-warning my-5">Food Card</h1>
      <div className="container">
      
        <div className="row">
        {
      props.data.map(item => (
        <div className="col-md-3">
            <div class="card">
              <img class="card-img-top" src={item.image} alt=""/>
              <div class="card-body">
                <h5 class="card-title">{item.title}</h5>
                <p class="card-text">{item.paragraph}</p>
               
                <Link to="/Product" state= {item} class="btn btn-success"><i class="fa-solid fa-eye"></i>
                  Watch now
                </Link>
              </div>
            </div>
            </div>
      ))
    }
          
          </div>
          
        </div>
      
      <div>
        {data.map(i =>(
          <>
            <h1>{i.title}</h1>
            <p>{i.body}</p>
          </>
        ))}
      </div>
    </div>
  )
}

export default Home;
