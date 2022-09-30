import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    // newsUrl is idenified by url
    let { title, description, imageUrl, newsUrl, author, date,source } = this.props;
    return (
      <div className="my-3">
        <div className="card">
        <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left: '90%',zIndex:'1'}}>
                {source}
                <span class="visually-hidden">unread messages</span>
              </span>
          <img
            src={
              !imageUrl
                ? "https://cdn.vox-cdn.com/thumbor/yhKOf4sxXken1AAooCwizohIG-w=/0x62:1024x598/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23983469/Celebrity_Cruises__and_parent_company_Royal_Caribbean_Group__have_announced_today_they_are_going_all_in_on_Elon_Musk_s_Starlink___supersizing_internet_capabilities_across_the_group_s_entire_fleet.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}
              
            </h5>
            <p className="card-text">S{description}....</p>
            {/* btn-sm is bootstrap class to reduce size of button */}
            <p className="card-text">
              <small className="text-muted">
                By {author ? author : "Unknown"} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
