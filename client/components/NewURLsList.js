import React from 'react'
import { Link } from 'react-router'

export default class NewURL extends React.Component {
  constructor(props) {
    super(props);
  }

  renderInputURLs(inputURL, index) {
    return (
      <tr className="input-url-row" key={index}>
        <td>TBD</td>
        <td>{inputURL.url}</td> 
      </tr>
    )
  }

  render() {
    return (
      <div>
        { this.props.inputURLs.length > 0 &&
          <table id="new-urls-list-table">
            <tbody id="new-urls-list-body">
              <tr className="input-url-table-header">
                <td className="header-cell">Short URL</td>
                <td className="header-cell">Destination</td>
              </tr>

                {this.props.inputURLs.map(this.renderInputURLs.bind(this))}

            </tbody>
          </table>
        }
      </div>
    );
  }
}
 
