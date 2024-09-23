// Write your code here
import {Component} from 'react'

import './index.css'

const headImageUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailImageUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    tossResultImage: headImageUrl,
    headCount: 0,
    tailCount: 0,
  }

  onClickTossButton = () => {
    const {headCount, tailCount} = this.state
    const toss = Math.floor(Math.random() * 2)

    let tossImage = ''
    let latestHeadCount = headCount
    let latestTailCount = tailCount

    if (toss === 0) {
      tossImage = headImageUrl
      latestHeadCount += 1
    } else {
      tossImage = tailImageUrl
      latestTailCount += 1
    }

    this.setState({
      tossResultImage: tossImage,
      headCount: latestHeadCount,
      tailCount: latestTailCount,
    })
  }

  render() {
    const {tossResultImage, headCount, tailCount} = this.state
    const totalCount = headCount + tailCount
    return (
      <div className="container">
        <div className="card-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="paragraph">Heads (or) Tails</p>
          <img src={tossResultImage} className="toss-image" alt="toss result" />
          <button
            type="button"
            onClick={this.onClickTossButton}
            className="button"
          >
            Toss Coin
          </button>
          <div className="result-container">
            <p className="result">Total: {totalCount}</p>
            <p className="result">Heads: {headCount}</p>
            <p className="result">Tails: {tailCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
