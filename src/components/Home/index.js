import Header from '../Header'
import './index.css'

const Home = props => {
  const {e} = props

  return (
    <div className="main">
      <Header />
      <div>
        <h1>Movers</h1>

        <div className="bg">
          <div className="ro">
            <div>
              {e.map(ex => (
                <div>
                  <h1>From</h1>
                  <p>{ex.moving_from}</p>
                </div>
              ))}
              <div>
                <div>
                  <h1>Disclaimer</h1>
                  <p>Please Update yoour move date bepre teo dys</p>
                </div>
              </div>
            </div>
            <div>
              {e.map(ex => (
                <div>
                  <h1>To</h1>
                  <p>{ex.moving_to}</p>
                </div>
              ))}
              <div>
                <div>
                  <h1>Disclaimer</h1>
                  <p>Please Update yoour move date bepre teo dys</p>
                </div>
              </div>
            </div>
            <div>
              {e.map(ex => (
                <div>
                  <h1>Request</h1>
                  <p>{ex.estimate_id}</p>
                </div>
              ))}
              <div>
                <div>
                  <h1>Disclaimer</h1>
                  <p>Please Update yoour move date bepre teo dys</p>
                </div>
              </div>
            </div>
          </div>

          <hr />
        </div>
      </div>
    </div>
  )
}
export default Home
